import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/lib/cart-store";
import { useMemo, useState } from "react";

export function Navbar() {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const items = useCartStore((s: { items: { qty: number }[] }) => s.items);
  const cartCount = useMemo(() => items.reduce((sum: number, i: { qty: number }) => sum + i.qty, 0), [items]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-xl"
      data-testid="header-navbar"
    >
      {/* Top Bar (desktop): compact trust + support */}
      <div
        className="hidden md:block w-full bg-gradient-to-r from-foreground via-foreground to-foreground text-background"
        data-testid="bar-navbar-top"
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 opacity-90" data-testid="text-navbar-support">
              <Phone className="h-3.5 w-3.5" /> +91 8307922636
            </span>
          </div>
          <div className="flex items-center gap-2" data-testid="group-navbar-trust">
            <span className="rounded-full bg-white/10 px-3 py-1" data-testid="pill-navbar-trust-installation">Free Installation</span>
            <span className="rounded-full bg-white/10 px-3 py-1" data-testid="pill-navbar-trust-returns">Easy Returns</span>
            <span className="rounded-full bg-white/10 px-3 py-1" data-testid="pill-navbar-trust-emi">No Cost EMI</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="-ml-2 rounded-full"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" data-testid="sheet-mobile-nav">
                <div className="mt-6">
                  <div className="text-lg font-heading font-bold" data-testid="text-mobile-brand">ElectraHub</div>
                  <div className="mt-1 text-sm text-muted-foreground" data-testid="text-mobile-tagline">
                    Smart TVs & home essentials
                  </div>

                  <div className="mt-6" data-testid="group-mobile-links">
                    <nav className="flex flex-col gap-1">
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
                        data-testid="link-mobile-home"
                      >
                        Home
                      </Link>
                      <Link
                        href="/category?c=tvs"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
                        data-testid="link-mobile-tvs"
                      >
                        Smart TVs
                      </Link>
                      <Link
                        href="/category?c=soundbars"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
                        data-testid="link-mobile-soundbars"
                      >
                        Soundbars
                      </Link>
                      <Link
                        href="/offers"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
                        data-testid="link-mobile-offers"
                      >
                        Festive Offers
                      </Link>
                    </nav>

                    <div className="mt-6 grid grid-cols-3 gap-2 text-xs" data-testid="grid-mobile-trust">
                      <div className="rounded-xl border bg-card px-2 py-2 text-center" data-testid="card-mobile-trust-emi">
                        No-cost EMI
                      </div>
                      <div className="rounded-xl border bg-card px-2 py-2 text-center" data-testid="card-mobile-trust-install">
                        Free install
                      </div>
                      <div className="rounded-xl border bg-card px-2 py-2 text-center" data-testid="card-mobile-trust-warranty">
                        2-year warranty
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <span
              className="text-2xl font-extrabold font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-700"
              data-testid="text-navbar-brand"
            >
              ElectraHub
            </span>
            <span className="hidden lg:inline-flex text-xs text-muted-foreground" data-testid="text-navbar-brand-sub">
              for Indian families
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm" data-testid="nav-desktop">
            <Link
              href="/"
              className="rounded-full px-4 py-2 font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              data-testid="link-nav-home"
            >
              Home
            </Link>
            <Link
              href="/category?c=tvs"
              className="rounded-full px-4 py-2 font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              data-testid="link-nav-tvs"
            >
              Smart TVs
            </Link>
            <Link
              href="/category?c=soundbars"
              className="rounded-full px-4 py-2 font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              data-testid="link-nav-soundbars"
            >
              Soundbars
            </Link>
            <Link
              href="/offers"
              className="rounded-full px-4 py-2 font-semibold text-primary hover:bg-primary/10 transition-colors"
              data-testid="link-nav-offers"
            >
              Offers
            </Link>
          </nav>

          {/* Search (desktop) */}
          <div className="hidden md:flex flex-1 max-w-md relative" data-testid="group-navbar-search">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search TVs, Soundbars, Washing Machines..."
              className="w-full pl-10 rounded-full bg-muted/50 border-transparent focus:bg-background focus:border-input transition-all"
              data-testid="input-navbar-search"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-2" data-testid="group-navbar-actions">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              data-testid="button-mobile-search"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/login" data-testid="link-nav-login">
              <Button variant="ghost" size="icon" className="rounded-full" data-testid="button-account">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
              data-testid="button-cart"
              onClick={() => setLocation("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 ? (
                <span
                  className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-primary-foreground ring-2 ring-background"
                  data-testid="badge-cart-count"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              ) : (
                <span
                  className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary/40 ring-2 ring-background"
                  data-testid="badge-cart-dot"
                />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}