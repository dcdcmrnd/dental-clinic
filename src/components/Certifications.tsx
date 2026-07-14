import { certifications } from "@/lib/site-content";
import Flourish from "./Flourish";
import { ShieldCheckIcon } from "./icons";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-white py-24"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-petrol">
            Certifications
          </p>
          <Flourish className="mt-2" align="center" />
          <h2
            id="certifications-heading"
            className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl"
          >
            Credentials you can trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Placeholder badges below — to be replaced with the clinic&apos;s verified licenses and memberships.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delayMs={(i % 4) * 80}>
              <div className="flex h-full flex-col items-center gap-3 rounded-[1.5rem] rounded-tl-[2.25rem] border-2 border-accent/60 bg-bg-soft px-5 py-7 text-center transition-colors hover:border-petrol/50">
                <ShieldCheckIcon className="h-8 w-8 text-petrol" />
                <p className="font-heading text-sm font-semibold text-ink">
                  {cert.name}
                </p>
                <p className="text-xs text-muted">{cert.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider toneClassName="text-bg-soft" />
    </section>
  );
}
