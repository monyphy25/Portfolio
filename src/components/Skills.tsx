import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Cpu, Globe, Layers, Workflow, LucideIcon } from "lucide-react";

interface Skill {
    name: string;
    level: number;
    icon: LucideIcon;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React / Next.js", level: 95, icon: Layout },
            { name: "TypeScript", level: 90, icon: Code2 },
            { name: "Tailwind CSS", level: 95, icon: Layers },
            { name: "Framer Motion", level: 85, icon: Globe },
            { name: "HTML/CSS", level: 100, icon: Layout }
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Node.js", level: 85, icon: Terminal },
            { name: "Python", level: 80, icon: Database },
            { name: "PostgreSQL", level: 75, icon: Database },
            { name: "REST APIs", level: 90, icon: Workflow },
            { name: "GraphQL", level: 70, icon: Layers }
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git / GitHub", level: 90, icon: Workflow },
            { name: "Docker", level: 75, icon: Cpu },
            { name: "AWS", level: 70, icon: Globe },
            { name: "Figma", level: 80, icon: Layout },
            { name: "VS Code", level: 95, icon: Code2 }
        ]
    }
];

const allSkills = skillCategories.flatMap(cat => cat.skills);

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="text-cyan-500 font-mono text-sm tracking-[0.5em] uppercase mb-4 block">Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
                        Skills & <span className="text-cyan-500">Technologies</span>
                    </h2>
                </motion.div>

                {/* CYBER MARQUEE */}
                <div className="relative mb-24 mask-gradient-x overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
                        {[...allSkills, ...allSkills].map((skill, i) => (
                            <div key={`${skill.name}-${i}`} className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl group-hover:bg-cyan-500/10 transition-colors">
                                <skill.icon className="w-5 h-5 text-cyan-500" />
                                <span className="text-foreground/80 font-bold tracking-widest text-sm uppercase">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300 shadow-2xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Code2 className="w-12 h-12 text-cyan-500" />
                            </div>

                            <h3 className="text-xl font-bold mb-8 text-foreground flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]" />
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                                            <span className="text-[10px] font-mono text-cyan-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
