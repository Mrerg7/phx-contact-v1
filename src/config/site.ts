export const SITE = {
  name: 'phx.contact',
  title: 'PHX.Contact | Premium Domain for Sale | Ultra-Short Brandable .contact',
  description:
    'PHX.Contact is for sale — premium ultra-short Phoenix .contact domain, guided $35,000–$65,000 USD via secure escrow. Make an offer or buy now. Response within 24 hours.',
  url: 'https://phx.contact',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Phoenix, Arizona',
  lastUpdated: '2026-10-01',
  googleSiteVerification: 'SkPROS6JT6WWkd2L1YtjKQYw1XjdnfpyuRPlSuHyq6c',
  /** Visible acquisition range for AggregateOffer — keep in sync with on-page copy. */
  valuation: { low: 35000, high: 65000, currency: 'USD' },
  /** Cloudflare Web Analytics token (free plan). Leave empty until added in dashboard; beacon loads only when set. */
  cfBeaconToken: '',
} as const;

export const CF_IMAGES = {
  hero: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/7b21c756-95d6-4036-73f3-26390fe36600/public',
  secondary: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/bdb5dcd6-f24a-4b0c-2b01-25672b788100/public',
  og: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/7b21c756-95d6-4036-73f3-26390fe36600/public',
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  imageId: '7b21c756-95d6-4036-73f3-26390fe36600',
  secondaryImageId: 'bdb5dcd6-f24a-4b0c-2b01-25672b788100',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry: phx.contact')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phx.contact. Please share next steps.\n\nThank you,')}`;
