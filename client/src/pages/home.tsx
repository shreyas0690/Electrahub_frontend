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
        <section className="bg-primary/5 py-16" data-testid="section-newsletter">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground" data-testid="text-newsletter-title">
              Join the ElectraHub Family
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto" data-testid="text-newsletter-subtitle">
              Sign up for our newsletter to get exclusive launch offers, TV tips, and extended warranty deals.
            </p>
            <div className="flex max-w-md mx-auto gap-2" data-testid="group-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                data-testid="input-newsletter-email"
              />
              <button
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
