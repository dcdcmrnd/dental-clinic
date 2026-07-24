import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ | Gentle Smiles Dental Clinic",
  description:
    "Answers to common questions about visiting Gentle Smiles Dental Clinic in Davao City — appointments, insurance, and what to expect.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtext="Everything you need to know before your visit. Don't see your question here? Just reach out and we'll be happy to help."
      />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
