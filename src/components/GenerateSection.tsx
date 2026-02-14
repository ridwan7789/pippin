import { motion } from "framer-motion";
import pippinGrid from "@/assets/pippin-grid.jpg";

const GenerateSection = () => {
  return (
    <section id="generate" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={pippinGrid} alt="Pippin characters" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient-warm"
        >
          Create Your Own Pippin World
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 font-body"
        >
          Generate your own Pippin-style universe and expand the ecosystem.
        </motion.p>
        <motion.a
          href="https://chatgpt.com/g/g-6733ad98c54c8190a5744c1b7a4d6752-pippin-animator"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn-gradient-primary px-12 py-6 rounded-full font-display text-2xl font-bold animate-pulse-glow inline-block"
        >
          🎨 Generate with Pippin
        </motion.a>
      </div>
    </section>
  );
};

export default GenerateSection;
