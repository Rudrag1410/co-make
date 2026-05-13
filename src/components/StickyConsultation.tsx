"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyConsultation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 right-8 z-[100] hidden md:block"
    >
      <Button className="bg-gold hover:bg-gold/90 text-emerald-950 font-bold rounded-full px-6 py-4 h-auto shadow-2xl flex items-center space-x-3 group transition-all hover:scale-105 active:scale-95">
        <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div className="text-left">
          <p className="text-[9px] uppercase font-bold tracking-widest opacity-70 leading-none mb-1">Expert Advice</p>
          <p className="text-xs font-bold leading-none">FREE CONSULTATION</p>
        </div>
      </Button>
    </motion.div>
  );
}
