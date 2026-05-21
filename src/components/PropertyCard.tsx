"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/lib/api";

export function PropertyCard({ property }: { property: Property }) {
  // Extract a clean description or build a beautiful default description if empty
  const description = property.description
    ? property.description.trim()
    : `Exclusive selection of premium apartments and luxury residences with state-of-the-art facilities.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group w-full select-none"
    >
      <div className="relative h-[430px] w-full rounded-[1.8rem] overflow-hidden shadow-[0_15px_35px_-15px_rgba(0,0,0,0.3)] border border-slate-950/5 bg-slate-950">
        {/* Main Background Image */}
        <Image
          src={property.mainImage}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-95" />

        {/* Floating Badges - Top Left */}
        <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
          <div className="w-12 h-12 bg-white rounded-full p-2 shadow-md flex items-center justify-center border border-slate-950/5 transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-[0_0_12px_rgba(200,155,60,0.25)] group-hover:scale-105">
            <Image
              src={property.developer.logo}
              alt={property.developer.name}
              width={32}
              height={32}
              className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Floating Badges - Top Right */}
        <div className="absolute top-4 right-4 z-10 flex flex-col items-end space-y-1.5">
          <span className="bg-slate-950/80 backdrop-blur-md text-white text-[8px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-white/10 shadow-lg">
            {property.category}
          </span>
          <div className="bg-gold/90 backdrop-blur-md text-slate-950 text-[8px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest flex items-center space-x-1 shadow-lg border border-gold/20">
            <TrendingUp className="w-3 h-3 shrink-0" />
            <span>ROI {property.ROI.min}%+</span>
          </div>
        </div>

        {/* Center Floating White Card Overlay at the bottom (Identical to reference screenshot) */}
        <div className="absolute bottom-4 left-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-[1.25rem] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/20 transition-all duration-500 group-hover:-translate-y-1.5 text-center flex flex-col items-center justify-center">
          {/* Title */}
          <h3 className="font-sans font-extrabold text-slate-900 text-[16px] tracking-tight leading-snug mb-2 w-full line-clamp-1">
            {property.title}
          </h3>

          {/* Subtitle Description */}
          <p className="font-sans text-[13px] text-slate-600 font-medium leading-relaxed mb-3 w-full line-clamp-2 max-w-[90%]">
            {description}
          </p>

          {/* Price */}
          <p className="font-sans text-[13px] font-bold text-slate-900 mb-4 w-full">
            {property.startingPrice > 0 ? (
              <>Starting from AED {property.startingPrice.toLocaleString("en-US")}</>
            ) : (
              "Price On Call"
            )}
          </p>

          {/* Gold Gradient CTA Button */}
          <Link href={`/listings/${property._id}`} className="w-full">
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-md">
              REGISTER YOUR INTEREST
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
