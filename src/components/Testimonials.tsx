"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Alexander Volkov",
    role: "International Investor",
    content: "The expertise of the Comake Homes team is unparalleled. They found me a waterfront penthouse that exceeded all my expectations in terms of ROI and lifestyle.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Sarah Al-Maktoum",
    role: "Local Business Owner",
    content: "Seamless property management and a deep understanding of the Dubai market. They handle everything from tenant relations to maintenance with absolute professionalism.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "James Harrington",
    role: "Portfolio Manager",
    content: "Reliable, transparent, and always ahead of market trends. Their off-plan recommendations have consistently delivered double-digit capital appreciation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
          >
            Client Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-emerald-950"
          >
            Trusted by the World&apos;s <br />
            <span className="italic text-gold">Discerning</span> Investors
          </motion.h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          className="pb-12"
        >
          {TESTIMONIALS.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-offwhite p-8 rounded-3xl border border-emerald-950/5 h-full flex flex-col"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-3 -left-3 w-8 h-8 text-gold/10" />
                  <p className="text-emerald-950/70 text-sm italic leading-relaxed relative z-10">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="mt-auto flex items-center space-x-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold/20"
                  />
                  <div>
                    <h4 className="text-emerald-950 font-bold text-base">{t.name}</h4>
                    <p className="text-emerald-950/40 text-[9px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
