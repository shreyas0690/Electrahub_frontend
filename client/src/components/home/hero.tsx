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
import heroLivingroom from "@/assets/hero-livingroom.png";
import heroGradient from "@/assets/hero-gradient.png";

const slides = [
  {
    id: 1,
    image: heroLivingroom,
    title: "ElectraHub for Every Indian Home",
    highlight: "Every Indian Home",
    description: "Premium Smart TVs, Soundbars & home essentials—made for family movie nights, match days, and everyday comfort.",
    cta: "Shop Best Sellers",
    secondaryCta: "Explore Categories",
    theme: "orange",
    badge: "Premium Series 2026",
    stats: [
      { label: "No‑cost EMI", value: "₹1,999/mo" },
      { label: "Warranty", value: "2 Years" },
      { label: "Installation", value: "Free" },
    ],
  },
  {
    id: 2,
    image: heroCricket,
    title: "Stadium Atmosphere at Home",
    highlight: "Atmosphere",
    description: "Feel every cheer with Sports Mode, smoother motion, and room-filling sound tuned for match day.",
    cta: "View Sports TVs",
    secondaryCta: "See Match Offers",
    theme: "blue",
    badge: "Match Day Deals",
    stats: [
      { label: "Motion", value: "Ultra Smooth" },
      { label: "Sound", value: "Dolby Ready" },
      { label: "Returns", value: "7 Days" },
    ],
  },
  {
    id: 3,
    image: heroGaming,
    title: "Next‑Gen Gaming Performance",
    highlight: "Performance",
    description: "120Hz refresh rates, low latency mode, and HDR10+—built for fast reactions and deep contrast.",
    cta: "Shop Gaming TVs",
    secondaryCta: "Watch Demo",
    theme: "purple",
    badge: "Pro Gamer Mode",
    stats: [
      { label: "Refresh", value: "Up to 120Hz" },
      { label: "Latency", value: "Low" },
      { label: "HDR", value: "HDR10+" },
    ],
  },
  {
    id: 4,
    image: heroGradient,
    title: "Upgrade the Whole Home",
    highlight: "Whole Home",
    description: "From washing machines to digital standees—smart upgrades that fit Indian spaces and family routines.",
    cta: "Explore Home Essentials",
    secondaryCta: "View EMI Plans",
    theme: "orange",
    badge: "New Launches",
    stats: [
      { label: "Delivery", value: "Fast" },
      { label: "Support", value: "Local" },
      { label: "EMI", value: "Flexible" },
    ],
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
    <section className="relative w-full overflow-hidden bg-background" data-testid="section-hero">
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
                        <div
                          className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border",
                            slide.theme === "orange" && "bg-orange-500/20 text-orange-200 border-orange-500/30",
                            slide.theme === "blue" && "bg-blue-500/20 text-blue-200 border-blue-500/30",
                            slide.theme === "purple" && "bg-purple-500/20 text-purple-200 border-purple-500/30"
                          )}
                          data-testid={`badge-hero-${slide.id}`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                          {slide.badge}
                        </div>

                        <div className="mt-5 flex flex-col sm:flex-row gap-4" data-testid={`group-hero-ctas-${slide.id}`}>
                          <Button
                            size="lg"
                            className={cn(
                              "text-base px-8 h-14 rounded-full font-bold shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105",
                              slide.theme === "orange" && "bg-orange-600 hover:bg-orange-700 text-white",
                              slide.theme === "blue" && "bg-blue-600 hover:bg-blue-700 text-white",
                              slide.theme === "purple" && "bg-purple-600 hover:bg-purple-700 text-white"
                            )}
                            data-testid={`button-hero-primary-${slide.id}`}
                          >
                            {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="text-base h-14 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                            data-testid={`button-hero-secondary-${slide.id}`}
                          >
                            <PlayCircle className="mr-2 h-5 w-5" /> {slide.secondaryCta}
                          </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-5" data-testid={`grid-hero-stats-${slide.id}`}>
                          {slide.stats.map((s, i) => (
                            <div
                              key={`${slide.id}-${i}`}
                              className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                              data-testid={`card-hero-stat-${slide.id}-${i}`}
                            >
                              <div className="text-[11px] uppercase tracking-wider text-white/70" data-testid={`text-hero-stat-label-${slide.id}-${i}`}>
                                {s.label}
                              </div>
                              <div className="text-sm font-semibold text-white" data-testid={`text-hero-stat-value-${slide.id}-${i}`}>
                                {s.value}
                              </div>
                            </div>
                          ))}
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
              data-testid={`button-hero-dot-${idx}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}