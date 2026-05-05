// functions/api/auth/[[path]].js
// Cloudflare Pages Function — handles GitHub OAuth for Decap CMS
// Place this file at: functions/api/auth/[[path]].js in your repo root

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);

    // Step 1: Redirect user to GitHub to authorize
    if (url.pathname === "/api/auth") {
        const params = new URLSearchParams({
            client_id: env.GITHUB_CLIENT_ID,
            scope: "public_repo",
            redirect_uri: `${url.origin}/api/auth/callback`,
        });
        return Response.redirect(
            `https://github.com/login/oauth/authorize?${params}`,
            302,
        );
    }

    // Step 2: Exchange the code GitHub sends back for an access token
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
        const accessToken = tokenData.access_token;

        // Double-stringify so the token is safely embedded in the inline script
        // as a JS string literal, avoiding any quote/escape conflicts
        const payload = JSON.stringify(
            JSON.stringify({ token: accessToken, provider: "github" }),
        );

        const html = `<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    var payload = ${payload};
    var message = "authorization:github:success:" + payload;
    var bc = new BroadcastChannel("decap-auth");
    bc.postMessage(message);
    bc.close();
    if (window.opener) {
      window.opener.postMessage(message, "*");
    }
    window.close();
  })();
</script>
</body>
</html>`;

        return new Response(html, {
            headers: { "Content-Type": "text/html" },
        });
    }

    return new Response("Not found", { status: 404 });
}
