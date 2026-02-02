import { motion } from "framer-motion";
import { Code, Cpu, Globe, Sparkles } from "lucide-react";
import aboutImg from "../assets/mony_about.png";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden bg-white/5 dark:bg-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative group mx-auto md:mx-0"
          >
            <div className="relative w-[280px] h-[350px] xs:w-[320px] xs:h-[400px] sm:w-[380px] sm:h-[480px] md:w-[420px] md:h-[520px]">
              {/* Premium Frame Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* The Frame */}
              <div className="relative w-full h-full p-2 rounded-[2.5rem] border-2 border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-500">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <img
                    src={aboutImg}
                    alt="Mony Phy"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3
                  }
                }
              }}
              className="relative"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="text-3xl md:text-5xl font-bold mb-6 font-display text-foreground"
              >
                About <span className="text-cyan-500">Me</span>
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                Hello my name is Mony i am 20 years old.I come from Kampong Thom Province.But now i'm living  in Phnom Penh to continue my education .I am a student at Royal University of Phnom Penh (RUPP), Studying Computer Science.I am a Frontend Developer with a strong foundation in React.js and a passion for creating engaging and user-friendly interfaces.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="space-y-2 mb-8"
              >
                <h3 className="text-xl font-bold text-foreground">Core Strengths:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Performance Optimization</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> UI/UX Design Implementation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> REST & GraphQL APIs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Agile Methodology</li>
                </ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeOut" }
                  }
                }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Sparkles, label: "Modern UI" },
                  { icon: Cpu, label: "Performance" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-cyan-500" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
