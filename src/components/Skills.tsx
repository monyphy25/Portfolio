import { motion } from "framer-motion";

const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "shadow-orange-500/50" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "shadow-blue-500/50" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "shadow-yellow-500/50" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "shadow-cyan-500/50" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "shadow-red-500/50" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "shadow-blue-400/50" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "shadow-blue-600/50" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "shadow-purple-500/50" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "shadow-cyan-400/50" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", color: "shadow-blue-700/50" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "shadow-green-500/50" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "shadow-emerald-500/50" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 sm:py-32 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {Array.from("My ").map((char, index) => (
                            <motion.span
                                key={`my-${index}`}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: index * 0.05 }
                                    }
                                }}
                                className="inline-block mr-[0.02em]"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        {Array.from("Skills").map((char, index) => (
                            <motion.span
                                key={`skills-${index}`}
                                variants={{
                                    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        transition: { delay: 0.15 + index * 0.06 }
                                    }
                                }}
                                className="inline-block mr-[0.02em] text-gradient-accent"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        The technologies I use to bring ideas to life.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: index * 0.05
                            }}
                            className="group relative"
                        >
                            <div className="relative h-32 w-full bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:bg-white/[0.1] hover:border-white/30 shadow-xl">

                                {/* Continuous Laser Sweep - Periodic */}
                                <motion.div
                                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                    animate={{ translateX: ["-100%", "200%"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2 + Math.random() * 5,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                />

                                <div className={`absolute inset-0 opacity-10 group-hover:opacity-30 blur-2xl transition-opacity duration-300 ${skill.color.replace('shadow', 'bg')}`} />

                                {/* Floating Icon - Continuous */}
                                <motion.div
                                    className="relative z-10 w-12 h-12 flex items-center justify-center"
                                    animate={{
                                        y: [0, -4, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.1
                                    }}
                                    whileHover={{ scale: 1.4, y: -8 }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow(0 0 8px rgba(255,255,255,0.2)) group-hover:drop-shadow(0 0 15px rgba(255,255,255,0.5))" />
                                </motion.div>

                                <span className="relative z-10 font-display font-semibold text-[10px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors duration-300">{skill.name}</span>

                                {/* Status LED - Always Active */}
                                <div className={`absolute top-2 right-2 w-1 h-1 rounded-full ${skill.color.replace('shadow', 'bg')} animate-pulse`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
