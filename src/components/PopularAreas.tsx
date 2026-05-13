"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Area, slugify } from "@/lib/api";

export function PopularAreas({ areas = [] }: { areas?: Area[] }) {
  const displayAreas = (areas || []).slice(0, 5);

  return (
    <section className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 space-y-3 md:space-y-0">
          <div>
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-[8px] mb-2">
              Prestigious Locations
            </p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-emerald-950 leading-tight">
              Explore Dubai&apos;s Most <br />
              <span className="italic text-gold">Elite</span> Neighborhoods
            </h2>
          </div>
          <Link
            href="/areas"
            className="group flex items-center space-x-2 text-emerald-950 font-bold"
          >
            <span className="border-b border-gold pb-0.5 text-[9px] uppercase tracking-widest group-hover:pr-4 transition-all">
              VIEW ALL AREAS
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-auto md:h-[600px]">
          {displayAreas[0] && (
            <AreaCard area={displayAreas[0]} className="md:col-span-8" />
          )}
          {displayAreas[1] && (
            <AreaCard area={displayAreas[1]} className="md:col-span-4" />
          )}
          {displayAreas[2] && (
            <AreaCard area={displayAreas[2]} className="md:col-span-4" />
          )}
          {displayAreas[3] && (
            <AreaCard area={displayAreas[3]} className="md:col-span-4" />
          )}
          {displayAreas[4] && (
            <AreaCard area={displayAreas[4]} className="md:col-span-4" />
          )}
        </div>
      </div>
    </section>
  );
}

function AreaCard({ area, className }: { area: Area; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-sm min-h-[250px]",
        className,
      )}
    >
      <Link href={`/areas/${slugify(area.title)}?id=${area._id}`}>
        <Image
          src={area.mainImage}
          alt={area.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-lg md:text-xl font-serif text-white font-bold mb-1.5 transition-transform group-hover:-translate-y-1">
            {area.title}
          </h3>
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            <span className="text-white text-[8px] font-bold uppercase tracking-widest border-b border-gold pb-0.5">
              Explore
            </span>
            <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-emerald-950">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
