import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const skills = [
    // ... (rest of skills remains same)
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

                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
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
                            <div className="relative h-36 w-full bg-black/[0.03] dark:bg-white/[0.05] backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-between overflow-hidden transition-all duration-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.1] hover:border-black/10 dark:hover:border-white/30 shadow-md hover:shadow-xl dark:shadow-none">

                                {/* Continuous Laser Sweep - Periodic */}
                                <motion.div
                                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/[0.03] dark:via-white/10 to-transparent skew-x-12"
                                    animate={{ translateX: ["-100%", "200%"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2 + Math.random() * 5,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                />

                                <div className={`absolute inset-0 opacity-5 dark:opacity-10 group-hover:opacity-15 dark:group-hover:opacity-30 blur-2xl transition-opacity duration-300 ${skill.color.replace('shadow', 'bg')}`} />

                                {/* Floating Icon - Continuous */}
                                <motion.div
                                    className="relative z-10 w-12 h-12 mt-2 flex items-center justify-center"
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
                                    whileHover={{ scale: 1.25, y: -4 }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain filter drop-shadow(0 4px 6px rgba(0,0,0,0.1)) dark:drop-shadow(0 0 12px rgba(255,255,255,0.2)) saturate-[1.2] dark:saturate-100 transition-all duration-300"
                                    />
                                </motion.div>

                                <div className="relative z-10 w-full mb-1">
                                    <div className="px-1.5 py-1 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-black/5 dark:border-white/5 text-center transition-all duration-300 group-hover:border-cyan-500/30">
                                        <span className="font-display font-bold text-[10px] tracking-widest uppercase text-black/70 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>

                                {/* Status LED - Always Active */}
                                <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${skill.color.replace('shadow', 'bg')} animate-pulse border border-white/20 dark:border-none`} />

                                {/* Cyber Bottom Bar */}
                                <div className={`absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 ${skill.color.replace('shadow', 'bg').split('/')[0]}`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex justify-center"
                >
                    <a
                        href="#certificates"
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl hover:bg-black/[0.02] dark:hover:bg-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/5 overflow-hidden"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex items-center gap-3">
                            <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform sm:w-6 sm:h-6" />
                            <span className="font-display font-black text-sm sm:text-base tracking-[0.1em] uppercase bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300">
                                My Certifications
                            </span>
                        </div>

                        {/* Cyber Accent Line */}
                        <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-700 ease-in-out" />
                    </a>
                </motion.div>

                {/* Certificate Carousel */}
                <div className="relative mt-12">
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-4 -mx-4">
                        {[
                            {
                                title: "Full Stack Web Development",
                                issuer: "Meta",
                                date: "2024",
                                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&h=250&auto=format&fit=crop"
                            },
                            {
                                title: "UI/UX Design Specialization",
                                issuer: "Google",
                                date: "2023",
                                image: "https://images.unsplash.com/photo-1541462608141-ad6757d54101?q=80&w=400&h=250&auto=format&fit=crop"
                            },
                            {
                                title: "Advanced React Patterns",
                                issuer: "IBM",
                                date: "2024",
                                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=250&auto=format&fit=crop"
                            },
                            // Added dummy certificates to make scroll more obvious
                            {
                                title: "Cloud Architecture Professional",
                                issuer: "AWS",
                                date: "2024",
                                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=250&auto=format&fit=crop"
                            },

                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="group/cert relative bg-white dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 w-[280px] sm:w-[350px] flex-shrink-0 snap-center shadow-2xl"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/cert:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/cert:opacity-60 transition-opacity" />

                                    <div className="absolute top-4 left-4">
                                        <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg shadow-xl">
                                            <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">
                                                {cert.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="font-display font-bold text-lg text-black dark:text-white mb-2 group-hover/cert:text-cyan-600 dark:group-hover/cert:text-cyan-400 transition-colors line-clamp-1">
                                        {cert.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                            <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest font-black">Issuer</p>
                                            <p className="text-sm font-bold text-black/70 dark:text-white/80">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Verified</span>
                                        </div>

                                        <button className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition-all text-[10px] font-black uppercase tracking-wider shadow-lg active:scale-95">
                                            <span>VIEW</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Indicator Hint */}
                    <div className="flex justify-center gap-2 mt-2">
                        <div className="w-8 h-1 rounded-full bg-cyan-500/20 animate-pulse" />
                        <div className="w-12 h-1 rounded-full bg-cyan-500/40" />
                        <div className="w-8 h-1 rounded-full bg-cyan-500/20 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
