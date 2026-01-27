import { Link } from "wouter";
import { Search, ShoppingCart, User, Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar for Trust signals - hidden on mobile */}
      <div className="hidden md:flex w-full bg-foreground text-background py-1.5 px-4 text-xs justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Store Locator</span>
          <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> Support: 1800-123-4567</span>
        </div>
        <div className="flex gap-4 font-medium">
          <span>Free Installation</span>
          <span>Easy Returns</span>
          <span>No Cost EMI</span>
        </div>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
                <Link href="/tvs" onClick={() => setIsOpen(false)} className="text-lg font-medium">Smart TVs</Link>
                <Link href="/soundbars" onClick={() => setIsOpen(false)} className="text-lg font-medium">Soundbars</Link>
                <Link href="/offers" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary">Festive Offers</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <span className="text-2xl font-bold font-heading tracking-tight text-primary">ElectraHub</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link>
          <Link href="/tvs"><a className="hover:text-primary transition-colors">Smart TVs</a></Link>
          <Link href="/soundbars"><a className="hover:text-primary transition-colors">Soundbars</a></Link>
          <Link href="/offers"><a className="hover:text-primary transition-colors text-primary font-semibold">Offers</a></Link>
        </nav>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
          <Input 
            type="search" 
            placeholder="Search for TVs, Soundbars..." 
            className="w-full pl-10 bg-muted/50 border-transparent focus:bg-background focus:border-input transition-all" 
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
          </Button>
        </div>
      </div>
    </header>
  );
}