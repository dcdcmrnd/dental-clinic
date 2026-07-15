import { faq } from "@/lib/site-content";
import FAQAccordion from "./FAQAccordion";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-bg-soft/90 py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionIntro
            index={8}
            label={faq.eyebrow}
            heading={faq.heading}
            headingId="faq-heading"
            subtext={faq.subtext}
          />
        </Reveal>

        <Reveal delayMs={100} className="mt-12">
          <FAQAccordion items={faq.items} />
        </Reveal>
      </div>
    </section>
  );
}
