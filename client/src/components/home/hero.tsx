import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-family.png";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
              <Star className="h-3.5 w-3.5 fill-orange-700" />
              <span>India's Most Trusted Family TV Brand</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Elevate Family <br/>
              <span className="text-primary">Entertainment.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Experience cinema-quality 4K visuals and immersive sound at prices designed for Indian families.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-orange-500/20">
                Shop TVs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12">
                Explore Soundbars
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gray-200" />
                 ))}
              </div>
              <div>
                <span className="block text-foreground font-bold">4.8/5 Rating</span>
                <span>from 10k+ happy families</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img 
              src={heroImage} 
              alt="Happy Indian family watching TV" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}