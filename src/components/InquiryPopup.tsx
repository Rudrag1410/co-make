"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasSeen(true);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [hasSeen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            {/* Header */}
            <div className="bg-slate-950 p-6 text-center relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-serif text-2xl font-bold mb-1 leading-tight">
                Get a call within <br/> few seconds 📞
              </h3>
              <p className="text-gold text-[10px] uppercase tracking-widest font-bold mt-2">
                Fast & Direct Assistance
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6">
              <p className="text-slate-600 text-sm text-center mb-6">
                Leave your number below and we will call you right away!
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-slate-950 font-bold rounded-xl py-6 tracking-widest text-[10px] uppercase mt-2 group">
                  REQUEST CALLBACK
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="text-center text-slate-400 text-[9px] mt-4">
                We respect your privacy. No spam.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
