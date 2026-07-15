"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glass = glassRef.current;
    if (!card || !glass) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: relX * 14,
        rotateX: -relY * 14,
        z: 20,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(glass, {
        opacity: 1,
        x: relX * 30,
        y: relY * 30,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        z: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(glass, { opacity: 0, duration: 0.4, ease: "power3.out" });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div style={{ perspective: 900 }}>
      <div
        ref={cardRef}
        className={`relative [transform-style:preserve-3d] ${className}`}
      >
        <div
          ref={glassRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0) 60%)",
            backdropFilter: "blur(2px)",
          }}
        />
        {children}
      </div>
    </div>
  );
}
