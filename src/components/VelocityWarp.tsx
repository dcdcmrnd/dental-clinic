"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLenisInstance } from "@/lib/lenis-context";

type VelocityWarpProps = {
  children: React.ReactNode;
  className?: string;
};

export default function VelocityWarp({
  children,
  className = "",
}: VelocityWarpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenisInstance();

  useEffect(() => {
    const el = ref.current;
    if (!el || !lenis) return;

    const applySkew = gsap.quickTo(el, "skewY", {
      duration: 0.7,
      ease: "power3.out",
    });

    const onScroll = ({ velocity }: { velocity: number }) => {
      applySkew(gsap.utils.clamp(-9, 9, velocity * 1.4));
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
      applySkew(0);
    };
  }, [lenis]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
