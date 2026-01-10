import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mny207708@gmail.com",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cambodia, Phnom Penh",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+855 96 268 2899",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "group-hover:border-pink-500/50"
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>Get In Touch</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/50 mb-6"
          >
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind? I'm always ready to discuss new opportunities and bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                className={`group p-6 rounded-2xl bg-secondary/30 backdrop-blur-xl border border-white/10 ${item.border} hover:bg-secondary/50 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/5 to-transparent`} />
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-inner ring-1 ring-white/10`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold font-mono text-muted-foreground mb-1.5 uppercase tracking-widest">{item.title}</h3>
                    <p className="text-lg font-bold text-foreground group-hover:text-white transition-colors break-all">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}


          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative"
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-cyan-500/20 to-transparent opacity-50 pointer-events-none" />

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 relative z-10">
              <input type="hidden" name="access_key" value="4a4d7a0d-ade2-4214-8a68-e5b0ebdd53bb" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs uppercase font-bold tracking-wider transition-colors ${focusedInput === 'name' ? 'text-cyan-400' : 'text-foreground'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-secondary/30 border-b-2 border-white/10 px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:bg-secondary/50 transition-all rounded-t-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs uppercase font-bold tracking-wider transition-colors ${focusedInput === 'email' ? 'text-cyan-400' : 'text-foreground'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-secondary/30 border-b-2 border-white/10 px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:bg-secondary/50 transition-all rounded-t-lg"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-xs uppercase font-bold tracking-wider transition-colors ${focusedInput === 'message' ? 'text-cyan-400' : 'text-foreground'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-secondary/30 border-b-2 border-white/10 px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:bg-secondary/50 transition-all resize-none rounded-t-lg"
                  placeholder="Your Message..."
                ></textarea>
              </div>

              <motion.button
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 20,
                  delay: 0.6
                }}
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12" />
                <span className="relative flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
