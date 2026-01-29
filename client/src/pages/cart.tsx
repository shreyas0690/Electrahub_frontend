import { useMemo } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/cart-store";
import { Minus, Plus, Trash2, ShieldCheck, Truck, Wrench, Percent } from "lucide-react";

export default function CartPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const setQty = useCartStore((s) => s.setQty);
  const clear = useCartStore((s) => s.clear);

  const subtotal = useCartStore((s) => s.subtotal)();
  const delivery = useMemo(() => (subtotal > 0 ? 0 : 0), [subtotal]);
  const total = subtotal + delivery;

  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading font-bold" data-testid="text-cart-title">Cart</h1>
          <p className="mt-2 text-muted-foreground" data-testid="text-cart-subtitle">
            Review your items, adjust quantity, and see the final total.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border p-6 lg:col-span-2" data-testid="card-cart-items">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="font-semibold" data-testid="text-cart-items-title">Items</div>
                  <div className="text-xs text-muted-foreground" data-testid="text-cart-items-subtitle">
                    {items.length} {items.length === 1 ? "item" : "items"} in your cart
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    data-testid="button-cart-continue"
                    onClick={() => setLocation("/category?c=tvs")}
                  >
                    Continue shopping
                  </Button>
                  {items.length > 0 ? (
                    <Button
                      variant="outline"
                      className="rounded-full"
                      data-testid="button-cart-clear"
                      onClick={() => {
                        clear();
                        toast({ title: "Cart cleared", description: "All items have been removed." });
                      }}
                    >
                      Clear
                    </Button>
                  ) : null}
                </div>
              </div>

              <Separator className="my-5" />

              {items.length === 0 ? (
                <div className="text-muted-foreground" data-testid="text-cart-empty">
                  Your cart is empty.
                </div>
              ) : (
                <div className="space-y-4" data-testid="list-cart-items">
                  {items.map((it) => (
                    <div
                      key={it.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border bg-card p-4"
                      data-testid={`row-cart-item-${it.id}`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="h-20 w-28 overflow-hidden rounded-xl bg-muted/20 border" data-testid={`imgwrap-cart-${it.id}`}>
                          <img
                            src={it.image}
                            alt={it.name}
                            className="h-full w-full object-cover"
                            data-testid={`img-cart-item-${it.id}`}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-heading font-bold leading-snug line-clamp-2" data-testid={`text-cart-name-${it.id}`}>
                            {it.name}
                          </div>
                          <div className="mt-1 flex items-center gap-2" data-testid={`text-cart-price-${it.id}`}>
                            <span className="font-semibold">{it.price}</span>
                            {it.mrp ? <span className="text-xs text-muted-foreground line-through">{it.mrp}</span> : null}
                          </div>
                          {it.emi ? (
                            <div className="mt-2 text-xs font-medium text-green-700 bg-green-50 inline-flex px-2 py-1 rounded" data-testid={`text-cart-emi-${it.id}`}>
                              EMI starts at {it.emi}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="sm:ml-auto flex items-center justify-between sm:justify-end gap-4">
                        <div className="flex items-center gap-2" data-testid={`controls-cart-qty-${it.id}`}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            data-testid={`button-qty-minus-${it.id}`}
                            onClick={() => setQty(it.id, it.qty - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="w-10 text-center font-semibold" data-testid={`text-qty-${it.id}`}>
                            {it.qty}
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            data-testid={`button-qty-plus-${it.id}`}
                            onClick={() => setQty(it.id, it.qty + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full"
                          data-testid={`button-remove-${it.id}`}
                          onClick={() => {
                            removeItem(it.id);
                            toast({ title: "Removed", description: "Item removed from cart." });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <div className="space-y-4">
              <Card className="rounded-2xl border p-6" data-testid="card-cart-summary">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold" data-testid="text-summary-title">Order Summary</div>
                    <div className="text-xs text-muted-foreground" data-testid="text-summary-subtitle">GST included • Free installation</div>
                  </div>
                  <div className="rounded-full border bg-muted/30 px-3 py-1 text-xs font-semibold" data-testid="badge-summary-secure">
                    Secure
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-center justify-between text-sm" data-testid="row-summary-subtotal">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold" data-testid="text-summary-subtotal">{formatINR(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-3" data-testid="row-summary-delivery">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-semibold" data-testid="text-summary-delivery">{formatINR(delivery)}</span>
                </div>

                <Separator className="my-5" />

                <div className="flex items-center justify-between" data-testid="row-summary-total">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold" data-testid="text-summary-total">{formatINR(total)}</span>
                </div>

                <Button
                  className="w-full mt-6 h-11"
                  data-testid="button-cart-checkout"
                  disabled={items.length === 0}
                  onClick={() => {
                    toast({
                      title: "Checkout (prototype)",
                      description: "Checkout flow will be connected later. Your cart is ready!",
                    });
                  }}
                >
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-xs text-muted-foreground" data-testid="text-summary-note">
                  Payment + order placement will be enabled when backend is connected.
                </div>
              </Card>

              <Card className="rounded-2xl border p-6" data-testid="card-cart-trust">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2" data-testid="row-trust-warranty">
                    <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">2-Year Warranty</div>
                      <div className="text-xs text-muted-foreground">Hassle-free support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2" data-testid="row-trust-install">
                    <Wrench className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Free Installation</div>
                      <div className="text-xs text-muted-foreground">At your doorstep</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2" data-testid="row-trust-delivery">
                    <Truck className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Fast Delivery</div>
                      <div className="text-xs text-muted-foreground">3–5 business days</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2" data-testid="row-trust-emi">
                    <Percent className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">No-cost EMI</div>
                      <div className="text-xs text-muted-foreground">Easy monthly plans</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
