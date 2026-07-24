"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, siteMeta } from "@/lib/site-content";
import { MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const targets = nav
      .filter((item) => item.href.includes("#"))
      .map((item) => ({
        href: item.href,
        el: document.querySelector(`#${item.href.split("#")[1]}`),
      }))
      .filter((t): t is { href: string; el: Element } => t.el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = targets.find((t) => t.el === entry.target);
            if (match) setActiveHash(match.href);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t.el));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) =>
    href.includes("#") ? pathname === "/" && activeHash === href : pathname === href;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur shadow-[0_4px_20px_rgba(30,42,56,0.08)]"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Gentle Smiles Dental Clinic logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-heading text-lg font-semibold transition-colors duration-300 ${
                solid ? "text-petrol" : "text-white"
              }`}
            >
              {siteMeta.shortName}
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                solid ? "text-muted" : "text-white/70"
              }`}
            >
              Dental Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? solid
                    ? "text-petrol font-semibold"
                    : "text-white font-semibold"
                  : solid
                    ? "text-ink/80 hover:text-petrol"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            data-magnetic
            className="rounded-full bg-petrol px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-petrol-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className={`flex items-center justify-center rounded-md p-2 transition-colors md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol ${
            solid ? "text-ink" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-bg-soft hover:text-petrol ${
                    isActive(item.href) ? "text-petrol font-semibold" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-petrol px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-petrol-dark"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
