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
    pdfs: [
      "/pdf/Greenz by Danube - Phase 1 Master Plan.pdf",
      "/pdf/Greenz by Danube Electronic Advertisement Permit.pdf",
      "/pdf/Greenz by Danube_Brochure new.pdf",
      "/pdf/Greenz Updated Masterplan with 5bed price.pdf"
    ],
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
    pdfs: null,
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
    pdfs: ["/pdf/AlGhadeer_Factsheet_260516_124159.pdf"],
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
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<
    (typeof LAUNCHES)[0] | null
  >(null);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const handleSuccess = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.action === "exclusive-gallery" && customEvent.detail?.payload) {
        setActiveProject(customEvent.detail.payload);
        setActiveGalleryIndex(0);
        setGalleryOpen(true);
      } else if (customEvent.detail?.action === "exclusive-download" && customEvent.detail?.payload) {
        const project = customEvent.detail.payload;
        if (project.pdfs && project.pdfs.length > 0) {
          project.pdfs.forEach((pdfPath: string, index: number) => {
            setTimeout(async () => {
              try {
                const response = await fetch(pdfPath);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", pdfPath.split("/").pop() || "brochure.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(() => window.URL.revokeObjectURL(url), 100);
              } catch (err) {
                console.error("Failed to download PDF", err);
              }
            }, index * 300);
          });
        } else if (project.pdf) {
          (async () => {
            try {
              const response = await fetch(project.pdf);
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", project.pdf.split("/").pop() || "brochure.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              setTimeout(() => window.URL.revokeObjectURL(url), 100);
            } catch (err) {
              console.error("Failed to download PDF", err);
            }
          })();
        }
      }
    };
    window.addEventListener("inquiry-success", handleSuccess);
    return () => window.removeEventListener("inquiry-success", handleSuccess);
  }, []);

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
    window.dispatchEvent(
      new CustomEvent("open-inquiry-popup", {
        detail: { action: "exclusive-download", payload: project }
      })
    );
  };

  const handleRegisterClick = (project: (typeof LAUNCHES)[0]) => {
    window.dispatchEvent(
      new CustomEvent("open-inquiry-popup", {
        detail: { action: "exclusive-register", payload: project }
      })
    );
  };

  const handleGalleryClick = (project: (typeof LAUNCHES)[0]) => {
    window.dispatchEvent(
      new CustomEvent("open-inquiry-popup", {
        detail: { action: "exclusive-gallery", payload: project }
      })
    );
  };


  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-950 relative z-10 overflow-hidden border-t border-gold/10">
      {/* Decorative Gold Blurs */}
      <div className="absolute top-0 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gold/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-gold/5 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-6"
          >
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold fill-gold animate-pulse" />
            <span className="text-gold text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-widest">
              Upcoming Pre-Launches
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6"
          >
            Exclusive{" "}
            <span className="italic text-gold font-light">New Launches</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm sm:text-base font-medium leading-relaxed"
          >
            Secure priority allocation at the original launch price. Download
            the official brochures and master plans.
          </motion.p>
        </div>

        {/* Widescreen stacked layout - 100% width, no empty slots */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
          {LAUNCHES.map((launch, idx) => (
            <motion.div
              key={launch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_rgba(200,155,60,0.15)] flex flex-col md:flex-row w-full"
            >
              {/* Media Header (Widescreen Video/Image) */}
              <div className="relative w-full md:w-3/5 h-52 sm:h-64 md:h-auto md:min-h-[350px] overflow-hidden shrink-0">
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
                <div className="absolute top-3 left-3 right-3 md:top-4 md:left-4 md:right-auto flex flex-wrap gap-1.5 md:gap-2 z-10 max-w-[calc(100%-5.5rem)] md:max-w-none">
                  <span className="bg-slate-950/80 backdrop-blur-md border border-gold/30 text-gold text-[8px] md:text-[9px] font-bold uppercase tracking-[0.12em] md:tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full">
                    {launch.developer}
                  </span>
                  {launch.isFocus && (
                    <span className="bg-red-600/90 text-white text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em] md:tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full animate-pulse">
                      <span className="md:hidden">Hot</span>
                      <span className="hidden md:inline">Hot Focus Project</span>
                    </span>
                  )}
                </div>

                {/* Title & Location over image */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-10">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-white mb-1 md:mb-2 drop-shadow-lg leading-tight">
                    {launch.title}
                  </h3>
                  <div className="flex items-center text-gold space-x-1 md:space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                    <span className="text-[10px] md:text-[12px] font-bold tracking-wide uppercase drop-shadow-md leading-snug">
                      {launch.location}
                    </span>
                  </div>
                </div>

                {/* Gallery Preview Overlay Trigger Button */}
                {launch.gallery && launch.gallery.length > 0 && (
                  <button
                    onClick={() => handleGalleryClick(launch)}
                    className="absolute top-3 right-3 md:top-4 md:right-4 z-10 flex items-center space-x-1 md:space-x-2 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white hover:text-gold hover:border-gold/50 transition-all duration-300 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-widest shadow-lg shrink-0"
                  >
                    <ImageIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="md:hidden">
                      {launch.gallery.length > 1
                        ? `+${launch.gallery.length - 1}`
                        : "Gallery"}
                    </span>
                    <span className="hidden md:inline">
                      {launch.gallery.length > 1
                        ? `+${launch.gallery.length - 1} Photos`
                        : "View Gallery"}
                    </span>
                  </button>
                )}
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 md:p-8 flex flex-col justify-center w-full md:w-2/5">
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {launch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 md:mb-6">
                  {launch.description}
                </p>

                {/* Key Financial Highlights */}
                <div className="bg-slate-950/60 rounded-xl p-3 md:p-4 border border-white/5 mb-4 md:mb-6 space-y-3 md:space-y-4">
                  <div className="flex flex-col gap-1 pb-3 border-b border-white/5 md:flex-row md:justify-between md:items-center md:gap-0">
                    <span className="text-white/50 text-[9px] md:text-[10px] uppercase font-bold tracking-wider">
                      Starting Price
                    </span>
                    <span className="text-gold font-bold text-base md:text-lg">
                      {launch.price}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 pb-3 border-b border-white/5 md:flex-row md:justify-between md:items-center md:gap-0">
                    <div className="flex items-center space-x-1.5 md:space-x-2">
                      <CalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/50 shrink-0" />
                      <span className="text-white/50 text-[9px] md:text-[10px] uppercase font-bold tracking-wider">
                        Payment Plan
                      </span>
                    </div>
                    <span className="text-white font-bold text-xs md:text-sm leading-snug">
                      {launch.paymentPlan}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 md:flex-row md:justify-between md:items-center md:gap-0">
                    <div className="flex items-center space-x-1.5 md:space-x-2">
                      <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/50 shrink-0" />
                      <span className="text-white/50 text-[9px] md:text-[10px] uppercase font-bold tracking-wider">
                        EOI Structure
                      </span>
                    </div>
                    <span className="text-white font-bold text-[10px] md:text-[11px] bg-gold/20 text-gold px-2 py-1 md:px-2.5 md:py-1.5 rounded-md w-fit leading-snug">
                      {launch.eoi}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 flex-grow">
                  {launch.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 md:space-x-3">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-white/90 text-xs md:text-sm font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2.5 sm:flex-row md:gap-3">
                  {(launch.pdf || launch.pdfs) && (
                    <button
                      onClick={() => handleDownloadClick(launch)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-slate-900 border border-gold/30 text-gold font-bold text-[10px] md:text-[11px] uppercase tracking-[0.12em] md:tracking-widest py-3 md:py-3.5 rounded-xl hover:bg-gold hover:text-slate-950 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Download Brochure</span>
                    </button>
                  )}
                  <button
                    onClick={() => handleRegisterClick(launch)}
                    className="flex-1 bg-gradient-to-r from-[#8E6523] via-[#C89B3C] to-[#8E6523] text-white font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] py-3 md:py-3.5 rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 shadow-lg"
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
                    key={activeProject.gallery[activeGalleryIndex]}
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
