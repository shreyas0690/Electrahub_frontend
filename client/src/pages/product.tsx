import { useMemo, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, ShieldCheck, Lock, Truck, Wrench, Percent, ChevronLeft, ChevronRight } from "lucide-react";
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

type ProductDetail = {
  id: string;
  categorySlug: "tvs" | "soundbars" | "appliances" | "business";
  tag?: string;
  name: string;
  price: string;
  mrp: string;
  rating: number;
  reviews: number;
  short: string;
  images: string[];
  specs: Array<{ k: string; v: string }>;
  emiplans: Array<{ months: number; perMonth: string; label: string }>;
};

const productDetails: Record<string, ProductDetail> = {
  "tv-55-webos": {
    id: "tv-55-webos",
    categorySlug: "tvs",
    tag: "Best Seller",
    name: "ElectraHub 55\" 4K WebOS Smart LED TV",
    price: "₹34,999",
    mrp: "₹59,999",
    rating: 4.8,
    reviews: 1240,
    short: "Premium WebOS Smart TV built for Indian homes — stunning 4K clarity, smooth streaming, and free installation.",
    images: [imgTv55, imgTv65, imgTv43],
    specs: [
      { k: "Display", v: "55\" 4K UHD" },
      { k: "OS", v: "WebOS" },
      { k: "Refresh Rate", v: "60Hz (Sports Mode)" },
      { k: "Ports", v: "3× HDMI, 2× USB" },
      { k: "Sound", v: "20W with Clear Voice" },
      { k: "Warranty", v: "2-Year Warranty" },
      { k: "Installation", v: "Free Home Setup" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹5,833", label: "No-cost EMI" },
      { months: 9, perMonth: "₹3,889", label: "No-cost EMI" },
      { months: 12, perMonth: "₹2,917", label: "No-cost EMI" },
    ],
  },
  "tv-43-fhd": {
    id: "tv-43-fhd",
    categorySlug: "tvs",
    tag: "Budget Pick",
    name: "ElectraHub 43\" FHD Smart LED TV",
    price: "₹19,999",
    mrp: "₹32,999",
    rating: 4.7,
    reviews: 850,
    short: "A crisp Full HD smart TV that’s easy to use for parents and perfect for everyday family viewing.",
    images: [imgTv43, imgTv55, imgTv65],
    specs: [
      { k: "Display", v: "43\" Full HD" },
      { k: "OS", v: "Smart UI (Easy Mode)" },
      { k: "Ports", v: "2× HDMI, 2× USB" },
      { k: "Sound", v: "16W" },
      { k: "Warranty", v: "2-Year Warranty" },
      { k: "Installation", v: "Free Home Setup" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹3,333", label: "No-cost EMI" },
      { months: 9, perMonth: "₹2,222", label: "No-cost EMI" },
      { months: 12, perMonth: "₹1,667", label: "No-cost EMI" },
    ],
  },
  "tv-65-qled": {
    id: "tv-65-qled",
    categorySlug: "tvs",
    tag: "New Arrival",
    name: "ElectraHub 65\" 4K QLED Pro TV",
    price: "₹54,999",
    mrp: "₹89,999",
    rating: 4.9,
    reviews: 320,
    short: "A big-screen QLED experience for cinema nights — richer colors, deeper contrast, premium design.",
    images: [imgTv65, imgTv55, imgTv43],
    specs: [
      { k: "Display", v: "65\" 4K QLED" },
      { k: "HDR", v: "HDR10+" },
      { k: "Motion", v: "Smooth Motion+" },
      { k: "Ports", v: "3× HDMI, 2× USB" },
      { k: "Sound", v: "24W" },
      { k: "Warranty", v: "2-Year Warranty" },
      { k: "Installation", v: "Free Home Setup" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹9,166", label: "No-cost EMI" },
      { months: 9, perMonth: "₹6,111", label: "No-cost EMI" },
      { months: 12, perMonth: "₹4,583", label: "No-cost EMI" },
    ],
  },
  "sb-200": {
    id: "sb-200",
    categorySlug: "soundbars",
    tag: "Great Value",
    name: "Cinematic Soundbar SB-200",
    price: "₹8,999",
    mrp: "₹14,999",
    rating: 4.6,
    reviews: 450,
    short: "Clear dialogue, deeper bass, and a compact design — perfect for upgrading your TV sound instantly.",
    images: [imgSb200, imgSb450],
    specs: [
      { k: "Output", v: "2.1 Channel" },
      { k: "Connectivity", v: "Bluetooth, HDMI ARC" },
      { k: "Sound", v: "Clear Voice\u2122" },
      { k: "Warranty", v: "2-Year Warranty" },
    ],
    emiplans: [
      { months: 3, perMonth: "₹3,000", label: "No-cost EMI" },
      { months: 6, perMonth: "₹1,500", label: "No-cost EMI" },
      { months: 9, perMonth: "₹1,000", label: "No-cost EMI" },
    ],
  },
  "sb-450": {
    id: "sb-450",
    categorySlug: "soundbars",
    tag: "Dolby Audio",
    name: "Dolby Soundbar SB-450 + Subwoofer",
    price: "₹14,999",
    mrp: "₹22,999",
    rating: 4.7,
    reviews: 210,
    short: "Room-filling Dolby Audio with punchy bass — for a true cinema feel in your living room.",
    images: [imgSb450, imgSb200],
    specs: [
      { k: "Output", v: "2.1 Channel + Subwoofer" },
      { k: "Audio", v: "Dolby Audio" },
      { k: "Connectivity", v: "Bluetooth, Optical, HDMI ARC" },
      { k: "Warranty", v: "2-Year Warranty" },
    ],
    emiplans: [
      { months: 3, perMonth: "₹5,000", label: "No-cost EMI" },
      { months: 6, perMonth: "₹2,500", label: "No-cost EMI" },
      { months: 9, perMonth: "₹1,667", label: "No-cost EMI" },
    ],
  },
  "wm-7kg": {
    id: "wm-7kg",
    categorySlug: "appliances",
    tag: "Hygiene Steam",
    name: "Front Load Washing Machine 7kg (Steam Care)",
    price: "₹23,999",
    mrp: "₹34,999",
    rating: 4.6,
    reviews: 190,
    short: "Gentle on fabrics, tough on stains — with steam care designed for everyday Indian laundry.",
    images: [imgWm7, imgWm9],
    specs: [
      { k: "Capacity", v: "7 kg" },
      { k: "Type", v: "Front Load" },
      { k: "Features", v: "Steam Care, Quick Wash" },
      { k: "Warranty", v: "2-Year Warranty" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹4,000", label: "No-cost EMI" },
      { months: 9, perMonth: "₹2,667", label: "No-cost EMI" },
      { months: 12, perMonth: "₹2,000", label: "No-cost EMI" },
    ],
  },
  "wm-9kg": {
    id: "wm-9kg",
    categorySlug: "appliances",
    tag: "AI Wash",
    name: "Front Load Washing Machine 9kg (AI Wash)",
    price: "₹31,999",
    mrp: "₹45,999",
    rating: 4.7,
    reviews: 120,
    short: "Smarter wash cycles that adapt to load and fabric — for efficient cleaning and better care.",
    images: [imgWm9, imgWm7],
    specs: [
      { k: "Capacity", v: "9 kg" },
      { k: "Type", v: "Front Load" },
      { k: "Features", v: "AI Wash, Hygiene Rinse" },
      { k: "Warranty", v: "2-Year Warranty" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹5,333", label: "No-cost EMI" },
      { months: 9, perMonth: "₹3,556", label: "No-cost EMI" },
      { months: 12, perMonth: "₹2,667", label: "No-cost EMI" },
    ],
  },
  "ds-43": {
    id: "ds-43",
    categorySlug: "business",
    tag: "Business Pro",
    name: "Digital Standee 43\" 4K Touch Display",
    price: "₹59,999",
    mrp: "₹89,999",
    rating: 4.8,
    reviews: 60,
    short: "A premium digital standee for retail and offices — crisp 4K visuals with touch-ready options.",
    images: [imgDs43, imgDs55],
    specs: [
      { k: "Display", v: "43\" 4K" },
      { k: "Use Case", v: "Retail / Office" },
      { k: "Mount", v: "Floor Stand" },
      { k: "Warranty", v: "2-Year Warranty" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹10,000", label: "No-cost EMI" },
      { months: 9, perMonth: "₹6,667", label: "No-cost EMI" },
      { months: 12, perMonth: "₹5,000", label: "No-cost EMI" },
    ],
  },
  "ds-55": {
    id: "ds-55",
    categorySlug: "business",
    tag: "High Brightness",
    name: "Digital Standee 55\" 4K Advertising Display",
    price: "₹74,999",
    mrp: "₹1,09,999",
    rating: 4.7,
    reviews: 38,
    short: "Built for attention — high brightness, premium build, and a bold 55\" screen for maximum impact.",
    images: [imgDs55, imgDs43],
    specs: [
      { k: "Display", v: "55\" 4K" },
      { k: "Brightness", v: "High Brightness" },
      { k: "Use Case", v: "Advertising / Retail" },
      { k: "Warranty", v: "2-Year Warranty" },
    ],
    emiplans: [
      { months: 6, perMonth: "₹12,500", label: "No-cost EMI" },
      { months: 9, perMonth: "₹8,333", label: "No-cost EMI" },
      { months: 12, perMonth: "₹6,250", label: "No-cost EMI" },
    ],
  },
};

function useProductId() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  return params.get("id") || "tv-55-webos";
}

export default function ProductPage() {
  const id = useProductId();
  const [qty, setQty] = useState(1);
  const [, setLocation] = useLocation();
  const addItem = useCartStore((s: { addItem: any }) => s.addItem);

  const product = productDetails[id] ?? productDetails["tv-55-webos"];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = product.images[activeIndex] ?? product.images[0];

  const costBreakdown = useMemo(
    () => [
      { label: "Product price", value: product.price },
      { label: "Installation", value: "₹0" },
      { label: "Delivery", value: "₹0" },
      { label: "GST", value: "Included" },
    ],
    [product.price]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Button
                variant="ghost"
                data-testid="button-back"
                onClick={() => setLocation(`/category?c=${product.categorySlug}`)}
              >
                ← Back to collection
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <Card className="rounded-2xl border overflow-hidden" data-testid="card-product-media">
                  <div className="aspect-video bg-muted/20">
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      data-testid="img-product-hero"
                    />
                  </div>
                </Card>

                <div className="flex items-center gap-2" data-testid="row-product-gallery">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    data-testid="button-gallery-prev"
                    onClick={() => setActiveIndex((i) => (i - 1 + product.images.length) % product.images.length)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {product.images.slice(0, 3).map((src, idx) => (
                      <button
                        key={src}
                        className={
                          "rounded-xl overflow-hidden border bg-muted/20 aspect-video transition-all " +
                          (idx === activeIndex ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/40")
                        }
                        data-testid={`button-gallery-thumb-${idx}`}
                        onClick={() => setActiveIndex(idx)}
                      >
                        <img src={src} alt={`${product.name} thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    data-testid="button-gallery-next"
                    onClick={() => setActiveIndex((i) => (i + 1) % product.images.length)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                {product.tag ? (
                  <Badge className="bg-orange-500 hover:bg-orange-600" data-testid="badge-product-tag">
                    {product.tag}
                  </Badge>
                ) : null}

                <h1 className="mt-3 text-3xl md:text-4xl font-heading font-bold" data-testid="text-product-title">
                  {product.name}
                </h1>

                <p className="mt-3 text-muted-foreground" data-testid="text-product-short">
                  {product.short}
                </p>

                <div className="mt-4 flex items-center gap-2" data-testid="text-product-rating">
                  <Star className="h-5 w-5 fill-orange-400 text-orange-400" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="mt-6 flex items-end gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground line-through" data-testid="text-product-mrp">
                      {product.mrp}
                    </div>
                    <div className="text-3xl font-bold" data-testid="text-product-price">
                      {product.price}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground" data-testid="text-product-includes">
                      Price includes GST + free installation.
                    </div>
                  </div>

                  <div className="ml-auto rounded-xl border bg-card px-4 py-2" data-testid="status-product-stock">
                    <div className="text-xs text-muted-foreground">Availability</div>
                    <div className="font-semibold text-foreground">In stock</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border bg-card p-3" data-testid="card-trust-inline-warranty">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <div className="mt-2 text-sm font-semibold">2-Year Warranty</div>
                  </div>
                  <div className="rounded-xl border bg-card p-3" data-testid="card-trust-inline-install">
                    <Wrench className="h-4 w-4 text-primary" />
                    <div className="mt-2 text-sm font-semibold">Free Installation</div>
                  </div>
                  <div className="rounded-xl border bg-card p-3" data-testid="card-trust-inline-emi">
                    <Percent className="h-4 w-4 text-primary" />
                    <div className="mt-2 text-sm font-semibold">No-cost EMI</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="h-12"
                    data-testid="button-add-to-cart"
                    onClick={() => {
                      addItem(
                        {
                          id: product.id,
                          name: product.name,
                          image: product.images[0] ?? activeImage,
                          price: product.price,
                          mrp: product.mrp,
                          emi: product.emiplans?.[2]?.perMonth ? `${product.emiplans[2].perMonth}/mo` : undefined,
                        },
                        qty
                      );
                      setLocation("/cart");
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="h-12" data-testid="button-check-emi" onClick={() => {}}>
                    Check EMI Options
                  </Button>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground" data-testid="status-secure-checkout">
                  <Lock className="h-4 w-4" /> 100% Secure Checkout
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-specs-title">
                  Key Specifications
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border bg-card p-4"
                      data-testid={`row-spec-${s.k.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      <div className="text-xs text-muted-foreground">{s.k}</div>
                      <div className="mt-1 font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-emi-title">
                  Installment Plans
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.emiplans.map((p) => (
                    <div key={p.months} className="rounded-xl border bg-card p-4" data-testid={`card-emi-${p.months}`}>
                      <div className="text-xs text-muted-foreground">{p.label}</div>
                      <div className="mt-1 text-xl font-bold">{p.perMonth}</div>
                      <div className="mt-1 text-xs text-muted-foreground">for {p.months} months</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-cost-title">
                  Transparent Cost Breakdown
                </h2>
                <div className="mt-4 rounded-2xl border bg-card p-5" data-testid="card-cost-breakdown">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {costBreakdown.map((c) => (
                      <div
                        key={c.label}
                        className="flex items-center justify-between col-span-2"
                        data-testid={`row-cost-${c.label.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        <span className="text-muted-foreground">{c.label}</span>
                        <span className="font-semibold">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-delivery-title">
                  Delivery
                </h2>
                <div className="mt-4 flex items-start gap-3 rounded-2xl border bg-card p-5" data-testid="card-delivery">
                  <Truck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Ships in 3–5 business days</div>
                    <div className="text-sm text-muted-foreground">Express delivery options available for select pin codes.</div>
                  </div>
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-qty-title">
                  Quantity
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <Button variant="outline" data-testid="button-qty-minus" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    -
                  </Button>
                  <div className="w-14 text-center font-semibold" data-testid="text-qty">
                    {qty}
                  </div>
                  <Button variant="outline" data-testid="button-qty-plus" onClick={() => setQty((q) => q + 1)}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
