import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ExternalLink, MapPin, Phone, Route, Clock, Navigation } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import directionsBg from "@/assets/images/directions-map-bg.png";

export default function DirectionsPage() {
  const destinationAddress = "Unnamed Road, Akbarpur, Uttar Pradesh, 203001, India";
  const [from, setFrom] = useState("");

  const gmapsUrl = useMemo(() => {
    const base = "https://www.google.com/maps/dir/?api=1";
    const params = new URLSearchParams();
    params.set("destination", destinationAddress);
    if (from.trim().length > 0) params.set("origin", from.trim());
    params.set("travelmode", "driving");
    return `${base}&${params.toString()}`;
  }, [from]);

  return (
    <div className="min-h-screen bg-background" data-testid="page-directions">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <header className="rounded-3xl border bg-card/60 backdrop-blur p-8" data-testid="card-directions-hero">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6" data-testid="row-directions-hero">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur px-4 py-2 text-xs text-muted-foreground"
                  data-testid="pill-directions"
                >
                  <Route className="h-4 w-4 text-primary" />
                  Get Directions
                </div>
                <h1 className="mt-4 text-3xl md:text-4xl font-heading font-extrabold tracking-tight" data-testid="text-directions-title">
                  Find ElectraHub Store
                </h1>
                <p className="mt-2 text-sm md:text-base text-muted-foreground" data-testid="text-directions-subtitle">
                  Get the best route to our Bulandshahr location. Open in Google Maps.
                </p>
              </div>

              <div className="flex flex-wrap gap-2" data-testid="group-directions-actions">
                <a href={gmapsUrl} target="_blank" rel="noreferrer" data-testid="link-directions-openmaps">
                  <Button className="rounded-2xl" data-testid="button-directions-openmaps">
                    Open in Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/dealer" data-testid="link-directions-dealer">
                  <Button variant="outline" className="rounded-2xl" data-testid="button-directions-dealer">
                    Become a Dealer
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8" data-testid="section-directions-content">
            <div className="lg:col-span-7" data-testid="panel-directions-map">
              <div className="relative overflow-hidden rounded-3xl border bg-foreground text-background" data-testid="card-directions-map">
                <div className="absolute inset-0" aria-hidden>
                  <img src={directionsBg} alt="" className="h-full w-full object-cover opacity-80" data-testid="img-directions-bg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/60" />
                </div>

                <div className="relative z-10 p-6 md:p-8" data-testid="wrap-directions-map">
                  <div className="flex items-start justify-between gap-4" data-testid="row-directions-address">
                    <div className="max-w-md">
                      <div className="flex items-center gap-2 text-white/90" data-testid="row-directions-destination">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div className="text-sm font-semibold" data-testid="text-directions-destination-title">Destination</div>
                      </div>
                      <div className="mt-2 text-sm text-white/75" data-testid="text-directions-destination">
                        {destinationAddress}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3" data-testid="card-directions-hours">
                      <div className="flex items-center gap-2 text-white/90" data-testid="row-directions-hours">
                        <Clock className="h-4 w-4 text-primary" />
                        <div className="text-sm font-semibold" data-testid="text-directions-hours-title">Hours</div>
                      </div>
                      <div className="mt-1 text-xs text-white/70" data-testid="text-directions-hours">10:00 AM  8:00 PM</div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3" data-testid="grid-directions-info">
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4" data-testid="card-directions-info-0">
                      <div className="flex items-center gap-2 text-white/90" data-testid="row-directions-call">
                        <Phone className="h-4 w-4 text-primary" />
                        <div className="text-sm font-semibold" data-testid="text-directions-call-title">Call / WhatsApp</div>
                      </div>
                      <div className="mt-1 text-xs text-white/70" data-testid="text-directions-call">+91 8477819222</div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4" data-testid="card-directions-info-1">
                      <div className="flex items-center gap-2 text-white/90" data-testid="row-directions-mode">
                        <Navigation className="h-4 w-4 text-primary" />
                        <div className="text-sm font-semibold" data-testid="text-directions-mode-title">Recommended</div>
                      </div>
                      <div className="mt-1 text-xs text-white/70" data-testid="text-directions-mode">Car / Bike route</div>
                    </div>
                  </div>

                  <div className="mt-6" data-testid="group-directions-origin">
                    <label className="text-sm font-medium text-white/90" htmlFor="directions-from" data-testid="label-directions-from">
                      Starting from (optional)
                    </label>
                    <div className="mt-2 flex flex-col sm:flex-row gap-2" data-testid="row-directions-from">
                      <Input
                        id="directions-from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        placeholder="e.g., Khurja / Noida / Delhi"
                        className="rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        data-testid="input-directions-from"
                      />
                      <a href={gmapsUrl} target="_blank" rel="noreferrer" data-testid="link-directions-generate">
                        <Button
                          className="rounded-2xl bg-white text-foreground hover:bg-white/90"
                          data-testid="button-directions-generate"
                        >
                          Get route
                        </Button>
                      </a>
                    </div>
                    <div className="mt-2 text-xs text-white/60" data-testid="text-directions-note">
                      This opens Google Maps in a new tab.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5" data-testid="panel-directions-side">
              <div className="rounded-3xl border bg-card/60 backdrop-blur p-6" data-testid="card-directions-tips">
                <h2 className="text-xl font-heading font-bold" data-testid="text-directions-tips-title">Before you visit</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground" data-testid="list-directions-tips">
                  <li className="flex items-start gap-2" data-testid="row-directions-tip-0">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Bring room size info for best TV size recommendation.
                  </li>
                  <li className="flex items-start gap-2" data-testid="row-directions-tip-1">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    For EMI help, carry basic ID/address proof. (Prototype)
                  </li>
                  <li className="flex items-start gap-2" data-testid="row-directions-tip-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Call before coming for live demo availability.
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-2" data-testid="group-directions-side-actions">
                  <a href={gmapsUrl} target="_blank" rel="noreferrer" data-testid="link-directions-openmaps-2">
                    <Button className="w-full rounded-2xl" data-testid="button-directions-openmaps-2">
                      Open Maps
                    </Button>
                  </a>
                  <Link href="/" data-testid="link-directions-back">
                    <Button variant="outline" className="w-full rounded-2xl" data-testid="button-directions-back">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
