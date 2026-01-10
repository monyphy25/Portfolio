import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Senior Full-Stack Developer",
        company: "TechNova Solutions",
        duration: "2023 - Present",
        description: "Leading the development of scalable enterprise web applications. Improved system performance by 40% through code optimization and architectural refactoring.",
        technologies: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
        id: 2,
        role: "Web Developer",
        company: "Creative Pulse Agency",
        duration: "2021 - 2023",
        description: "Collaborated with designers to deliver high-fidelity UIs for diverse clients. Implemented accessible and responsive designs ensuring 100% cross-browser compatibility.",
        technologies: ["Vue.js", "Tailwind CSS", "Firebase", "Figma"]
    },
    {
        id: 3,
        role: "Junior Frontend Developer",
        company: "StartUp Inc.",
        duration: "2019 - 2021",
        description: "Developed and maintained client-facing features. Assisted in migrating legacy codebase to modern React architecture.",
        technologies: ["React", "JavaScript", "SASS", "Git"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4 block">Career Path</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-display">
                        Professional <span className="text-cyan-500">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 md:-translate-x-1/2 origin-top"
                    />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
                                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Icon Node */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
                                    viewport={{ once: true }}
                                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-black transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                />

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-black/5 dark:border-white/10 hover:border-cyan-500/30 transition-colors duration-300 shadow-sm hover:shadow-xl group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
                                            <Calendar className="w-3 h-3" />
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded border border-cyan-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
