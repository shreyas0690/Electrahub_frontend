import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapBulandshahr from "@/assets/store-map-bulandshahr.png";

export function StoreLocator() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 border-t" data-testid="section-store-locator">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-foreground text-background shadow-2xl">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" />

          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12">
            {/* Left */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90"
                data-testid="pill-store-offline"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span data-testid="text-store-offline">Experience ElectraHub Offline</span>
              </div>

              <h2
                className="mt-5 text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-white"
                data-testid="text-store-title"
              >
                Visit Our Store — Bulandshahr, UP
              </h2>

              <p className="mt-4 text-base md:text-lg text-white/75" data-testid="text-store-description">
                See picture quality in person, test soundbars, and get expert guidance. Walk in with your family—leave with the right choice.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="grid-store-highlights">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4" data-testid="card-store-highlight-0">
                  <div className="text-sm font-semibold text-white">Live demo zones</div>
                  <div className="mt-1 text-xs text-white/70">TV + Soundbar setup</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4" data-testid="card-store-highlight-1">
                  <div className="text-sm font-semibold text-white">Expert guidance</div>
                  <div className="mt-1 text-xs text-white/70">Right size for your room</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4" data-testid="card-store-highlight-2">
                  <div className="text-sm font-semibold text-white">Easy EMI help</div>
                  <div className="mt-1 text-xs text-white/70">Simple documentation</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3" data-testid="group-store-actions">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-foreground hover:bg-white/90"
                  data-testid="button-store-directions"
                >
                  Get Directions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/25 text-white hover:bg-white/10"
                  data-testid="button-store-dealer"
                >
                  Become a Dealer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-xs text-white/60" data-testid="text-store-address">
                  Unnamed Road, Akbarpur, Uttar Pradesh, 203001
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-3" data-testid="card-store-map">
                <div
                  className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/10"
                  data-testid="img-store-map-preview"
                >
                  <img
                    src={mapBulandshahr}
                    alt="Uttar Pradesh map showing Bulandshahr"
                    className="h-full w-full object-cover"
                    data-testid="img-store-map"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1" data-testid="row-store-map-meta">
                  <div>
                    <div className="text-sm font-semibold text-white" data-testid="text-store-city">
                      Bulandshahr, UP
                    </div>
                    <div className="text-xs text-white/60" data-testid="text-store-hours">
                      Call: +91 8477819222
                    </div>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80" data-testid="pill-store-status">
                    Offline demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
