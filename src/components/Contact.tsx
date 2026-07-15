"use client";

import { useState } from "react";
import { contact } from "@/lib/site-content";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";
import DavaoMap from "./DavaoMap";
import Flourish from "./Flourish";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import VelocityWarp from "./VelocityWarp";
import WaveDivider from "./WaveDivider";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-white/90 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-petrol">
            Contact
          </p>
          <Flourish className="mt-2" align="center" />
          <VelocityWarp>
            <SplitReveal
              as="h2"
              id="contact-heading"
              text="Book your visit today"
              className="mt-4 font-heading text-3xl italic font-medium text-ink sm:text-4xl"
            />
          </VelocityWarp>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Reach out through the form, give us a call, or message us on Facebook — we&apos;d love to see your smile.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-2" as="div">
            <div className="flex h-full flex-col gap-6 rounded-[1.75rem] rounded-tl-[2.5rem] border-2 border-accent/60 bg-white p-7 shadow-sm shadow-ink/5">
              <div className="flex gap-4">
                <PinIcon className="h-6 w-6 shrink-0 text-petrol" />
                <div>
                  <p className="font-heading text-sm font-semibold text-ink">Address</p>
                  {contact.addressLines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <PhoneIcon className="h-6 w-6 shrink-0 text-petrol" />
                <div>
                  <p className="font-heading text-sm font-semibold text-ink">Phone</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="text-sm text-muted transition-colors hover:text-petrol"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MailIcon className="h-6 w-6 shrink-0 text-petrol" />
                <div>
                  <p className="font-heading text-sm font-semibold text-ink">Email</p>
                  <p className="text-sm text-muted">{contact.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <ClockIcon className="h-6 w-6 shrink-0 text-petrol" />
                <div>
                  <p className="font-heading text-sm font-semibold text-ink">Hours</p>
                  {contact.hours.map((h) => (
                    <p key={h.days} className="text-sm leading-relaxed text-muted">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex gap-3 pt-2">
                {contact.socials.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Gentle Smiles Dental Clinic on ${social.label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-soft text-petrol transition-colors hover:bg-petrol hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                    >
                      {Icon ? <Icon className="h-5 w-5" /> : social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delayMs={100}>
            <div className="overflow-hidden rounded-[1.75rem] rounded-tr-[2.5rem] border-2 border-accent/60 shadow-sm shadow-ink/5">
              <DavaoMap />
            </div>

            <form
              className="mt-6 rounded-[1.75rem] rounded-tl-[2.5rem] border-2 border-accent/60 bg-white p-7 shadow-sm shadow-ink/5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-accent/70 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-accent/70 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-xl border border-accent/70 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-petrol px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-petrol-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol sm:w-auto"
              >
                Send message
              </button>

              <p role="status" className="mt-3 text-sm text-petrol">
                {submitted
                  ? "Thanks — this form is a placeholder until it's connected to the clinic's email or CRM."
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <WaveDivider toneClassName="text-ink/95" mirror />
    </section>
  );
}
