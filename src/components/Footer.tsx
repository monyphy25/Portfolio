import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ChevronUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Background Glow Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-display font-bold text-gradient-primary mb-4">PORTFOLIO</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                Crafting immersive digital experiences with modern technologies and a passion for design excellence.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "Github" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/50 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Guestbook", href: "#guestbook" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-semibold text-foreground">Contact Me</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="break-all font-medium">mny207708@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">Cambodia, Phnom Penh</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">+855 96 268 2899</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Call to Action */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-semibold text-foreground">Get In Touch</h4>
            <p className="text-sm text-muted-foreground">
              Interested in working together? Drop me a line and let's discuss your next project.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-xl text-primary-foreground font-bold text-sm shadow-glow transition-all"
            >
              Hire Me
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} <span className="text-primary font-semibold">Portfolio</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="p-3 bg-secondary/30 hover:bg-primary/20 border border-white/5 hover:border-primary/30 rounded-full transition-all group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 transition-all" />
            </button>
            <div className="text-muted-foreground text-xs font-mono">
              v1.2.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
