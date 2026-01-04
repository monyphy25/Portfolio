import { motion } from "framer-motion";
import aboutImg from "../assets/mony1.png";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-foreground">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
      >
        {/* Image Side - Styled like Hero Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 }
            }
          }}
          className="relative flex justify-center"
          data-aos="fade-right"
        >
          {/* Sleek Digital Reflector Container */}
          <motion.div
            className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Ambient Background Glow - Subtle & Multi-layered */}
            <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 blur-[80px] -z-10" />

            {/* Kinetic Border - Single Thin Glowing Line */}
            <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none z-30">
              <motion.rect
                x="5" y="5" width="calc(100% - 10px)" height="calc(100% - 10px)"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                rx="24"
                strokeDasharray="100 300"
                animate={{ strokeDashoffset: [0, -400] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                  <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main Image Container with Parallax Effect */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm z-20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1, x: -5, y: -5 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={aboutImg}
                  alt="Mony Profile"
                  className="w-full h-full object-cover grayscale-[0.3] contrast-[1.2] brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                />
              </motion.div>

              {/* Dynamic Light Reflector Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                    "linear-gradient(45deg, rgba(255,255,255,0) 100%, rgba(255,255,255,0.1) 150%, rgba(255,255,255,0) 200%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Interactive Scanning Bar - Reactive */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan transition-opacity" />
            </motion.div>

            {/* Tech Accents - Minimalist Geometric Shapes */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl z-40 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-purple-400/50 rounded-br-3xl z-40 group-hover:border-purple-400 transition-colors" />

            {/* Floating Data Dots */}
            <div className="absolute top-10 right-[-20px] space-y-2 z-10">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400/40"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <div className="flex flex-col">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {Array.from("About Me").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    textShadow: "0 0 20px rgba(34, 211, 238, 0.5)"
                  }
                }}
                className="inline-block mr-[0.1em] hover:text-primary transition-colors duration-300"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1 }
            }}
            className="w-20 h-1 bg-accent mb-8 origin-left"
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            As a Frontend developer, I channel the relentless power of innovation to build digital empires.
            I create web solutions that dominate the digital realm with precision, creativity, and unyielding strength.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            My arsenal includes cutting-edge technologies and design mastery. I transform ideas into reality,
            crafting applications that not only perform flawlessly but also leave an indelible mark on the web landscape.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {["React", "Node.js", "Python"].map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                }}
                className="px-5 py-2 bg-primary/10 border border-primary/50 text-primary rounded-xl text-sm font-bold uppercase tracking-wider cursor-default transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-accent text-accent-foreground font-bold rounded-xl hover:bg-accent/90 transition-all uppercase tracking-widest shadow-xl flex items-center gap-2 group w-fit"
          >
            Explore My Skills
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
