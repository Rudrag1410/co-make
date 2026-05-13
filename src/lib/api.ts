import { cache } from "react";

const API_BASE = "https://dev-sloth.site/api";

export interface Area {
  _id: string;
  title: string;
  mainImage: string;
  aboutArea: string;
  whyAreaName: string;
  metaDescription: string;
  stats?: Array<{ label: string; value: string; suffix: string }>;
}

export interface Property {
  _id: string;
  title: string;
  mainImage: string;
  projectImages: string[];
  startingPrice: number;
  developer: {
    _id: string;
    name: string;
    logo: string;
  };
  location: {
    _id: string;
    title: string;
  };
  category: string;
  typeOfProperty: string[];
  bedrooms: string[];
  ROI: {
    min: number;
    max: number;
  };
  handoverYear: number;
  description: string;
  amenities: Array<{ name: string; icon: string; _id: string }>;
  paymentPlan: string;
}

// Wrap API calls in React cache for deduplication within a single request
export const fetchAreas = cache(async (limit = 20): Promise<Area[]> => {
  try {
    const res = await fetch(`${API_BASE}/area?page=1&limit=${limit}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json.success ? (json.data.data || json.data.docs || []) : [];
  } catch (error) {
    console.error("Error fetching areas:", error);
    return [];
  }
});

export const fetchAreaById = cache(async (id: string): Promise<Area | null> => {
  try {
    const res = await fetch(`${API_BASE}/area/${id}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error(`Error fetching area ${id}:`, error);
    return null;
  }
});

export const fetchProperties = cache(async (limit = 20): Promise<Property[]> => {
  try {
    const res = await fetch(`${API_BASE}/property?limit=${limit}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
});

export const fetchPropertyById = cache(async (id: string): Promise<Property | null> => {
  try {
    const res = await fetch(`${API_BASE}/property/${id}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error(`Error fetching property ${id}:`, error);
    return null;
  }
});

export const fetchPropertiesByArea = cache(async (areaId: string): Promise<Property[]> => {
  try {
    const res = await fetch(`${API_BASE}/property?areaId=${areaId}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Error fetching properties for area:", error);
    return [];
  }
});

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
