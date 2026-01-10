import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    duration: 'Jan 2023 - Present',
    description: [
      'Developed and maintained responsive web applications using React and TypeScript',
      'Collaborated with UX designers to implement pixel-perfect interfaces',
      'Improved website performance by 40% through code optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Labs',
    location: 'Remote',
    duration: 'Jun 2022 - Dec 2022',
    description: [
      'Built interactive landing pages and marketing websites',
      'Integrated RESTful APIs for dynamic content management',
      'Implemented responsive designs using Bootstrap and custom CSS',
      'Participated in agile development sprints and daily standups',
    ],
  },
  {
    title: 'Front-End Developer Intern',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    duration: 'Jan 2022 - May 2022',
    description: [
      'Assisted in developing client websites using HTML, CSS, and JavaScript',
      'Learned modern frameworks like React and Vue.js',
      'Created reusable UI components and style guides',
      'Contributed to team projects and gained hands-on experience',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    duration: '2020 - 2021',
    description: [
      'Delivered 15+ websites for small businesses and startups',
      'Managed full project lifecycle from concept to deployment',
      'Built custom WordPress themes and landing pages',
      'Maintained ongoing client relationships and support',
    ],
  },
];

const Experience = () => {
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary mono text-lg md:text-xl">03.</span>
          Experience
          <motion.span 
            className="flex-1 h-px bg-border max-w-xs"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 glow-sm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  delay: 0.2
                }}
              />

              {/* Content */}
              <motion.div
                className={`pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12 md:text-left'
                }`}
                variants={cardVariants}
                custom={index}
              >
                <motion.div 
                  className="glass rounded-xl p-6"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -20px hsl(172 66% 50% / 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 text-muted-foreground ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex gap-2"
                        custom={i}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <span className="text-primary shrink-0">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Empty column for alternating layout */}
              {index % 2 === 0 && <div className="hidden md:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
