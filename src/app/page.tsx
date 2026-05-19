import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PopularAreas } from "@/components/PopularAreas";
import { BrandCarousel } from "@/components/BrandCarousel";
import { TrendingProjects } from "@/components/TrendingProjects";
import { ExclusiveLaunches } from "@/components/ExclusiveLaunches";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Awards } from "@/components/Awards";
import { InvestmentCTA } from "@/components/InvestmentCTA";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { fetchAreas, fetchProperties } from "@/lib/api";
import { InquiryPopup } from "@/components/InquiryPopup";

export default async function Home() {
  const [areas, properties] = await Promise.all([
    fetchAreas(5),
    fetchProperties(6)
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InquiryPopup />
      <Hero />
      <div className="relative z-10 bg-white">
        <PopularAreas areas={areas} />
        <BrandCarousel />
        <TrendingProjects properties={properties} />
        <ExclusiveLaunches />
        <AboutSection />
        <WhyChooseUs />
        <Testimonials />
        <Awards />
        <InvestmentCTA />
        <LeadForm />
      </div>
      <Footer />
    </main>
  );
}
