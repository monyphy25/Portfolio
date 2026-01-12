import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import monyWelcome from "../assets/mony_welcome.png";

interface WelcomeScreenProps {
    onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Sequence management
        const timers: NodeJS.Timeout[] = [];

        // Scene 1: Initial Load (0.5s) -> Start Scene 2
        timers.push(setTimeout(() => setStage(1), 500));

        // Scene 2: Text Entrance (1s duration) 
        // Scene 3: Subtitle (starts 0.3s after text finishes or during? "Delay after main text: 0.3s")
        // Total wait ~1.5s after stage 1 to clear potential overlapped animations if needed, 
        // but React declarative animations handle this. We just need to trigger the states.

        // Scene 2: Text Entrance (1s duration) -> Ends at 1500ms
        // Scene 3: Subtitle Reveal (Delay 0.3s after text) -> Starts at 1800ms
        timers.push(setTimeout(() => setStage(2), 1800));

        // Scene 4: Button Entrance (Starts after Subtitle finishes? 
        // Prompt says "Duration: 0.8s" for subtitle. 1800+800 = 2600ms)
        timers.push(setTimeout(() => setStage(3), 2600));

        return () => timers.forEach(clearTimeout);
    }, []);

    const handleEnter = () => {
        // Scene 6: Button Click Transition
        setStage(4); // Exiting state

        // Scene 7 happens via the component exit animation
        // We wait for Scene 6 (0.6s) to finish before unmounting
        setTimeout(() => {
            onComplete();
        }, 600);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#030014]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
        >
            {/* Scene 1: Background Ambient Motion */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-[#030014] to-cyan-900/20"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
                {/* Scene 2: Main Text */}
                {stage >= 1 && (
                    <div className="mb-8 space-y-6 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={stage === 4 ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-6"
                        >
                            <img src={monyWelcome} alt="Mony" className="w-full h-full object-cover object-top" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            animate={stage === 4 ? { opacity: 0, y: -20 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-sm pb-2"
                        >
                            Welcome to my Portfolio website
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 100 }}
                            animate={stage === 4 ? { opacity: 0, y: -20 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 italic font-medium"
                        >
                            Thank you for visiting my website
                        </motion.p>
                    </div>
                )}

                {/* Scene 3: Subtitle */}
                {stage >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={stage === 4 ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4" />
                        <span className="text-xl md:text-2xl font-mono text-cyan-400 tracking-[0.2em] uppercase">
                            Do you know who I am?
                        </span>
                    </motion.div>
                )}

                {/* Scene 4 & 5: Premium Icon Button */}
                {stage >= 3 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={stage === 4 ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="relative group cursor-pointer"
                    >
                        {/* Button Container */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEnter}
                            className="relative flex items-center justify-center w-20 h-20 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full z-20 group"
                        >
                            {/* Animated Gradient Border/Glow Background */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-tilt" />

                            {/* Inner Dark Circle */}
                            <div className="relative w-[96%] h-[96%] bg-[#0a0a0a] rounded-full flex items-center justify-center border border-white/10 z-10 overflow-hidden">
                                {/* Hover Gradient Fill */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <ArrowRight className="w-8 h-8 text-cyan-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                        </motion.button>

                        {/* Text Label Fade In */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-cyan-500/60 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                        >
                            Enter
                        </motion.span>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
