import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  isLight: boolean;
  setIsLight: (val: boolean) => void;
}

const Navbar = ({ isLight, setIsLight }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-border" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl sm:text-2xl tracking-tighter flex items-center gap-3">
          {/* Animated Cartoon Character */}


          {Array.from("MONY PHY").map((char, index) => (
            <motion.span
              key={index}
              animate={{
                color: isLight
                  ? "#000000"
                  : ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ff0000"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: index * 0.2
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover="hover"
              initial="initial"
              className="text-sm font-semibold text-foreground/70 transition-all relative px-2 py-1 group flex flex-col items-center justify-center"
            >
              <motion.span
                variants={{
                  initial: { color: "var(--foreground)" },
                  hover: {
                    color: "rgba(34, 211, 238, 1)",
                    textShadow: "0 0 8px rgba(34, 211, 238, 0.4)"
                  }
                }}
                className="relative z-10 transition-colors duration-300"
              >
                {link.label}
              </motion.span>

              {/* Glowing Underline - perfectly aligned */}
              <motion.span
                className="absolute -bottom-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                variants={{
                  initial: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Background Glow Orb */}
              <motion.span
                className="absolute inset-0 bg-cyan-500/5 blur-md rounded-lg -z-10"
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hover: { scale: 1.2, opacity: 1 }
                }}
              />
            </motion.a>
          ))}

          <button
            onClick={() => setIsLight(!isLight)}
            className="p-2 ml-4 rounded-full bg-secondary/30 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95 border border-white/5"
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsLight(!isLight)}
            className="p-2 rounded-full bg-secondary/30 text-foreground"
          >
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/5 md:hidden overflow-hidden shadow-2xl"
            >
              <div className="p-8 flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-primary font-bold text-xl sm:text-2xl transition-all tracking-wide text-center w-full py-2 hover:bg-white/5 rounded-xl"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
