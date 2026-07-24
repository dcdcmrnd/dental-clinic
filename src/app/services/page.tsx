import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Gentle Smiles Dental Clinic",
  description:
    "Explore the full range of dental services at Gentle Smiles Dental Clinic in Davao City — from routine cleanings to smile makeovers.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your smile needs, in one place"
        subtext="A full look at the treatments we offer — from routine cleanings to smile makeovers — delivered with the same calm, gentle approach at every visit."
      />
      <Services />
      <ClosingCTA />
    </>
  );
}
