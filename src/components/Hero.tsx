"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Building, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";

export function Hero() {
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

      gsap.from(".hero-search", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
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

          <div className="hero-search w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-xl p-1 rounded-2xl md:rounded-full border border-white/10 shadow-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              <div className="flex items-center px-6 py-2 space-x-4 border-b md:border-b-0 md:border-r border-white/5">
                <MapPin className="text-gold w-3.5 h-3.5" />
                <div className="text-left">
                  <p className="text-white/30 text-[8px] uppercase font-bold tracking-widest">Location</p>
                  <p className="text-white text-[10px] font-bold">Downtown Dubai</p>
                </div>
              </div>
              <div className="flex items-center px-6 py-2 space-x-4 border-b md:border-b-0 md:border-r border-white/5">
                <Building className="text-gold w-3.5 h-3.5" />
                <div className="text-left">
                  <p className="text-white/30 text-[8px] uppercase font-bold tracking-widest">Property Type</p>
                  <p className="text-white text-[10px] font-bold">Luxury Villa</p>
                </div>
              </div>
              <div className="flex items-center px-6 py-2 space-x-4 border-b md:border-b-0 md:border-r border-white/5">
                <DollarSign className="text-gold w-3.5 h-3.5" />
                <div className="text-left">
                  <p className="text-white/30 text-[8px] uppercase font-bold tracking-widest">Budget</p>
                  <p className="text-white text-[10px] font-bold">$2M - $10M</p>
                </div>
              </div>
              <div className="p-0.5">
                <Link href="/listings" className="block w-full h-full">
                  <Button className="w-full h-full bg-gold hover:bg-gold/90 text-emerald-950 font-bold rounded-full py-2.5 text-[9px] tracking-widest group">
                    SEARCH
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

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
    </section>
  );
}
