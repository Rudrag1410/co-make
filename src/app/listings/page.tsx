import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { fetchProperties } from "@/lib/api";
import { PropertyCard } from "@/components/PropertyCard";

export default async function ListingsPage(props: { 
  searchParams: Promise<{ category?: string }> 
}) {
  const searchParams = await props.searchParams;
  const category = searchParams.category;
  
  const allProperties = await fetchProperties(100);
  
  const properties = category 
    ? allProperties.filter(p => {
        const cat = category.toLowerCase();
        const title = p.title?.toLowerCase() || "";
        const desc = p.description?.toLowerCase() || "";
        // Check title, description and also common category names
        return title.includes(cat) || desc.includes(cat);
      })
    : allProperties;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header - Removed pt-24 gap and reduced font sizes */}
      <section className="bg-emerald-950 pt-28 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[9px] mb-4">
            Curated Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            Exclusive <span className="italic text-gold">Listings</span>
          </h1>
          <p className="text-white/60 text-xs max-w-xl mx-auto uppercase tracking-[0.15em] font-medium leading-relaxed">
            Handpicked Premium Properties in Dubai&apos;s Most Coveted Locations
          </p>
        </div>
      </section>

      {/* Results Section - Reduced padding */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-4 border-b border-emerald-950/5">
            <p className="text-emerald-950/40 text-[9px] font-bold uppercase tracking-widest">
              {properties.length} Exceptional Projects
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-emerald-950 text-[9px] font-bold uppercase tracking-widest border-b-2 border-gold cursor-pointer">All Projects</span>
              <span className="text-emerald-950/30 text-[9px] font-bold uppercase tracking-widest hover:text-emerald-950 cursor-pointer transition-colors">Off-Plan</span>
              <span className="text-emerald-950/30 text-[9px] font-bold uppercase tracking-widest hover:text-emerald-950 cursor-pointer transition-colors">Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
          
          {properties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-emerald-950/40 font-serif text-xl italic">No properties found at this moment.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
