/** Central artwork map — icons matched to masterroyale.io feature row + Vanilla/Infinity badges */
export const ASSETS = {
  logo: "/master-royale-apk-logo.webp",
  apkIcon: "/master-royale-apk.webp",
  /** Homepage / download hero mascot */
  king: "/master-royale-king.webp",
  /** Action art for Infinity / closing CTA */
  infinityArt: "/master-royale-infinity-server.webp",
  /** Official MR Vanilla badge */
  vanilla: "/mr-vanilla-master-royale.webp",
  /** Official MR Infinity badge */
  infinity: "/mr-infinity-master-royale.webp",
  /** .io row: UNLIMITED GEMS */
  gems: "/master-royale-gems.webp",
  /** .io row: FREE LEGENDARY CHEST */
  chest: "/master-royale-chest.webp",
  /** .io row: UNLOCK TOURNAMENTS */
  tournaments: "/master-royale-tournaments.webp",
  /** .io row: BLOCK CALLS (angry king emote) */
  emote: "/master-royale-emote.webp",
  /** Install / tips accent */
  wizard: "/master-royale-wizard.webp",
} as const;

/** Fixed 4-up benefits strip (screenshot order) */
export const HIGHLIGHT_ICONS = [
  ASSETS.gems,
  ASSETS.tournaments,
  ASSETS.chest,
  ASSETS.emote,
] as const;
