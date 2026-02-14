import { motion } from "framer-motion";
import Sparkles from "./Sparkles";
import pippinLogo from "@/assets/pippin-logo.jpg";

const projects = [
  { name: "Pippin Animator", desc: "Generate custom Pippin characters and scenes with AI", emoji: "🎨" },
  { name: "Pippin DAO", desc: "Community governance for the Pippin ecosystem", emoji: "🏛" },
  { name: "Pippin Stories", desc: "Interactive storybooks starring our round friend", emoji: "📖" },
  { name: "Pippin Quest", desc: "A browser adventure across the multiverse", emoji: "⚔️" },
  { name: "Pippin Beats", desc: "Music generator with Pippin-inspired sounds", emoji: "🎵" },
  { name: "Pippin Analytics", desc: "Dashboard tracking the growth of the universe", emoji: "📊" },
];

const orbitWorlds = [
  { emoji: "🌍", label: "Dream Realm", size: 40 },
  { emoji: "🌕", label: "Moon Base", size: 32 },
  { emoji: "⭐", label: "Star Forge", size: 28 },
  { emoji: "🪐", label: "Neon Ring", size: 36 },
  { emoji: "☄️", label: "Comet Lab", size: 30 },
  { emoji: "🌟", label: "Sparkle Hub", size: 26 },
  { emoji: "💫", label: "Warp Gate", size: 28 },
  { emoji: "🔮", label: "Oracle", size: 34 },
];

const OrbitingWorlds = () => {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto mb-16">
      {/* Orbit rings */}
      <div className="absolute inset-4 rounded-full border border-foreground/10" />
      <div className="absolute inset-12 rounded-full border border-foreground/5" />

      {/* Central Pippin logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden glow-primary"
        >
          <img src={pippinLogo} alt="Pippin" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Orbiting mini-worlds */}
      {orbitWorlds.map((world, i) => {
        const angle = (i / orbitWorlds.length) * 360;
        const duration = 30 + i * 5;
        const radius = 130;

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0 }}
            animate={{ rotate: [angle, angle + 360] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="glass-card rounded-full flex items-center justify-center cursor-pointer"
              style={{
                width: world.size,
                height: world.size,
                transform: `translateX(${radius}px) translateY(-${world.size / 2}px)`,
              }}
              whileHover={{ scale: 1.4 }}
              animate={{ rotate: [-angle, -angle - 360] }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              title={world.label}
            >
              <span className="text-sm md:text-base">{world.emoji}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cosmic" />
      <Sparkles />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold text-center mb-4 text-gradient-primary"
        >
          Projects Across the Universe
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 text-lg font-body"
        >
          Worlds built by the community ✨
        </motion.p>

        <OrbitingWorlds />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 cursor-pointer group"
            >
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4">{project.desc}</p>
              <span className="text-primary font-body text-sm font-semibold group-hover:underline">
                View Project →
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="btn-gradient-accent px-8 py-4 rounded-full font-display text-lg font-bold hover:scale-105 transition-transform inline-block glow-accent"
          >
            ✨ Submit Your Project to the Universe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
