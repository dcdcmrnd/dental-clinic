"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, siteMeta } from "@/lib/site-content";
import { MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(30,42,56,0.08)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Gentle Smiles Dental Clinic logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold text-petrol">
              {siteMeta.shortName}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              Dental Clinic
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-petrol"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            data-magnetic
            className="rounded-full bg-petrol px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-petrol-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-ink md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-6 pb-4"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-bg-soft hover:text-petrol"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-petrol px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-petrol-dark"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
