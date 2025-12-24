import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";


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

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight transition-colors"
            style={{ color: 'var(--color-foreground)' }}
          >
            <span className="block overflow-hidden whitespace-nowrap">
              {"Web ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 0] }}
                  transition={{
                    duration: 1.6,
                    delay: index * 0.12,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden whitespace-nowrap">
              {"Developer".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, 0] }}
                  transition={{
                    duration: 1.6,
                    delay: 0.4 + index * 0.12,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <p className="text-xl font-medium mb-8" style={{ color: 'var(--color-primary)' }}>
            Frontend Developer & Creative Designer
          </p>

          <p className="max-w-lg mb-10 leading-relaxed text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
            I create exceptional digital experiences through innovative web development and stunning design solutions.
            Passionate about crafting user-centric applications that make a difference.
          </p>

          <div className="flex items-center gap-6 mb-10">
            <a
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-foreground)',
                color: 'var(--color-background)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-foreground)';
                e.currentTarget.style.color = 'var(--color-background)';
              }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-foreground)',
                color: 'var(--color-background)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-foreground)';
                e.currentTarget.style.color = 'var(--color-background)';
              }}
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-foreground)',
                color: 'var(--color-background)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-foreground)';
                e.currentTarget.style.color = 'var(--color-background)';
              }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 font-display">
            <a
              href="/cv.pdf"
              download="My_CV.pdf"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 font-bold rounded-xl transition-all flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] bg-white/5 border-white/15 text-foreground/90 hover:border-cyan-400/70 backdrop-blur-lg"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Image 1 - refined smooth floating / tilt animation */}
          <motion.div
            className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
              rotate: 0,
              transition: { duration: 0.4 },
            }}
          >
            {/* Cyan Circular Glow/Border with continuous pulse */}
            <div className="absolute inset-0 rounded-full border-4 border-[#22d3ee] animate-pulse-cyan z-20 shadow-[0_0_50px_rgba(34,211,238,0.4)]" />
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 bg-black">
              <img
                src="/assets/anime_hero.png"
                alt="Anime Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft ambient glow layers to mirror About image */}
            <div className="absolute -inset-10 bg-cyan-500 blur-[120px] opacity-20 -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500 blur-[150px] opacity-10 -z-20" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
