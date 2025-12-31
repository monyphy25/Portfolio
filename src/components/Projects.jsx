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
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
