import Image from "next/image";
import { about } from "@/lib/site-content";
import Flourish from "./Flourish";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-petrol">
              {about.eyebrow}
            </p>
            <Flourish className="mt-2" />
            <h2
              id="about-heading"
              className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl"
            >
              {about.heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl rounded-tl-sm border border-accent/60 bg-bg-soft p-6">
              <p className="font-heading text-base font-semibold text-ink">
                {about.dentist.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {about.dentist.bio}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2.5rem] border-2 border-accent/50"
              />
              <div className="overflow-hidden rounded-[2.5rem] rounded-tr-xl shadow-lg shadow-ink/10">
                <Image
                  src="/images/team.jpg"
                  alt="Members of the Gentle Smiles Dental Clinic team"
                  width={900}
                  height={1400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <WaveDivider toneClassName="text-bg-soft" />
    </section>
  );
}
