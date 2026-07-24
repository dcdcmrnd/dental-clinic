import About from "@/components/About";
import ClosingCTA from "@/components/ClosingCTA";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Results from "@/components/Results";
import ServicesTeaser from "@/components/ServicesTeaser";
import Training from "@/components/Training";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesTeaser />
      <WhyChooseUs />
      <Results />
      <Process />
      <Training />
      <Contact />
      <ClosingCTA />
    </>
  );
}
