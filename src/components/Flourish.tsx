type FlourishProps = {
  className?: string;
  align?: "left" | "center";
  toneClassName?: string;
};

export default function Flourish({
  className = "",
  align = "left",
  toneClassName = "text-petrol",
}: FlourishProps) {
  return (
    <svg
      viewBox="0 0 64 16"
      aria-hidden="true"
      className={`h-3 w-14 ${toneClassName} ${align === "center" ? "mx-auto" : ""} ${className}`}
    >
      <path
        d="M1 12c8-3 12-9 20-9s10 8 18 8 12-7 24-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
