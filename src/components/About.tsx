"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { about } from "@/lib/site-content";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

// Subtle whole-card drift (not a crop/pan effect) — kept small so the card
// never travels far enough to overlap the section's divider or padding.
const PARALLAX_SHIFT_PERCENT = 6;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    if (!section || !imageWrapper) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(imageWrapper, {
        yPercent: PARALLAX_SHIFT_PERCENT,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-white/90 py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionIntro
              index={1}
              label={about.eyebrow}
              heading={about.heading}
              headingId="about-heading"
              align="left"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl rounded-tl-sm border border-accent/60 bg-bg-soft p-6">
              <p className="font-heading text-base font-semibold text-ink">
                {about.dentist.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {about.dentist.bio}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div ref={imageWrapperRef} className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2.5rem] border-2 border-accent/50"
              />
              <div className="overflow-hidden rounded-[2.5rem] shadow-lg shadow-ink/10">
                <Image
                  src="/images/team.jpg"
                  alt="Members of the Gentle Smiles Dental Clinic team"
                  width={900}
                  height={1400}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
