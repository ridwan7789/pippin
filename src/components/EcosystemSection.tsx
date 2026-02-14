import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

const projects = [
  { name: "Pippin Animator", desc: "Generate custom Pippin characters and scenes with AI", emoji: "🎨", color: "primary" },
  { name: "Pippin DAO", desc: "Community governance for the Pippin ecosystem", emoji: "🏛", color: "secondary" },
  { name: "Pippin Stories", desc: "Interactive storybooks starring our round friend", emoji: "📖", color: "accent" },
  { name: "Pippin Quest", desc: "A browser adventure across the multiverse", emoji: "⚔️", color: "primary" },
  { name: "Pippin Beats", desc: "Music generator with Pippin-inspired sounds", emoji: "🎵", color: "secondary" },
  { name: "Pippin Analytics", desc: "Dashboard tracking the growth of the universe", emoji: "📊", color: "accent" },
];

const OrbitingWorlds = () => {
  const orbitItems = ["🌍", "🌕", "⭐", "🪐", "☄️", "🌟", "💫", "🔮"];
  return (
    <div className="relative w-64 h-64 mx-auto mb-16">
      {/* Central Pippin */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-full h-full rounded-full border border-foreground/10" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center text-5xl">
        🐣
      </div>

      {/* Orbiting items */}
      {orbitItems.map((item, i) => {
        const angle = (i / orbitItems.length) * 360;
        const radius = 110;
        const duration = 20 + i * 3;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 text-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{
              transformOrigin: "0 0",
            }}
          >
            <motion.span
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
              }}
              animate={{
                rotate: [-angle, -angle - 360],
              }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              {item}
            </motion.span>
          </motion.div>
        );
      })}

      {/* Inner orbit ring */}
      <div className="absolute inset-8 rounded-full border border-foreground/5" />
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
