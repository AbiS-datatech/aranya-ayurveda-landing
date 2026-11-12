export default function LeafDivider({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex justify-center py-2 ${className}`}
    >
      <svg
        width="120"
        height="28"
        viewBox="0 0 120 28"
        fill="none"
        className={flip ? "rotate-180" : ""}
      >
        <path
          d="M2 14C22 2 40 2 60 14C80 26 98 26 118 14"
          stroke="#C9A227"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M60 14C60 14 56 8 60 4C64 8 60 14 60 14Z"
          fill="#2E7D32"
        />
        <circle cx="10" cy="12.5" r="1.6" fill="#C9A227" />
        <circle cx="110" cy="12.5" r="1.6" fill="#C9A227" />
      </svg>
    </div>
  );
}
