import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/cart-store";
import { Banknote, CheckCircle2, CreditCard, MapPin, ShieldCheck, Truck } from "lucide-react";

const parsePrice = (v: string) => Number(v.replace(/[^0-9]/g, "")) || 0;

export default function CheckoutPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const items = useCartStore((s: { items: any[] }) => s.items);
  const clear = useCartStore((s: { clear: () => void }) => s.clear);

  const [step, setStep] = useState<"address" | "payment" | "review" | "success">("address");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [contact, setContact] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [address, setAddress] = useState({
    line1: "",
    city: "",
    state: "Uttar Pradesh",
    pincode: "",
  });

  const [payment, setPayment] = useState<{ method: "upi" | "card" | "cod"; upiId: string }>({
    method: "upi",
    upiId: "",
  });

  const subtotal = useMemo(() => items.reduce((sum: number, i: any) => sum + parsePrice(i.price) * i.qty, 0), [items]);
  const delivery = useMemo(() => (subtotal > 0 ? 0 : 0), [subtotal]);
  const total = subtotal + delivery;
  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  const canContinueAddress =
    contact.fullName.trim().length >= 2 &&
    /^[0-9]{10}$/.test(contact.phone.trim()) &&
    contact.email.trim().includes("@") &&
    address.line1.trim().length >= 6 &&
    address.city.trim().length >= 2 &&
    /^[0-9]{6}$/.test(address.pincode.trim());

  const canContinuePayment =
    payment.method === "cod" ||
    payment.method === "card" ||
    (payment.method === "upi" && payment.upiId.trim().includes("@"));

  const empty = items.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="text-xs font-semibold text-primary/80" data-testid="text-checkout-kicker">
                Secure Checkout
              </div>
              <h1 className="mt-2 text-3xl md:text-4xl font-heading font-bold" data-testid="text-checkout-title">
                Checkout
              </h1>
              <p className="mt-2 text-muted-foreground" data-testid="text-checkout-subtitle">
                Address → Payment → Review
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" data-testid="button-checkout-back" onClick={() => setLocation("/cart")}>Back to Cart</Button>
            </div>
          </div>

          {empty ? (
            <Card className="mt-8 rounded-2xl border p-6" data-testid="card-checkout-empty">
              <div className="text-lg font-semibold" data-testid="text-checkout-empty-title">Your cart is empty</div>
              <div className="mt-1 text-sm text-muted-foreground" data-testid="text-checkout-empty-subtitle">
                Add something first, then come back to checkout.
              </div>
              <Button className="mt-5 rounded-full" data-testid="button-checkout-go-shopping" onClick={() => setLocation("/category?c=tvs")}>Go shopping</Button>
            </Card>
          ) : (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="rounded-2xl border p-6 lg:col-span-2" data-testid="card-checkout-main">
                <div className="flex items-center gap-2" data-testid="row-checkout-steps">
                  <div className={"rounded-full border px-3 py-1 text-xs font-semibold " + (step === "address" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/30")}
                    data-testid="pill-step-address"
                  >
                    1. Address
                  </div>
                  <div className={"rounded-full border px-3 py-1 text-xs font-semibold " + (step === "payment" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/30")}
                    data-testid="pill-step-payment"
                  >
                    2. Payment
                  </div>
                  <div className={"rounded-full border px-3 py-1 text-xs font-semibold " + (step === "review" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/30")}
                    data-testid="pill-step-review"
                  >
                    3. Review
                  </div>
                </div>

                <Separator className="my-5" />

                {step === "address" ? (
                  <div className="space-y-5" data-testid="section-checkout-address">
                    <div className="rounded-2xl border bg-muted/20 p-4" data-testid="card-checkout-contact">
                      <div className="flex items-center gap-2 font-semibold" data-testid="text-contact-title">
                        <MapPin className="h-4 w-4 text-primary" /> Contact & Address
                      </div>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs text-muted-foreground" data-testid="label-fullname">Full name</div>
                          <Input
                            value={contact.fullName}
                            onChange={(e) => setContact((s) => ({ ...s, fullName: e.target.value }))}
                            placeholder="e.g. Rahul Sharma"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-fullname"
                          />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground" data-testid="label-phone">Phone</div>
                          <Input
                            value={contact.phone}
                            onChange={(e) => setContact((s) => ({ ...s, phone: e.target.value.replace(/[^0-9]/g, "").slice(0, 10) }))}
                            placeholder="10-digit mobile"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-phone"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <div className="text-xs text-muted-foreground" data-testid="label-email">Email</div>
                          <Input
                            value={contact.email}
                            onChange={(e) => setContact((s) => ({ ...s, email: e.target.value }))}
                            placeholder="you@example.com"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-email"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <div className="text-xs text-muted-foreground" data-testid="label-address">Address</div>
                          <Input
                            value={address.line1}
                            onChange={(e) => setAddress((s) => ({ ...s, line1: e.target.value }))}
                            placeholder="House no, street, locality"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-address"
                          />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground" data-testid="label-city">City</div>
                          <Input
                            value={address.city}
                            onChange={(e) => setAddress((s) => ({ ...s, city: e.target.value }))}
                            placeholder="Bulandshahr"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-city"
                          />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground" data-testid="label-pincode">Pincode</div>
                          <Input
                            value={address.pincode}
                            onChange={(e) => setAddress((s) => ({ ...s, pincode: e.target.value.replace(/[^0-9]/g, "").slice(0, 6) }))}
                            placeholder="203001"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-pincode"
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="text-xs text-muted-foreground" data-testid="text-address-hint">
                          Free installation will be scheduled after order confirmation.
                        </div>
                        <Button
                          className="rounded-full"
                          disabled={!canContinueAddress}
                          data-testid="button-continue-payment"
                          onClick={() => setStep("payment")}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {step === "payment" ? (
                  <div className="space-y-5" data-testid="section-checkout-payment">
                    <div className="rounded-2xl border bg-muted/20 p-4" data-testid="card-checkout-payment">
                      <div className="flex items-center gap-2 font-semibold" data-testid="text-payment-title">
                        <ShieldCheck className="h-4 w-4 text-primary" /> Payment Method
                      </div>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button
                          className={"rounded-2xl border p-4 text-left transition-colors " + (payment.method === "upi" ? "border-primary bg-primary/5" : "bg-background")}
                          onClick={() => setPayment((s) => ({ ...s, method: "upi" }))}
                          data-testid="button-pay-upi"
                        >
                          <div className="flex items-center gap-2 font-semibold"><Banknote className="h-4 w-4" /> UPI</div>
                          <div className="mt-1 text-xs text-muted-foreground">Pay via UPI ID</div>
                        </button>
                        <button
                          className={"rounded-2xl border p-4 text-left transition-colors " + (payment.method === "card" ? "border-primary bg-primary/5" : "bg-background")}
                          onClick={() => setPayment((s) => ({ ...s, method: "card" }))}
                          data-testid="button-pay-card"
                        >
                          <div className="flex items-center gap-2 font-semibold"><CreditCard className="h-4 w-4" /> Card</div>
                          <div className="mt-1 text-xs text-muted-foreground">Debit / Credit</div>
                        </button>
                        <button
                          className={"rounded-2xl border p-4 text-left transition-colors " + (payment.method === "cod" ? "border-primary bg-primary/5" : "bg-background")}
                          onClick={() => setPayment((s) => ({ ...s, method: "cod" }))}
                          data-testid="button-pay-cod"
                        >
                          <div className="flex items-center gap-2 font-semibold"><Truck className="h-4 w-4" /> COD</div>
                          <div className="mt-1 text-xs text-muted-foreground">Pay on delivery</div>
                        </button>
                      </div>

                      {payment.method === "upi" ? (
                        <div className="mt-4" data-testid="section-upi">
                          <div className="text-xs text-muted-foreground" data-testid="label-upi">UPI ID</div>
                          <Input
                            value={payment.upiId}
                            onChange={(e) => setPayment((s) => ({ ...s, upiId: e.target.value }))}
                            placeholder="name@bank"
                            className="mt-1 h-11 rounded-xl"
                            data-testid="input-upi"
                          />
                        </div>
                      ) : null}

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <Button variant="outline" className="rounded-full" data-testid="button-back-address" onClick={() => setStep("address")}>Back</Button>
                        <Button
                          className="rounded-full"
                          disabled={!canContinuePayment}
                          data-testid="button-continue-review"
                          onClick={() => setStep("review")}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {step === "review" ? (
                  <div className="space-y-5" data-testid="section-checkout-review">
                    <div className="rounded-2xl border bg-muted/20 p-4" data-testid="card-checkout-review">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-semibold" data-testid="text-review-title">Review & Place Order</div>
                        <div className="text-xs text-muted-foreground" data-testid="text-review-method">
                          Payment: {payment.method.toUpperCase()}
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="space-y-3" data-testid="list-review-items">
                        {items.map((it: any) => (
                          <div key={it.id} className="flex items-center justify-between text-sm" data-testid={`row-review-${it.id}`}>
                            <div className="min-w-0">
                              <div className="font-medium line-clamp-1" data-testid={`text-review-name-${it.id}`}>{it.name}</div>
                              <div className="text-xs text-muted-foreground" data-testid={`text-review-qty-${it.id}`}>Qty: {it.qty}</div>
                            </div>
                            <div className="font-semibold" data-testid={`text-review-line-${it.id}`}>{formatINR(parsePrice(it.price) * it.qty)}</div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex items-center justify-between text-sm" data-testid="row-review-subtotal">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-semibold" data-testid="text-review-subtotal">{formatINR(subtotal)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2" data-testid="row-review-delivery">
                        <span className="text-muted-foreground">Delivery</span>
                        <span className="font-semibold" data-testid="text-review-delivery">{formatINR(delivery)}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3" data-testid="row-review-total">
                        <span className="font-semibold">Total</span>
                        <span className="text-xl font-bold" data-testid="text-review-total">{formatINR(total)}</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <Button variant="outline" className="rounded-full" data-testid="button-back-payment" onClick={() => setStep("payment")}>Back</Button>
                        <Button
                          className="rounded-full"
                          data-testid="button-place-order"
                          onClick={() => {
                            toast({ title: "Order placed", description: "We’ll confirm your order details shortly." });
                            clear();
                            setIsSuccessOpen(true);
                            setStep("success");
                          }}
                        >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : null}

                <AlertDialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
                  <AlertDialogContent className="rounded-2xl">
                    <AlertDialogHeader>
                      <div className="mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-green-50 border border-green-200" data-testid="icon-order-success">
                        <CheckCircle2 className="h-7 w-7 text-green-700" />
                      </div>
                      <AlertDialogTitle className="text-center font-heading" data-testid="text-order-success-title">
                        Order placed!
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-center" data-testid="text-order-success-subtitle">
                        Your order is confirmed (prototype). We’ll share delivery & installation updates soon.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="rounded-xl border bg-muted/20 p-4" data-testid="card-order-success-details">
                      <div className="flex items-center justify-between text-sm" data-testid="row-order-success-total">
                        <span className="text-muted-foreground">Total paid</span>
                        <span className="font-semibold">{formatINR(total)}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm" data-testid="row-order-success-payment">
                        <span className="text-muted-foreground">Payment</span>
                        <span className="font-semibold">{payment.method.toUpperCase()}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm" data-testid="row-order-success-eta">
                        <span className="text-muted-foreground">Delivery</span>
                        <span className="font-semibold">3–5 business days</span>
                      </div>
                    </div>

                    <AlertDialogFooter className="sm:justify-center">
                      <AlertDialogAction
                        className="rounded-full"
                        data-testid="button-order-success-home"
                        onClick={() => setLocation("/")}
                      >
                        Back to Home
                      </AlertDialogAction>
                      <AlertDialogAction
                        className="rounded-full"
                        data-testid="button-order-success-shop"
                        onClick={() => setLocation("/category?c=tvs")}
                      >
                        Continue Shopping
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {step === "success" ? (
                  <div className="py-10 text-center" data-testid="section-checkout-success">
                    <div className="mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-green-50 border border-green-200" data-testid="icon-checkout-success">
                      <CheckCircle2 className="h-7 w-7 text-green-700" />
                    </div>
                    <h2 className="mt-4 text-2xl font-heading font-bold" data-testid="text-success-title">Order placed!</h2>
                    <p className="mt-2 text-muted-foreground" data-testid="text-success-subtitle">
                      We’ve shown the confirmation modal above. You can continue shopping anytime.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="rounded-full" data-testid="button-success-home" onClick={() => setLocation("/")}>Back to Home</Button>
                      <Button variant="outline" className="rounded-full" data-testid="button-success-shop" onClick={() => setLocation("/category?c=tvs")}>Continue Shopping</Button>
                    </div>
                  </div>
                ) : null}
              </Card>

              <div className="space-y-4">
                <Card className="rounded-2xl border p-6" data-testid="card-checkout-summary">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold" data-testid="text-checkout-summary-title">Order Summary</div>
                      <div className="text-xs text-muted-foreground" data-testid="text-checkout-summary-subtitle">GST included • Free installation</div>
                    </div>
                    <div className="rounded-full border bg-muted/30 px-3 py-1 text-xs font-semibold" data-testid="badge-checkout-secure">Secure</div>
                  </div>

                  <Separator className="my-5" />

                  <div className="space-y-3" data-testid="list-checkout-mini">
                    {items.slice(0, 3).map((it: any) => (
                      <div key={it.id} className="flex items-center justify-between text-sm" data-testid={`row-mini-${it.id}`}>
                        <span className="text-muted-foreground line-clamp-1" data-testid={`text-mini-name-${it.id}`}>{it.name} × {it.qty}</span>
                        <span className="font-semibold" data-testid={`text-mini-line-${it.id}`}>{formatINR(parsePrice(it.price) * it.qty)}</span>
                      </div>
                    ))}
                    {items.length > 3 ? (
                      <div className="text-xs text-muted-foreground" data-testid="text-mini-more">
                        +{items.length - 3} more item(s)
                      </div>
                    ) : null}
                  </div>

                  <Separator className="my-5" />

                  <div className="flex items-center justify-between text-sm" data-testid="row-mini-subtotal">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold" data-testid="text-mini-subtotal">{formatINR(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-3" data-testid="row-mini-delivery">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-semibold" data-testid="text-mini-delivery">{formatINR(delivery)}</span>
                  </div>
                  <Separator className="my-5" />
                  <div className="flex items-center justify-between" data-testid="row-mini-total">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold" data-testid="text-mini-total">{formatINR(total)}</span>
                  </div>
                </Card>

                <Card className="rounded-2xl border p-6" data-testid="card-checkout-trust">
                  <div className="flex items-start gap-3" data-testid="row-checkout-trust">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold" data-testid="text-trust-title">Protected payments</div>
                      <div className="text-sm text-muted-foreground" data-testid="text-trust-subtitle">
                        We never store card details in this prototype.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
