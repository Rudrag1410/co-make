"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, TrendingUp, Globe, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Area, Property } from "@/lib/api";

export function AreaDetailContent({
  area,
  properties,
}: {
  area: Area;
  properties: Property[];
}) {
  // Use area stats if available, otherwise hide the bar
  const hasStats = area.stats && area.stats.length > 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={area.mainImage}
            alt={area.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Premier Dubai Neighborhood
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif text-white font-bold mb-6"
          >
            {area.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 text-white/80"
          >
            <MapPin className="text-gold w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              Dubai, UAE
            </span>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      {hasStats && (
        <section className="relative z-20 -mt-12">
          <div className="container mx-auto px-6">
            <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border border-emerald-950/5 grid grid-cols-2 md:grid-cols-4 gap-6">
              {area.stats?.map((stat, idx: number) => (
                <div
                  key={idx}
                  className="text-center border-r last:border-0 border-emerald-950/10 px-2"
                >
                  <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-1">
                    {stat.value}
                    {stat.suffix}
                  </h3>
                  <p className="text-emerald-950/40 text-[9px] uppercase font-bold tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className={hasStats ? "py-16" : "py-24"}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
              >
                Area Overview
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-6"
              >
                About <span className="italic text-gold">{area.title}</span>
              </motion.h2>
              <div
                className="text-emerald-950/80 text-base leading-relaxed mb-8 space-y-4"
                dangerouslySetInnerHTML={{ __html: area.aboutArea }}
              />
              <Link href="/contact">
                <Button className="bg-gold hover:bg-gold/90 text-emerald-950 font-bold rounded-full px-8 py-6 h-auto tracking-widest text-[10px] shadow-lg shadow-gold/20 transition-all hover:scale-105 active:scale-95">
                  REQUEST AREA GUIDE
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl h-[450px]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={area.mainImage}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gold to-[#b38a34] p-7 rounded-[2rem] shadow-[0_20px_50px_rgba(179,138,52,0.3)] border border-white/20 hidden md:block">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/10 flex items-center justify-center text-emerald-950 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-emerald-950 font-serif font-bold text-xl leading-none mb-1.5">
                  Elite Choice
                </p>
                <p className="text-emerald-950/60 text-[8px] font-bold uppercase tracking-[0.2em]">
                  Market Status
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties in this Area */}
      {properties.length > 0 && (
        <section className="py-16 bg-offwhite">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <p className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
                Featured Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
                Latest Listings in{" "}
                <span className="italic text-gold">{area.title}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, idx) => (
                <motion.div
                  key={property._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-950/5 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.mainImage}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-gold text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {property.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-emerald-950 mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-emerald-950/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                      {property.developer.name}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex flex-col">
                        <span className="text-emerald-950/40 text-[8px] uppercase font-bold tracking-widest mb-1">
                          Starting Price
                        </span>
                        <span className="text-emerald-950 text-xs font-bold">
                          AED{" "}
                          {property.startingPrice > 0
                            ? property.startingPrice.toLocaleString()
                            : "Contact Us"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-emerald-950/40 text-[8px] uppercase font-bold tracking-widest mb-1">
                          ROI Est.
                        </span>
                        <span className="text-gold text-xs font-bold">
                          {property.ROI.min}% - {property.ROI.max}%
                        </span>
                      </div>
                    </div>
                    <Button className="w-full bg-transparent border border-emerald-950/10 text-emerald-950 hover:bg-gold hover:border-gold hover:text-emerald-950 transition-all rounded-full py-4 text-[9px] font-bold uppercase tracking-widest">
                      VIEW PROJECT
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose This Area - Only show if whyAreaName exists */}
      {area.whyAreaName && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-6">
                Why Discerning Investors{" "}
                <span className="italic text-gold">Choose</span> {area.title}
              </h2>
              <p className="text-emerald-950/60 text-sm leading-relaxed">
                {area.whyAreaName}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Strategic Location",
                  desc: "Easily accessible from major highways and business districts.",
                },
                {
                  icon: Building2,
                  title: "Modern Design",
                  desc: "Contemporary architecture and thoughtfully planned spaces.",
                },
                {
                  icon: TrendingUp,
                  title: "Investment Yield",
                  desc: "Consistently strong rental returns and capital appreciation.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-offwhite p-8 rounded-2xl border border-emerald-950/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/5 flex items-center justify-center text-gold mx-auto mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-emerald-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-emerald-950/60 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
