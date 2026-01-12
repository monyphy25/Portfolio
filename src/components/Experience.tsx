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
        role: " Computer Science Student ",
        company: "Royal University of Phnom Penh",
        duration: "2023 - Present",
        description: "Studying Computer Science at Royal University of Phnom Penh. ",
        technologies: ["React", "Node.js", "TypeScript"]
    },
    {
        id: 2,
        role: "Service ",
        company: "Kai Zaab BKK",
        duration: "2024 - 2025",
        description: "Worked as a Service at Kai Zaab BKK. ",
        technologies: ["Vue.js", "Tailwind CSS", "React"]
    },
    {
        id: 3,
        role: "Sale and Cashier",
        company: "Rotha Pharmacy",
        duration: "2024 - 2025",
        description: "Worked as a Sale and Cashier at Rotha Pharmacy. ",
        technologies: ["React", "JavaScript", "Git"]
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
                        className="absolute left-2 xs:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 md:-translate-x-1/2 origin-top"
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
                                    className="absolute left-2 xs:left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-black transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                />

                                {/* Content Card */}
                                <div className={`ml-10 xs:ml-12 md:ml-0 md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-cyan-500 transition-colors duration-300 leading-tight">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm md:text-base text-cyan-500 font-bold">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-[11px] md:text-xs text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full border border-border w-fit">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-500/70" />
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>
                                    <p className="text-foreground/80 mb-6 leading-relaxed text-sm md:text-base font-medium">
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
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
