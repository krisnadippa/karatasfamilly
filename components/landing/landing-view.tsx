import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { LandingAboutGolf } from "./landing-about-golf";
import { LandingPlantCategories } from "./landing-plant-categories";
import { LandingTennisPillars } from "./landing-tennis-pillars";
import { LandingArchitectureSection } from "./landing-architecture-section";
import { LandingDentalCare } from "./landing-dental-care";
import { LandingCtaAndFooter } from "./landing-cta-and-footer";

export function LandingView() {
  return (
    <div className="min-h-screen p-3 md:p-5 flex flex-col justify-start items-center bg-white text-[#111111] antialiased">
      {/* Main Container */}
      <div className="w-full max-w-[1400px] flex flex-col gap-12">
        <LandingHeader />
        <LandingHero />
        <LandingAboutGolf />
        <LandingPlantCategories />
        <LandingTennisPillars />
        <LandingArchitectureSection />
        <LandingDentalCare />
        <LandingCtaAndFooter />
      </div>
    </div>
  );
}
