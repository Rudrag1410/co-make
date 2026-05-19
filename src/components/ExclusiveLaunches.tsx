"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  CheckCircle2,
  TrendingUp,
  CalendarDays,
  Download,
  X,
  Phone,
  User,
  CheckCircle,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const LAUNCHES = [
  {
    id: "danube-greenz",
    title: "Greenz by Danube",
    developer: "DANUBE",
    location: "Near Academic City, Dubai",
    isFocus: true,
    video: "/video/greenz_danube.mp4",
    pdf: "/pdf/Greenz by Danube_Brochure new.pdf",
    price: "AED 3.5M",
    tags: ["Villas", "Townhouses", "Sky Gardens"],
    description:
      "First-ever master community by Danube. Fully furnished by Dolce Vita with private elevators.",
    paymentPlan: "70:30 (1% Monthly)",
    eoi: "10% Down Payment • Priority Booking",
    features: [
      "Only 700 Exclusive Units",
      "50+ Lifestyle Amenities",
      "1 min to Emirates Road",
      "3 BR + Maid + Sky Garden from 3.5M",
    ],
    gallery: ["/images/greenz_danube_payment plan.jpeg"],
  },
  {
    id: "modon-hudayriyat",
    title: "Hudayriyat Golf Estates",
    developer: "MODON",
    location: "Abu Dhabi",
    video: "/images/modon-1.mp4",
    image: "/images/modon.jpeg",
    pdf: null,
    price: "AED 4.3M",
    tags: ["Golf Villas", "Townhouses"],
    description:
      "Ultra-luxury frontline golf course villas and mansions with direct sea views.",
    paymentPlan: "40/60 Payment Plan",
    eoi: "5% Now • 10% Annually",
    features: [
      "730 Villas & 534 Townhouses",
      "77 Ultra-Luxury Golf Mansions",
      "Townhouses from AED 4.3M",
      "Golf Villas from AED 7.5M",
    ],
    gallery: [
      "/images/modon.jpeg",
      "/images/modon-1.mp4",
      "/images/modon-2.mp4",
      "/images/modon-3.mp4",
      "/images/modon-4.mp4",
      "/images/modon-5.mp4",
      "/images/modon-6.mp4",
    ],
  },
  {
    id: "arada-al-ghadeer",
    title: "Al Ghadeer Gardens",
    developer: "ARADA",
    location: "Abu Dhabi - Dubai Border",
    isFocus: true,
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=100&w=3840&auto=format&fit=crop",
    pdf: "/pdf/AlGhadeer_Factsheet_260516_124159.pdf",
    price: "AED 1.7M",
    tags: ["Master Community", "Townhouses", "Villas"],
    description:
      "Live where life grows. A master-planned community positioned between Abu Dhabi and Dubai with direct airport connectivity.",
    paymentPlan: "55/45 (Handover Q4 2029)",
    eoi: "5% Down Payment",
    features: [
      "2-4 Bedroom Townhouses & Villas",
      "Padel courts, pools & splash parks",
      "16 mins to Al Maktoum Airport",
      "Community Centre & Event Lawns",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=100&w=3840&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=100&w=3840&auto=format&fit=crop",
    ],
  },
];

export function ExclusiveLaunches() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<
    (typeof LAUNCHES)[0] | null
  >(null);

  // Form States
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGalleryOpen(false);
      } else if (e.key === "ArrowLeft" && activeProject?.gallery) {
        setActiveGalleryIndex((prev) =>
          prev === 0 ? activeProject.gallery!.length - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight" && activeProject?.gallery) {
        setActiveGalleryIndex((prev) =>
          prev === activeProject.gallery!.length - 1 ? 0 : prev + 1,
        );
      }
    };
    if (galleryOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("lightbox-open");
    };
  }, [galleryOpen, activeProject]);

  const handleDownloadClick = (project: (typeof LAUNCHES)[0]) => {
    setActiveProject(project);
    setDownloadModalOpen(true);
    setIsSuccess(false);
  };

  const handleRegisterClick = (project: (typeof LAUNCHES)[0]) => {
    setActiveProject(project);
    setRegisterModalOpen(true);
    setIsSuccess(false);
  };

  const handleGalleryClick = (project: (typeof LAUNCHES)[0]) => {
    setActiveProject(project);
    setActiveGalleryIndex(0);
    setGalleryOpen(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !fullName) return;

    setIsSubmitting(true);
    // Simulate API call for lead registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto-close after success
      setTimeout(() => {
        setRegisterModalOpen(false);
        setIsSuccess(false);
        setPhoneNumber("");
        setFullName("");
      }, 2500);
    }, 1500);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setDownloadModalOpen(false);
      // Trigger PDF download
      if (activeProject?.pdf) {
        window.open(activeProject.pdf, "_blank");
      }
      setPhoneNumber("");
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-950 relative z-10 overflow-hidden border-t border-gold/10">
      {/* Decorative Gold Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 px-4 py-1.5 rounded-full mb-6"
          >
            <Star className="w-3.5 h-3.5 text-gold fill-gold animate-pulse" />
            <span className="text-gold text-[10px] font-bold uppercase tracking-widest">
              Upcoming Pre-Launches
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Exclusive{" "}
            <span className="italic text-gold font-light">New Launches</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-medium leading-relaxed"
          >
            Secure priority allocation at the original launch price. Download
            the official brochures and master plans.
          </motion.p>
        </div>

        {/* Widescreen stacked layout - 100% width, no empty slots */}
        <div className="flex flex-col gap-12">
          {LAUNCHES.map((launch, idx) => (
            <motion.div
              key={launch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(200,155,60,0.15)] flex flex-col md:flex-row w-full"
            >
              {/* Media Header (Widescreen Video/Image) */}
              <div className="relative w-full md:w-3/5 h-80 md:h-auto min-h-[350px] overflow-hidden">
                {launch.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  >
                    <source src={launch.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={launch.image!}
                    alt={launch.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 flex space-x-2 z-10">
                  <span className="bg-slate-950/80 backdrop-blur-md border border-gold/30 text-gold text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {launch.developer}
                  </span>
                  {launch.isFocus && (
                    <span className="bg-red-600/90 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full animate-pulse">
                      Hot Focus Project
                    </span>
                  )}
                </div>

                {/* Title & Location over image */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 drop-shadow-lg">
                    {launch.title}
                  </h3>
                  <div className="flex items-center text-gold space-x-1.5">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[12px] font-bold tracking-wide uppercase drop-shadow-md">
                      {launch.location}
                    </span>
                  </div>
                </div>

                {/* Gallery Preview Overlay Trigger Button */}
                {launch.gallery && launch.gallery.length > 0 && (
                  <button
                    onClick={() => handleGalleryClick(launch)}
                    className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white hover:text-gold hover:border-gold/50 transition-all duration-300 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>
                      {launch.gallery.length > 1
                        ? `+${launch.gallery.length - 1} Photos`
                        : "View Gallery"}
                    </span>
                  </button>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-2/5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {launch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {launch.description}
                </p>

                {/* Key Financial Highlights */}
                <div className="bg-slate-950/60 rounded-xl p-4 border border-white/5 mb-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">
                      Starting Price
                    </span>
                    <span className="text-gold font-bold text-lg">
                      {launch.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="w-4 h-4 text-white/50" />
                      <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">
                        Payment Plan
                      </span>
                    </div>
                    <span className="text-white font-bold text-sm">
                      {launch.paymentPlan}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-white/50" />
                      <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">
                        EOI Structure
                      </span>
                    </div>
                    <span className="text-white font-bold text-[11px] bg-gold/20 text-gold px-2.5 py-1.5 rounded-md">
                      {launch.eoi}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {launch.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {launch.pdf && (
                    <button
                      onClick={() => handleDownloadClick(launch)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-slate-900 border border-gold/30 text-gold font-bold text-[11px] uppercase tracking-widest py-3.5 rounded-xl hover:bg-gold hover:text-slate-950 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Brochure</span>
                    </button>
                  )}
                  <button
                    onClick={() => handleRegisterClick(launch)}
                    className="flex-1 bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-bold text-[11px] uppercase tracking-[0.2em] py-3.5 rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 shadow-lg"
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Brochure Lead Capture Modal */}
      <AnimatePresence>
        {downloadModalOpen && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Download className="w-6 h-6 text-gold" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Unlock the Brochure
                </h3>
                <p className="text-white/60 text-sm mb-8">
                  Enter your WhatsApp number to instantly view the official
                  master plan and brochure for{" "}
                  <strong className="text-white">{activeProject.title}</strong>.
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/50 text-[10px] uppercase font-bold tracking-widest mb-2">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-70 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Now</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-white/40 mt-4">
                    Your details are strictly confidential.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Interest Lead Capture Modal */}
      <AnimatePresence>
        {registerModalOpen && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setRegisterModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-gold fill-gold" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Register Interest
                </h3>
                <p className="text-white/60 text-sm mb-8">
                  Get priority access and original launch pricing for{" "}
                  <strong className="text-white">{activeProject.title}</strong>.
                </p>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Registration Complete!
                    </h4>
                    <p className="text-white/60 text-sm">
                      Our luxury property consultant will contact you shortly
                      with exclusive details.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/50 text-[10px] uppercase font-bold tracking-widest mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-[10px] uppercase font-bold tracking-widest mb-2">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+971 50 000 0000"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-70 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span>Submit Registration</span>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-white/40 mt-4">
                      Your details are strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Gallery Slideshow Modal */}
      <AnimatePresence>
        {galleryOpen && activeProject && activeProject.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGalleryOpen(false)}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-6 right-6 z-[100000] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-lg border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slideshow Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[16/10] max-h-[80vh] flex items-center justify-center"
            >
              {/* Left Arrow */}
              {activeProject.gallery.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveGalleryIndex((prev) =>
                      prev === 0 ? activeProject.gallery!.length - 1 : prev - 1,
                    );
                  }}
                  className="absolute left-4 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/10 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Right Arrow */}
              {activeProject.gallery.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveGalleryIndex((prev) =>
                      prev === activeProject.gallery!.length - 1 ? 0 : prev + 1,
                    );
                  }}
                  className="absolute right-4 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/10 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Active Image or Video Slide */}
              <div
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  const touchEndX = e.changedTouches[0].clientX;
                  const diff = touchStartX - touchEndX;
                  if (diff > 50 && activeProject?.gallery) {
                    setActiveGalleryIndex((prev) =>
                      prev === activeProject.gallery!.length - 1 ? 0 : prev + 1,
                    );
                  } else if (diff < -50 && activeProject?.gallery) {
                    setActiveGalleryIndex((prev) =>
                      prev === 0 ? activeProject.gallery!.length - 1 : prev - 1,
                    );
                  }
                }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black"
              >
                {activeProject.gallery[activeGalleryIndex].endsWith(".mp4") ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                    className="w-full h-full object-contain"
                  >
                    <source src={activeProject.gallery[activeGalleryIndex]} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={activeProject.gallery[activeGalleryIndex]}
                    alt={`${activeProject.title} gallery slide ${activeGalleryIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Image Counter Indicator Footer */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs font-semibold tracking-widest uppercase shadow-md">
                {activeGalleryIndex + 1} / {activeProject.gallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
