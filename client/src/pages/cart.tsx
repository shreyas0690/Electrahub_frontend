import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading font-bold" data-testid="text-cart-title">Cart</h1>
          <p className="mt-2 text-muted-foreground" data-testid="text-cart-subtitle">
            This is a mock cart for the prototype.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border p-6 lg:col-span-2" data-testid="card-cart-items">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Items</div>
                <Button variant="ghost" data-testid="button-cart-continue" onClick={() => setLocation("/category?c=tvs")}>
                  Continue shopping
                </Button>
              </div>
              <Separator className="my-5" />
              <div className="text-muted-foreground" data-testid="text-cart-empty">
                Your cart is empty (prototype).
              </div>
            </Card>

            <Card className="rounded-2xl border p-6" data-testid="card-cart-summary">
              <div className="font-semibold">Order Summary</div>
              <Separator className="my-5" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">₹0</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-3">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-semibold">₹0</span>
              </div>
              <Separator className="my-5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-bold">₹0</span>
              </div>
              <Button className="w-full mt-6 h-11" data-testid="button-cart-checkout" onClick={() => {}}>
                Proceed to Checkout
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
