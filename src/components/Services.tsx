"use client";

import { useEffect, useState } from "react";
import { services } from "@/lib/site-content";
import Flourish from "./Flourish";
import { PauseIcon, PlayIcon, serviceIcons } from "./icons";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import TiltCard from "./TiltCard";
import VelocityWarp from "./VelocityWarp";
import WaveDivider from "./WaveDivider";

const tints = [
  "from-petrol/15 to-accent/50",
  "from-accent/60 to-petrol/10",
  "from-petrol/20 to-bg-soft",
];

const rowA = services.slice(0, 7);
const rowB = services.slice(7);

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = serviceIcons[service.icon];
  return (
    <TiltCard className="w-72 shrink-0 sm:w-80">
      <div className="group h-full overflow-hidden rounded-[1.75rem] rounded-tr-[2.5rem] border-2 border-accent/60 bg-white shadow-sm shadow-ink/5 transition-colors duration-300 hover:border-petrol/50">
        <div
          className={`relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-br ${tints[index % tints.length]}`}
        >
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-8 h-20 w-20 rounded-full bg-white/30 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-4 h-16 w-16 rounded-full bg-petrol/10 blur-xl"
          />
          <Icon className="relative h-12 w-12 text-petrol transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold text-ink">
            {service.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {service.description}
          </p>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Services() {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    queueMicrotask(() => setReducedMotion(matches));
  }, []);

  return (
    <section
      id="services"
      className="relative bg-white/90 py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-petrol">
            Services
          </p>
          <Flourish className="mt-2" align="center" />
          <VelocityWarp>
            <SplitReveal
              as="h2"
              id="services-heading"
              text="Care for every stage of your smile"
              className="mt-4 font-heading text-3xl italic font-medium text-ink sm:text-4xl"
            />
          </VelocityWarp>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A snapshot of what we offer — final list and descriptions to be confirmed by the clinic.
            Visuals below are illustrated placeholders; swap in real photos when available.
          </p>
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused((v) => !v)}
              aria-pressed={paused}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/70 px-4 py-2 text-xs font-semibold text-ink/70 transition-colors hover:border-petrol/50 hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            >
              {paused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
              {paused ? "Resume scrolling" : "Pause scrolling"}
            </button>
          )}
        </Reveal>
      </div>

      {reducedMotion ? (
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.map((service, i) => (
            <Reveal key={service.name} delayMs={(i % 4) * 80} className="w-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="mt-14 space-y-6" delayMs={100}>
          <Marquee direction="left" speed={45} paused={paused}>
            {rowA.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </Marquee>
          <Marquee direction="right" speed={45} paused={paused}>
            {rowB.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i + 7} />
            ))}
          </Marquee>
        </Reveal>
      )}

      <WaveDivider toneClassName="text-white/90" mirror />
    </section>
  );
}
