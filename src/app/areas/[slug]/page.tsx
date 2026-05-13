import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fetchAreas, fetchAreaById, fetchPropertiesByArea, slugify, Area } from "@/lib/api";
import { AreaDetailContent } from "@/components/AreaDetailContent";
import { notFound } from "next/navigation";

export default async function AreaDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id?: string };
}) {
  const { slug } = await params;
  const { id } = await searchParams;

  let area: Area | null = null;
  let areaId = id;

  if (areaId) {
    area = await fetchAreaById(areaId);
  }

  // Fallback if no ID or ID fetch failed, find by slug
  if (!area) {
    const allAreas = await fetchAreas(100);
    area = allAreas.find((a) => slugify(a.title) === slug) || null;
    if (area) areaId = area._id;
  }

  if (!area || !areaId) return notFound();

  const properties = await fetchPropertiesByArea(areaId);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AreaDetailContent area={area} properties={properties} />
      <Footer />
    </main>
  );
}
