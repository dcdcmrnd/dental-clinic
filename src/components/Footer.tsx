import Image from "next/image";
import { contact, nav, siteMeta } from "@/lib/site-content";
import { FacebookIcon, InstagramIcon } from "./icons";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-4 font-heading text-4xl italic font-medium leading-tight sm:text-5xl">
              Book your visit
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteMeta.tagline}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="rounded text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="rounded transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>{contact.email}</li>
                {contact.addressLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                {contact.socials.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Gentle Smiles Dental Clinic on ${social.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Gentle Smiles Dental Clinic logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full bg-white object-contain p-1"
            />
            <p>
              © {year} {siteMeta.name}. All rights reserved.
            </p>
          </div>
          <p className="flex items-center gap-2">
            Designed &amp; developed by
            <a
              href="https://www.aequoradigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Image
                src="/images/aequora-logo.png"
                alt="Aequora Digital"
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="font-medium text-white/80">Aequora Digital</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
