import { Facebook, Instagram, Youtube, ShieldCheck, Truck, Wrench, Percent, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30" data-testid="footer">
      <div className="container mx-auto px-4">
        {/* Top panel */}
        <div className="py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="text-2xl font-extrabold font-heading tracking-tight" data-testid="text-footer-brand">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-700">ElectraHub</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm" data-testid="text-footer-about">
                Bringing cinema-like joy to Indian homes. Premium Smart TVs and home electronics with EMI, free installation, and a 2-year warranty.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3" data-testid="grid-footer-trust">
                <div className="rounded-2xl border bg-card/60 backdrop-blur px-4 py-3" data-testid="card-footer-trust-emi">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Percent className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">No-cost EMI</div>
                      <div className="text-xs text-muted-foreground">Easy monthly plans</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border bg-card/60 backdrop-blur px-4 py-3" data-testid="card-footer-trust-install">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Free installation</div>
                      <div className="text-xs text-muted-foreground">Expert setup</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border bg-card/60 backdrop-blur px-4 py-3" data-testid="card-footer-trust-warranty">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">2-year warranty</div>
                      <div className="text-xs text-muted-foreground">Peace of mind</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border bg-card/60 backdrop-blur px-4 py-3" data-testid="card-footer-trust-delivery">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Truck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Fast delivery</div>
                      <div className="text-xs text-muted-foreground">3–5 days</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3" data-testid="row-footer-social">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full border bg-background/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  data-testid="link-footer-facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full border bg-background/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  data-testid="link-footer-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full border bg-background/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  data-testid="link-footer-youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-heading font-semibold text-base" data-testid="text-footer-links-shop">Shop</h4>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground" data-testid="list-footer-shop">
                    <li>
                      <Link href="/category?c=tvs" className="hover:text-primary transition-colors" data-testid="link-footer-tvs">
                        Smart TVs
                      </Link>
                    </li>
                    <li>
                      <Link href="/category?c=soundbars" className="hover:text-primary transition-colors" data-testid="link-footer-soundbars">
                        Soundbars
                      </Link>
                    </li>
                    <li>
                      <Link href="/category?c=appliances" className="hover:text-primary transition-colors" data-testid="link-footer-washing">
                        Washing Machines
                      </Link>
                    </li>
                    <li>
                      <Link href="/category?c=business" className="hover:text-primary transition-colors" data-testid="link-footer-standees">
                        Digital Standees
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-base" data-testid="text-footer-links-support">Support</h4>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground" data-testid="list-footer-support">
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-track">
                        Track Order
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-warranty">
                        Warranty Registration
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-installation">
                        Installation Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sm:block">
                  <h4 className="font-heading font-semibold text-base" data-testid="text-footer-links-company">Company</h4>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground" data-testid="list-footer-company">
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-about">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-careers">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-terms">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border bg-card/60 backdrop-blur p-6" data-testid="card-footer-contact">
                <h4 className="font-heading font-semibold text-base" data-testid="text-footer-contact-title">
                  Contact
                </h4>

                <div className="mt-5 space-y-4 text-sm" data-testid="group-footer-contact">
                  <div className="flex items-start gap-3" data-testid="row-footer-phone">
                    <div className="mt-0.5 h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold" data-testid="text-footer-phone">+91 8307922636</div>
                      <div className="text-xs text-muted-foreground" data-testid="text-footer-phone-sub">Call / WhatsApp</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="row-footer-email">
                    <div className="mt-0.5 h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold" data-testid="text-footer-email">saglobalventure01@gmail.com</div>
                      <div className="text-xs text-muted-foreground" data-testid="text-footer-email-sub">Support & enquiries</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="row-footer-address">
                    <div className="mt-0.5 h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold" data-testid="text-footer-address-title">Address</div>
                      <div className="text-xs text-muted-foreground" data-testid="text-footer-address">
                        Unnamed Road, Akbarpur, Uttar Pradesh, 203001, India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border bg-background/60 backdrop-blur px-4 py-3" data-testid="panel-footer-note">
                  <div className="text-xs text-muted-foreground" data-testid="text-footer-note">
                    Need help choosing the right TV size? Call us and we’ll recommend based on your room.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6 flex flex-col md:flex-row items-center justify-between gap-4" data-testid="bar-footer-bottom">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2026 ElectraHub India Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2" data-testid="row-footer-payments">
            <div className="h-6 w-10 rounded bg-muted" data-testid="img-payment-0" />
            <div className="h-6 w-10 rounded bg-muted" data-testid="img-payment-1" />
            <div className="h-6 w-10 rounded bg-muted" data-testid="img-payment-2" />
            <div className="h-6 w-10 rounded bg-muted" data-testid="img-payment-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}