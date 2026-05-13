"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/lib/api";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/listings/${property._id}`}>
        <div className="relative h-[320px] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
          <Image
            src={property.mainImage}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />

          <div className="absolute top-4 left-4">
            <span className="bg-emerald-950/80 backdrop-blur-md text-gold text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {property.category}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-gold text-emerald-950 text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center space-x-1">
              <TrendingUp className="w-3 h-3" />
              <span>ROI {property.ROI.min}%+</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-2 text-white/60 mb-1">
              <MapPin className="w-3 h-3 text-gold" />
              <span className="text-[9px] font-bold uppercase tracking-widest">
                {property.location.title}
              </span>
            </div>
            <h3 className="text-xl font-serif text-white font-bold mb-2 group-hover:text-gold transition-colors">
              {property.title}
            </h3>
          </div>
        </div>
      </Link>

      <div className="px-2">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-emerald-950/5">
          <div>
            <p className="text-emerald-950/40 text-[8px] font-bold uppercase tracking-widest mb-1">
              Starting Price
            </p>
            <p className="text-emerald-950 text-sm font-bold">
              AED{" "}
              {property.startingPrice > 0
                ? property.startingPrice.toLocaleString()
                : "Contact Us"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-emerald-950/40 text-[8px] font-bold uppercase tracking-widest mb-1">
              Handover
            </p>
            <p className="text-emerald-950 text-sm font-bold">
              {property.handoverYear}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-emerald-950/5 p-1">
              <Image
                src={property.developer.logo}
                alt={property.developer.name}
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-emerald-950/60 text-[9px] font-bold uppercase tracking-widest">
              {property.developer.name}
            </span>
          </div>
          <Link
            href={`/listings/${property._id}`}
            className="flex items-center space-x-2 text-emerald-950 group/btn"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest group-hover/btn:mr-2 transition-all">
              Discover
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
