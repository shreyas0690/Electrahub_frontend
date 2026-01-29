import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { Categories } from "@/components/home/categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Testimonials } from "@/components/home/testimonials";
import { StoreLocator } from "@/components/home/store-locator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <StoreLocator />

        {/* Newsletter Section - Simple banner */}
        <section className="py-14 sm:py-16 bg-gradient-to-b from-primary/10 via-primary/5 to-background border-t" data-testid="section-newsletter">
          <div className="container mx-auto px-4">
            <div
              className="relative overflow-hidden rounded-3xl border bg-card/60 backdrop-blur p-6 sm:p-8"
              data-testid="card-newsletter"
            >
              <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center" data-testid="grid-newsletter">
                <div className="lg:col-span-7 text-center lg:text-left" data-testid="col-newsletter-copy">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-foreground"
                    data-testid="text-newsletter-title"
                  >
                    Join the ElectraHub Family
                  </h2>
                  <p
                    className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0"
                    data-testid="text-newsletter-subtitle"
                  >
                    Sign up for our newsletter to get exclusive launch offers, TV tips, and extended warranty deals.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2" data-testid="row-newsletter-trust">
                    <span className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground" data-testid="pill-newsletter-1">No spam</span>
                    <span className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground" data-testid="pill-newsletter-2">Monthly tips</span>
                    <span className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground" data-testid="pill-newsletter-3">Festive deals</span>
                  </div>
                </div>

                <div className="lg:col-span-5" data-testid="col-newsletter-form">
                  <div className="mx-auto lg:mx-0 max-w-md" data-testid="wrap-newsletter-form">
                    <div
                      className="flex flex-col sm:flex-row gap-2"
                      data-testid="group-newsletter-form"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:flex-1 px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-newsletter-email"
                      />
                      <button
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-700 text-white px-6 py-3 rounded-2xl font-bold hover:opacity-95 transition-all shadow-lg shadow-primary/20"
                        data-testid="button-newsletter-subscribe"
                      >
                        Subscribe
                      </button>
                    </div>
                    <div className="mt-2 text-center sm:text-left text-xs text-muted-foreground" data-testid="text-newsletter-legal">
                      By subscribing, you agree to receive updates from ElectraHub. (Prototype)
                    </div>
                  </div>
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
