import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Building2, CheckCircle2, MapPin, Phone, Store, Truck } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dealerHeroBg from "@/assets/images/dealer-hero-bg.png";

export default function DealerPage() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [business, setBusiness] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return name.trim().length > 1 && phone.trim().length > 6 && city.trim().length > 1 && business.trim().length > 1;
  }, [name, phone, city, business]);

  return (
    <div className="min-h-screen bg-background" data-testid="page-dealer">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <header
          className="relative overflow-hidden rounded-3xl border bg-foreground text-background"
          data-testid="hero-dealer"
        >
          <div className="absolute inset-0" aria-hidden>
            <img
              src={dealerHeroBg}
              alt=""
              className="h-full w-full object-cover opacity-80"
              data-testid="img-dealer-hero-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/40" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90"
              data-testid="pill-dealer"
            >
              <Store className="h-4 w-4 text-primary" />
              Become an ElectraHub Dealer
            </div>

            <h1 className="mt-5 text-3xl md:text-4xl font-heading font-extrabold tracking-tight" data-testid="text-dealer-title">
              Grow your electronics business with a premium brand people trust.
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-white/75" data-testid="text-dealer-subtitle">
              This is a prototype enquiry form. Submit your details and we’ll get back on call/WhatsApp.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3" data-testid="group-dealer-cta">
              <Button
                size="lg"
                className="rounded-full bg-white text-foreground hover:bg-white/90"
                onClick={() => {
                  const el = document.getElementById("dealer-form");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                data-testid="button-dealer-scroll-form"
              >
                Apply now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/directions" data-testid="link-dealer-directions">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/25 text-white hover:bg-white/10"
                  data-testid="button-dealer-directions"
                >
                  Get Directions
                </Button>
              </Link>
              <div className="text-xs text-white/60" data-testid="text-dealer-contact">
                Call/WhatsApp: +91 8477819222
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8" data-testid="section-dealer-content">
          <div className="lg:col-span-5" data-testid="panel-dealer-benefits">
            <div className="rounded-3xl border bg-card/60 backdrop-blur p-6">
              <h2 className="text-xl font-heading font-bold" data-testid="text-dealer-benefits-title">
                What you get
              </h2>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground" data-testid="list-dealer-benefits">
                <div className="flex items-start gap-3" data-testid="row-dealer-benefit-0">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground" data-testid="text-dealer-benefit-0-title">Premium product lineup</div>
                    <div className="text-xs" data-testid="text-dealer-benefit-0-sub">Smart TVs, soundbars, appliances, and business displays.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="row-dealer-benefit-1">
                  <Truck className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground" data-testid="text-dealer-benefit-1-title">Fast delivery & support</div>
                    <div className="text-xs" data-testid="text-dealer-benefit-1-sub">Smooth fulfilment and after-sales help for your customers.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="row-dealer-benefit-2">
                  <Building2 className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground" data-testid="text-dealer-benefit-2-title">Marketing assistance</div>
                    <div className="text-xs" data-testid="text-dealer-benefit-2-sub">Point-of-sale creatives and local campaign support.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border bg-background/60 backdrop-blur px-4 py-3" data-testid="panel-dealer-note">
                <div className="text-xs text-muted-foreground" data-testid="text-dealer-note">
                  Typical onboarding: 1–3 business days (prototype copy).
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7" data-testid="panel-dealer-form">
            <div id="dealer-form" className="rounded-3xl border bg-card/60 backdrop-blur p-6 md:p-8" data-testid="card-dealer-form">
              <h2 className="text-xl font-heading font-bold" data-testid="text-dealer-form-title">Dealer enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-dealer-form-subtitle">
                Share your details. We’ll contact you on call/WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="mt-6 rounded-2xl border bg-primary/10 p-4" data-testid="status-dealer-success">
                  <div className="font-semibold" data-testid="text-dealer-success-title">Thanks! We received your enquiry.</div>
                  <div className="mt-1 text-sm text-muted-foreground" data-testid="text-dealer-success-sub">
                    Our team will reach out shortly. (Prototype)
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2" data-testid="group-dealer-success-actions">
                    <Button
                      className="rounded-2xl"
                      onClick={() => setLocation("/")}
                      data-testid="button-dealer-back-home"
                    >
                      Back to Home
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-2xl"
                      onClick={() => setIsSubmitted(false)}
                      data-testid="button-dealer-new-enquiry"
                    >
                      Submit another enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!canSubmit) return;
                    setIsSubmitted(true);
                  }}
                  data-testid="form-dealer"
                >
                  <div className="sm:col-span-2" data-testid="group-dealer-name">
                    <label className="text-sm font-medium" htmlFor="dealer-name" data-testid="label-dealer-name">
                      Full name
                    </label>
                    <Input
                      id="dealer-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="mt-2 rounded-2xl"
                      data-testid="input-dealer-name"
                    />
                  </div>

                  <div data-testid="group-dealer-phone">
                    <label className="text-sm font-medium" htmlFor="dealer-phone" data-testid="label-dealer-phone">
                      Phone (WhatsApp)
                    </label>
                    <Input
                      id="dealer-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-2 rounded-2xl"
                      data-testid="input-dealer-phone"
                    />
                  </div>

                  <div data-testid="group-dealer-city">
                    <label className="text-sm font-medium" htmlFor="dealer-city" data-testid="label-dealer-city">
                      City
                    </label>
                    <Input
                      id="dealer-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bulandshahr"
                      className="mt-2 rounded-2xl"
                      data-testid="input-dealer-city"
                    />
                  </div>

                  <div className="sm:col-span-2" data-testid="group-dealer-business">
                    <label className="text-sm font-medium" htmlFor="dealer-business" data-testid="label-dealer-business">
                      Shop / Business name
                    </label>
                    <Input
                      id="dealer-business"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="Your shop name"
                      className="mt-2 rounded-2xl"
                      data-testid="input-dealer-business"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center" data-testid="group-dealer-submit">
                    <Button
                      type="submit"
                      className="rounded-2xl h-11 bg-gradient-to-r from-primary to-orange-700 hover:opacity-95"
                      disabled={!canSubmit}
                      data-testid="button-dealer-submit"
                    >
                      Submit enquiry
                    </Button>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground" data-testid="row-dealer-address">
                      <MapPin className="h-4 w-4 text-primary" />
                      Unnamed Road, Akbarpur, UP 203001
                    </div>
                  </div>

                  <div className="sm:col-span-2 rounded-2xl border bg-background/60 backdrop-blur px-4 py-3" data-testid="panel-dealer-privacy">
                    <div className="flex items-start gap-2" data-testid="row-dealer-privacy">
                      <Phone className="mt-0.5 h-4 w-4 text-primary" />
                      <div className="text-xs text-muted-foreground" data-testid="text-dealer-privacy">
                        We’ll only use your details to contact you about dealership. (Prototype copy)
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
