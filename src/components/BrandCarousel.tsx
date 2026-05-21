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

type Developer = (typeof DEVELOPERS_ROW_1)[number];

function BrandCard({ dev }: { dev: Developer }) {
  return (
    <div className="inline-flex shrink-0 items-center justify-center w-[7.25rem] h-[3.25rem] px-3 py-2 sm:w-36 sm:h-[4.25rem] sm:px-4 sm:py-3 md:w-40 md:h-20 md:px-6 md:py-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group cursor-default shadow-lg">
      <div className="relative w-[5.5rem] h-9 sm:w-28 sm:h-10 md:w-32 md:h-12 transition-all duration-300 filter brightness-0 invert opacity-50 sm:opacity-40 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 flex items-center justify-center">
        {dev.svg}
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Developer[];
  direction: "left" | "right";
}) {
  return (
    <div className="relative w-full overflow-hidden py-2 sm:py-3 flex select-none">
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

      <div
        className={`flex whitespace-nowrap gap-3 sm:gap-5 md:gap-6 w-max ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {items.map((dev, idx) => (
          <BrandCard key={`${dev.name}-${idx}`} dev={dev} />
        ))}
      </div>
    </div>
  );
}

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
    <section className="py-12 sm:py-16 md:py-20 bg-slate-950 text-white overflow-hidden relative border-b border-gold/10">
      {/* Dynamic luxury gold background glows */}
      <div className="absolute top-0 left-1/3 w-[280px] sm:w-[500px] h-[180px] sm:h-[300px] bg-gold/5 rounded-full filter blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[220px] sm:w-[400px] h-[140px] sm:h-[250px] bg-slate-900/50 rounded-full filter blur-[70px] sm:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-10 md:mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto w-full"
        >
          <p className="text-gold font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[9px] sm:text-[10px] mb-2 sm:mb-3">
            Authorized Partners
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold mb-3 sm:mb-4 tracking-tight leading-snug">
            Working with Dubai&apos;s{" "}
            <span className="italic text-gold">Elite</span> Developers
          </h2>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed px-0.5">
            Direct VIP access and priority booking allocation across the
            UAE&apos;s most prestigious real estate developers.
          </p>
        </motion.div>
      </div>

      <div className="space-y-1 sm:space-y-2">
        <MarqueeRow items={row1Items} direction="left" />
        <MarqueeRow items={row2Items} direction="right" />
      </div>
    </section>
  );
}
