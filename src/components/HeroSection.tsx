import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-light font-body text-lg tracking-[0.3em] uppercase mb-6"
        >
          Author · Educator · Director
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6"
        >
          Crafting Stories,
          <br />
          <span className="text-gradient-gold italic">Shaping Voices</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Book writer, Swahili language teacher, elocution & music trainer, 
          drama script writer, director, and adjudicator — bringing the art of 
          storytelling to life across every medium.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#works"
            className="px-8 py-3 bg-primary text-primary-foreground font-body font-semibold tracking-wide uppercase text-sm rounded-sm hover:opacity-90 transition-opacity"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cream/40 text-cream font-body font-semibold tracking-wide uppercase text-sm rounded-sm hover:bg-cream/10 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 border-2 border-cream/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
