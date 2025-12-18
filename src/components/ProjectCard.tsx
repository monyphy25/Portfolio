import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="group relative bg-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-500 shadow-xl"
      >
        <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="relative h-48 sm:h-64 overflow-hidden rounded-t-3xl">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div style={{ transform: "translateZ(50px)" }} className="p-6 sm:p-8 bg-card/95 backdrop-blur-xl relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/10 text-white/90 border border-white/10 rounded-full backdrop-blur-md">{tag}</span>
            ))}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 line-clamp-3">{description}</p>
          <div className="flex gap-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                <ExternalLink className="w-4 h-4" />Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
                <Github className="w-4 h-4" />Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
