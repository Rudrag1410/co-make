"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import {
  Star,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import CountUp from "react-countup";

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
];

export function Hero() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-stat", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-emerald-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
          alt="Dubai Skyline"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-md border border-gold/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-[9px] font-bold uppercase tracking-widest">
              Exclusive Luxury Collection 2024
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-5"
          >
            Discover Dubai&apos;s Most <br />
            <span className="text-gold italic">Exclusive</span> Properties
          </h1>

          <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-10 font-medium leading-relaxed tracking-wide">
            Premium villas, waterfront residences, and high ROI investment
            opportunities in Dubai&apos;s most prestigious communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl mx-auto mb-16 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden">
              {/* Image Thumbnail */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Featured Property"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content */}
              <div className="ml-6 text-left flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-gold text-[9px] font-bold uppercase tracking-[0.2em]">
                    Signature Collection
                  </span>
                </div>
                <h3 className="text-white text-lg md:text-xl font-serif font-bold mb-1 leading-tight">
                  The Royal Atlantis <br />
                  <span className="text-white/60 text-sm italic">
                    Penthouses
                  </span>
                </h3>
                <div className="flex items-center text-white/40 space-x-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] font-medium tracking-wide">
                    Palm Jumeirah • Starting AED 25M
                  </span>
                </div>
              </div>

              {/* View Gallery Button */}
              <div className="flex-shrink-0 ml-4">
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="flex flex-col items-center justify-center space-y-1 group/btn"
                >
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover/btn:bg-gold group-hover/btn:text-emerald-950 transition-all duration-500">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover/btn:text-gold transition-colors">
                    Gallery
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto opacity-80">
            {[
              { label: "Sales Volume", value: 10, suffix: "B+", prefix: "AED" },
              { label: "Happy Investors", value: 5000, suffix: "+" },
              { label: "Active Listings", value: 1200, suffix: "+" },
              { label: "ROI Average", value: 8, suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="hero-stat text-center">
                <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-0.5">
                  {stat.prefix} <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </h3>
                <p className="text-white/40 text-[8px] uppercase font-bold tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Immersive Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-emerald-950/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 z-[110] text-white/50 hover:text-gold transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrentImg((prev) =>
                  prev === 0 ? propertyImages.length - 1 : prev - 1,
                )
              }
              className="absolute left-4 md:left-10 z-[110] p-4 text-white/30 hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={() =>
                setCurrentImg((prev) =>
                  prev === propertyImages.length - 1 ? 0 : prev + 1,
                )
              }
              className="absolute right-4 md:right-10 z-[110] p-4 text-white/30 hover:text-gold transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Slider */}
            <div className="relative w-full max-w-6xl px-4 md:px-20 h-[70vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImg}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10"
                >
                  <Image
                    src={propertyImages[currentImg]}
                    alt={`Property Image ${currentImg + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Image Counter Overlay */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                      {currentImg + 1} / {propertyImages.length}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Preview Row */}
            <div className="absolute bottom-10 flex space-x-3 px-6 overflow-x-auto max-w-full">
              {propertyImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImg === idx
                      ? "border-gold scale-110"
                      : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${idx}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
