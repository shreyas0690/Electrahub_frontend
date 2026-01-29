import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import tvImage from "@/assets/cat-tv.png";
import soundbarImage from "@/assets/cat-soundbar.png";
import washingImage from "@/assets/cat-washing.png";
import standyImage from "@/assets/cat-standy.png";

const categories = [
  {
    id: "tvs",
    title: "Smart LED TVs",
    description: "WebOS, 4K UHD, and bezel-less designs that bring movies to life.",
    image: tvImage,
  },
  {
    id: "soundbars",
    title: "Premium Soundbars",
    description: "Immersive Dolby Audio and deep bass for a theater experience at home.",
    image: soundbarImage,
  },
  {
    id: "appliances",
    title: "Washing Machines",
    description: "Advanced wash care for your fabrics with hygiene steam and AI control.",
    image: washingImage,
  },
  {
    id: "business",
    title: "Digital Standees",
    description: "Captivate customers with vibrant 4K digital displays for your business.",
    image: standyImage,
  },
] as const;

export function Categories() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2
              className="text-3xl font-heading font-bold mb-2"
              data-testid="text-categories-title"
            >
              Shop by Category
            </h2>
            <p className="text-muted-foreground" data-testid="text-categories-subtitle">
              Upgrade your home and business lifestyle
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              data-testid={`card-category-${category.id}`}
            >
              <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                <div className="mb-4">
                  <h3
                    className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                    data-testid={`text-category-title-${category.id}`}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-6 max-w-xs"
                    data-testid={`text-category-description-${category.id}`}
                  >
                    {category.description}
                  </p>

                  <button
                    className="flex items-center text-sm font-semibold text-primary"
                    data-testid={`button-explore-collection-${category.id}`}
                    onClick={() => setLocation(`/category?c=${category.id}`)}
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="mt-auto relative h-48 md:h-56 w-full flex justify-end items-end">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-contain h-full w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ml-auto"
                    data-testid={`img-category-${category.id}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
