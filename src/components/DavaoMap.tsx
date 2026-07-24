"use client";

import { AnimatePresence, motion } from "framer-motion";
import maplibregl from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import { contact, siteMeta } from "@/lib/site-content";

// Geocoded to Mount Apo Street, Barangay 7-A (General Malvar), Poblacion
// District, Davao City (via OpenStreetMap Nominatim) — matches the clinic's
// confirmed address (Ground Floor, Door 7, Elles Pension, Mt. Apo St.,
// Brgy. 7-A, near Davao Doctors Hospital & Dunkin Donuts). Nudge to the
// exact building once the clinic can confirm it on a map.
const CLINIC_LNG = 125.6051757;
const CLINIC_LAT = 7.0725431;

const DARK_STYLE_URL =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

export default function DavaoMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerElRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = new maplibregl.Map({
      container,
      style: DARK_STYLE_URL,
      center: [CLINIC_LNG, CLINIC_LAT],
      zoom: 15.5,
      attributionControl: { compact: true },
      cooperativeGestures: true,
    });
    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    const markerEl = document.createElement("div");
    markerEl.className = "gsd-map-pin";
    markerEl.innerHTML = `
      <span class="gsd-map-pin-glow" aria-hidden="true"></span>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 1 1 18.5 10c0 4.9-6.5 11-6.5 11Z" fill="#026494" stroke="#ffffff" stroke-width="1.2"/>
        <circle cx="12" cy="10" r="2.4" fill="#ffffff"/>
      </svg>
    `;
    markerElRef.current = markerEl;

    const marker = new maplibregl.Marker({ element: markerEl, anchor: "bottom" })
      .setLngLat([CLINIC_LNG, CLINIC_LAT])
      .addTo(map);

    const updateTooltipPos = () => {
      const point = map.project([CLINIC_LNG, CLINIC_LAT]);
      setTooltipPos({ x: point.x, y: point.y });
    };

    updateTooltipPos();
    map.on("move", updateTooltipPos);

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    markerEl.addEventListener("mouseenter", onEnter);
    markerEl.addEventListener("mouseleave", onLeave);
    markerEl.addEventListener("focus", onEnter);
    markerEl.addEventListener("blur", onLeave);
    markerEl.tabIndex = 0;
    markerEl.setAttribute("role", "button");
    markerEl.setAttribute(
      "aria-label",
      `${siteMeta.name} location — show details`
    );

    return () => {
      markerEl.removeEventListener("mouseenter", onEnter);
      markerEl.removeEventListener("mouseleave", onLeave);
      markerEl.removeEventListener("focus", onEnter);
      markerEl.removeEventListener("blur", onLeave);
      marker.remove();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative h-64 w-full overflow-hidden sm:h-80">
      <div ref={containerRef} className="h-full w-full" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-petrol/15 via-transparent to-ink/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(2,100,148,0.25)]"
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y,
              transform: "translate(-50%, calc(-100% - 14px))",
            }}
            className="pointer-events-none absolute z-10 w-60 rounded-2xl bg-white p-4 text-left shadow-xl shadow-ink/20 ring-1 ring-ink/5"
          >
            <p className="font-heading text-sm font-semibold text-ink">
              {siteMeta.name}
            </p>
            {contact.addressLines.map((line) => (
              <p key={line} className="mt-1 text-xs leading-relaxed text-muted">
                {line}
              </p>
            ))}
            <a
              href="#contact"
              className="pointer-events-auto mt-3 inline-block text-xs font-semibold text-petrol underline-offset-2 hover:underline"
            >
              Book a visit →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gsd-map-pin {
          position: relative;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        .gsd-map-pin-glow {
          position: absolute;
          left: 50%;
          top: 40%;
          width: 46px;
          height: 46px;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(2, 100, 148, 0.55), transparent 70%);
          animation: gsd-pin-pulse 2.6s ease-in-out infinite;
        }
        @keyframes gsd-pin-pulse {
          0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(0.9); }
          50% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gsd-map-pin-glow { animation: none; }
        }

        .maplibregl-ctrl-top-right {
          margin: 12px;
        }
        .maplibregl-ctrl-group {
          background: rgba(30, 42, 56, 0.55) !important;
          backdrop-filter: blur(6px);
          border-radius: 0.75rem !important;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 16px rgba(2, 100, 148, 0.25) !important;
          overflow: hidden;
        }
        .maplibregl-ctrl-group button {
          background: transparent !important;
          filter: invert(1) brightness(1.6);
        }
        .maplibregl-ctrl-group button:hover {
          background: rgba(2, 100, 148, 0.35) !important;
        }
        .maplibregl-ctrl-group button + button {
          border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .maplibregl-ctrl-attrib {
          background: rgba(30, 42, 56, 0.5) !important;
          border-radius: 0.5rem 0 0 0;
          backdrop-filter: blur(4px);
        }
        .maplibregl-ctrl-attrib a {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .maplibregl-ctrl-attrib-button {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
}
