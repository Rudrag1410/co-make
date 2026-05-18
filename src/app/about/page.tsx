import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Removed gap, added bg image */}
      <section className="relative pt-28 pb-16 bg-slate-950 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=100&w=3840&auto=format&fit=crop" 
            alt="About Comake Homes" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[9px] mb-3">
            The Pinnacle of Luxury
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            Our <span className="italic text-gold">Vision</span>
          </h1>
          <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.3em]">
            Redefining Dubai&apos;s Real Estate Landscape
          </p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <AboutSection />
        <WhyChooseUs />
      </div>
      <Footer />
    </main>
  );
}
