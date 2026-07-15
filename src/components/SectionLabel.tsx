type SectionLabelProps = {
  index: number;
  label: string;
  align?: "left" | "center";
  toneClassName?: string;
  className?: string;
};

export default function SectionLabel({
  index,
  label,
  align = "left",
  toneClassName = "text-petrol",
  className = "",
}: SectionLabelProps) {
  const num = String(index).padStart(3, "0");

  return (
    <p
      className={`flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${toneClassName} ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden="true">—</span>
      <span>{num}</span>
      <span aria-hidden="true">/</span>
      <span>{label}</span>
    </p>
  );
}
