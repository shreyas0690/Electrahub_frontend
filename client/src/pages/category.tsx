import { useMemo } from "react";
import { useLocation, useSearch } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, SlidersHorizontal } from "lucide-react";

const categoryMeta: Record<string, { title: string; subtitle: string }> = {
  tvs: {
    title: "Smart TVs",
    subtitle: "Premium 4K clarity with family-friendly pricing.",
  },
  soundbars: {
    title: "Soundbars",
    subtitle: "Cinema sound for your living room.",
  },
  appliances: {
    title: "Washing Machines",
    subtitle: "Powerful wash care built for Indian homes.",
  },
  business: {
    title: "Digital Standees",
    subtitle: "High-impact digital displays for your business.",
  },
};

const productsBySlug: Record<
  string,
  Array<{
    id: string;
    name: string;
    price: string;
    mrp: string;
    rating: number;
    reviews: number;
    emi?: string;
    tag?: string;
  }>
> = {
  tvs: [
    {
      id: "tv-55-webos",
      name: "ElectraHub 55\" 4K WebOS Smart TV",
      price: "₹34,999",
      mrp: "₹59,999",
      rating: 4.8,
      reviews: 1240,
      emi: "₹1,945/mo",
      tag: "Best Seller",
    },
    {
      id: "tv-43-fhd",
      name: "ElectraHub 43\" FHD Smart LED TV",
      price: "₹19,999",
      mrp: "₹32,999",
      rating: 4.7,
      reviews: 850,
      emi: "₹1,110/mo",
      tag: "Budget Pick",
    },
    {
      id: "tv-65-qled",
      name: "ElectraHub 65\" 4K QLED Pro TV",
      price: "₹54,999",
      mrp: "₹89,999",
      rating: 4.9,
      reviews: 320,
      emi: "₹3,055/mo",
      tag: "New Arrival",
    },
  ],
  soundbars: [
    {
      id: "sb-200",
      name: "Cinematic Soundbar SB-200",
      price: "₹8,999",
      mrp: "₹14,999",
      rating: 4.6,
      reviews: 450,
      emi: "₹500/mo",
      tag: "Great Value",
    },
    {
      id: "sb-450",
      name: "Dolby Soundbar SB-450 + Subwoofer",
      price: "₹14,999",
      mrp: "₹22,999",
      rating: 4.7,
      reviews: 210,
      emi: "₹835/mo",
      tag: "Dolby Audio",
    },
  ],
  appliances: [
    {
      id: "wm-7kg",
      name: "Front Load Washing Machine 7kg (Steam Care)",
      price: "₹23,999",
      mrp: "₹34,999",
      rating: 4.6,
      reviews: 190,
      emi: "₹1,330/mo",
      tag: "Hygiene Steam",
    },
    {
      id: "wm-9kg",
      name: "Front Load Washing Machine 9kg (AI Wash)",
      price: "₹31,999",
      mrp: "₹45,999",
      rating: 4.7,
      reviews: 120,
      emi: "₹1,780/mo",
      tag: "AI Wash",
    },
  ],
  business: [
    {
      id: "ds-43",
      name: "Digital Standee 43\" 4K Touch Display",
      price: "₹59,999",
      mrp: "₹89,999",
      rating: 4.8,
      reviews: 60,
      tag: "Business Pro",
    },
    {
      id: "ds-55",
      name: "Digital Standee 55\" 4K Advertising Display",
      price: "₹74,999",
      mrp: "₹1,09,999",
      rating: 4.7,
      reviews: 38,
      tag: "High Brightness",
    },
  ],
};

function useCategorySlug() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  return params.get("c") || "tvs";
}

export default function CategoryPage() {
  const [, setLocation] = useLocation();
  const slug = useCategorySlug();
  const meta = categoryMeta[slug] ?? categoryMeta.tvs;
  const products = productsBySlug[slug] ?? productsBySlug.tvs;

  const [query, setQuery] = useMemo(() => ["", () => {}] as const, []);
  // Note: keep simple mockup; no complex state needed for now

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <Badge className="bg-primary/10 text-primary border border-primary/20" data-testid="badge-category">
                  Explore Collection
                </Badge>
                <h1 className="mt-3 text-3xl md:text-4xl font-heading font-bold" data-testid="text-category-title">
                  {meta.title}
                </h1>
                <p className="mt-2 text-muted-foreground" data-testid="text-category-subtitle">
                  {meta.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Input
                    placeholder="Search in this collection..."
                    className="w-full sm:w-[320px]"
                    data-testid="input-category-search"
                    onChange={() => {}}
                    value={query}
                  />
                </div>
                <Button variant="outline" className="gap-2" data-testid="button-category-filter" onClick={() => {}}>
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <Card
                  key={p.id}
                  className="overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`card-product-${p.id}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        {p.tag ? (
                          <Badge className="mb-3 bg-orange-500 hover:bg-orange-600" data-testid={`badge-product-${p.id}`}>
                            {p.tag}
                          </Badge>
                        ) : null}
                        <h3 className="font-heading font-bold text-lg leading-snug line-clamp-2" data-testid={`text-product-name-${p.id}`}>
                          {p.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-2 text-sm" data-testid={`text-product-rating-${p.id}`}>
                          <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                          <span className="font-medium">{p.rating}</span>
                          <span className="text-muted-foreground">({p.reviews})</span>
                        </div>
                      </div>

                      <Button
                        size="icon"
                        className="rounded-full h-10 w-10 shrink-0"
                        data-testid={`button-add-cart-${p.id}`}
                        onClick={() => {}}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground line-through" data-testid={`text-product-mrp-${p.id}`}>
                          {p.mrp}
                        </div>
                        <div className="text-2xl font-bold" data-testid={`text-product-price-${p.id}`}>
                          {p.price}
                        </div>
                        {p.emi ? (
                          <div className="mt-2 text-xs font-medium text-green-700 bg-green-50 inline-flex px-2 py-1 rounded" data-testid={`text-product-emi-${p.id}`}>
                            EMI starts at {p.emi}
                          </div>
                        ) : null}
                      </div>

                      <Button
                        variant="outline"
                        className="rounded-full"
                        data-testid={`button-view-details-${p.id}`}
                        onClick={() => setLocation(`/product?id=${encodeURIComponent(p.id)}`)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
