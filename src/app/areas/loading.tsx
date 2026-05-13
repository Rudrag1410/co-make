"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AreasLoading() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Skeleton */}
      <section className="relative py-16 bg-emerald-950 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <Skeleton className="h-4 w-32 mx-auto mb-4 bg-white/10" />
          <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-white/10" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-white/10" />
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[350px] w-full rounded-[2rem]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
