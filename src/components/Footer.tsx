import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/comake-home-logo.png"
                alt="Comake Homes"
                width={240}
                height={70}
                className="w-44 md:w-56 h-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs">
              Your Trusted Partner for Buying, Selling, and Leasing in DUBAI.
              Empowering smart decisions through expert local knowledge.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/comakehomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=971581161051&text=Hi%20there%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:Info@comakehomes.com"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Popular Areas
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Palm Jebel Ali", slug: "palm-jebel-ali-dubai" },
                { name: "Creek Harbour", slug: "dubai-creek-harbour" },
                { name: "Business Bay", slug: "business-bay" },
                { name: "Jumeira Bay", slug: "jumeira-bay" },
                { name: "Dubai Hills", slug: "dubai-hills-estate" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/areas/${item.slug}`}
                    className="text-white/60 hover:text-white text-xs transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Areas", href: "/areas" },
                { name: "Off-Plan Projects", href: "/listings" },
                { name: "List Your Property", href: "/contact" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-xs transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Office+No+517,+Al+Barsha+1+Building,+Al+Barsha,+Dubai,+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group cursor-pointer"
                >
                  <MapPin className="text-gold w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/60 text-xs group-hover:text-gold transition-colors">
                    Office No# 517, Al Barsha 1 Building, Al Barsha, Dubai, UAE
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+971581161051"
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <Phone className="text-gold w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/60 text-xs group-hover:text-gold transition-colors">
                    +971 58 116 1051
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@comakehomes.com"
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <Mail className="text-gold w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/60 text-xs group-hover:text-gold transition-colors">
                    Info@comakehomes.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">
            © 2024 COMAKE HOMES REAL ESTATE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-white/30 hover:text-white text-[9px] font-bold uppercase tracking-widest transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 hover:text-white text-[9px] font-bold uppercase tracking-widest transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
