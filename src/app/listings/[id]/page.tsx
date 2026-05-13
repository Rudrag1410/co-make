import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fetchPropertyById } from "@/lib/api";
import { notFound } from "next/navigation";
import { PropertyDetailContent } from "@/components/PropertyDetailContent";

export default async function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const property = await fetchPropertyById(id);

  if (!property) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PropertyDetailContent property={property} />
      <Footer />
    </main>
  );
}
