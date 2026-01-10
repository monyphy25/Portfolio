import { Code2, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary mono text-lg md:text-xl">01.</span>
          About Me
          <motion.span 
            className="flex-1 h-px bg-border max-w-xs"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hello! I'm John, a passionate web developer based in San Francisco. I enjoy 
              creating things that live on the internet, whether that be websites, applications, 
              or anything in between. My goal is to always build products that provide 
              pixel-perfect, performant experiences.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              variants={itemVariants}
            >
              I started my journey in web development back in 2020, and since then, I've had 
              the privilege of working on various projects ranging from small business websites 
              to complex web applications. I'm constantly learning and staying up-to-date with 
              the latest technologies and best practices.
            </motion.p>

            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              variants={containerVariants}
            >
              {[
                { icon: Code2, text: 'Clean Code' },
                { icon: Palette, text: 'Modern Design' },
                { icon: Rocket, text: 'Fast & Responsive' }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="glass rounded-xl p-4 text-center"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="aspect-square rounded-xl overflow-hidden glass">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="John Doe - Web Developer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
            <motion.div 
              className="absolute inset-0 border-2 border-primary rounded-xl translate-x-4 translate-y-4 -z-10"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 16, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 8, y: 8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
