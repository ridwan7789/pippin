import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const PippinCharacter = () => {
  const controls = useAnimation();
  const [mood, setMood] = useState<"happy" | "excited" | "sleepy">("happy");

  const eyes: Record<string, string> = {
    happy: "◠ ◠",
    excited: "● ●",
    sleepy: "— —",
  };

  const handleClick = async () => {
    const moods: ("happy" | "excited" | "sleepy")[] = ["happy", "excited", "sleepy"];
    const next = moods[(moods.indexOf(mood) + 1) % moods.length];
    setMood(next);

    await controls.start({
      rotate: [0, -10, 10, -5, 5, 0],
      scale: [1, 1.15, 0.95, 1.05, 1],
      transition: { duration: 0.6 },
    });
  };

  const handleHover = () => {
    controls.start({
      y: [0, -12, 0],
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  return (
    <motion.div
      className="cursor-pointer select-none fixed bottom-6 right-6 z-40"
      animate={controls}
      onHoverStart={handleHover}
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      title="Click me! I change moods 🐣"
    >
      <div className="relative">
        {/* Body */}
        <motion.div
          className="w-16 h-16 rounded-full bg-foreground relative"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Eyes */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-background text-xs font-bold tracking-widest whitespace-nowrap">
            {eyes[mood]}
          </div>
          {/* Beak */}
          <div
            className="absolute top-3 -right-1 w-0 h-0"
            style={{
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderLeft: "6px solid hsl(45, 90%, 65%)",
            }}
          />
          {/* Tail */}
          <div className="absolute bottom-2 -left-2 w-3 h-1 rounded-full bg-primary" />
        </motion.div>
        {/* Legs */}
        <div className="flex justify-center gap-3 -mt-1">
          <div className="w-0.5 h-3 bg-muted-foreground" />
          <div className="w-0.5 h-3 bg-muted-foreground" />
        </div>
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-primary font-display font-bold whitespace-nowrap"
        >
          {mood === "happy" ? "😊" : mood === "excited" ? "🤩" : "😴"}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default PippinCharacter;
