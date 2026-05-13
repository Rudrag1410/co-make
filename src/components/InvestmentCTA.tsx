"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, ShieldCheck, Globe } from "lucide-react";

export function InvestmentCTA() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-emerald-950/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop"
          alt="Dubai Skyline Night"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-full mb-8"
          >
            <TrendingUp className="text-gold w-4 h-4" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              High Yield Opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-8"
          >
            Invest In Dubai&apos;s Fastest Growing <br />
            <span className="italic text-gold">Luxury Market</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Secure your future with premium assets, high rental yields, and
            exclusive Golden Visa benefits. Your gateway to elite living starts
            here.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, label: "8-10% ROI", sub: "Estimated Yield" },
              {
                icon: ShieldCheck,
                label: "Secure Assets",
                sub: "Vetted Developers",
              },
              { icon: Globe, label: "Golden Visa", sub: "Residency Support" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <item.icon className="text-gold w-8 h-8 mb-4" />
                <h4 className="text-white font-bold text-lg mb-1">
                  {item.label}
                </h4>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-gold hover:bg-gold/90 text-emerald-950 font-bold rounded-full px-8 py-6 h-auto tracking-widest text-xs w-full sm:w-auto">
                GET INVESTOR GUIDE
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-bold rounded-full px-8 py-6 h-auto tracking-widest text-xs w-full sm:w-auto">
              WHATSAPP US
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
