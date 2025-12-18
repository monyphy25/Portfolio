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
                    <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                        My <span className="text-gradient-accent">Skills</span>
                    </h2>
                    <p className="text-white/60 text-lg">The technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                            className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-white/10 transition-all cursor-pointer group hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${skill.color} hover:shadow-lg`}
                        >
                            <div className="w-16 h-16 relative">
                                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <motion.img
                                    src={skill.icon}
                                    alt={skill.name}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2 // Stagger the float animation
                                    }}
                                    className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                                />
                            </div>
                            <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
