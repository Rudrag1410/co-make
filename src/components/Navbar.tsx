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
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomePage
          ? "bg-emerald-950/98 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/logo.png"
            alt="Comake Homes"
            width={208}
            height={60}
            className="w-40 md:w-52 h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center text-white/90 hover:text-gold transition-colors font-medium text-[10px] tracking-widest uppercase"
              >
                {item.title}
                {item.megaMenu && <ChevronDown className="ml-1 w-3.5 h-3.5" />}
              </Link>

              {/* Mega Menu */}
              <AnimatePresence>
                {activeMenu === item.title && item.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-emerald-950/98 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-12">
                      {item.megaMenu.map((category) => (
                        <div key={category.category}>
                          <h4 className="text-gold text-[9px] font-bold uppercase tracking-[0.2em] mb-5 border-b border-white/5 pb-2">
                            {category.category}
                          </h4>
                          <ul className="space-y-4">
                            {category.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="text-white/60 hover:text-gold transition-colors text-xs font-medium block"
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

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-4 border-r border-white/10 pr-6">
            <a
              href="tel:+971581161051"
              className="text-white/80 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
          <Link href="/contact">
            <Button className="bg-gold hover:bg-gold/90 text-emerald-950 font-bold rounded-full px-5 py-3 h-auto text-[9px] tracking-widest transition-all hover:scale-105 active:scale-95">
              GET CONSULTATION
            </Button>
          </Link>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="lg:hidden fixed inset-0 bg-emerald-950 z-40 pt-24 px-8"
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
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-gold text-emerald-950 font-bold w-full py-8 text-lg rounded-full tracking-widest">
                    GET CONSULTATION
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
