import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SocialProofBar } from "../components/SocialProofBar";
import { Packages } from "../components/Packages";
import { HowItWorks } from "../components/HowItWorks";
import { WhyTera } from "../components/WhyTera";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProofBar />
        <Packages />
        <HowItWorks />
        <WhyTera />
        <FAQ />
        <FinalCTA />
      </main>
      <div className="bg-black/40">
        <Footer />
        {/* Extiende el color del footer en móvil para cubrir espacio/safe-area */}
        <div className="min-h-16 md:min-h-0" aria-hidden />
      </div>
      <BackToTopButton />
    </div>
  );
}

