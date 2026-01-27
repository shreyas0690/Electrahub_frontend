import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import tvImage from "@/assets/cat-tv.png";
import soundbarImage from "@/assets/cat-soundbar.png";

const products = [
  {
    id: 1,
    name: "ElectraHub 55\" 4K WebOS Smart TV",
    price: "₹34,999",
    mrp: "₹59,999",
    emi: "₹1,945/mo",
    rating: 4.8,
    reviews: 1240,
    tag: "Best Seller",
    image: tvImage
  },
  {
    id: 2,
    name: "ElectraHub 43\" FHD Smart LED TV",
    price: "₹19,999",
    mrp: "₹32,999",
    emi: "₹1,110/mo",
    rating: 4.7,
    reviews: 850,
    tag: "Budget Pick",
    image: tvImage
  },
  {
    id: 3,
    name: "ElectraHub 65\" 4K QLED Pro TV",
    price: "₹54,999",
    mrp: "₹89,999",
    emi: "₹3,055/mo",
    rating: 4.9,
    reviews: 320,
    tag: "New Arrival",
    image: tvImage
  },
  {
    id: 4,
    name: "Cinematic Soundbar SB-200",
    price: "₹8,999",
    mrp: "₹14,999",
    emi: "₹500/mo",
    rating: 4.6,
    reviews: 450,
    tag: "Great Value",
    image: soundbarImage
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Customer Favorites</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Best Sellers for Every Home</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the TVs and soundbars that thousands of Indian families are loving right now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-card border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="relative aspect-[4/3] bg-muted/20 p-6 flex items-center justify-center overflow-hidden">
                <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">{product.tag}</Badge>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-4">
                  <div className="flex items-end justify-between mb-1">
                    <div>
                      <span className="text-sm text-muted-foreground line-through mr-2">{product.mrp}</span>
                      <span className="text-xl font-bold text-foreground">{product.price}</span>
                    </div>
                    <Button size="icon" className="rounded-full h-10 w-10 shrink-0 shadow-sm">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs font-medium text-green-600 bg-green-50 inline-block px-2 py-1 rounded">
                    EMI starts at {product.emi}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="min-w-[200px]">View All Products</Button>
        </div>
      </div>
    </section>
  );
}