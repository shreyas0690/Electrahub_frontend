import { useMemo, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart, Star, SlidersHorizontal } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

import imgTv55 from "@/assets/product-tv-55.png";
import imgTv43 from "@/assets/product-tv-43.png";
import imgTv65 from "@/assets/product-tv-65.png";
import imgSb200 from "@/assets/product-soundbar-200.png";
import imgSb450 from "@/assets/product-soundbar-450.png";
import imgWm7 from "@/assets/product-wm-7kg.png";
import imgWm9 from "@/assets/product-wm-9kg.png";
import imgDs43 from "@/assets/product-standee-43.png";
import imgDs55 from "@/assets/product-standee-55.png";

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

type Product = {
  id: string;
  name: string;
  price: string;
  mrp: string;
  rating: number;
  reviews: number;
  emi?: string;
  tag?: string;
  image: string;
};

const productsBySlug: Record<string, Product[]> = {
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
      image: imgTv55,
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
      image: imgTv43,
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
      image: imgTv65,
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
      image: imgSb200,
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
      image: imgSb450,
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
      image: imgWm7,
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
      image: imgWm9,
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
      image: imgDs43,
    },
    {
      id: "ds-55",
      name: "Digital Standee 55\" 4K Advertising Display",
      price: "₹74,999",
      mrp: "₹1,09,999",
      rating: 4.7,
      reviews: 38,
      tag: "High Brightness",
      image: imgDs55,
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
  const addItem = useCartStore((s: { addItem: any }) => s.addItem);
  const slug = useCategorySlug();
  const meta = categoryMeta[slug] ?? categoryMeta.tvs;
  const allProducts = productsBySlug[slug] ?? productsBySlug.tvs;

  const [query, setQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const parsePrice = (v: string) => Number(v.replace(/[^0-9]/g, "")) || 0;
  const priceFloor = useMemo(() => Math.min(...allProducts.map((p) => parsePrice(p.price))), [allProducts]);
  const priceCeil = useMemo(() => Math.max(...allProducts.map((p) => parsePrice(p.price))), [allProducts]);

  const [filters, setFilters] = useState<{ priceMax: number; ratingMin: number; onlyEmi: boolean }>(() => ({
    priceMax: Infinity,
    ratingMin: 0,
    onlyEmi: false,
  }));

  const effectivePriceMax = Number.isFinite(filters.priceMax) ? filters.priceMax : priceCeil;

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allProducts
      .filter((p) => {
        if (!q) return true;
        return p.name.toLowerCase().includes(q);
      })
      .filter((p) => {
        const price = parsePrice(p.price);
        return price <= effectivePriceMax;
      })
      .filter((p) => {
        return p.rating >= filters.ratingMin;
      })
      .filter((p) => {
        if (!filters.onlyEmi) return true;
        return Boolean(p.emi);
      });
  }, [allProducts, query, filters, priceCeil]);

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
                    className="w-full sm:w-[340px] h-11 rounded-full pl-11 bg-background/80 backdrop-blur border-muted-foreground/20 shadow-sm focus-visible:ring-2 focus-visible:ring-primary/30"
                    data-testid="input-category-search"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" data-testid="icon-category-search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-11 rounded-full gap-2 border-muted-foreground/20 bg-background/80 backdrop-blur shadow-sm hover:bg-background"
                      data-testid="button-category-filter"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                      {(effectivePriceMax < priceCeil || filters.ratingMin > 0 || filters.onlyEmi) ? (
                        <span
                          className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary/10 px-1.5 text-xs font-semibold text-primary"
                          data-testid="badge-filters-active"
                        >
                          1
                        </span>
                      ) : null}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent align="end" className="w-[340px] p-4" data-testid="panel-category-filters">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-heading font-bold" data-testid="text-filters-title">
                          Filters
                        </div>
                        <div className="text-xs text-muted-foreground" data-testid="text-filters-subtitle">
                          Refine products in this collection
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        data-testid="button-filters-reset"
                        onClick={() => setFilters({ priceMax: Infinity, ratingMin: 0, onlyEmi: false })}
                      >
                        Reset
                      </Button>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="rounded-xl border bg-muted/20 p-4" data-testid="section-filter-price">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-semibold" data-testid="text-filter-price-title">
                            Max Price
                          </div>
                          <div className="text-sm font-semibold" data-testid="text-filter-price-value">
                            ₹{Math.round(effectivePriceMax).toLocaleString("en-IN")}
                          </div>
                        </div>
                        <div className="mt-3" data-testid="slider-filter-price">
                          <Slider
                            value={[Math.min(Math.max(effectivePriceMax, priceFloor), priceCeil)]}
                            min={priceFloor}
                            max={priceCeil}
                            step={500}
                            onValueChange={(v) => setFilters((s) => ({ ...s, priceMax: v[0] }))}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground" data-testid="text-filter-price-range">
                          <span>₹{priceFloor.toLocaleString("en-IN")}</span>
                          <span>₹{priceCeil.toLocaleString("en-IN")}</span>
                        </div>
                      </div>

                      <div className="rounded-xl border bg-muted/20 p-4" data-testid="section-filter-rating">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-semibold" data-testid="text-filter-rating-title">
                            Minimum Rating
                          </div>
                          <div className="text-sm font-semibold" data-testid="text-filter-rating-value">
                            {filters.ratingMin.toFixed(1)}+
                          </div>
                        </div>
                        <div className="mt-3" data-testid="slider-filter-rating">
                          <Slider
                            value={[filters.ratingMin]}
                            min={0}
                            max={5}
                            step={0.1}
                            onValueChange={(v) => setFilters((s) => ({ ...s, ratingMin: v[0] }))}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border bg-muted/20 p-4" data-testid="section-filter-emi">
                        <div>
                          <div className="text-sm font-semibold" data-testid="text-filter-emi-title">
                            EMI Available
                          </div>
                          <div className="text-xs text-muted-foreground" data-testid="text-filter-emi-subtitle">
                            Show products with monthly plans
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.onlyEmi}
                            onCheckedChange={(v) => setFilters((s) => ({ ...s, onlyEmi: Boolean(v) }))}
                            data-testid="checkbox-filter-emi"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
                  <div className="aspect-[4/3] bg-muted/20 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      data-testid={`img-product-${p.id}`}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        {p.tag ? (
                          <Badge className="mb-3 bg-orange-500 hover:bg-orange-600" data-testid={`badge-product-${p.id}`}>
                            {p.tag}
                          </Badge>
                        ) : null}
                        <h3
                          className="font-heading font-bold text-lg leading-snug line-clamp-2"
                          data-testid={`text-product-name-${p.id}`}
                        >
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
                        onClick={() => {
                          addItem({
                            id: p.id,
                            name: p.name,
                            image: p.image,
                            price: p.price,
                            mrp: p.mrp,
                            emi: p.emi,
                          });
                          setLocation("/cart");
                        }}
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
                          <div
                            className="mt-2 text-xs font-medium text-green-700 bg-green-50 inline-flex px-2 py-1 rounded"
                            data-testid={`text-product-emi-${p.id}`}
                          >
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

            {products.length === 0 ? (
              <div className="mt-10 text-center text-muted-foreground" data-testid="text-category-empty">
                No products found for “{query}”.
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
