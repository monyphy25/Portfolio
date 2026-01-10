import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
    {
        degree: "Master of Science in Computer Science",
        institution: "Tech University",
        period: "2017 - 2019",
        specialization: "Specialization in Artificial Intelligence & Distributed Systems"
    },
    {
        degree: "Bachelor of Science in Software Engineering",
        institution: "State College of Engineering",
        period: "2013 - 2017",
        specialization: "Major in Web Technologies"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">Academic Background</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
                        Education
                    </h2>
                </motion.div>

                <div className="grid gap-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 1.8,
                                type: "spring",
                                bounce: 0,
                                stiffness: 40,
                                damping: 15
                            }}
                            className="group relative p-8 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-500 shadow-sm hover:shadow-cyan-500/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                                        <p className="text-lg text-cyan-600 dark:text-cyan-400 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-sm text-muted-foreground">{edu.specialization}</p>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5">
                                    <span className="text-sm font-mono font-bold text-foreground/80">{edu.period}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
