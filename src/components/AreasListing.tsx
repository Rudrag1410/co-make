"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Area, slugify } from "@/lib/api";

export function AreasListing({ areas = [] }: { areas?: Area[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(areas || []).map((area, idx) => (
            <motion.div
              key={area._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 10) * 0.05 }}
              className="group cursor-pointer"
            >
              <Link href={`/areas/${slugify(area.title)}?id=${area._id}`}>
                <div className="relative h-[350px] rounded-[2rem] overflow-hidden mb-4">
                  <Image 
                    src={area.mainImage} 
                    alt={area.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-serif text-white font-bold group-hover:text-gold transition-colors">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <p className="text-emerald-950/60 text-xs leading-relaxed mb-3 line-clamp-2">
                  {area.metaDescription || area.aboutArea}
                </p>
                <div className="flex items-center space-x-2 text-emerald-950 font-bold text-[10px] uppercase tracking-widest group-hover:text-gold transition-colors">
                  <span>Discover More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
