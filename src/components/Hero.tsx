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

const propertyImages = ["/images/greenz_danube_payment plan.jpeg"];

export function Hero() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };
    if (isGalleryOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Widescreen cinematic lens zoom out on mount
      gsap.fromTo(
        ".hero-video-bg",
        { scale: 1.25, filter: "brightness(0.5) contrast(1.1)" },
        {
          scale: 1.02,
          filter: "brightness(0.75) contrast(1)",
          duration: 3.5,
          ease: "power2.out",
        },
      );

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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950"
    >
      {/* Background with cinematic local MP4 video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        {/* Invisible Click Absorber Layer to prevent video interaction without darkening the video */}
        <div
          className="absolute inset-0 z-10"
          style={{ pointerEvents: "auto" }}
        />

        {/* Cinematic bottom shadow only - keeps top completely transparent for header glass blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(2,6,23,0.4)_100%)] z-10 pointer-events-none" />

        {/* Native, high-performance HTML5 Video Element (Absolutely NO controls, loops natively, and plays instantly!) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video-bg absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 transition-transform duration-700"
          style={{ pointerEvents: "none", transform: "scale(1.02)" }}
        >
          <source src="/video/dubai_best_moment.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/15 via-slate-950/70 to-gold/15 backdrop-blur-md border border-gold/30 px-5 py-2 rounded-full mb-6 shadow-xl"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-[9px] font-extrabold uppercase tracking-[0.25em] drop-shadow-md">
              Exclusive Luxury Collection 2024
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-5 drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
          >
            Discover Dubai&apos;s Most <br />
            <span className="text-gold italic drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
              Exclusive
            </span>{" "}
            Properties
          </h1>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10 font-medium leading-relaxed tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Premium villas, waterfront residences, and high ROI investment
            opportunities in Dubai&apos;s most prestigious communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => window.dispatchEvent(new Event("open-inquiry-popup"))}
            className="max-w-xl mx-auto mb-16 relative group cursor-pointer"
          >
            {/* Glowing gold ambient outline background blur */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-700" />

            {/* Main Interactive Luxury Glassmorphic Container */}
            <div className="relative flex items-center bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:border-gold/45 group-hover:bg-slate-950/70 group-hover:shadow-[0_25px_60px_rgba(200,155,60,0.22)]">
              {/* Autoplay Video Thumbnail for Greenz */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 border border-gold/20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                  <source src="/video/greenz_danube.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
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
                  Greenz by Danube <br />
                  <span className="text-white/60 text-sm italic">
                    Premium Villas & Townhouses
                  </span>
                </h3>
                <div className="flex items-center text-white/40 space-x-2">
                  <MapPin className="w-3 h-3 text-gold" />
                  <span className="text-[10px] font-medium tracking-wide">
                    Academic City, Dubai • Starting AED 3.5M
                  </span>
                </div>
              </div>

              {/* View Gallery Button */}
              <div className="flex-shrink-0 ml-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsGalleryOpen(true);
                  }}
                  className="flex flex-col items-center justify-center space-y-1 group/btn"
                >
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover/btn:bg-gold group-hover/btn:text-slate-950 transition-all duration-500">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover/btn:text-gold transition-colors">
                    Gallery
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative max-w-3xl mx-auto mt-6 group"
          >
            {/* Ambient gold glow under the dashboard capsule */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/15 via-gold/5 to-gold/15 rounded-2xl blur opacity-25 group-hover:opacity-45 transition duration-700" />

            {/* Glassmorphic Capsule Container */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950/45 backdrop-blur-xl border border-white/10 border-t-white/20 px-8 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_25px_60px_rgba(200,155,60,0.12)]">
              {[
                {
                  label: "Sales Volume",
                  value: 10,
                  suffix: "B+",
                  prefix: "AED ",
                },
                { label: "Happy Investors", value: 5000, suffix: "+" },
                { label: "Active Listings", value: 1200, suffix: "+" },
                { label: "ROI Average", value: 8, suffix: "%" },
              ].map((stat, idx) => (
                <div key={idx} className="hero-stat relative text-center py-1">
                  <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-0.5 tracking-tight">
                    {stat.prefix}
                    <CountUp end={stat.value} duration={2} />
                    {stat.suffix}
                  </h3>
                  <p className="text-white/50 text-[8px] uppercase font-bold tracking-[0.18em]">
                    {stat.label}
                  </p>

                  {/* Vertical Golden Thread Divider in Desktop */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Immersive Widescreen Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 z-[130] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-lg border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slideshow Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[16/10] max-h-[80vh] flex items-center justify-center"
            >
              {/* Left Arrow */}
              {propertyImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImg((prev) =>
                      prev === 0 ? propertyImages.length - 1 : prev - 1,
                    );
                  }}
                  className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/10 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Right Arrow */}
              {propertyImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImg((prev) =>
                      prev === propertyImages.length - 1 ? 0 : prev + 1,
                    );
                  }}
                  className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/10 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Active Image or Video Slide - Set to object-contain to prevent any cropping */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                {propertyImages[currentImg].endsWith(".mp4") ? (
                  <video
                    src={propertyImages[currentImg]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={propertyImages[currentImg]}
                    alt={`Property Image ${currentImg + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Image Counter Indicator Footer */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs font-semibold tracking-widest uppercase shadow-md">
                {currentImg + 1} / {propertyImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
