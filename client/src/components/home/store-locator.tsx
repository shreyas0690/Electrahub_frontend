import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapBulandshahr from "@/assets/store-map-bulandshahr.png";

export function StoreLocator() {
  return (
    <section className="py-16 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div
                className="inline-flex items-center gap-2 text-primary font-bold mb-4"
                data-testid="text-store-offline"
              >
                <MapPin className="h-5 w-5" />
                <span>Experience ElectraHub Offline</span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white"
                data-testid="text-store-title"
              >
                Visit Our ElectraHub Store — Bulandshahr, UP
              </h2>
              <p className="text-gray-300 text-lg mb-6" data-testid="text-store-description">
                Coming soon to Bulandshahr, Uttar Pradesh. See picture quality in person, test soundbars, and get expert guidance from our team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-gray-100"
                  data-testid="button-store-directions"
                >
                  Get Directions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  data-testid="button-store-dealer"
                >
                  Become a Dealer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              className="hidden md:block w-full max-w-md aspect-video bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              data-testid="img-store-map-preview"
            >
              <img
                src={mapBulandshahr}
                alt="Uttar Pradesh map showing Bulandshahr"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
