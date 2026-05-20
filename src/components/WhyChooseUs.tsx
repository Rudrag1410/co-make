"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Landmark, HeartHandshake, Briefcase, BarChart4 } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "Every property in our portfolio is rigorously vetted for authenticity.",
  },
  {
    icon: Trophy,
    title: "Award Winning",
    desc: "Recognized as Dubai's leading luxury broker for 5 consecutive years.",
  },
  {
    icon: Landmark,
    title: "Investment Experts",
    desc: "Specialized advisors for high-yield off-plan and secondary markets.",
  },
  {
    icon: HeartHandshake,
    title: "Golden Visa Support",
    desc: "Comprehensive assistance for property-based residency applications.",
  },
  {
    icon: Briefcase,
    title: "Property Management",
    desc: "Hassle-free management for local and international landlords.",
  },
  {
    icon: BarChart4,
    title: "Market Insights",
    desc: "Data-driven advice to maximize your real estate ROI.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-full mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-[9px]">
              The Comake Homes Advantage
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-slate-950"
          >
            Why Discerning Investors <br />
            <span className="italic text-gold">Choose</span> Our Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-950/5 border border-slate-950/5 group transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950/5 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-slate-950 transition-colors duration-500">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950 mb-3">{reason.title}</h3>
              <p className="text-slate-950/60 text-xs leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
