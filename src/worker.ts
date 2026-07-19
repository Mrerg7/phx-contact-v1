interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Redirect www → non-www with 301
    if (url.hostname === 'www.phx.contact') {
      url.hostname = 'phx.contact';
      return Response.redirect(url.href, 301);
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};
