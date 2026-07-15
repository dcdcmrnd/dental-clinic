"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

type SplitRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delayMs?: number;
  playOnMount?: boolean;
  id?: string;
};

export default function SplitReveal({
  text,
  as = "h2",
  className = "",
  delayMs = 0,
  playOnMount = false,
  id,
}: SplitRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      gsap.set(words, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.045,
          delay: delayMs / 1000,
          scrollTrigger: playOnMount
            ? undefined
            : { trigger: el, start: "top 85%" },
        }
      );
    });

    return () => ctx.revert();
  }, [delayMs, playOnMount]);

  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag ref={ref as never} id={id} className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-top pb-1"
          >
            <span
              data-word
              className="inline-block will-change-transform"
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
