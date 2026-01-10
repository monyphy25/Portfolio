import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS/SCSS', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Bootstrap', level: 88 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git/GitHub', level: 82 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Node.js', level: 70 },
];

const techIcons = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Git', icon: '🔧' },
  { name: 'Figma', icon: '🎯' },
  { name: 'VS Code', icon: '💻' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-custom">
        <motion.h2 
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary mono text-lg md:text-xl">02.</span>
          Skills & Technologies
          <motion.span 
            className="flex-1 h-px bg-border max-w-xs"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress Bars */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6"
              variants={skillVariants}
            >
              Proficiency
            </motion.h3>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="group"
                variants={skillVariants}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Icons Grid */}
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technologies I Use
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {techIcons.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="glass rounded-xl p-6 text-center cursor-pointer"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0 20px 40px -20px hsl(172 66% 50% / 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="text-4xl mb-3 block"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.icon}
                  </motion.span>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8 p-6 glass rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold mb-3 text-primary">Currently Learning</h4>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Next.js', 'GraphQL', 'Docker', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: index * 0.1 }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "hsl(172 66% 50% / 0.2)",
                      color: "hsl(172 66% 50%)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
