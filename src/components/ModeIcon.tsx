import Image from "next/image";

type ModeIconSize = "sm" | "md" | "lg" | "xl";

/** Fixed CSS pixel boxes — both Vanilla & Infinity always share these. */
const SIZE_PX: Record<ModeIconSize, { base: number; md?: number }> = {
  sm: { base: 80 },
  md: { base: 80, md: 96 },
  lg: { base: 128 },
  xl: { base: 140, md: 180 },
};

export default function ModeIcon({
  src,
  alt,
  size = "lg",
  className = "",
}: {
  src: string;
  alt: string;
  size?: ModeIconSize;
  className?: string;
}) {
  const { base, md } = SIZE_PX[size];
  const imgSize = md ?? base;

  return (
    <span
      className={`mode-icon mode-icon--${size} inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{
        width: base,
        height: base,
        minWidth: base,
        minHeight: base,
        maxWidth: base,
        maxHeight: base,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={imgSize}
        height={imgSize}
        className="mode-icon__img"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
        sizes={`${imgSize}px`}
      />
    </span>
  );
}
