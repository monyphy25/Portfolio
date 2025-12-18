import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:mny207708@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's work <span className="text-gradient-accent">together</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">mny207708@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Cambodia, Phnom Penh</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+855 96 268 2899</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
              required
            />
            <button type="submit" className="w-full py-4 bg-gradient-primary text-primary-foreground font-display font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
