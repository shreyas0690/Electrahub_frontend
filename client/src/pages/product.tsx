import { useMemo, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Star, ShieldCheck, Lock, Truck, Wrench, Percent } from "lucide-react";

const productDetails: Record<
  string,
  {
    id: string;
    name: string;
    price: string;
    mrp: string;
    rating: number;
    reviews: number;
    short: string;
    specs: Array<{ k: string; v: string }>;
    emiplans: Array<{ months: number; perMonth: string; label: string }>;
  }
> = {
  "tv-55-webos": {
    id: "tv-55-webos",
    name: "ElectraHub 55\" 4K WebOS Smart LED TV",
    price: "₹34,999",
    mrp: "₹59,999",
    rating: 4.8,
    reviews: 1240,
    short: "Premium WebOS Smart TV built for Indian homes — stunning 4K clarity, smooth streaming, and free installation.",
    specs: [
      { k: "Display", v: "55\" 4K UHD" },
      { k: "OS", v: "WebOS" },
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

  const product = productDetails[id] ?? productDetails["tv-55-webos"];

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
              <Button variant="ghost" data-testid="button-back" onClick={() => setLocation("/category?c=tvs")}> 
                ← Back to collection
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Card className="rounded-2xl border overflow-hidden" data-testid="card-product-media">
                <div className="aspect-video bg-muted/30 flex items-center justify-center">
                  <div className="text-muted-foreground font-medium" data-testid="text-product-media-placeholder">
                    Product Gallery (images/zoom)
                  </div>
                </div>
              </Card>

              <div>
                <Badge className="bg-orange-500 hover:bg-orange-600" data-testid="badge-product-tag">Best Seller</Badge>
                <h1 className="mt-3 text-3xl md:text-4xl font-heading font-bold" data-testid="text-product-title">
                  {product.name}
                </h1>

                <div className="mt-3 flex items-center gap-2" data-testid="text-product-rating">
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
                  <Button size="lg" className="h-12" data-testid="button-add-to-cart" onClick={() => {}}>
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

                <h2 className="text-lg font-heading font-bold" data-testid="text-specs-title">Key Specifications</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map((s) => (
                    <div key={s.k} className="rounded-xl border bg-card p-4" data-testid={`row-spec-${s.k.replace(/\s+/g, "-").toLowerCase()}`}>
                      <div className="text-xs text-muted-foreground">{s.k}</div>
                      <div className="mt-1 font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-emi-title">Installment Plans</h2>
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

                <h2 className="text-lg font-heading font-bold" data-testid="text-cost-title">Transparent Cost Breakdown</h2>
                <div className="mt-4 rounded-2xl border bg-card p-5" data-testid="card-cost-breakdown">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {costBreakdown.map((c) => (
                      <div key={c.label} className="flex items-center justify-between col-span-2" data-testid={`row-cost-${c.label.replace(/\s+/g, "-").toLowerCase()}`}>
                        <span className="text-muted-foreground">{c.label}</span>
                        <span className="font-semibold">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-delivery-title">Delivery</h2>
                <div className="mt-4 flex items-start gap-3 rounded-2xl border bg-card p-5" data-testid="card-delivery">
                  <Truck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Ships in 3–5 business days</div>
                    <div className="text-sm text-muted-foreground">Express delivery options available for select pin codes.</div>
                  </div>
                </div>

                <Separator className="my-8" />

                <h2 className="text-lg font-heading font-bold" data-testid="text-qty-title">Quantity</h2>
                <div className="mt-4 flex items-center gap-3">
                  <Button
                    variant="outline"
                    data-testid="button-qty-minus"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    -
                  </Button>
                  <Input
                    value={qty}
                    onChange={() => {}}
                    className="w-16 text-center"
                    data-testid="input-qty"
                  />
                  <Button
                    variant="outline"
                    data-testid="button-qty-plus"
                    onClick={() => setQty((q) => q + 1)}
                  >
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
