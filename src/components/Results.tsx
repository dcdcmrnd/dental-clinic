import Image from "next/image";
import { results } from "@/lib/site-content";
import Flourish from "./Flourish";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import VelocityWarp from "./VelocityWarp";
import WaveDivider from "./WaveDivider";

export default function Results() {
  return (
    <section
      id="results"
      className="relative bg-white/90 py-20"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-petrol">
            Real Results
          </p>
          <Flourish className="mt-2" align="center" />
          <VelocityWarp>
            <SplitReveal
              as="h2"
              id="results-heading"
              text="Real patients, real smiles"
              className="mt-4 font-heading text-3xl italic font-medium text-ink sm:text-4xl"
            />
          </VelocityWarp>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A few transformations from our own patients, shared with their permission.
          </p>
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

      <WaveDivider toneClassName="text-white/90" />
    </section>
  );
}
