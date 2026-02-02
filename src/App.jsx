import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";


import Guestbook from "@/components/Guestbook";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";


const Index = () => {
  const [isLight, setIsLight] = useState(false);

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: false,
    });
  }, []);


  const [starField, setStarField] = useState({ far: [], mid: [], shooting: [], dust: [] });

  useEffect(() => {
    setStarField({
      far: [...Array(80)].map((_, i) => ({
        key: `star-far-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 5,
      })),
      mid: [...Array(40)].map((_, i) => ({
        key: `star-mid-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
      shooting: [...Array(3)].map((_, i) => ({
        key: `shooting-star-${i}`,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 50}%`,
        repeatDelay: 5 + Math.random() * 15,
        delay: i * 7,
      })),
      dust: [...Array(10)].map((_, i) => ({
        key: `dust-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 20 + Math.random() * 20,
      })),
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showWelcome ? (
        <WelcomeScreen key="welcome" onComplete={() => setShowWelcome(false)} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* STATIC PREMIUM BACKGROUND - Deep Cosmic Theme */}
          <div className="fixed inset-0 z-[-1] pointer-events-none transition-all duration-1000 overflow-hidden bg-[#030014]">
            {/* Deep Cosmic Background */}
            <div
              className={`absolute inset-0 bg-[#030014] transition-opacity duration-1000 ${isLight ? "opacity-0" : "opacity-100"}`}
            >
              {/* Star Field Layers */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Background Stars (Far) */}
                {/* Background Stars (Far) */}
                {starField.far.map((star) => (
                  <motion.div
                    key={star.key}
                    className="absolute w-[1px] h-[1px] bg-white/40 rounded-full"
                    style={{
                      top: star.top,
                      left: star.left,
                    }}
                    animate={{
                      opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                      duration: star.duration,
                      repeat: Infinity,
                      delay: star.delay,
                    }}
                  />
                ))}

                {/* Mid Stars (Twinkling) */}
                {/* Mid Stars (Twinkling) */}
                {starField.mid.map((star) => (
                  <motion.div
                    key={star.key}
                    className="absolute w-[1.5px] h-[1.5px] bg-cyan-200/60 rounded-full"
                    style={{
                      top: star.top,
                      left: star.left,
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: star.duration,
                      repeat: Infinity,
                      delay: star.delay,
                    }}
                  />
                ))}

                {/* Cosmic Nebulas */}
                <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen animate-pulse"
                  style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen animate-pulse"
                  style={{ animationDuration: '18s' }} />
                <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px] animate-pulse"
                  style={{ animationDuration: '15s' }} />

                {/* Shooting Stars */}
                {/* Shooting Stars */}
                {starField.shooting.map((star) => (
                  <motion.div
                    key={star.key}
                    className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent -rotate-45 opacity-0"
                    animate={{
                      x: ['-100%', '300%'],
                      y: ['-100%', '300%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: star.repeatDelay,
                      delay: star.delay,
                      ease: "easeIn",
                    }}
                    style={{
                      top: star.top,
                      left: star.left,
                    }}
                  />
                ))}

                {/* Floating Cosmic Dust */}
                {/* Floating Cosmic Dust */}
                {starField.dust.map((star) => (
                  <motion.div
                    key={star.key}
                    className="absolute w-[2px] h-[2px] bg-white/10 rounded-full blur-[1px]"
                    style={{
                      top: star.top,
                      left: star.left,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      x: [0, 50, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: star.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>

              {/* Subtle Horizon Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-cyan-500/20 to-transparent blur-[60px] opacity-40" />
            </div>

            {/* Light Mode Background */}
            <div
              className={`absolute inset-0 bg-[#f8fafc] transition-opacity duration-1000 ${isLight ? "opacity-100" : "opacity-0"}`}
            >
              <div className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `
                       radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.08) 0%, transparent 40%),
                       radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 40%)
                     `
                }}
              />
              <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            </div>
          </div>

          <div className={isLight ? "light" : ""}>
            <main className="min-h-screen bg-transparent text-foreground transition-colors duration-500 relative z-10 selection:bg-cyan-500/30">
              <Navbar isLight={isLight} setIsLight={setIsLight} />
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />


              <Guestbook />
              <Contact />
              <Footer />
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
