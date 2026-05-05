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

        const tokenRes = await fetch(
            "https://github.com/login/oauth/access_token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    client_id: env.GITHUB_CLIENT_ID,
                    client_secret: env.GITHUB_CLIENT_SECRET,
                    code,
                }),
            },
        );

        const tokenData = await tokenRes.json();

        if (tokenData.error) {
            const errContent = JSON.stringify(tokenData);
            return new Response(
                `<!DOCTYPE html><html><body><script>window.opener.postMessage('authorization:github:error:${errContent}','*');<\/script></body></html>`,
                { headers: { "Content-Type": "text/html" }, status: 401 },
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
