"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  paused?: boolean;
  className?: string;
};

export default function Marquee({
  children,
  direction = "left",
  speed = 40,
  paused = false,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const hoverPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const distance = track.scrollWidth / 2;
    const duration = distance / speed;

    const tween = gsap.fromTo(
      track,
      { x: direction === "left" ? 0 : -distance },
      {
        x: direction === "left" ? -distance : 0,
        duration,
        ease: "none",
        repeat: -1,
      }
    );
    tweenRef.current = tween;

    return () => {
      tween.kill();
      tweenRef.current = null;
    };
  }, [direction, speed]);

  useEffect(() => {
    const tween = tweenRef.current;
    if (!tween) return;
    if (paused || hoverPausedRef.current) {
      tween.pause();
    } else {
      tween.resume();
    }
  }, [paused]);

  const setHoverPaused = (value: boolean) => {
    hoverPausedRef.current = value;
    const tween = tweenRef.current;
    if (!tween) return;
    if (value || paused) {
      tween.pause();
    } else {
      tween.resume();
    }
  };

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={() => setHoverPaused(false)}
    >
      <div ref={trackRef} className="flex w-max gap-6">
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
