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
          <h2 className="text-2xl font-medium text-white mb-2">Hello, I am</h2>
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="block">
              {Array.from("Web").map((char, index) => (
                <motion.span
                  key={index}
                  animate={{
                    color: ["#ffffff", "#22d3ee", "#ffffff"],
                    x: [0, 15, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {Array.from("Developer").map((char, index) => (
                <motion.span
                  key={index}
                  animate={{
                    color: ["#ffffff", "#a855f7", "#ffffff"],
                    x: [0, 15, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: (index + 3) * 0.1
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <p className="text-[#22d3ee] text-xl font-medium mb-8">
            Full Stack Developer & Creative Designer
          </p>

          <p className="text-zinc-400 max-w-lg mb-10 leading-relaxed text-lg">
            I create exceptional digital experiences through innovative web development and stunning design solutions.
            Passionate about crafting user-centric applications that make a difference.
          </p>

          <div className="flex items-center gap-6 mb-10">
            <a href="#" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#22d3ee] hover:text-white transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#22d3ee] hover:text-white transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#22d3ee] hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              download="My_CV.pdf"
              className="px-8 py-3 bg-[#22d3ee] text-black font-bold rounded hover:bg-white hover:text-[#22d3ee] transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-[#22d3ee] text-white font-bold rounded hover:bg-[#22d3ee] hover:text-white transition-all text-[#22d3ee] flex items-center justify-center"
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
          {/* Added animate-float for up/down movement */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
            {/* Cyan Circular Glow/Border with continuous pulse */}
            <div className="absolute inset-0 rounded-full border-4 border-[#22d3ee] animate-pulse-cyan z-20" />
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 bg-black">
              <img
                src="/assets/anime_hero.png"
                alt="Anime Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
