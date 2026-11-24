import { SITE_NAME, SITE_ORIGIN } from "./site";

export { SITE_ORIGIN };

export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_ORIGIN,
} as const;

export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/iletisim`,
  copyrightNotice: `© ${SITE_NAME}. All rights reserved.`,
  creditText: SITE_NAME,
} as const;
