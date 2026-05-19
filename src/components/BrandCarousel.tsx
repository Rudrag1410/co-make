"use client";

import React from "react";
import { motion } from "framer-motion";

// High-fidelity, hand-crafted vector SVG definitions for Dubai's top developers
// These render instantly in 0ms, are perfectly responsive, and are immune to CORS/hotlink blocks!
const DEVELOPERS_ROW_1 = [
  {
    name: "Emaar",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          className="font-sans font-extrabold tracking-[0.3em] text-[15px]"
        >
          EMAAR
        </text>
        <path
          d="M30 30 h80"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle cx="70" cy="30" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Nakheel",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized Abstract Palm Arc (Nakheel's Signature Icon) */}
        <path
          d="M30 32 C 45 10, 60 10, 65 20 C 70 10, 85 10, 100 32"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <text
          x="65%"
          y="62%"
          textAnchor="middle"
          className="font-serif font-bold tracking-[0.1em] text-[13px]"
        >
          NAKHEEL
        </text>
      </svg>
    ),
  },
  {
    name: "Damac",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          className="font-sans font-black tracking-[0.35em] text-[18px]"
        >
          DAMAC
        </text>
      </svg>
    ),
  },
  {
    name: "Meraas",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          className="font-sans font-bold tracking-[0.25em] text-[15px]"
        >
          MERAAS
        </text>
        <path
          d="M15 12 L125 12"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    name: "Majid Al Futtaim",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          className="font-sans font-extrabold tracking-[0.18em] text-[11px]"
        >
          MAJID AL FUTTAIM
        </text>
        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          className="font-sans font-medium tracking-[0.35em] text-[8px] opacity-60"
        >
          M A F
        </text>
      </svg>
    ),
  },
  {
    name: "Dubai Properties",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          className="font-serif font-extrabold tracking-[0.15em] text-[12px] italic"
        >
          DUBAI PROPERTIES
        </text>
        <path
          d="M20 28 L120 28"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
];

const DEVELOPERS_ROW_2 = [
  {
    name: "Danube",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          className="font-sans font-black italic tracking-[0.22em] text-[19px]"
        >
          DANUBE
        </text>
      </svg>
    ),
  },
  {
    name: "Aldar",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Geometric Accent Circle */}
        <circle
          cx="28"
          cy="20"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
        <text
          x="68%"
          y="60%"
          textAnchor="middle"
          className="font-sans font-extrabold tracking-[0.3em] text-[16px]"
        >
          ALDAR
        </text>
      </svg>
    ),
  },
  {
    name: "Omniyat",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          className="font-serif font-light tracking-[0.35em] text-[14px]"
        >
          OMNIYAT
        </text>
      </svg>
    ),
  },
  {
    name: "Dar Al Arkan",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          className="font-sans font-bold tracking-[0.2em] text-[11px]"
        >
          DAR AL ARKAN
        </text>
      </svg>
    ),
  },
  {
    name: "Sobha",
    svg: (
      <svg
        viewBox="0 0 140 40"
        className="w-full h-full text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          className="font-serif font-bold tracking-[0.25em] text-[15px]"
        >
          SOBHA
        </text>
        <path
          d="M40 28 h60"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

export function BrandCarousel() {
  // Double-concatenate arrays to ensure mathematically seamless infinite scrolling
  const row1Items = [
    ...DEVELOPERS_ROW_1,
    ...DEVELOPERS_ROW_1,
    ...DEVELOPERS_ROW_1,
  ];
  const row2Items = [
    ...DEVELOPERS_ROW_2,
    ...DEVELOPERS_ROW_2,
    ...DEVELOPERS_ROW_2,
  ];

  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden relative border-b border-gold/10">
      {/* Dynamic luxury gold background glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[250px] bg-slate-900/50 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gold font-bold uppercase tracking-[0.25em] text-[10px] mb-3">
            Authorized Partners
          </p>
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 tracking-tight">
            Working with Dubai&apos;s{" "}
            <span className="italic text-gold">Elite</span> Developers
          </h2>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed">
            Direct VIP access and priority booking allocation across the
            UAE&apos;s most prestigious real estate developers.
          </p>
        </motion.div>
      </div>

      {/* Row 1: Scrolling Left */}
      <div className="relative w-full overflow-hidden py-4 flex select-none">
        {/* Shadow Overlay Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-6 w-max">
          {row1Items.map((dev, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center w-40 h-20 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group cursor-default shadow-lg"
            >
              <div className="relative w-32 h-12 transition-all duration-300 filter brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 flex items-center justify-center">
                {dev.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="relative w-full overflow-hidden py-4 flex select-none">
        {/* Shadow Overlay Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 w-max">
          {row2Items.map((dev, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center w-40 h-20 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group cursor-default shadow-lg"
            >
              <div className="relative w-32 h-12 transition-all duration-300 filter brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 flex items-center justify-center">
                {dev.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
