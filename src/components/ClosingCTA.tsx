import Link from "next/link";
import Reveal from "./Reveal";

export default function ClosingCTA() {
  return (
    <section
      className="relative overflow-hidden bg-petrol py-20 text-white"
      aria-labelledby="closing-cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2
            id="closing-cta-heading"
            className="font-heading text-3xl italic font-medium leading-tight sm:text-4xl"
          >
            Ready for a gentler dental visit?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Book your visit today — we&apos;d love to help you feel confident about your smile.
          </p>
          <Link
            href="/#contact"
            data-magnetic
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-petrol shadow-md shadow-ink/20 transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
