export const SITE = {
  name: 'phx.contact',
  title: 'PHX.Contact | Premium Phoenix Domain for Sale | Ultra-Short Brandable .contact',
  description:
    'Own PHX.Contact — the rare, brandable .contact domain for Phoenix. Ideal for contact platforms, lead gen, real estate tech, or premium local branding in one of America\'s fastest-growing metros.',
  url: 'https://phx.contact',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Phoenix, Arizona',
  lastUpdated: '2026-07-02',
} as const;

export const CF_IMAGES = {
  hero: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/5600ee62-4d72-4a73-4f62-cecd20449900/public',
  secondary: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/a9ac8cce-d80e-4b63-12e4-733323b42900/public',
  og: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/5600ee62-4d72-4a73-4f62-cecd20449900/public',
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry: phx.contact')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phx.contact. Please share next steps.\n\nThank you,')}`;
