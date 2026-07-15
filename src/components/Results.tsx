import Image from "next/image";
import { results } from "@/lib/site-content";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Results() {
  return (
    <section
      id="results"
      className="relative bg-white/90 py-20"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={5}
            label="Real Results"
            heading="Real patients, real smiles"
            headingId="results-heading"
            subtext="A few transformations from our own patients, shared with their permission."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {results.map((result, i) => (
            <Reveal key={result.image} delayMs={i * 100}>
              <div className="overflow-hidden rounded-[2.5rem] rounded-tl-xl border-2 border-accent/60 bg-bg-soft shadow-sm shadow-ink/5">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={result.image}
                    alt={result.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-5 text-center font-heading text-sm font-semibold text-ink">
                  {result.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
