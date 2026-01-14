import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Facebook, Download, Mail } from "lucide-react";
import monyHero from "../assets/mony_no_bg.png";
import cvFile from "../assets/mony_cv.pdf";


const TextReveal = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && displayedText === text) {
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setSpeed(500);
      } else {
        setDisplayedText(prev =>
          isDeleting
            ? text.substring(0, prev.length - 1)
            : text.substring(0, prev.length + 1)
        );
        setSpeed(isDeleting ? 100 : 150);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, speed, text]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[0.9em] bg-pink-500 ml-1 align-middle"
      />
    </span>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    mouseX.set(moveX * 0.015);
    mouseY.set(moveY * 0.015);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6 sm:px-12 relative overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
    >


      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 pt-10 lg:pt-0">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            mass: 1
          }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* HI I AM Badge */}
          <div className="relative inline-block mb-10 group">
            {/* Viewfinder Corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />

            <div className="px-5 py-2.5 bg-cyan-500/10 backdrop-blur-md rounded-lg border border-cyan-500/20 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]" />
              <span className="text-[11px] font-black tracking-[0.3em] text-cyan-400 uppercase">
                Hello I'm
              </span>
            </div>
          </div>

          <div className="mb-6 mt-4 lg:mt-0">
            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter min-h-[1.1em]">
              <span className="block text-cyan-400 pb-2 drop-shadow-lg">
                <TextReveal text="Web" />
              </span>
              <span className="block text-purple-400 drop-shadow-lg leading-tight">
                <TypewriterText text="Developer" />
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 mb-6 tracking-wide underline underline-offset-8 decoration-orange-400/20"
          >
            Frontend Developer & Creative Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed font-medium"
          >
            I am a Frontend Developer with a strong foundation in React.js and a passion for creating engaging and user-friendly interfaces.But now i don't have work experience.
          </motion.p>

          <div className="flex flex-col gap-10 items-center lg:items-start">
            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  href: "https://github.com/monyphy25",
                  initial: { opacity: 0, x: 30 },
                  delay: 0.6
                },
                {
                  icon: <Facebook className="w-5 h-5" />,
                  href: "https://www.facebook.com/share/1AmGdDt4fF/?mibextid=wwXIfr",
                  initial: { opacity: 0, y: 30 },
                  delay: 0.8
                },
                {
                  icon: <i className="fa-brands fa-tiktok text-xl"></i>,
                  href: "https://www.tiktok.com/@phymuny",
                  initial: { opacity: 0, x: -30 },
                  delay: 1.0
                },
                {
                  icon: <i className="fa-brands fa-telegram text-xl"></i>,
                  href: "https://t.me/phymony",
                  initial: { opacity: 0, y: -30 },
                  delay: 1.2
                }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={social.initial}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: social.delay
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href={cvFile}
                download="PHY_MONY_CV.pdf"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl transition-all shadow-[0_10px_20px_rgba(6,182,212,0.3)] flex items-center gap-2 group"
              >
                {/* Shine effect */}
                <motion.div
                  animate={{
                    left: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                />
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 20, delay: 1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="relative overflow-hidden px-8 py-4 border border-foreground/20 text-foreground font-bold rounded-2xl transition-all backdrop-blur-sm flex items-center gap-2"
              >
                {/* Shine effect */}
                <motion.div
                  animate={{
                    left: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Circle Frame Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ x: springX, y: springY }}
          className="order-1 lg:order-2 flex justify-center items-center relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            {/* Decorative Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-cyan-500/20 rounded-full"
            />

            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Profile Frame - Animates from Left to Right */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 15,
                delay: 0.2
              }}
              className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full p-2 border border-cyan-500/30 shadow-2xl overflow-hidden group-hover:border-cyan-400/50 transition-colors duration-500"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-cyan-500/5 to-purple-600/10">
                {/* Image - Animates from Right to Left */}
                <motion.img
                  initial={{ opacity: 0, x: 80, scale: 1.15 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 25,
                    damping: 15,
                    delay: 0.4
                  }}
                  src={monyHero}
                  alt="Mony Phy"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Inner Shadow/Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-30" />
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>



    </section>
  );
};

export default Hero;
