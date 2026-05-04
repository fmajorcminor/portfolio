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
      scope: "repo",
      redirect_uri: `${url.origin}/api/auth/callback`,
    });
    return Response.redirect(
      `https://github.com/login/oauth/authorize?${params}`,
      302
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
      }
    );

    const { access_token } = await tokenRes.json();

    // Decap CMS listens for this postMessage in the OAuth popup
    const html = `<!DOCTYPE html><html><body><script>
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token: access_token, provider: "github" })}',
        '*'
      );
      window.close();
    </script></body></html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }

  return new Response("Not found", { status: 404 });
}
