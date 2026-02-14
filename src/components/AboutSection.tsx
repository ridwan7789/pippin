import { motion } from "framer-motion";
import pippinOrbit from "@/assets/pippin-orbit.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={pippinOrbit} alt="Pippin orbit ecosystem" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold mb-8 text-gradient-primary"
        >
          What is the Pippin Universe?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body"
        >
          A centralized hub where projects inspired by Pippin come together.
          Each project is a new world. Every builder is a universe creator.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { emoji: "🐣", text: "Extend Pippin's functionality" },
            { emoji: "🌍", text: "Build a new world" },
            { emoji: "🛠", text: "Integrate into larger systems" },
            { emoji: "🚀", text: "Create something unexpected" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4"
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-foreground font-body text-lg font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
