"use client";

import { useEffect, useRef, useState } from "react";
import { contact, hero } from "@/lib/site-content";
import SplitReveal from "./SplitReveal";
import VelocityWarp from "./VelocityWarp";
import WaveDivider from "./WaveDivider";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28 lg:px-8 lg:py-36">
        <div
          className={`max-w-2xl transition-opacity duration-700 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            {hero.eyebrow}
          </p>
          <VelocityWarp>
            <SplitReveal
              as="h1"
              text={hero.headline}
              playOnMount
              className="mt-4 font-heading text-4xl italic font-medium leading-tight text-white sm:text-5xl"
            />
          </VelocityWarp>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {hero.subtext}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-magnetic
              className="rounded-full bg-white px-7 py-3.5 text-base font-semibold text-petrol shadow-md shadow-ink/20 transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {hero.ctaLabel}
            </a>
            <a
              href="#services"
              className="text-base font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View our services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wide text-white/60">
            <span>Davao City, Philippines</span>
            <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden="true" />
            <span>
              {contact.hours[0].days} · {contact.hours[0].time}
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/25">
          <span className="hero-scroll-cue absolute inset-x-0 top-0 h-full bg-white" />
        </span>
      </div>
      <style jsx>{`
        @keyframes hero-scroll-cue {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .hero-scroll-cue {
          animation: hero-scroll-cue 1.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-scroll-cue {
            animation: none;
          }
        }
      `}</style>

      <WaveDivider toneClassName="text-white" />
    </section>
  );
}
