import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && displayedText === text) {
        setSpeed(2000); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setSpeed(500); // Small pause before starting next loop
      } else {
        setDisplayedText(prev =>
          isDeleting
            ? text.substring(0, prev.length - 1)
            : text.substring(0, prev.length + 1)
        );
        setSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, speed, text]);

  return <span>{displayedText}</span>;
};


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          {/* Futuristic Cyber-HUD Prefix */}
          <motion.div
            className="inline-flex items-center gap-4 mb-8 relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Viewfinder Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-2 h-2 border-t-2 border-l-2 border-cyan-400/40" />
            <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 border-b-2 border-r-2 border-cyan-400/40" />

            <div className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 backdrop-blur-xl rounded-sm flex items-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.1)] relative overflow-hidden group">
              {/* Animated Scanline Overlay */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-12"
              />

              <div className="relative flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] text-cyan-400 uppercase">
                  Hi I am
                </span>
              </div>
            </div>

            {/* Futuristic Data-Link Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent hidden sm:block"
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-[1.1] transition-colors"
            style={{ color: 'var(--color-foreground)' }}
          >
            <span className="block pb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Web
            </span>
            <span className="flex items-center flex-wrap">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                <TypewriterText text="Developer" />
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[4px] h-[0.8em] bg-purple-500 ml-2 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              />
            </span>
          </motion.h1>

          <p className="text-lg sm:text-xl font-medium mb-8" style={{ color: 'var(--color-primary)' }}>
            Frontend Developer & Creative Designer
          </p>

          <p className="max-w-lg mb-10 leading-relaxed text-base sm:text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
            I create exceptional digital experiences through innovative web development and stunning design solutions.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 mb-10">
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 font-display">
            <a
              href="/cv.pdf"
              download="My_CV.pdf"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] active:scale-95 transition-all flex items-center justify-center shadow-lg w-full sm:w-auto"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 font-bold rounded-xl transition-all flex items-center justify-center shadow-sm active:scale-95 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] bg-white/5 border-white/15 text-foreground/90 hover:border-cyan-400/70 backdrop-blur-lg w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-first md:order-last"
        >
          {/* Simple floating avatar - Responsive sizes */}
          <motion.div
            className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] transform-gpu"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-[#22d3ee]/30 z-20 shadow-[0_0_30px_rgba(34,211,238,0.2)]" />
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 bg-black">
              <img
                src="/assets/anime_hero.png"
                alt="Anime Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft ambient glow layers */}
            <div className="absolute -inset-6 bg-cyan-500/10 blur-[60px] md:blur-[80px] -z-10" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
