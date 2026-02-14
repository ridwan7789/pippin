import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Universe", href: "#about" },
  { label: "Multiverse", href: "#multiverse" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Generate", href: "#generate" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-gradient-primary">
          🌌 Pippin Universe
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://chatgpt.com/g/g-6733ad98c54c8190a5744c1b7a4d6752-pippin-animator"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-primary px-4 py-2 rounded-full font-display text-sm font-bold hover:scale-105 transition-transform"
          >
            🎨 Generate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`h-0.5 bg-foreground rounded transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 bg-foreground rounded transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground rounded transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-4 mt-2 rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-body font-semibold py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://chatgpt.com/g/g-6733ad98c54c8190a5744c1b7a4d6752-pippin-animator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-primary px-4 py-3 rounded-full font-display text-sm font-bold text-center"
              >
                🎨 Generate with Pippin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
