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
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    mouseX.set(mouseXFromCenter / width);
    mouseY.set(mouseYFromCenter / height);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={
        index === 0 ? { opacity: 0, x: -70 } :
          index === 1 ? { opacity: 0, y: -70 } :
            { opacity: 0, x: 70 }
      }
      whileInView={
        index === 0 ? { opacity: 1, x: 0 } :
          index === 1 ? { opacity: 1, y: 0 } :
            { opacity: 1, x: 0 }
      }
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

      <div className="relative bg-white dark:bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 transition-colors duration-500 shadow-2xl">
        <div className="relative h-48 sm:h-64 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          <div className="absolute top-4 right-4 flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md text-white border border-white/10 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 relative z-10" style={{ transform: "translateZ(40px)" }}>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-black/60 dark:text-gray-400 text-sm sm:text-base mb-6 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center gap-6">
            {liveUrl && (
              <a
                href={liveUrl}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <span>Live View</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black/50 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <div className="p-2 bg-black/5 dark:bg-white/5 rounded-lg">
                  <Github className="w-4 h-4" />
                </div>
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
