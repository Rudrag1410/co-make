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
                <div className="relative h-[420px] sm:h-[480px] lg:h-[500px]">
                  <Image
                    src="/images/about-image.jpeg"
                    alt="Abdul Wali Khaliq"
                    fill
                    className="object-cover object-[88%_32%] sm:object-[82%_28%] lg:object-center"
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
              className="text-slate-950/70 text-base mb-8 leading-relaxed font-light whitespace-pre-line"
            >
              Driven by a vision beyond my years, I, Abdul Wali Khaliq, founded Comake Homes with the belief that real estate should represent more than transactions — it should embody legacy, exclusivity, and long-term value.
              Through unwavering dedication and ambition, Comake Homes was built to offer investors unparalleled access to off-market penthouses, waterfront villas, and strategically positioned high-yield assets. Our mission is to deliver not only exceptional growth opportunities, but investments defined by quality, prestige, and enduring returns.
              As a young CEO, I am committed to building a company that reflects vision, sophistication, and trust at every level.
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
