type SteamMotifProps = {
  className?: string;
  color?: string;
};

/**
 * Three hand-drawn steam paths that continuously rise and fade.
 * This is the site's throughline signature — it reappears near the
 * nav logo, the hero cup, and on product-card hover.
 */
export default function SteamMotif({
  className = "h-16 w-12",
  color = "currentColor",
}: SteamMotifProps) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        className="steam-wisp"
        d="M14 60C14 60 6 48 14 38C22 28 14 16 14 16"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        className="steam-wisp"
        d="M24 60C24 60 16 46 24 36C32 26 24 12 24 12"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        className="steam-wisp"
        d="M34 60C34 60 26 48 34 38C42 28 34 16 34 16"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
