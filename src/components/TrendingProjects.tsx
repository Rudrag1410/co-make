"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/lib/api";

export function TrendingProjects({ properties = [] }: { properties?: Property[] }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // If no properties are loaded, hide to maintain landing page cleanliness
  if (!properties || properties.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white relative z-10 border-t border-slate-950/5 overflow-hidden">
      {/* Decorative subtle ambient gold lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-1.5 text-gold mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <p className="font-bold uppercase tracking-[0.2em] text-[9px]">
                Handpicked Elite Collections
              </p>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-950 leading-tight">
              Top Trending <span className="italic text-gold">Projects</span>
            </h2>
          </div>

          {/* Navigation Controls and View All */}
          <div className="flex items-center space-x-4 self-start md:self-end">
            <Link 
              href="/listings" 
              className="text-slate-950 font-bold text-[9px] uppercase tracking-widest border-b border-gold pb-1.5 hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              EXPLORE ALL
            </Link>
            
            <div className="flex items-center space-x-2">
              {/* Unique custom swiper class triggers */}
              <button 
                ref={prevRef}
                className="swiper-prev-project w-9 h-9 rounded-full border border-slate-950/10 flex items-center justify-center text-slate-950 hover:bg-gold hover:border-gold hover:text-slate-950 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                ref={nextRef}
                className="swiper-next-project w-9 h-9 rounded-full border border-slate-950/10 flex items-center justify-center text-slate-950 hover:bg-gold hover:border-gold hover:text-slate-950 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: ".swiper-prev-project",
            nextEl: ".swiper-next-project",
          }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-12 !overflow-visible"
        >
          {properties.map((project) => {
            const description = project.description 
              ? project.description.trim() 
              : `Exclusive selection of premium apartments and luxury residences with state-of-the-art facilities.`;

            return (
              <SwiperSlide key={project._id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group w-full select-none"
                >
                  <div className="relative h-[430px] w-full rounded-[1.8rem] overflow-hidden shadow-[0_15px_35px_-15px_rgba(0,0,0,0.3)] border border-slate-950/5 bg-slate-950">
                    {/* Main Background Image */}
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-95" />

                    {/* Floating Badges - Top Left */}
                    <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                      <span className="bg-slate-950/80 backdrop-blur-md text-white text-[8px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-white/10 shadow-lg">
                        {project.category}
                      </span>
                      <div className="w-7 h-7 bg-white rounded-full p-1 shadow-md flex items-center justify-center border border-slate-950/5">
                        <Image 
                          src={project.developer.logo} 
                          alt={project.developer.name} 
                          width={16} 
                          height={16} 
                          className="object-contain w-full h-full grayscale opacity-75" 
                        />
                      </div>
                    </div>

                    {/* Floating ROI Tag - Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gold/90 backdrop-blur-md text-slate-950 text-[8px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest flex items-center space-x-1 shadow-lg border border-gold/20">
                        <TrendingUp className="w-3 h-3 shrink-0" />
                        <span>ROI {project.ROI.min}%+</span>
                      </div>
                    </div>

                    {/* Center Floating White Card Overlay at the bottom (Identical to reference screenshot) */}
                    <div className="absolute bottom-4 left-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-[1.25rem] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/20 transition-all duration-500 group-hover:-translate-y-1.5 text-center flex flex-col items-center justify-center">
                      {/* Title */}
                      <h3 className="font-sans font-extrabold text-slate-900 text-[16px] tracking-tight leading-snug mb-2 w-full line-clamp-1">
                        {project.title}
                      </h3>

                      {/* Subtitle Description */}
                      <p className="font-sans text-[13px] text-slate-600 font-medium leading-relaxed mb-3 w-full line-clamp-2 max-w-[90%]">
                        {description}
                      </p>

                      {/* Price */}
                      <p className="font-sans text-[13px] font-bold text-slate-900 mb-4 w-full">
                        {project.startingPrice > 0 ? (
                          <>Starting from AED {project.startingPrice.toLocaleString("en-US")}</>
                        ) : (
                          "Price On Call"
                        )}
                      </p>

                      {/* Gold Gradient CTA Button */}
                      <button
                        onClick={() => window.dispatchEvent(new Event("open-inquiry-popup"))}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer"
                      >
                        REGISTER YOUR INTEREST
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
