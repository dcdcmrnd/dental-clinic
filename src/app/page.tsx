import About from "@/components/About";
import Certifications from "@/components/Certifications";
import ClosingCTA from "@/components/ClosingCTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Technology />
        <Results />
        <Process />
        <Certifications />
        <FAQ />
        <Contact />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
