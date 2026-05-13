"use client";

import React from "react";
import { MapPin, CheckCircle2, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/api";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function PropertyDetailContent({ property }: { property: Property }) {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Gallery */}
      <section className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[500px] md:h-[600px]">
          <div className="lg:col-span-3 rounded-[2.5rem] overflow-hidden relative group">
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              effect="fade"
              navigation
              pagination={{ clickable: true }}
              className="h-full w-full"
            >
              {[property.mainImage, ...property.projectImages.slice(0, 5)].map(
                (img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt={`${property.title} - ${i}`}
                      fill
                      className="object-cover"
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4">
            {property.projectImages.slice(1, 3).map((img, i) => (
              <div key={i} className="relative rounded-[2rem] overflow-hidden">
                <Image
                  src={img}
                  alt="Interior"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-emerald-950 text-gold text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                {property.category}
              </span>
              <span className="bg-gold/10 text-emerald-950 text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                Handover {property.handoverYear}
              </span>
            </div>

            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center space-x-2 text-emerald-950/60 font-bold text-[11px] uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{property.location.title}, Dubai</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-emerald-950/10 text-emerald-950 hover:bg-emerald-950 hover:text-white"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-emerald-950/10 text-emerald-950 hover:bg-emerald-950 hover:text-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-emerald-950/5 mb-10">
              <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-950/40">
                  Developer
                </p>
                <div className="flex items-center space-x-2">
                  <Image
                    src={property.developer.logo}
                    alt={property.developer.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-xs font-bold text-emerald-950 uppercase">
                    {property.developer.name}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-950/40">
                  ROI Est.
                </p>
                <p className="text-xs font-bold text-gold uppercase">
                  {property.ROI.min}% - {property.ROI.max}%
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-950/40">
                  Property Type
                </p>
                <p className="text-xs font-bold text-emerald-950 uppercase">
                  {property.typeOfProperty.join(", ")}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-950/40">
                  Bedrooms
                </p>
                <p className="text-xs font-bold text-emerald-950 uppercase">
                  {property.bedrooms.join(", ")} BR
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-bold text-emerald-950 mb-6 underline decoration-gold/30 underline-offset-8">
                Project Overview
              </h3>
              <p className="text-emerald-950/70 leading-relaxed text-sm whitespace-pre-wrap">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-bold text-emerald-950 mb-8">
                Premium <span className="italic text-gold">Amenities</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity._id}
                    className="flex flex-col items-center p-6 bg-offwhite rounded-3xl border border-emerald-950/5 group hover:border-gold/30 transition-all"
                  >
                    <Image
                      src={amenity.icon}
                      alt={amenity.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-950/60 text-center">
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-emerald-950 p-8 rounded-[2.5rem] shadow-2xl text-white">
              <div className="mb-8">
                <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                  Starting Price
                </p>
                <h4 className="text-4xl font-serif font-bold mb-1">
                  AED{" "}
                  {property.startingPrice > 0
                    ? property.startingPrice.toLocaleString()
                    : "Contact Us"}
                </h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  Flexible Payment Plan: {property.paymentPlan}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-white/80">
                    Premium Waterfront Location
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-white/80">
                    High Rental Yield Potential
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-white/80">
                    Exclusive Off-Plan Offer
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-gold hover:bg-gold/90 text-emerald-950 font-bold rounded-full py-6 text-xs uppercase tracking-widest">
                  BOOK A VIEWING
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">
                  Request a call back
                </p>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-gold mb-4"
                />
                <Button className="w-full bg-white/10 hover:bg-gold hover:text-emerald-950 text-white border border-white/10 font-bold rounded-full py-3 text-[10px] uppercase tracking-widest transition-all">
                  SUBMIT INQUIRY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
