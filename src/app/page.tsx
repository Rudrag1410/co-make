import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PopularAreas } from "@/components/PopularAreas";
import { TrendingProjects } from "@/components/TrendingProjects";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Awards } from "@/components/Awards";
import { InvestmentCTA } from "@/components/InvestmentCTA";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { fetchAreas, fetchProperties } from "@/lib/api";

export default async function Home() {
  const [areas, properties] = await Promise.all([
    fetchAreas(5),
    fetchProperties(6)
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-white">
        <PopularAreas areas={areas} />
        <TrendingProjects properties={properties} />
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
