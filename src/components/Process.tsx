"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { process } from "@/lib/site-content";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(line, { scaleY: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-bg-soft/90 py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={6}
            label={process.eyebrow}
            heading={process.heading}
            headingId="process-heading"
            subtext={process.subtext}
          />
        </Reveal>

        <div className="relative mt-16 pl-10 sm:pl-14">
          <div
            aria-hidden="true"
            className="absolute bottom-1 left-3 top-1 w-px bg-accent/40 sm:left-5"
          >
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-petrol"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="space-y-12">
            {process.steps.map((step, i) => (
              <Reveal key={step.title} delayMs={i * 80} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-petrol bg-white text-xs font-semibold text-petrol sm:-left-14 sm:h-9 sm:w-9"
                >
                  {i + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
