import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import mony1 from "../assets/mony1.png";
const projects = [
  {
    title: "Savory Bites",
    description: "A modern food delivery platform with real-time order tracking, curated restaurant listings, and seamless checkout experience. Built with focus on user experience and visual appeal.",
    image: mony1,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Neon Arena",
    description: "An immersive multiplayer arcade game featuring retro-futuristic aesthetics, real-time battles, and competitive leaderboards. Designed for both casual and hardcore gamers.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&h=300&auto=format&fit=crop",
    tags: ["Unity", "C#", "WebGL", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Minimalist UI Kit",
    description: "A comprehensive design system and component library focusing on clean aesthetics and accessibility. Perfect for modern web applications seeking elegant simplicity.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400&h=300&auto=format&fit=crop",
    tags: ["Figma", "React", "Tailwind", "Storybook"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-16 sm:mb-24 text-center"
        >
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4 block">Archive</span>
          <motion.h2
            className="font-display text-4xl sm:text-5xl font-bold mb-6 text-foreground"
          >
            My <span className="text-cyan-500">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            A selection of my recent work, featuring full-stack applications and interactive experiments.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
