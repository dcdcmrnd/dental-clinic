import { services } from "@/lib/site-content";
import { serviceIcons } from "./icons";
import Flourish from "./Flourish";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const tints = [
  "from-petrol/15 to-accent/50",
  "from-accent/60 to-petrol/10",
  "from-petrol/20 to-bg-soft",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-bg-soft py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-petrol">
            Services
          </p>
          <Flourish className="mt-2" align="center" />
          <h2
            id="services-heading"
            className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl"
          >
            Care for every stage of your smile
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A snapshot of what we offer — final list and descriptions to be confirmed by the clinic.
            Visuals below are illustrated placeholders; swap in real photos when available.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.name} delayMs={(i % 4) * 80}>
                <div className="group h-full overflow-hidden rounded-[1.75rem] rounded-tr-[2.5rem] border-2 border-accent/60 bg-white shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:border-petrol/50 hover:shadow-lg hover:shadow-petrol/10">
                  <div
                    className={`relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-br ${tints[i % tints.length]}`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-6 -top-8 h-20 w-20 rounded-full bg-white/30 blur-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 -left-4 h-16 w-16 rounded-full bg-petrol/10 blur-xl"
                    />
                    <Icon className="relative h-12 w-12 text-petrol transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <WaveDivider toneClassName="text-white" mirror />
    </section>
  );
}
