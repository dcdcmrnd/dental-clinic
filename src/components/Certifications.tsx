"use client";

import { motion, useReducedMotion } from "framer-motion";
import { certifications } from "@/lib/site-content";
import { ShieldCheckIcon } from "./icons";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="relative bg-white/90 py-20"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={7}
            label="Certifications"
            heading="Credentials you can trust"
            headingId="certifications-heading"
            subtext="Placeholder badges below — to be replaced with the clinic's verified licenses and memberships."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delayMs={(i % 4) * 80}>
              <motion.div
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 3.4 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="flex h-full flex-col items-center gap-3 rounded-[1.5rem] rounded-tl-[2.25rem] border-2 border-accent/60 bg-bg-soft px-5 py-7 text-center shadow-sm shadow-ink/5 transition-colors hover:border-petrol/50"
              >
                <ShieldCheckIcon className="h-8 w-8 text-petrol" />
                <p className="font-heading text-sm font-semibold text-ink">
                  {cert.name}
                </p>
                <p className="text-xs text-muted">{cert.note}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
