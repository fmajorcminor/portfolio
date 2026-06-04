export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);

    if (url.pathname === "/api/auth") {
        const params = new URLSearchParams({
            client_id: env.GITHUB_CLIENT_ID,
            scope: "repo",
            redirect_uri: `${url.origin}/api/auth/callback`,
        });
        return Response.redirect(
            `https://github.com/login/oauth/authorize?${params}`,
            302,
        );
    }

    if (url.pathname === "/api/auth/callback") {
        const code = url.searchParams.get("code");

        // Use URLSearchParams/form-encoded body — this is the OAuth 2.0 standard
        const tokenRes = await fetch(
            "https://github.com/login/oauth/access_token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "application/json",
                },
                body: new URLSearchParams({
                    client_id: env.GITHUB_CLIENT_ID,
                    client_secret: env.GITHUB_CLIENT_SECRET,
                    code,
                }),
            },
        );

        // Handle non-OK responses before trying to parse JSON
        if (!tokenRes.ok) {
            const errorBody = await tokenRes.text();
            console.error(
                "GitHub token exchange failed:",
                tokenRes.status,
                errorBody,
            );
            const errContent = JSON.stringify({
                error: "token_exchange_failed",
                error_description: `GitHub returned ${tokenRes.status}`,
            });
            return new Response(
                `<!DOCTYPE html><html><body><script>window.opener.postMessage('authorization:github:error:${errContent}','*');<\/script></body></html>`,
                { headers: { "Content-Type": "text/html" }, status: 401 },
            );
        }

        let tokenData;
        try {
            tokenData = await tokenRes.json();
        } catch (e) {
            const raw = await tokenRes.text();
            console.error("Failed to parse GitHub response:", raw);
            const errContent = JSON.stringify({
                error: "invalid_response",
                error_description: "Invalid response from GitHub",
            });
            return new Response(
                `<!DOCTYPE html><html><body><script>window.opener.postMessage('authorization:github:error:${errContent}','*');<\/script></body></html>`,
                { headers: { "Content-Type": "text/html" }, status: 401 },
            );
        }

        if (tokenData.error) {
            const errContent = JSON.stringify(tokenData);
            return new Response(
                `<!DOCTYPE html><html><body><script>window.opener.postMessage('authorization:github:error:${errContent}','*');<\/script></body></html>`,
                { headers: { "Content-Type": "text/html" }, status: 401 },
            );
        }

        const ALLOWED_USERS = ["fmajorcminor", "frenchmajorcsminor"];

        const userRes = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
                Accept: "application/vnd.github.v3+json",
            },
        });

        if (!userRes.ok) {
            const errContent = JSON.stringify({
                error: "user_fetch_failed",
                message: `Failed to fetch user profile: ${userRes.status}`,
            });
            return new Response(
                `<!DOCTYPE html><html><body><script>window.opener.postMessage('authorization:github:error:${errContent}','*');<\/script></body></html>`,
                { headers: { "Content-Type": "text/html" }, status: 403 },
            );
        }

        const userData = await userRes.json();

        if (!userData.login || !ALLOWED_USERS.includes(userData.login)) {
            const errContent = JSON.stringify({
                error: "unauthorized_user",
                message: `User ${userData.login || "unknown"} is not authorized to access this application`,
            });
            return new Response(
                `<!DOCTYPE html><html><body><script>window.opener.postMessage('authorization:github:error:${errContent}','*');<\/script></body></html>`,
                { headers: { "Content-Type": "text/html" }, status: 403 },
            );
        }

        const content = JSON.stringify({
            token: tokenData.access_token,
            provider: "github",
        });

        const html = `<!DOCTYPE html>
<html>
<body>
<script>
const receiveMessage = (message) => {
  window.opener.postMessage(
    'authorization:github:success:${content}',
    message.origin
  );
  window.removeEventListener('message', receiveMessage, false);
};
window.addEventListener('message', receiveMessage, false);
window.opener.postMessage('authorizing:github', '*');
<\/script>
</body>
</html>`;

        return new Response(html, {
            headers: { "Content-Type": "text/html" },
        });
    }

    return new Response("Not found", { status: 404 });
}
