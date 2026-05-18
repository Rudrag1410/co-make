"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
                <div className="relative h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=100&w=3840&auto=format&fit=crop"
                    alt="Luxury Dubai Architecture"
                    fill
                    className="object-cover"
                  />
                </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-gold p-6 rounded-2xl shadow-2xl z-20 max-w-[240px]"
            >
              <p className="text-slate-950 font-bold text-3xl mb-1">10+</p>
              <p className="text-slate-950/70 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                Years of Excellence under CEO Abdul Wali Khaliq
              </p>
            </motion.div>
          </div>

          <div className="lg:pl-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
            >
              Our Vision
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold text-slate-950 mb-6"
            >
              Curating Dubai&apos;s Most <span className="italic text-gold">Exclusive</span> Addresses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-950/70 text-base mb-8 leading-relaxed font-light"
            >
              Under the visionary leadership of our CEO, Abdul Wali Khaliq, COMAKE HOMES has established itself as the premier advisory for ultra-luxury real estate in Dubai. We provide discerning global investors with unparalleled access to off-market penthouses, waterfront villas, and high-yield strategic assets, ensuring discretion and exceptional returns at every step.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Personalized Investment Strategy",
                "Deep Local Market Insights",
                "End-to-End Asset Management",
                "Exclusive Off-Plan Access",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                  <span className="text-slate-950 font-bold text-xs">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <Button className="bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-full px-8 py-5 h-auto tracking-widest text-xs transition-transform active:scale-95">
                  CONNECT WITH OUR EXPERTS
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
