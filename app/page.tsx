import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProofBar } from "@/components/SocialProofBar";
import { Packages } from "@/components/Packages";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTera } from "@/components/WhyTera";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";

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
      <Footer />
      <BackToTopButton />
    </div>
  );
}

