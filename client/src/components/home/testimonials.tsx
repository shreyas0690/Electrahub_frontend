import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Neha Sharma",
    location: "Mumbai",
    text: "Our family upgraded to a 55″ ElectraHub TV and movie nights have never been better. The picture is brilliant, and free installation made it so easy!",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    text: "I was skeptical about the price, but the quality is unmatched. The soundbar connects perfectly. Highly recommended for cricket matches!",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "Great service! The team delivered and installed it on the same day. The WebOS interface is very smooth and easy for my parents to use.",
    rating: 4
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-orange-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">What Families Are Saying</h2>
          <p className="text-muted-foreground">Join 10,000+ happy homes across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-background p-8 rounded-2xl shadow-sm border relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-100 fill-orange-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < t.rating ? "fill-orange-400 text-orange-400" : "text-gray-200"}`} 
                  />
                ))}
              </div>

              <p className="text-lg mb-8 leading-relaxed text-foreground/80">"{t.text}"</p>

              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {t.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}