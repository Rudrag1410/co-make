"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/lib/api";

export function TrendingProjects({ properties = [] }: { properties?: Property[] }) {
  return (
    <section className="py-16 bg-white relative z-10 border-t border-emerald-950/5">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-[8px] mb-2">
              Handpicked Properties
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 leading-tight">
              Trending <span className="italic text-gold">Off-Plan</span> Projects
            </h2>
          </div>
          <Link href="/listings" className="text-emerald-950 font-bold text-[9px] uppercase tracking-widest border-b border-gold pb-1 hover:pr-3 transition-all">
            EXPLORE ALL
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {properties.map((project) => (
            <SwiperSlide key={project._id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/listings/${project._id}`}>
                  <div className="relative h-[340px] rounded-[1.5rem] overflow-hidden mb-4 shadow-sm">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-0.5 rounded-full shadow-sm">
                        <p className="text-emerald-950 text-[8px] font-bold uppercase tracking-widest">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center space-x-1.5 text-gold mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[8px] font-bold uppercase tracking-widest text-white/80">
                          {project.location.title}
                        </span>
                      </div>
                      <h3 className="text-lg font-serif text-white font-bold mb-2 group-hover:text-gold transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                        <div className="text-white">
                          <p className="text-xs font-bold">AED {project.startingPrice > 0 ? project.startingPrice.toLocaleString() : "Contact"}</p>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-emerald-950">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center space-x-2">
                    <Image src={project.developer.logo} alt={project.developer.name} width={20} height={20} className="w-5 h-5 object-contain grayscale opacity-60" />
                    <span className="text-emerald-950/40 text-[8px] font-bold uppercase tracking-widest">
                      {project.developer.name}
                    </span>
                  </div>
                  <span className="text-gold text-[9px] font-bold">ROI {project.ROI.min}%+</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
