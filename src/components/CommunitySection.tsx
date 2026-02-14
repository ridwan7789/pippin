import { motion } from "framer-motion";

const socials = [
  { name: "Telegram", emoji: "💬", url: "https://t.me/Pippinuniverse" },
  { name: "X (Twitter)", emoji: "🐦", url: "https://x.com/pippinuniverse" },
  { name: "Website", emoji: "🌐", url: "https://pippinuniverse.fun" },
  { name: "GitHub", emoji: "🐙", url: "https://github.com/pippinlovesyou/pippin-universe" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cosmic" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient-primary"
        >
          Join the Universe
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 font-body"
        >
          "Every universe needs explorers. Join ours." 🚀
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="glass-card rounded-2xl px-8 py-6 flex flex-col items-center gap-2 min-w-[140px]"
            >
              <span className="text-4xl">{s.emoji}</span>
              <span className="text-foreground font-display font-bold">{s.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
