import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Spotlight } from "./ui/spotlight";
import { SpotlightCard } from "./ui/spotlight-card";

const educationData = [
    {
        degree: "Studying Computer Science",
        institution: "Royal University of Phnom Penh (RUPP)",
        period: "2023 - Present",
        specialization: "Studying Computer Science at Royal University of Phnom Penh."
    },
    {
        degree: "Graduated High School",
        institution: "Kruch Chmar High School",
        period: "2020 - 2023",
        specialization: "Good at Khmer and Physics"
    },
    {
        degree: "Graduated Primary School ",
        institution: "Kruch Chmar High School",
        period: "2017 - 2020",
        specialization: "Good at Physics and Chemistry"
    }

];

const Education = () => {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">Academic Background</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-foreground">
                        Education
                    </h2>
                </motion.div>

                <div className="grid gap-6">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative p-6 sm:p-8 bg-card/60 backdrop-blur-xl border border-border rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            {/* Spotlight Card Effect */}
                            <SpotlightCard className="from-cyan-500/10 via-cyan-500/5 to-transparent" size={400} />

                            {/* Aceternity Spotlight Beam on Box 1 */}
                            {index === 0 && (
                                <Spotlight
                                    className="-top-40 left-0 md:left-60 md:-top-20"
                                    fill="cyan"
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all duration-500 shadow-lg shadow-cyan-500/10">
                                        <GraduationCap className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">{edu.degree}</h3>
                                        <p className="text-lg text-cyan-500 font-semibold mb-3 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                            {edu.institution}
                                        </p>
                                        <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">{edu.specialization}</p>
                                    </div>
                                </div>
                                <div className="px-6 py-2.5 bg-cyan-500/5 rounded-full border border-cyan-500/10 backdrop-blur-sm whitespace-nowrap group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-500">
                                    <span className="text-xs md:text-sm font-mono font-black text-cyan-500 tracking-widest">{edu.period}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
