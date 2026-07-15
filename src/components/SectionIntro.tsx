import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";
import SplitReveal from "./SplitReveal";
import VelocityWarp from "./VelocityWarp";

type SectionIntroProps = {
  index: number;
  label: string;
  heading: string;
  headingId: string;
  subtext?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export default function SectionIntro({
  index,
  label,
  heading,
  headingId,
  subtext,
  align = "center",
  className = "",
  children,
}: SectionIntroProps) {
  return (
    <div className={className}>
      <SectionLabel index={index} label={label} align={align} />
      <VelocityWarp>
        <SplitReveal
          as="h2"
          id={headingId}
          text={heading}
          className="mt-4 font-heading text-3xl italic font-medium text-ink sm:text-4xl"
        />
      </VelocityWarp>
      {subtext && <p className="mt-4 text-base leading-relaxed text-muted">{subtext}</p>}
      {children}
    </div>
  );
}
