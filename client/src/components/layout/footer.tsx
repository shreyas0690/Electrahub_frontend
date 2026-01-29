import { Facebook, Instagram, Twitter, Youtube, CreditCard, ShieldCheck, Truck } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-2xl font-bold font-heading text-primary block mb-6">ElectraHub</span>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Bringing cinema-like joy to Indian homes. Premium Smart TVs and audio systems designed for your family's entertainment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/category?c=tvs" className="hover:text-primary transition-colors" data-testid="link-footer-tvs">Smart TVs</Link></li>
              <li><Link href="/category?c=soundbars" className="hover:text-primary transition-colors" data-testid="link-footer-soundbars">Soundbars</Link></li>
              <li><Link href="/category?c=appliances" className="hover:text-primary transition-colors" data-testid="link-footer-washing">Washing Machines</Link></li>
              <li><Link href="/category?c=business" className="hover:text-primary transition-colors" data-testid="link-footer-standees">Digital Standees</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/track" className="hover:text-primary transition-colors" data-testid="link-footer-track">Track Order</Link></li>
              <li><Link href="/warranty" className="hover:text-primary transition-colors" data-testid="link-footer-warranty">Warranty Registration</Link></li>
              <li><Link href="/installation" className="hover:text-primary transition-colors" data-testid="link-footer-installation">Installation Guide</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-footer-contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li data-testid="text-footer-phone">+91 8477819222</li>
              <li data-testid="text-footer-email">saglobalventure01@gmail.com</li>
              <li>
                <p className="mt-4 font-medium text-foreground" data-testid="text-footer-address-title">Address</p>
                <p data-testid="text-footer-address">
                  Unnamed Road, Akbarpur, Uttar Pradesh, 203001, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 ElectraHub India Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-2 text-muted-foreground/50">
             {/* Payment Icons Placeholder */}
             <div className="h-6 w-10 bg-gray-200 rounded"></div>
             <div className="h-6 w-10 bg-gray-200 rounded"></div>
             <div className="h-6 w-10 bg-gray-200 rounded"></div>
             <div className="h-6 w-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}