"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import {
  Star,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ImageIcon,
  Download,
} from "lucide-react";
import CountUp from "react-countup";

const SIGNATURE_PROJECTS = [
  {
    id: "danube-greenz",
    developer: "DANUBE",
    title: "Greenz by Danube",
    subtitle: "Premium Villas & Townhouses",
    location: "Academic City, Dubai • Starting AED 3.5M",
    video: "/video/greenz_danube.mp4",
    hasBrochure: true,
    galleryAction: "hero-gallery",
    pdfs: [
      "/pdf/Greenz by Danube - Phase 1 Master Plan.pdf",
      "/pdf/Greenz by Danube Electronic Advertisement Permit.pdf",
      "/pdf/Greenz by Danube_Brochure new.pdf",
      "/pdf/Greenz Updated Masterplan with 5bed price.pdf"
    ],
    galleryImages: [
      "/video/greenz_danube.mp4",
      "/video/WhatsApp Video 2026-05-19 at 13.04.29.mp4",
      "/images/greenz_danube_payment plan.jpeg"
    ]
  },
  {
    id: "modon-golf-villas",
    developer: "MODON",
    title: "Hudayriyat Golf Estates",
    subtitle: "Premium Golf Course Villas",
    location: "Hudayriyat Island, Abu Dhabi • Starting AED 4.5M",
    video: "/images/modon-1.mp4",
    hasBrochure: false,
    galleryAction: "modon-golf-gallery",
    galleryImages: [
      "/images/modon-1.mp4",
      "/images/modon-2.mp4",
      "/images/modon-3.mp4",
      "/images/modon-4.mp4",
      "/images/modon-5.mp4",
      "/images/modon-6.mp4",
      "/images/WhatsApp Image 2026-05-19 at 12.53.18 (1).jpeg"
    ]
  },
  {
    id: "modon-royal-residences",
    developer: "MODON",
    title: "Hudayriyat Golf Estates",
    subtitle: "Royal Waterfront Residences",
    location: "Hudayriyat Island, Abu Dhabi • Starting AED 6.5M",
    video: "/images/modon-4.mp4",
    hasBrochure: false,
    galleryAction: "modon-royal-gallery",
    galleryImages: [
      "/images/modon-4.mp4",
      "/images/modon-1.mp4",
      "/images/modon-2.mp4",
      "/images/modon-3.mp4",
      "/images/modon-5.mp4",
      "/images/modon-6.mp4",
      "/images/WhatsApp Image 2026-05-19 at 12.53.18 (1).jpeg"
    ]
  }
];

export function Hero() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % SIGNATURE_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const handleSuccess = (e: Event) => {
      const customEvent = e as CustomEvent;
      const action = customEvent.detail?.action;
      
      const matchedProj = SIGNATURE_PROJECTS.find(p => p.galleryAction === action);
      if (matchedProj) {
        setGalleryImages(matchedProj.galleryImages);
        setCurrentImg(0);
        setIsGalleryOpen(true);
      } else if (action === "hero-download" && customEvent.detail?.payload) {
        const payload = customEvent.detail.payload;
        if (payload.pdfs) {
          payload.pdfs.forEach((pdfPath: string, index: number) => {
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
        }
      }
    };
    window.addEventListener("inquiry-success", handleSuccess);
    return () => window.removeEventListener("inquiry-success", handleSuccess);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };
    if (isGalleryOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Widescreen cinematic lens zoom out on mount
      gsap.fromTo(
        ".hero-video-bg",
        { scale: 1.25, filter: "brightness(0.5) contrast(1.1)" },
        {
          scale: 1.02,
          filter: "brightness(0.75) contrast(1)",
          duration: 3.5,
          ease: "power2.out",
        },
      );

      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-stat", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950"
    >
      {/* Background with cinematic local MP4 video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        {/* Invisible Click Absorber Layer to prevent video interaction without darkening the video */}
        <div
          className="absolute inset-0 z-10"
          style={{ pointerEvents: "auto" }}
        />

        {/* Cinematic bottom shadow only - keeps top completely transparent for header glass blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(2,6,23,0.4)_100%)] z-10 pointer-events-none" />

        {/* Native, high-performance HTML5 Video Element (Absolutely NO controls, loops natively, and plays instantly!) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video-bg absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 transition-transform duration-700"
          style={{ pointerEvents: "none", transform: "scale(1.02)" }}
        >
          <source src="/video/dubai_best_moment.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/15 via-slate-950/70 to-gold/15 backdrop-blur-md border border-gold/30 px-5 py-2 rounded-full mb-6 shadow-xl"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-[9px] font-extrabold uppercase tracking-[0.25em] drop-shadow-md">
              Exclusive Luxury Collection 2024
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-5 drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
          >
            Discover Dubai&apos;s Most <br />
            <span className="text-gold italic drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
              Exclusive
            </span>{" "}
            Properties
          </h1>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10 font-medium leading-relaxed tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Premium villas, waterfront residences, and high ROI investment
            opportunities in Dubai&apos;s most prestigious communities.
          </p>

          <div className="relative w-full max-w-xl mx-auto mb-20 flex items-center justify-center px-4 md:px-0">
            {/* The stacked card container */}
            <div
              className="relative w-full h-[140px] md:h-[160px] select-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glowing gold ambient outline background blur behind the stack */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/25 via-gold/5 to-gold/25 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-700 pointer-events-none z-0" />

              {SIGNATURE_PROJECTS.map((project, idx) => {
                // Calculate circular offset relative to activeProjectIndex
                let diff = idx - activeProjectIndex;
                if (diff === 2) diff = -1;
                if (diff === -2) diff = 1;

                const isActive = diff === 0;

                return (
                  <motion.div
                    key={project.id}
                    animate={{
                      y: diff === 0 ? 0 : diff === 1 ? 16 : -16,
                      scale: diff === 0 ? 1 : 0.94,
                      opacity: diff === 0 ? 1 : 0.35,
                      zIndex: diff === 0 ? 30 : diff === 1 ? 20 : 10,
                      filter: diff === 0 ? "brightness(1) blur(0px)" : "brightness(0.55) blur(1.5px)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                    onClick={(e) => {
                      if (!isActive) {
                        e.stopPropagation();
                        setActiveProjectIndex(idx);
                      } else {
                        window.dispatchEvent(
                          new CustomEvent("open-inquiry-popup", {
                            detail: {
                              action: `${project.developer.toLowerCase()}-callback`,
                              payload: {
                                developer: project.developer,
                                title: project.title,
                                name: project.subtitle
                              }
                            }
                          })
                        );
                      }
                    }}
                    className={`absolute inset-0 w-full h-full flex items-center p-3 md:p-4 rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-2xl transition-colors duration-500 ${
                      isActive 
                        ? "cursor-pointer border-gold/20 hover:border-gold/45 hover:bg-slate-950/85 hover:shadow-[0_25px_60px_rgba(200,155,60,0.22)]" 
                        : "cursor-pointer hover:border-white/20 hover:bg-slate-950/80"
                    }`}
                  >
                    {/* Glowing gold line running along the top of the active card */}
                    {isActive && (
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/55 to-transparent rounded-t-2xl shadow-[0_1px_4px_rgba(212,175,55,0.4)] z-20" />
                    )}

                    {/* Click interception overlay for background cards to trigger selection cleanly */}
                    {!isActive && (
                      <div className="absolute inset-0 z-50 rounded-2xl cursor-pointer" />
                    )}

                    {/* Autoplay Video Thumbnail */}
                    <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 border border-gold/25 bg-slate-900 z-10">
                      <video
                        key={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-slate-950/20" />
                    </div>

                    {/* Content */}
                    <div className="ml-3 md:ml-6 text-left flex-grow z-10 min-w-0">
                      <div className="flex items-center space-x-1.5 md:space-x-2.5 mb-1 md:mb-2">
                        <Star className={`w-2.5 h-2.5 md:w-3 h-3 text-gold fill-gold ${isActive ? "animate-spin-slow" : ""}`} />
                        <span className="text-gold text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] truncate">
                          Signature Collection
                        </span>
                        {isActive && (
                          <span className="text-white/40 text-[8px] md:text-[9px] font-bold tracking-wider font-sans bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-md flex-shrink-0">
                            {idx + 1}/{SIGNATURE_PROJECTS.length}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white text-sm md:text-xl font-serif font-bold mb-0.5 md:mb-1 leading-tight truncate-two-lines">
                        {project.title} <br />
                        <span className="text-white/60 text-[10px] md:text-sm italic font-sans font-normal block truncate">
                          {project.subtitle}
                        </span>
                      </h3>
                      <div className="flex items-center text-white/40 space-x-1.5">
                        <MapPin className="w-2.5 h-2.5 md:w-3 h-3 text-gold flex-shrink-0" />
                        <span className="text-[8px] md:text-[10px] font-medium tracking-wide truncate">
                          {project.location}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons: Gallery & Brochure */}
                    <div className="flex-shrink-0 ml-2 md:ml-4 flex space-x-2 md:space-x-3 z-20 pointer-events-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.dispatchEvent(
                            new CustomEvent("open-inquiry-popup", {
                              detail: {
                                action: project.galleryAction,
                                payload: {
                                  developer: project.developer,
                                  title: project.title
                                }
                              }
                            })
                          );
                        }}
                        className="flex flex-col items-center justify-center space-y-0.5 md:space-y-1 group/btn"
                      >
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-slate-950 transition-all duration-500">
                          <ImageIcon className="w-4 h-4 md:w-5 h-5" />
                        </div>
                        <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover/btn:text-gold transition-colors">
                          Gallery
                        </span>
                      </button>
                      {project.hasBrochure && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.dispatchEvent(
                              new CustomEvent("open-inquiry-popup", {
                                detail: {
                                  action: "hero-download",
                                  payload: {
                                    pdfs: project.pdfs,
                                    developer: project.developer,
                                    title: project.title
                                  }
                                }
                              })
                            );
                          }}
                          className="flex flex-col items-center justify-center space-y-0.5 md:space-y-1 group/btn"
                        >
                          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-slate-950 transition-all duration-500">
                            <Download className="w-4 h-4 md:w-5 h-5" />
                          </div>
                          <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover/btn:text-gold transition-colors">
                            Brochure
                          </span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Up/Down Navigation Controls on the Right */}
            <div className="absolute right-[-48px] md:right-[-64px] top-1/2 -translate-y-1/2 flex flex-col space-y-3.5 z-40 hidden md:flex">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProjectIndex((prev) =>
                    prev === 0 ? SIGNATURE_PROJECTS.length - 1 : prev - 1
                  );
                }}
                className="w-10 h-10 rounded-full border border-gold/30 bg-slate-950/70 text-gold flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-slate-950 hover:border-gold hover:scale-110 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer"
                title="Previous Project"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProjectIndex((prev) =>
                    (prev + 1) % SIGNATURE_PROJECTS.length
                  );
                }}
                className="w-10 h-10 rounded-full border border-gold/30 bg-slate-950/70 text-gold flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-slate-950 hover:border-gold hover:scale-110 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer"
                title="Next Project"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative max-w-3xl mx-auto mt-6 group"
          >
            {/* Ambient gold glow under the dashboard capsule */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/15 via-gold/5 to-gold/15 rounded-2xl blur opacity-25 group-hover:opacity-45 transition duration-700" />

            {/* Glassmorphic Capsule Container */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950/45 backdrop-blur-xl border border-white/10 border-t-white/20 px-8 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_25px_60px_rgba(200,155,60,0.12)]">
              {[
                {
                  label: "Sales Volume",
                  value: 10,
                  suffix: "B+",
                  prefix: "AED ",
                },
                { label: "Happy Investors", value: 5000, suffix: "+" },
                { label: "Active Listings", value: 1200, suffix: "+" },
                { label: "ROI Average", value: 8, suffix: "%" },
              ].map((stat, idx) => (
                <div key={idx} className="hero-stat relative text-center py-1">
                  <h3 className="text-xl md:text-2xl font-sans text-white font-bold mb-0.5 tracking-tight">
                    {stat.prefix}
                    <CountUp start={0} end={stat.value} duration={2.5} separator="," delay={0.8 + idx * 0.15} />
                    {stat.suffix}
                  </h3>
                  <p className="text-white/50 text-[8px] uppercase font-bold tracking-[0.18em]">
                    {stat.label}
                  </p>

                  {/* Vertical Golden Thread Divider in Desktop */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Immersive Widescreen Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 z-[130] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-lg border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slideshow Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[16/10] max-h-[80vh] flex items-center justify-center"
            >
              {/* Left Arrow */}
              {galleryImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImg((prev) =>
                      prev === 0 ? galleryImages.length - 1 : prev - 1,
                    );
                  }}
                  className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/10 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Right Arrow */}
              {galleryImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImg((prev) =>
                      prev === galleryImages.length - 1 ? 0 : prev + 1,
                    );
                  }}
                  className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/10 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Active Image or Video Slide - Set to object-contain to prevent any cropping */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                {galleryImages[currentImg] && galleryImages[currentImg].endsWith(".mp4") ? (
                  <video
                    key={galleryImages[currentImg]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-contain"
                  >
                    <source src={galleryImages[currentImg]} type="video/mp4" />
                  </video>
                ) : (
                  galleryImages[currentImg] && (
                    <Image
                      src={galleryImages[currentImg]}
                      alt={`Property Image ${currentImg + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  )
                )}
              </div>

              {/* Image Counter Indicator Footer */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs font-semibold tracking-widest uppercase shadow-md">
                {currentImg + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
