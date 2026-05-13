"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AreaDetailLoading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950/20">
        <div className="container mx-auto px-6 text-center">
          <Skeleton className="h-4 w-32 mx-auto mb-4 bg-emerald-950/10" />
          <Skeleton className="h-16 w-1/2 mx-auto mb-8 bg-emerald-950/10" />
          <Skeleton className="h-4 w-40 mx-auto bg-emerald-950/10" />
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-6">
          <div className="bg-white p-10 rounded-[2rem] shadow-2xl border border-emerald-950/5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-3 w-12 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-12 w-48 rounded-full" />
            </div>
            <Skeleton className="h-[450px] w-full rounded-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
