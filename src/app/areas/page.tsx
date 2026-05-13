import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { fetchAreas } from "@/lib/api";
import { AreasListing } from "@/components/AreasListing";

export default async function AreasPage() {
  const areas = await fetchAreas(30);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Removed gap, added bg image */}
      <section className="relative pt-28 pb-16 bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-emerald-950/60 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[9px] mb-3">
            Explore the City
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-white font-bold mb-4">
            Dubai&apos;s Most <span className="italic text-gold">Prestigious</span> Areas
          </h1>
          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto uppercase tracking-widest font-medium leading-relaxed">
            From waterfront masterpieces to serene green communities, discover the neighborhood 
            that perfectly matches your luxury lifestyle.
          </p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <AreasListing areas={areas} />
      </div>

      <Footer />
    </main>
  );
}
