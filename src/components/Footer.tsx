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
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Gentle Smiles Dental Clinic logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-white object-contain p-1"
              />
              <span className="font-heading text-base font-semibold">
                {siteMeta.name}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              {siteMeta.tagline}
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80">
              Follow Us
            </p>
            <div className="mt-4 flex gap-3">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Gentle Smiles Dental Clinic on ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteMeta.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Designed &amp; developed by
            <Image
              src="/images/aequora-logo.png"
              alt="Aequora Digital"
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="font-medium text-white/80">Aequora Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
