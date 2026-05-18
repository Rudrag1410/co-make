import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-950 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=100&w=3840&auto=format&fit=crop"
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

      {/* Career Corner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-950 mb-4">
            Join Our <span className="italic text-gold">Elite</span> Team
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            At Comake Homes, we are always looking for ambitious,
            high-performing individuals to join our prestigious real estate
            advisory team. If you have a passion for luxury properties and a
            drive for excellence, we want to hear from you.
          </p>
          <a
            href="mailto:careers@comakehomes.com"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-gold font-bold rounded-full px-8 py-4 tracking-widest text-xs uppercase transition-transform active:scale-95 group cursor-pointer"
          >
            Send us a mail
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
