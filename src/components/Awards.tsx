"use client";

import React from "react";
import { motion } from "framer-motion";

const AWARDS = [
  { name: "Emaar Platinum Partner", year: "2023", icon: "🏆" },
  { name: "Top Broker Award", year: "2022", icon: "🥇" },
  { name: "Damac Elite Partner", year: "2023", icon: "🎖️" },
  { name: "Sobha Realty Excellence", year: "2021", icon: "🌟" },
];

export function Awards() {
  return (
    <section className="py-12 sm:py-16 bg-slate-950 text-white overflow-hidden relative">
      {/* Elegant ambient light glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-900/40 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          <div className="max-w-xl w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-full mb-4 shadow-sm"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-[9px]">
                Industry Excellence
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6"
            >
              A Legacy of <span className="italic text-gold">Success</span> &
              Recognition
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-sm sm:text-base mb-0 lg:mb-8 leading-relaxed"
            >
              Our commitment to excellence has earned us top-tier partnerships
              with Dubai&apos;s most prestigious developers and numerous
              industry accolades.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto lg:mx-0 lg:w-auto lg:max-w-none">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl text-center hover:bg-white/10 hover:border-gold/30 transition-all duration-500 group min-w-0 lg:min-w-[160px] flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0"
              >
                <div className="text-2xl sm:text-3xl sm:mb-3 shrink-0 group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <div className="flex-1 min-w-0 text-left sm:text-center">
                  <h4 className="text-gold font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mb-0.5 sm:mb-1">
                    {award.year}
                  </h4>
                  <p className="text-white font-serif font-bold text-sm sm:text-base leading-snug break-words">
                    {award.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
