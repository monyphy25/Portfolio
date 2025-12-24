import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >

          <motion.h2
            className="font-display text-4xl sm:text-5xl font-bold mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="text-gradient-primary inline-block animate-title-glow">
              Contact
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[{ icon: Mail, label: "Email", value: "mny207708@gmail.com" }, { icon: MapPin, label: "Location", value: "Cambodia, Phnom Penh" }, { icon: Phone, label: "Phone", value: "+855 96 268 2899" }].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-lg rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="4a4d7a0d-ade2-4214-8a68-e5b0ebdd53bb" />
            <div className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-4 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/60 transition-all placeholder:text-muted-foreground/60 backdrop-blur-sm shadow-inner" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-4 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/60 transition-all placeholder:text-muted-foreground/60 backdrop-blur-sm shadow-inner" />
              <textarea name="message" placeholder="Your Message" rows={4} required className="w-full px-4 py-4 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/60 transition-all placeholder:text-muted-foreground/60 backdrop-blur-sm shadow-inner resize-none" />
            </div>
            <button type="submit" className="w-full py-4 font-display font-bold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
