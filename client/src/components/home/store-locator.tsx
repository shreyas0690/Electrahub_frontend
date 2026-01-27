import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoreLocator() {
  return (
    <section className="py-16 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
                <MapPin className="h-5 w-5" />
                <span>Experience ElectraHub Offline</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Visit Our First Experience Center
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Coming soon to Indiranagar, Bangalore. See the picture quality in person, test the soundbars, and get expert advice from our team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-foreground hover:bg-gray-100">
                  Get Directions
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Become a Dealer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Visual placeholder for store map/image */}
            <div className="hidden md:block w-full max-w-xs aspect-video bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
               <span className="text-white/50 font-medium">Store Map Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}