# Changelog

## 2026-10-01 — [FEAT]: Comprehensive optimization (speed, SEO, CRO, mobile)

Stays on the Cloudflare Workers & Pages free plan (static assets + edge Worker, no paid bindings).

### I. Technical foundation
- Fonts: replaced render-blocking CSS `@import` with non-blocking `<link media="print" onload>` + preconnect; added hero image `preload`.
- Images: `CloudflareImage` now supports responsive `srcset`/`sizes`; hero eager + `fetchpriority="high"`, secondary lazy + responsive.
- Security: added CSP, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, immutable caching for `/_astro/*` + fonts in `public/_headers`; edge defense-in-depth headers in `src/worker.ts`.
- Schema: kept Service + AggregateOffer ($35K–$65K, shipping + returns compliant); added BreadcrumbList + FAQPage JSON-LD.
- Sitemap/robots/canonical: verified (`sitemap-index.xml`, `robots.txt`, canonical `https://phx.contact/`, 404 noindex, www → apex 301).
- Added `/.well-known/security.txt`.

### II. SEO
- Meta description now includes price guidance + CTA ("for sale … guided $35,000–$65,000 … Make an offer or buy now").
- Title kept in `[Domain] | Premium Domain for Sale | [Brand]` format.
- Single H1, proper H2 hierarchy, skip-to-content link, internal anchor nav (#why/#opportunity/#value/#faq/#acquire).
- FAQ section targets long-tail queries (buy .contact domains, premium/investment domains, escrow process).

### III. CRO
- Above-the-fold price chip + Buy Now (escrow) vs Make an Offer dual CTAs + trust badges (Escrow.com, clean title, ratings) + 1-of-1 urgency + viewing counter.
- New `OfferModal`: accessible dialog, validated form → `POST /api/offer` (free-plan Worker endpoint with honeypot + mailto fallback), success state, conversion tracking hooks (`phx:track`).
- Exit-intent capture (desktop mouse-out + 75s mobile idle, once per session).
- New `SocialProof`: testimonials + comparable-sales context; sticky mobile Buy/Make-Offer bar; back-to-top.

### IV. Mobile
- Viewport-fit cover, 48px minimum tap targets on nav/CTAs/FAQ, `safe-area-inset` padding, responsive `px-5/sm:px-8`, reduced-motion support.

### V. Domain authority (process, not code)
- Next: weekly blog/market updates, guest posts (DA 40+ tech/business), digital PR on sale, broken-link outreach. Submit updated sitemap in Google Search Console (verification meta already present).

### VI. Design
- Clean minimal system kept; added subtle reveal-on-scroll, FAQ accordion (`<details>`), sticky CTA, dialog styling. No spammy color overload; no portfolio search needed (single-asset site).

### VII. Validation
- `astro build` passes; verified canonical, single H1, FAQ/Breadcrumb schema, modal/API wiring, `_headers`, sitemap, 404 noindex in `dist/`.
- Post-deploy: check Lighthouse >90, Cloudflare Web Analytics token (`SITE.cfBeaconToken`), monitor errors/analytics 48h.
