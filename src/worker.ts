interface Env {
  ASSETS: Fetcher;
}

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
};

function withSecurity(res: Response): Response {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(k)) headers.set(k, v);
  }
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

function json(data: unknown, status = 200): Response {
  return withSecurity(
    new Response(JSON.stringify(data), {
      status,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    }),
  );
}

async function handleOffer(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed. Use POST.' }, 405);
  }
  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const name = String(body.name ?? '').trim().slice(0, 120);
  const email = String(body.email ?? '').trim().slice(0, 160);
  const amount = Number(body.amount ?? 0);
  const use = String(body.use ?? '').trim().slice(0, 200);
  const message = String(body.message ?? '').trim().slice(0, 2000);
  const website = String(body.website ?? '').trim(); // honeypot

  if (website) return json({ ok: true }); // silently accept bots
  if (name.length < 2) return json({ error: 'Please provide your name.' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please provide a valid email address.' }, 400);
  }
  if (!Number.isFinite(amount) || amount < 1000) {
    return json({ error: 'Offers start at $1,000 USD. Serious offers prioritized.' }, 400);
  }

  // Free-plan: no KV/D1/Email binding required. Log via observability and
  // return a next-step payload; the frontend falls back to a prefilled mailto
  // so no lead is ever lost.
  console.log(
    JSON.stringify({ event: 'offer', name, email, amount, use, messageLength: message.length }),
  );

  return json({
    ok: true,
    next: 'mailto',
    mailto: `mailto:sales@desertrich.com?subject=${encodeURIComponent(
      `Offer $${amount.toLocaleString()} — phx.contact (${name})`,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOffer: $${amount.toLocaleString()} USD\nUse: ${use}\n\n${message}`,
    )}`,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Redirect www → non-www with 301 (canonical host)
    if (url.hostname === 'www.phx.contact') {
      url.hostname = 'phx.contact';
      return Response.redirect(url.href, 301);
    }

    // Free-plan serverless endpoints (no paid bindings)
    if (url.pathname === '/api/health') {
      return json({ ok: true, host: url.hostname });
    }
    if (url.pathname === '/api/offer') {
      return handleOffer(request);
    }

    // Serve static assets with defense-in-depth headers
    const res = await env.ASSETS.fetch(request);
    return withSecurity(res);
  },
};
