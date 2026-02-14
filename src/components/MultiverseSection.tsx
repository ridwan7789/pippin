import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pippinDream from "@/assets/pippin-dreamworld.jpg";
import pippinNeon from "@/assets/pippin-neon-city.jpg";
import pippinForest from "@/assets/pippin-forest.jpg";

const worlds = [
  {
    id: "dream",
    title: "🌈 Dream Realm",
    description: "The realm of imagination. Home of experimental ideas, creative builders, and meme-powered universes.",
    image: pippinDream,
  },
  {
    id: "neon",
    title: "🌆 Neon Metropolis",
    description: "The infrastructure layer. AI tools, advanced dApps, scalable Web3 systems, next-gen integrations.",
    image: pippinNeon,
  },
  {
    id: "forest",
    title: "🌲 Eternal Forest",
    description: "The roots of the universe. Community, philosophy, governance, origin stories.",
    image: pippinForest,
  },
];

const ParallaxWorld = ({
  world,
  index,
}: {
  world: (typeof worlds)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [60, 0, 0, -60]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={world.image}
          alt={world.title}
          className="w-full h-[130%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/50" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className={`glass rounded-3xl p-8 md:p-12 max-w-xl ${index % 2 !== 0 ? "ml-auto" : ""}`}
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
  );
};

const MultiverseSection = () => {
  return (
    <section id="multiverse">
      {worlds.map((world, i) => (
        <ParallaxWorld key={world.id} world={world} index={i} />
      ))}
    </section>
  );
};

export default MultiverseSection;
