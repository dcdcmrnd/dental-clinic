import Image from "next/image";
import { trainingIntro, trainingPhotos, trainings } from "@/lib/site-content";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

function TrainingCard({
  training,
  index,
}: {
  training: (typeof trainings)[number];
  index: number;
}) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-[2.25rem] border-2 border-accent/60 bg-white shadow-sm shadow-ink/5 ${
        index % 2 === 0 ? "rounded-br-lg" : "rounded-tl-lg"
      }`}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={training.image.src}
          alt={training.image.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-7">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-petrol/70">
            {training.date} · {training.location}
          </p>
          <h3 className="mt-1 font-heading text-xl font-semibold text-ink">
            {training.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {training.program}
          </p>
        </div>

        <div className="border-t border-accent/40 pt-4">
          <p className="text-sm font-semibold text-ink">{training.instructor}</p>
          <p className="text-xs text-muted">{training.instructorNote}</p>
          <p className="mt-1 text-xs text-muted">Hosted by {training.host}</p>
        </div>

        {training.quote && (
          <blockquote className="rounded-2xl bg-petrol/5 p-4">
            <p className="font-heading text-sm italic leading-relaxed text-ink">
              {training.quote.text}
            </p>
            <p className="mt-2 text-xs font-semibold text-petrol">
              {training.quote.attribution}
            </p>
          </blockquote>
        )}
      </div>
    </div>
  );
}

export default function Training() {
  return (
    <section
      id="training"
      className="relative bg-bg-soft/90 py-20"
      aria-labelledby="training-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={6}
            label={trainingIntro.eyebrow}
            heading={trainingIntro.heading}
            headingId="training-heading"
            subtext={trainingIntro.subtext}
          />
        </Reveal>

        <div className="mt-14 grid items-start gap-8 sm:grid-cols-2">
          {trainings.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 100}>
              <TrainingCard training={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delayMs={150} className="mt-10">
        <Marquee direction="left" speed={35}>
          {trainingPhotos.map((photo) => (
            <div
              key={photo.src}
              className="w-56 shrink-0 overflow-hidden rounded-[1.5rem] border-2 border-accent/60 shadow-sm shadow-ink/5 sm:w-64"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
