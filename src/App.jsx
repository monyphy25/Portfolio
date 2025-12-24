import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Guestbook from "@/components/Guestbook";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";

import WelcomeScreen from "./components/WelcomeScreen";


const STARS_NEAR_DATA = [...Array(40)].map((_, i) => ({
  id: i,
  width: `${1 + Math.random() * 2}px`,
  height: `${1 + Math.random() * 2}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  opacity: 0.3 + Math.random() * 0.7,
  animationDuration: `${3 + Math.random() * 5}s`,
  animationDelay: `${Math.random() * 5}s`
}));

const PINS_DATA = [...Array(8)].map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${10 + Math.random() * 10}s`,
  animationDelay: `${Math.random() * 5}s`
}));

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

  const starsNear = useMemo(() => STARS_NEAR_DATA, []);
  const pins = useMemo(() => PINS_DATA, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className={isLight ? "light" : ""}>
          {/* STATIC PREMIUM BACKGROUND - Zero CPU load */}
          <div className="fixed inset-0 z-[-1] pointer-events-none transition-all duration-1000 overflow-hidden">
            {/* Dark Mode Background */}
            <div
              className={`absolute inset-0 bg-[#02000a] transition-opacity duration-1000 ${isLight ? "opacity-0" : "opacity-100"}`}
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.05) 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 40%)
                `
              }}
            >
              {/* Subtle Horizon Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-cyan-500/5 to-transparent blur-[50px] opacity-50" />
            </div>

            {/* Light Mode Background */}
            <div
              className={`absolute inset-0 bg-white transition-opacity duration-1000 ${isLight ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.03) 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.03) 0%, transparent 40%)
                `
              }}
            />
          </div>



          <main className="min-h-screen bg-transparent text-foreground transition-colors duration-500 relative z-10">
            <Navbar isLight={isLight} setIsLight={setIsLight} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Guestbook />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
