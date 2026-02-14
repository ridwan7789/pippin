import { useEffect, useState } from "react";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
      size: 1 + Math.random() * 3,
    }));
    setSparkles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
