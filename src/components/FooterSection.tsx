import Sparkles from "./Sparkles";

const socials = [
  { name: "Telegram", url: "https://t.me/Pippinuniverse" },
  { name: "X", url: "https://x.com/pippinuniverse" },
  { name: "Web", url: "https://pippinuniverse.fun" },
  { name: "GitHub", url: "https://github.com/pippinlovesyou/pippin-universe" },
];

const FooterSection = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-deep" />
      <Sparkles />

      <div className="relative z-10 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-primary mb-2">
          Pippin Universe
        </h3>
        <p className="text-muted-foreground font-body mb-8">
          Expanding realities since imagination began. ✨
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              {s.name}
            </a>
          ))}
        </div>

        <p className="text-muted-foreground/50 text-xs mt-8 font-body">
          © 2026 Pippin Universe. All multiverses reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
