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
    <section className="py-12 bg-emerald-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
            >
              Industry Excellence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
            >
              A Legacy of <span className="italic text-gold">Success</span> & Recognition
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-base mb-8 leading-relaxed"
            >
              Our commitment to excellence has earned us top-tier partnerships 
              with Dubai&apos;s most prestigious developers and numerous industry accolades.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest mb-1">{award.year}</h4>
                <p className="text-white font-serif font-bold text-base leading-tight">{award.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
