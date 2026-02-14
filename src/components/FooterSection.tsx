import Sparkles from "./Sparkles";
import { TelegramIcon, XIcon, GlobeIcon, GithubIcon } from "./icons/SocialIcons";
import React from "react";

const socials = [
  { name: "Telegram", icon: <TelegramIcon size={18} />, url: "https://t.me/Pippinuniverse" },
  { name: "X", icon: <XIcon size={18} />, url: "https://x.com/pippinuniverse" },
  { name: "Web", icon: <GlobeIcon size={18} />, url: "https://pippinuniverse.fun" },
  { name: "GitHub", icon: <GithubIcon size={18} />, url: "https://github.com/pippinlovesyou/pippin-universe" },
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
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm flex items-center gap-1.5"
            >
              {s.icon}
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
