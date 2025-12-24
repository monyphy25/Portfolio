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
            hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)", x: -50 },
            visible: {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              x: 0,
              transition: { type: "spring", stiffness: 50, damping: 20 }
            }
          }}
          className="relative flex justify-center perspective-1000"
        >
          {/* Using a more premium 3D floating animation with GPU acceleration */}
          <motion.div
            className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] transform-gpu"
            animate={{
              y: [0, -15, 0],
              rotateX: [0, 4, 0],
              rotateY: [0, -4, 0],
            }}
            transition={{
              duration: 10, // Slower is often smoother
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Animated Cyber Frame - Simplified for performance */}
            <motion.div
              className="absolute -inset-6 rounded-3xl border border-cyan-500/20 z-0"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -inset-3 rounded-3xl border border-purple-500/20 z-0"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#22d3ee]/50 z-20 shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden">
              <div className="absolute inset-0 z-10 bg-black">
                <img
                  src={aboutImg}
                  alt="Mony Profile"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Scanline Effect - Optimized */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/30 z-30"
                animate={{ top: ["0%", "100%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none z-20" />
            </div>

            {/* Ambient Glowing Backgrounds - Optimized blur for performance */}
            <div className="absolute -inset-8 bg-cyan-500/20 blur-[80px] -z-10 animate-pulse" />
            <div className="absolute inset-0 bg-purple-500/10 blur-[100px] -z-20" />
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
