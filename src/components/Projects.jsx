import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

import rockPaperGame from "../assets/rock_paper_game.png";
const projects = [
  {
    title: "Confession",
    description: "A personal, interactive web experience designed for a special proposal asking 'Will you be my girlfriend?'.",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=400&h=300&auto=format&fit=crop",
    tags: ["React", "Vite", "TailwindCSS"],
    liveUrl: "https://confession-c41e.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game with a modern, sleek design featuring smooth animations and an intuitive user interface.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=400&h=300&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Vite"],
    liveUrl: "https://tic-tac-toe-game-swart-gamma.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Rock Paper Scissors",
    description: "An interactive Rock Paper Scissors game with engaging animations, score tracking, and a responsive design for all devices.",
    image: rockPaperGame,
    tags: ["React", "TypeScript", "CSS"],
    liveUrl: "https://rock-paper-game-d58p.vercel.app/",
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
          {projects.map((project, index) => {
            if (index === 0) {
              return (
                <div
                  key={project.title}
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <ProjectCard {...project} index={index} />
                </div>
              );
            }
            if (index === 1) {
              return (
                <div
                  key={project.title}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <ProjectCard {...project} index={index} />
                </div>
              );
            }
            if (index === 2) {
              return (
                <div
                  key={project.title}
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <ProjectCard {...project} index={index} />
                </div>
              );
            }
            return <ProjectCard key={project.title} {...project} index={index} />;
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
