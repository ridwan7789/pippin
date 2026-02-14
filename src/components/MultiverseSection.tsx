import { motion } from "framer-motion";
import pippinDream from "@/assets/pippin-dreamworld.jpg";
import pippinNeon from "@/assets/pippin-neon-city.jpg";
import pippinForest from "@/assets/pippin-forest.jpg";

const worlds = [
  {
    title: "🌈 Dream Realm",
    description: "The realm of imagination. Home of experimental ideas, creative builders, and meme-powered universes.",
    image: pippinDream,
    accent: "from-pastel-pink/30 to-pastel-lavender/20",
  },
  {
    title: "🌆 Neon Metropolis",
    description: "The infrastructure layer. AI tools, advanced dApps, scalable Web3 systems, next-gen integrations.",
    image: pippinNeon,
    accent: "from-neon-cyan/20 to-neon-magenta/10",
  },
  {
    title: "🌲 Eternal Forest",
    description: "The roots of the universe. Community, philosophy, governance, origin stories.",
    image: pippinForest,
    accent: "from-neon-green/20 to-secondary/10",
  },
];

const MultiverseSection = () => {
  return (
    <section id="multiverse">
      {worlds.map((world, i) => (
        <div key={i} className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={world.image}
              alt={world.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`glass rounded-3xl p-8 md:p-12 max-w-xl ${i % 2 === 0 ? "" : "ml-auto"}`}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
                {world.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
                {world.description}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MultiverseSection;
