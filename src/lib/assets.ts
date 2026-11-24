/** Central artwork map — Magic Brawl logo + free pin / voucher art */
export const ASSETS = {
  logo: "/magic-brawl.webp",
  apkIcon: "/magic-brawl.webp",
  /** Homepage / download hero */
  hero: "/magic-brawl.webp",
  king: "/magic-brawl.webp",
  infinityArt: "/magic-brawl.webp",
  vanilla: "/fumey-team-pin.webp",
  infinity: "/fumey-frog-pin.webp",
  gems: "/goblin-pin.webp",
  chest: "/goblin-clock-pin.webp",
  tournaments: "/coolglass_pin.webp",
  emote: "/pin-wizard-67.webp",
  wizard: "/pin-wizard-67.webp",
  og: "/feature/og-image.webp",
  ogSquare: "/feature/og-image-square.webp",
  twitter: "/feature/twitter-card.webp",
} as const;

/** Fixed 4-up benefits strip */
export const HIGHLIGHT_ICONS = [
  ASSETS.gems,
  ASSETS.tournaments,
  ASSETS.chest,
  ASSETS.emote,
] as const;
