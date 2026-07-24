import SplitReveal from "./SplitReveal";
import VelocityWarp from "./VelocityWarp";
import WaveDivider from "./WaveDivider";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtext: string;
};

export default function PageHero({ eyebrow, title, subtext }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-ink pb-16 pt-36 sm:pt-40"
      aria-label={title}
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <VelocityWarp>
          <SplitReveal
            as="h1"
            text={title}
            playOnMount
            className="mt-4 max-w-2xl font-heading text-4xl italic font-medium leading-tight text-white sm:text-5xl"
          />
        </VelocityWarp>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          {subtext}
        </p>
      </div>

      <WaveDivider toneClassName="text-white" />
    </section>
  );
}
