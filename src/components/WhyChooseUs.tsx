import { whyChooseUs } from "@/lib/site-content";
import { ChatIcon, FacilityIcon, GentleCareIcon, TargetIcon } from "./icons";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const icons = [GentleCareIcon, FacilityIcon, TargetIcon, ChatIcon];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative bg-white/90 py-20"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={3}
            label={whyChooseUs.eyebrow}
            heading={whyChooseUs.heading}
            headingId="why-choose-us-heading"
            subtext={whyChooseUs.subtext}
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2">
          {whyChooseUs.items.map((item, i) => {
            const Icon = icons[i];
            const topRow = i < 2;
            const rightCol = i % 2 === 1;
            const rowClass = [
              "py-8 sm:py-10",
              i > 0 ? "border-t border-accent/40" : "",
              topRow ? "sm:border-t-0" : "",
              rightCol ? "sm:border-l sm:border-accent/40 sm:pl-8" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <Reveal key={item.title} delayMs={i * 80} className={rowClass}>
                <span className="font-mono text-xs font-semibold text-petrol/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-4 h-8 w-8 text-petrol" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
