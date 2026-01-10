import { motion } from "framer-motion";
import { Code, Cpu, Globe, Sparkles } from "lucide-react";
import aboutImg from "../assets/mony1.png";

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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group mx-auto md:mx-0"
          >
            <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] overflow-hidden rounded-3xl">
              {/* Dual Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-red-500/10 z-10" />
                <img
                  src={aboutImg}
                  alt="Mony Phy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Cyber Decorations */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
              className="relative"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, ease: "easeOut" }
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
                    transition: { duration: 1.5, ease: "easeOut" }
                  }
                }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                I am a passionate and experienced Full-Stack Developer dedicated to building high-quality, scalable web applications. With over 5 years of experience in the industry, I have honed my skills in both frontend and backend technologies, delivering robust solutions for diverse clients.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, ease: "easeOut" }
                  }
                }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >

              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, ease: "easeOut" }
                  }
                }}
                className="space-y-2 mb-8"
              >
                <h3 className="text-xl font-bold text-foreground">Core Strengths:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2 text-sm sm:text-base"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Full-Stack Architecture</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Performance Optimization</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> UI/UX Design Implementation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> REST & GraphQL APIs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Agile Methodology</li>
                </ul>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Sparkles, label: "Modern UI", dir: -1 },
                  { icon: Cpu, label: "Performance", dir: 1 }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: item.dir * 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.2 + (idx * 0.15)
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
