"use client";

import gsap from "gsap";
import { useEffect, useId, useRef } from "react";

type WaveDividerProps = {
  /** Tailwind text-color class (with matching opacity to the section it blends into); the wave is filled with currentColor. */
  toneClassName: string;
  mirror?: boolean;
  className?: string;
};

// A gentle, mostly-level ripple — kept low-amplitude so it reads as even
// across the full width regardless of what sits above it on either side.
// Slightly asymmetric (not a mirrored curve) to avoid a mechanical look.
const PATH = "M0,95 C360,78 1080,112 1440,92";

export default function WaveDivider({
  toneClassName,
  mirror = false,
  className = "",
}: WaveDividerProps) {
  const gradientId = useId();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(svg, {
      scaleY: 1.06,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformOrigin: "50% 0%",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${
        mirror ? "-scale-x-100" : ""
      } ${className}`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className={`block h-12 w-full sm:h-16 lg:h-20 ${toneClassName}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-petrol)" stopOpacity="0.45" />
            <stop offset="50%" stopColor="var(--color-petrol-light)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path d={`${PATH} L1440,200 L0,200 Z`} fill="currentColor" />
        <path
          d={PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
