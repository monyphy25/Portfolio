import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TextType from "./TextType";
import { SplineSceneBasic } from "@/components/ui/demo";
import { Rocket, Sparkles, Terminal } from "lucide-react";

interface WelcomeScreenProps {
    onComplete: () => void;
}

const CharacterReveal = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: delay * 0.1
            },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={`flex flex-wrap justify-center ${className}`}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
    const [exit, setExit] = useState(false);

    const handleEnter = () => {
        setExit(true);
        setTimeout(onComplete, 1200); // Wait for exit animation
    };

    return (
        <AnimatePresence>
            {!exit && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden cursor-pointer selection:bg-cyan-500/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.2,
                        filter: "blur(20px)",
                        transition: { duration: 1 }
                    }}
                    transition={{ duration: 0.8 }}
                    onClick={handleEnter}
                >
                    {/* Living Star Field Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-[#000] to-[#000]" />
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full opacity-20"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    scale: Math.random() * 0.5 + 0.5
                                }}
                                animate={{
                                    y: [null, Math.random() * -100],
                                    opacity: [0.2, 0.8, 0.2]
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    width: Math.random() * 3 + 1 + "px",
                                    height: Math.random() * 3 + 1 + "px",
                                }}
                            />
                        ))}
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 py-10 overflow-y-auto max-h-screen no-scrollbar">

                        {/* Interactive 3D Robot */}
                        <div className="w-full max-w-4xl mb-8 relative z-10">
                            <SplineSceneBasic />
                        </div>

                        {/* Main Title Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            className="mb-12 relative z-20 flex flex-col items-center w-full px-4 max-w-full overflow-hidden"
                        >
                            <span className="text-sm sm:text-2xl md:text-3xl font-display font-medium tracking-tight sm:tracking-[0.4em] text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] break-words mb-4">
                                WELCOME TO MY
                            </span>

                            <div className="text-2xl sm:text-4xl md:text-6xl font-display font-black tracking-tight uppercase bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent p-2 sm:p-4 min-h-[80px] sm:min-h-[120px] flex items-center justify-center w-full">
                                PORTFOLIO
                            </div>
                        </motion.div>

                        {/* Enter Icon Button at Bottom */}
                        <div className="flex flex-col items-center gap-4">
                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEnter();
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.2, type: "spring" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative w-20 h-20 flex items-center justify-center bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm group transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            >
                                <Rocket className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                            </motion.button>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;
