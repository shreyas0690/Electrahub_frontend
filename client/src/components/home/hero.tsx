import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Import images
import heroFamily from "@/assets/hero-family.png";
import heroCricket from "@/assets/hero-cricket.png";
import heroGaming from "@/assets/hero-gaming.png";

const slides = [
  {
    id: 1,
    image: heroFamily,
    title: "Elevate Family Entertainment",
    highlight: "Entertainment",
    description: "Experience cinema-quality 4K visuals and immersive sound at prices designed for Indian families.",
    cta: "Shop Smart TVs",
    secondaryCta: "Explore Soundbars",
    theme: "orange",
  },
  {
    id: 2,
    image: heroCricket,
    title: "Stadium Atmosphere at Home",
    highlight: "Atmosphere",
    description: "Feel every cheer and catch with our specialized Sports Mode and ultra-smooth Motion Rate technology.",
    cta: "View Sports TVs",
    secondaryCta: "See Match Offers",
    theme: "blue",
  },
  {
    id: 3,
    image: heroGaming,
    title: "Next-Gen Gaming Performance",
    highlight: "Performance",
    description: "Level up with 120Hz refresh rates, low latency mode, and HDR10+ for the ultimate competitive edge.",
    cta: "Shop Gaming TVs",
    secondaryCta: "Watch Demo",
    theme: "purple",
  },
];

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0 relative w-full h-[600px] md:h-[700px]">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-10000 ease-linear scale-105 animate-slow-zoom"
                />
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-2xl space-y-6">
                  <AnimatePresence mode="wait">
                    {current === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                         <div className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border",
                            slide.theme === 'orange' && "bg-orange-500/20 text-orange-400 border-orange-500/30",
                            slide.theme === 'blue' && "bg-blue-500/20 text-blue-400 border-blue-500/30",
                            slide.theme === 'purple' && "bg-purple-500/20 text-purple-400 border-purple-500/30",
                          )}>
                          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                          Premium Series 2026
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-white mb-6 drop-shadow-lg">
                          {slide.title.replace(slide.highlight, "")}
                          <span className={cn(
                            "text-transparent bg-clip-text bg-gradient-to-r",
                            slide.theme === 'orange' && "from-orange-400 to-amber-600",
                            slide.theme === 'blue' && "from-blue-400 to-cyan-600",
                            slide.theme === 'purple' && "from-purple-400 to-pink-600",
                          )}>
                            {slide.highlight}
                          </span>
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
                          {slide.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            size="lg" 
                            className={cn(
                              "text-base px-8 h-14 rounded-full font-bold shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105",
                              slide.theme === 'orange' && "bg-orange-600 hover:bg-orange-700 text-white",
                              slide.theme === 'blue' && "bg-blue-600 hover:bg-blue-700 text-white",
                              slide.theme === 'purple' && "bg-purple-600 hover:bg-purple-700 text-white",
                            )}
                          >
                            {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="text-base h-14 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                          >
                            <PlayCircle className="mr-2 h-5 w-5" /> {slide.secondaryCta}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Controls */}
        <div className="hidden md:block absolute right-12 bottom-12 z-20 flex gap-2">
           <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
           <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === idx ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}