import { ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product catalog, shopping cart, and secure checkout. Built with modern web technologies for optimal performance.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A productivity application with drag-and-drop functionality, team collaboration features, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather app with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, SEO optimization, and content management.',
    tech: ['Next.js', 'MDX', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Recipe Finder',
    description: 'Search and save recipes with nutritional information and meal planning features.',
    tech: ['React', 'Spoonacular API', 'CSS Modules'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for developers with dark mode and animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        <motion.h2 
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary mono text-lg md:text-xl">04.</span>
          Featured Projects
          <motion.span 
            className="flex-1 h-px bg-border max-w-xs"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? '' : 'lg:text-right'
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <motion.div
                className={`lg:col-span-7 ${
                  index % 2 === 0 ? '' : 'lg:col-start-6 lg:row-start-1'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a
                  href={project.liveUrl}
                  className="block relative group overflow-hidden rounded-xl"
                >
                  <motion.div 
                    className="absolute inset-0 bg-primary/20 z-10"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </motion.div>

              {/* Project Content */}
              <div
                className={`lg:col-span-6 lg:row-start-1 relative z-10 ${
                  index % 2 === 0 ? 'lg:col-start-6' : 'lg:col-start-1'
                }`}
              >
                <motion.p 
                  className="text-primary mono text-sm mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Featured Project
                </motion.p>
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div 
                  className="glass rounded-xl p-6 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ 
                    boxShadow: "0 20px 40px -20px hsl(172 66% 50% / 0.2)"
                  }}
                >
                  <p className="text-muted-foreground">{project.description}</p>
                </motion.div>
                <motion.div 
                  className={`flex flex-wrap gap-3 mb-4 mono text-sm text-muted-foreground ${
                    index % 2 === 0 ? 'lg:justify-end' : ''
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </motion.div>
                <motion.div 
                  className={`flex gap-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View source code"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={22} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={22} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3 
          className="text-xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Other Noteworthy Projects
        </motion.h3>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              className="glass rounded-xl p-6 group"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px -20px hsl(172 66% 50% / 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Folder className="text-primary" size={40} />
                </motion.div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View source code"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mono text-xs text-muted-foreground">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
