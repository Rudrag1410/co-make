import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-emerald-950 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-emerald-950/60 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Us" 
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            Contact <span className="italic text-gold">Us</span>
          </h1>
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[9px]">
            Your Private Consultation Awaits
          </p>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </main>
  );
}
