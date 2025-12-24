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
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Web
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <p className="text-xl font-medium mb-8" style={{ color: 'var(--color-primary)' }}>
            Frontend Developer & Creative Designer
          </p>

          <p className="max-w-lg mb-10 leading-relaxed text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
            I create exceptional digital experiences through innovative web development and stunning design solutions.
          </p>

          <div className="flex items-center gap-6 mb-10">
            <a
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 font-display">
            <a
              href="/cv.pdf"
              download="My_CV.pdf"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] active:scale-95 transition-all flex items-center justify-center shadow-lg"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 font-bold rounded-xl transition-all flex items-center justify-center shadow-sm active:scale-95 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] bg-white/5 border-white/15 text-foreground/90 hover:border-cyan-400/70 backdrop-blur-lg"
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
          className="relative flex justify-center"
        >
          {/* Simple floating avatar */}
          <motion.div
            className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] transform-gpu"
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
            <div className="absolute -inset-6 bg-cyan-500/10 blur-[80px] -z-10" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
