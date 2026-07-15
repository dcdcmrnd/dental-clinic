import { technology } from "@/lib/site-content";
import { CheckupIcon, NightguardIcon, XrayIcon } from "./icons";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const icons = [XrayIcon, CheckupIcon, NightguardIcon];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative bg-bg-soft/90 py-20"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={4}
            label={technology.eyebrow}
            heading={technology.heading}
            headingId="technology-heading"
            subtext={technology.subtext}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {technology.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.name} delayMs={i * 100}>
                <div className="flex h-full flex-col items-center gap-3 rounded-[1.75rem] rounded-tl-[2.5rem] border-2 border-accent/60 bg-white px-6 py-8 text-center shadow-sm shadow-ink/5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bg-soft shadow-sm shadow-ink/5">
                    <Icon className="h-8 w-8 text-petrol" />
                  </div>
                  <p className="font-heading text-base font-semibold text-ink">
                    {item.name}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
