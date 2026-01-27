import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import tvImage from "@/assets/cat-tv.png";
import soundbarImage from "@/assets/cat-soundbar.png";

export function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Upgrade every aspect of your viewing experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TV Category */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Smart LED TVs</h3>
                <p className="text-muted-foreground mb-6 max-w-xs">WebOS, 4K UHD, and bezel-less designs that bring movies to life.</p>
                <button className="flex items-center text-sm font-semibold text-primary">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="mt-8 relative h-48 md:h-64 flex justify-end">
                <img src={tvImage} alt="Smart TV" className="object-contain h-full w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Soundbar Category */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border hover:shadow-xl transition-all duration-300"
          >
             <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Premium Soundbars</h3>
                <p className="text-muted-foreground mb-6 max-w-xs">Immersive Dolby Audio and deep bass for a theater experience at home.</p>
                <button className="flex items-center text-sm font-semibold text-primary">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="mt-8 relative h-48 md:h-64 flex justify-end">
                <img src={soundbarImage} alt="Soundbar" className="object-contain h-full w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}