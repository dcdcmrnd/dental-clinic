import Link from "next/link";
import { services } from "@/lib/site-content";
import { serviceIcons } from "./icons";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function ServicesTeaser() {
  return (
    <section
      id="services"
      className="relative bg-bg-soft/90 py-20"
      aria-labelledby="services-teaser-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={2}
            label="Services"
            heading="Comprehensive care for every smile"
            headingId="services-teaser-heading"
            subtext="From routine cleanings to smile makeovers — here's a quick look at what we offer."
          />
        </Reveal>

        <Reveal delayMs={100} className="mt-12 flex flex-wrap justify-center gap-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <span
                key={service.category}
                className="flex items-center gap-2 rounded-full border-2 border-accent/60 bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm shadow-ink/5"
              >
                <Icon className="h-4 w-4 text-petrol" />
                {service.category}
              </span>
            );
          })}
        </Reveal>

        <Reveal delayMs={150} className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-petrol px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-petrol-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            View all services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
