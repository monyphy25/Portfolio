import { useState, useEffect } from "react";
import { Github, Mail, MapPin, Phone, ChevronUp, ExternalLink, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const Footer = () => {
  const [reactions, setReactions] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Generate a unique user identifier (stored in localStorage)
  const getUserIdentifier = () => {
    let userId = localStorage.getItem("portfolio_user_id");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("portfolio_user_id", userId);
    }
    return userId;
  };

  // Fetch current reactions from database
  const fetchReactions = async () => {
    try {
      const { data, error } = await supabase
        .from("portfolio_reactions")
        .select("reactions")
        .eq("id", "00000000-0000-0000-0000-000000000001")
        .single();

      if (error) throw error;

      if (data) {
        setReactions(data.reactions || 0);
      }
    } catch (error) {
      console.error("Error fetching reactions:", error);
      // Fallback to localStorage if database fails
      const storedReactions = localStorage.getItem("portfolio_reactions_v3");
      setReactions(storedReactions ? parseInt(storedReactions) : 0);
    }
  };

  // Check if user has already voted
  const checkUserVote = async () => {
    const userId = getUserIdentifier();
    try {
      const { data, error } = await supabase
        .from("user_votes")
        .select("vote_type")
        .eq("user_identifier", userId)
        .single();

      if (data) {
        setHasVoted(true);
      } else {
        setHasVoted(false);
      }
    } catch (error) {
      // User hasn't voted yet
      setHasVoted(false);
    }
  };

  useEffect(() => {
    const initializeReactions = async () => {
      setIsLoading(true);
      await fetchReactions();
      await checkUserVote();
      setIsLoading(false);
    };

    initializeReactions();

    // Set up real-time subscription for reactions
    const reactionSubscription = supabase
      .channel("portfolio_reactions_changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "portfolio_reactions",
        },
        (payload: any) => {
          if (payload.new) {
            setReactions(payload.new.reactions || 0);
          }
        }
      )
      .subscribe();

    return () => {
      reactionSubscription.unsubscribe();
    };
  }, []);

  const handleReaction = async () => {
    if (hasVoted || isLoading) return;

    const userId = getUserIdentifier();
    try {
      // Record the user's vote
      const { error: voteError } = await supabase
        .from("user_votes")
        .insert([{ user_identifier: userId, vote_type: "reaction" }]);

      if (voteError) throw voteError;

      // Increment reactions count
      const { error: updateError } = await supabase
        .from("portfolio_reactions")
        .update({ reactions: reactions + 1 })
        .eq("id", "00000000-0000-0000-0000-000000000001");

      if (updateError) throw updateError;

      setHasVoted(true);
      setReactions(reactions + 1);
    } catch (error) {
      console.error("Error recording reaction:", error);
      // Fallback to localStorage
      const newReactions = reactions + 1;
      setReactions(newReactions);
      setHasVoted(true);
      localStorage.setItem("portfolio_reactions_v3", newReactions.toString());
      localStorage.setItem("portfolio_has_voted_v3", "true");
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <footer className="relative bg-background pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden transition-colors duration-500">
      {/* Background Glow Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-100" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-100" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">PORTFOLIO</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs font-medium">
                Crafting immersive digital experiences with modern technologies and a passion for design excellence.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />, href: "https://github.com/monyphy25", label: "Github" },
                { icon: <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />, href: "https://www.facebook.com/share/1AmGdDt4fF/?mibextid=wwXIfr", label: "Facebook" },
                { icon: <i className="fa-brands fa-tiktok text-lg text-muted-foreground group-hover:text-cyan-400 transition-colors"></i>, href: "https://www.tiktok.com/@phymuny", label: "TikTok" },
                { icon: <i className="fa-brands fa-telegram text-lg text-muted-foreground group-hover:text-cyan-400 transition-colors"></i>, href: "https://t.me/phymony", label: "Telegram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/50 border border-border hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors group"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
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
                    className="text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-display font-semibold text-foreground">Contact Me</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="break-all font-semibold italic">mny207708@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="font-semibold italic">Cambodia, Phnom Penh</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="font-semibold italic">+855 96 268 2899</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground group cursor-pointer">
                <i className="fa-brands fa-telegram w-5 h-5 text-cyan-400 shrink-0 text-lg"></i>
                <a href="https://t.me/phymony" target="_blank" rel="noopener noreferrer" className="font-semibold italic group-hover:text-cyan-400 transition-colors">@phymony</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / Call to Action */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-display font-semibold text-foreground">Get In Touch</h4>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Interested in working together? Drop me a line and let's discuss your next project.
            </p>


            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
            >
              Hire Me
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col-reverse md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 bg-secondary/30 hover:bg-cyan-500/20 border border-border hover:border-cyan-500/30 rounded-full transition-all group shadow-lg shadow-cyan-500/5"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 group-hover:-translate-y-1 transition-all" />
            </button>
            <span className="text-muted-foreground/60 text-xs font-mono font-bold tracking-widest uppercase group-hover:text-cyan-500/80 transition-colors">
              Back To Top
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">

            <p className="text-muted-foreground text-sm text-center md:text-right font-medium tracking-wide">
              © {currentYear} <span className="text-cyan-400 font-bold">Portfolio</span>. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
