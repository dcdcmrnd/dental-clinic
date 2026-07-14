type WaveDividerProps = {
  /** Tailwind text-color class; the wave is filled with currentColor so it matches the section that follows. */
  toneClassName: string;
  mirror?: boolean;
  className?: string;
};

export default function WaveDivider({
  toneClassName,
  mirror = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${
        mirror ? "-scale-x-100" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-14 w-full sm:h-20 ${toneClassName}`}
        fill="currentColor"
      >
        <path d="M0,40 C45,10 135,10 180,40 C225,70 315,70 360,40 C405,10 495,10 540,40 C585,70 675,70 720,40 C765,10 855,10 900,40 C945,70 1035,70 1080,40 C1125,10 1215,10 1260,40 C1305,70 1395,70 1440,40 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}
