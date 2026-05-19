"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    title: "Property",
    href: "/listings",
    megaMenu: [
      {
        category: "Type",
        items: [
          { name: "Luxury Villas", href: "/listings?type=Villa" },
          { name: "Waterfront", href: "/listings?type=Waterfront" },
          { name: "Penthouses", href: "/listings?type=Penthouse" },
          { name: "Off Plan", href: "/listings?status=off-plan" },
        ],
      },
      {
        category: "Popular Areas",
        items: [
          { name: "Palm Jebel Ali", href: "/areas/palm-jebel-ali" },
          { name: "Creek Harbour", href: "/areas/dubai-creek-harbour" },
          { name: "Business Bay", href: "/areas/business-bay" },
          { name: "Downtown Dubai", href: "/areas/downtown-dubai" },
        ],
      },
    ],
  },
  { title: "Areas", href: "/areas" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Defer state update to the next frame to prevent synchronous cascading renders
    const frameId = requestAnimationFrame(() => {
      setMounted(true);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = pathname === "/";
  // Safe evaluation to ensure perfect transparency during SSR and hydration
  const showDarkBg = mounted ? isScrolled || !isHomePage : false;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showDarkBg
          ? "bg-slate-950/90 h-16 shadow-lg border-b border-white/5"
          : "bg-slate-950/20 border-b border-white/5 h-20",
      )}
      style={{
        backdropFilter: showDarkBg ? "blur(16px)" : "blur(12px)",
        WebkitBackdropFilter: showDarkBg ? "blur(16px)" : "blur(12px)",
      }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/comake-home-logo.png"
            alt="Comake Homes"
            width={220}
            height={64}
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 h-full">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.title}
              className="relative group flex items-center h-full"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="relative py-2 flex items-center text-white/90 hover:text-gold transition-colors font-semibold text-[11px] tracking-[0.15em] uppercase"
              >
                <span>{item.title}</span>
                {item.megaMenu && (
                  <ChevronDown className="ml-1 w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300" />
                )}

                {/* Elite Gold Underline Expand Micro-Animation */}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === item.title && item.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-slate-950/95 backdrop-blur-xl rounded-2xl p-7 border border-white/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {item.megaMenu.map((category) => (
                        <div key={category.category}>
                          <h4 className="text-gold text-[9px] font-extrabold uppercase tracking-[0.22em] mb-4 border-b border-white/5 pb-2">
                            {category.category}
                          </h4>
                          <ul className="space-y-3">
                            {category.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="text-white/60 hover:text-gold transition-colors text-xs font-semibold block"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desk Actions block */}
        <div className="hidden lg:flex items-center space-x-6 h-full">
          <div className="flex items-center space-x-4 border-r border-white/10 pr-6">
            <a
              href="tel:+971581161051"
              className="text-white/80 hover:text-gold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
          <Button
            onClick={() =>
              window.dispatchEvent(new Event("open-inquiry-popup"))
            }
            className="bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] hover:brightness-105 active:scale-[0.98] text-white font-bold rounded-full px-6 py-2.5 h-auto text-[10px] tracking-[0.15em] transition-all duration-300 shadow-md"
          >
            GET CONSULTATION
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="lg:hidden fixed inset-0 bg-slate-950 z-40 pt-24 px-8"
          >
            <nav className="flex flex-col space-y-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="text-4xl font-serif text-white font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
              <div className="pt-8 border-t border-white/10">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.dispatchEvent(new Event("open-inquiry-popup"));
                  }}
                  className="bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-bold w-full py-6 text-[15px] rounded-full tracking-widest shadow-lg"
                >
                  GET CONSULTATION
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
