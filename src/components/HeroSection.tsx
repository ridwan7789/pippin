import { motion } from "framer-motion";
import pippinCosmic from "@/assets/pippin-cosmic.jpg";
import Sparkles from "./Sparkles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={pippinCosmic}
          alt="Pippin in cosmic universe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-cosmic opacity-60" />
      </div>

      <Sparkles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-gradient-primary leading-tight">
            🌌 Welcome to the Pippin Universe
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-muted-foreground mb-10 font-body"
        >
          Where builders explore worlds, extend realities, and expand imagination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="btn-gradient-primary px-8 py-4 rounded-full font-display text-lg font-bold animate-pulse-glow hover:scale-105 transition-transform inline-block"
          >
            🚀 Explore the Universe
          </a>
          <a
            href="https://chatgpt.com/g/g-6733ad98c54c8190a5744c1b7a4d6752-pippin-animator"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-secondary px-8 py-4 rounded-full font-display text-lg font-bold hover:scale-105 transition-transform glow-secondary inline-block"
          >
            🎨 Generate with Pippin
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
