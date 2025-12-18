import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative animate-float"
        >
          <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden border-4 border-[#a855f7] shadow-[0_0_40px_rgba(168,85,247,0.3)]">
            <img
              src="/assets/anime_about.png"
              alt="Anime Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Background Glow */}
          <div className="absolute -inset-4 bg-[#a855f7] blur-[100px] opacity-20 -z-10" />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-2">About <span className="text-[#a855f7]">Me</span></h2>

          <div className="w-20 h-1 bg-[#a855f7] mb-8" />

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            As a full-stack developer, I channel the relentless power of innovation to build digital empires.
            Drawing inspiration from the King of Curses, I create web solutions that dominate the digital realm
            with precision, creativity, and unyielding strength.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            My arsenal includes cutting-edge technologies and design mastery. I transform ideas into reality,
            crafting applications that not only perform flawlessly but also leave an indelible mark on the web landscape.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["React", "Node.js", "Python", "UI/UX"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#a855f7]/10 border border-[#a855f7] text-[#a855f7] rounded-full text-sm font-bold uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <button className="px-8 py-4 bg-[#a855f7] text-white font-bold rounded-lg hover:bg-white hover:text-[#a855f7] transition-colors uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Explore My Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
