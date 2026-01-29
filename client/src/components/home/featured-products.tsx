import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/cart-store";
import { useLocation } from "wouter";
import { ArrowRight, ShoppingCart, Star, ShieldCheck, Wrench, Truck, Percent, Sparkles } from "lucide-react";

import imgTv55 from "@/assets/product-tv-55.png";
import imgTv43 from "@/assets/product-tv-43.png";
import imgTv65 from "@/assets/product-tv-65.png";
import imgSb200 from "@/assets/product-soundbar-200.png";
import imgSb450 from "@/assets/product-soundbar-450.png";
import imgWm7 from "@/assets/product-wm-7kg.png";
import imgWm9 from "@/assets/product-wm-9kg.png";
import imgDs43 from "@/assets/product-standee-43.png";
import imgDs55 from "@/assets/product-standee-55.png";

type FeaturedProduct = {
  id: string;
  name: string;
  price: string;
  mrp: string;
  emi?: string;
  rating: number;
  reviews: number;
  tag: string;
  categorySlug: "tvs" | "soundbars" | "appliances" | "business";
  image: string;
  highlights: string[];
};

const featured: FeaturedProduct[] = [
  {
    id: "tv-55-webos",
    name: "ElectraHub 55\" 4K WebOS Smart TV",
    price: "₹34,999",
    mrp: "₹59,999",
    emi: "₹1,945/mo",
    rating: 4.8,
    reviews: 1240,
    tag: "Best Seller",
    categorySlug: "tvs",
    image: imgTv55,
    highlights: ["4K UHD + WebOS", "Free installation", "2-year warranty"],
  },
  {
    id: "sb-450",
    name: "Dolby Soundbar SB-450 + Subwoofer",
    price: "₹14,999",
    mrp: "₹22,999",
    emi: "₹835/mo",
    rating: 4.7,
    reviews: 210,
    tag: "Dolby Audio",
    categorySlug: "soundbars",
    image: imgSb450,
    highlights: ["Dolby + Deep bass", "Bluetooth 5.0", "Wall-mount ready"],
  },
  {
    id: "wm-9kg",
    name: "Front Load Washing Machine 9kg (AI Wash)",
    price: "₹31,999",
    mrp: "₹45,999",
    emi: "₹1,780/mo",
    rating: 4.7,
    reviews: 120,
    tag: "AI Wash",
    categorySlug: "appliances",
    image: imgWm9,
    highlights: ["AI fabric care", "Hygiene cycle", "10-year motor"],
  },
  {
    id: "ds-55",
    name: "Digital Standee 55\" 4K Advertising Display",
    price: "₹74,999",
    mrp: "₹1,09,999",
    rating: 4.7,
    reviews: 38,
    tag: "High Brightness",
    categorySlug: "business",
    image: imgDs55,
    highlights: ["4K signage", "Commercial-grade", "Remote CMS ready"],
  },
  {
    id: "tv-65-qled",
    name: "ElectraHub 65\" 4K QLED Pro TV",
    price: "₹54,999",
    mrp: "₹89,999",
    emi: "₹3,055/mo",
    rating: 4.9,
    reviews: 320,
    tag: "New Arrival",
    categorySlug: "tvs",
    image: imgTv65,
    highlights: ["QLED color", "120Hz motion", "HDR10+"],
  },
  {
    id: "sb-200",
    name: "Cinematic Soundbar SB-200",
    price: "₹8,999",
    mrp: "₹14,999",
    emi: "₹500/mo",
    rating: 4.6,
    reviews: 450,
    tag: "Great Value",
    categorySlug: "soundbars",
    image: imgSb200,
    highlights: ["Cinema sound", "Compact design", "Easy setup"],
  },
  {
    id: "tv-43-fhd",
    name: "ElectraHub 43\" FHD Smart LED TV",
    price: "₹19,999",
    mrp: "₹32,999",
    emi: "₹1,110/mo",
    rating: 4.7,
    reviews: 850,
    tag: "Budget Pick",
    categorySlug: "tvs",
    image: imgTv43,
    highlights: ["FHD clarity", "Family mode", "Voice control"],
  },
  {
    id: "wm-7kg",
    name: "Front Load Washing Machine 7kg (Steam Care)",
    price: "₹23,999",
    mrp: "₹34,999",
    emi: "₹1,330/mo",
    rating: 4.6,
    reviews: 190,
    tag: "Hygiene Steam",
    categorySlug: "appliances",
    image: imgWm7,
    highlights: ["Steam care", "Quick wash", "Low vibration"],
  },
  {
    id: "ds-43",
    name: "Digital Standee 43\" 4K Touch Display",
    price: "₹59,999",
    mrp: "₹89,999",
    rating: 4.8,
    reviews: 60,
    tag: "Business Pro",
    categorySlug: "business",
    image: imgDs43,
    highlights: ["Touch-ready", "High visibility", "Built for retail"],
  },
];

const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const parsePrice = (v: string) => Number(v.replace(/[^0-9]/g, "")) || 0;

export function FeaturedProducts() {
  const [, setLocation] = useLocation();
  const addItem = useCartStore((s: { addItem: any }) => s.addItem);
  const cartCount = useCartStore((s: { items: any[] }) => s.items).reduce(
    (sum: number, it: any) => sum + (it?.qty ?? 0),
    0
  );

  return (
    <section className="py-20 bg-background" data-testid="section-best-sellers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 text-primary bg-primary/5"
            data-testid="badge-best-sellers"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Customer Favorites
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3" data-testid="text-best-sellers-title">
            Best Sellers for Every Home
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-best-sellers-subtitle">
            TVs, soundbars, washing machines, and digital standees — curated for Indian homes with EMI, free installation, and a 2-year warranty.
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-5xl rounded-2xl border bg-card/60 backdrop-blur px-5 py-4" data-testid="panel-best-sellers-benefits">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-center gap-3 rounded-xl bg-muted/30 px-4 py-3" data-testid="benefit-emi">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Percent className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Easy EMI</div>
                <div className="text-xs text-muted-foreground">No-cost plans available</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-muted/30 px-4 py-3" data-testid="benefit-installation">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Free Installation</div>
                <div className="text-xs text-muted-foreground">By ElectraHub experts</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-muted/30 px-4 py-3" data-testid="benefit-warranty">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">2-Year Warranty</div>
                <div className="text-xs text-muted-foreground">Peace of mind included</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-muted/30 px-4 py-3" data-testid="benefit-delivery">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Fast Delivery</div>
                <div className="text-xs text-muted-foreground">3–5 business days</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-best-sellers">
          {featured.slice(0, 8).map((product: FeaturedProduct) => (
            <button
              key={product.id}
              type="button"
              className="group flex flex-col bg-card border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-left"
              data-testid={`card-best-seller-${product.id}`}
              onClick={() => setLocation(`/product?id=${product.id}`)}
            >
              <div className="relative aspect-[4/3] bg-muted/20 p-6 flex items-center justify-center overflow-hidden">
                <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600 z-10" data-testid={`badge-best-seller-tag-${product.id}`}>{product.tag}</Badge>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-4">
                  <div className="flex items-end justify-between mb-1">
                    <div>
                      <span className="text-sm text-muted-foreground line-through mr-2">{product.mrp}</span>
                      <span className="text-xl font-bold text-foreground">{product.price}</span>
                    </div>
                    <Button size="icon" className="rounded-full h-10 w-10 shrink-0 shadow-sm">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs font-medium text-green-600 bg-green-50 inline-block px-2 py-1 rounded">
                    EMI starts at {product.emi}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3" data-testid="row-best-sellers-cta">
          <Button
            size="lg"
            className="min-w-[240px] rounded-full bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25"
            data-testid="button-best-sellers-view-all"
            onClick={() => setLocation("/category?c=tvs")}
          >
            Browse all collections
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}