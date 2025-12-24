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
          {/* HYPER-ATMOSPHERIC AURORA & LIQUID GLASS BACKGROUND */}
          <div className="fixed inset-0 z-[-1] pointer-events-none transition-all duration-1000 overflow-hidden">
            {/* Dark Mode Overlay */}
            <div
              className={`absolute inset-0 bg-[#02000a] transition-opacity duration-1000 ${isLight ? "opacity-0" : "opacity-100"}`}
            >
              {/* Layer 1: Moving Plasma Waves (The Aurora) */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-[plasma_20s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] right-[-20%] w-[120%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] animate-[plasma_25s_ease-in-out_infinite_reverse]" />
                <div className="absolute bottom-[-30%] left-[20%] w-[120%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1)_0%,transparent_70%)] animate-[plasma_18s_ease-in-out_infinite] [animation-delay:4s]" />
              </div>

              {/* Animated Background Blobs */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500 rounded-full animate-blob" style={{ mixBlendMode: 'multiply', filter: 'blur(40px)' }} />
                <div className="absolute top-[50%] right-[10%] w-72 h-72 bg-yellow-500 rounded-full animate-blob [animation-delay:2s]" style={{ mixBlendMode: 'multiply', filter: 'blur(40px)' }} />
                <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-pink-500 rounded-full animate-blob [animation-delay:4s]" style={{ mixBlendMode: 'multiply', filter: 'blur(40px)' }} />
              </div>

              {/* Layer 2: Deep Parallax Stars (Far) */}
              <div className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))',
                  backgroundSize: '200px 200px',
                  animation: 'star-drift 100s linear infinite'
                }}
              />

              {/* Layer 3: Near Bright Stars */}
              {starsNear.map((star) => (
                <div
                  key={`star-near-${star.id}`}
                  className="absolute rounded-full bg-white animate-pulse"
                  style={{
                    width: star.width,
                    height: star.height,
                    top: star.top,
                    left: star.left,
                    opacity: star.opacity,
                    boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                    animationDuration: star.animationDuration,
                    animationDelay: star.animationDelay
                  }}
                />
              ))}

              {/* Layer 4: Liquid Glass Blobs (Slow Morphing) */}
              <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full animate-[morph_15s_ease-in-out_infinite]" />
              <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full animate-[morph_20s_ease-in-out_infinite_reverse]" />

              {/* Layer 5: Floating Data Pins (Subtle) */}
              {pins.map((pin) => (
                <div
                  key={`pin-${pin.id}`}
                  className="absolute w-px h-[100px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"
                  style={{
                    top: pin.top,
                    left: pin.left,
                    animation: `float-y ${pin.animationDuration} ease-in-out infinite`,
                    animationDelay: pin.animationDelay
                  }}
                >
                  <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_10px_#22d3ee]" />
                </div>
              ))}

              {/* Layer 6: Horizon Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-cyan-500/10 to-transparent blur-[50px] opacity-50" />

              {/* Layer 7: Grain Texture (Filmic look) */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                  filter: "contrast(150%) brightness(100%)",
                }}
              />
            </div>

            {/* Light Mode Overlay (Pearlescent Aesthetic) */}
            <div
              className={`absolute inset-0 bg-[#ffffff] transition-opacity duration-1000 ${isLight ? "opacity-100" : "opacity-0"}`}
            >
              {/* Soft Pearlescent Gradients */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(206,242,255,0.6)_0%,transparent_70%)] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(245,230,255,0.6)_0%,transparent_70%)] animate-pulse [animation-delay:2s]" />
              </div>

              {/* Subtle Abstract Lines */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                  backgroundSize: '100px 100px'
                }}
              />

              {/* Floating Soft Orbs */}
              <div className="absolute top-[30%] left-[20%] w-64 h-64 bg-cyan-100/30 blur-[80px] rounded-full animate-float" />
              <div className="absolute bottom-[30%] right-[20%] w-80 h-80 bg-purple-100/30 blur-[80px] rounded-full animate-float [animation-delay:3s]" />
            </div>
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
