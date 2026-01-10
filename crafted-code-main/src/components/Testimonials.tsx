import { useState } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    message: 'John did an amazing job on our company website. His attention to detail and communication was outstanding!',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Michael Chen',
    message: 'Professional, creative, and delivered on time. Highly recommend for any web development project.',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'Emily Davis',
    message: 'Working with John was a pleasure. He understood our vision perfectly and brought it to life beautifully.',
    date: '2024-01-05',
  },
];

const Testimonials = () => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      date: new Date().toISOString().split('T')[0],
    };

    setComments([newComment, ...comments]);
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: 'Comment submitted!',
      description: 'Thank you for your feedback.',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary mono text-lg md:text-xl">05.</span>
          Testimonials
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
          {/* Comment Form */}
          <motion.div 
            className="glass rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <MessageSquare className="text-primary" size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold">Leave a Comment</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                  maxLength={100}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                  maxLength={255}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Share your experience..."
                  maxLength={500}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Send size={18} />
                Submit Comment
              </motion.button>
            </form>
          </motion.div>

          {/* Comments Display */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Recent Comments
            </motion.h3>
            
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <AnimatePresence mode="popLayout">
                {comments.map((comment) => (
                  <motion.div 
                    key={comment.id} 
                    className="glass rounded-xl p-5"
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px -20px hsl(172 66% 50% / 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <User className="text-primary" size={20} />
                      </motion.div>
                      <div>
                        <p className="font-medium">{comment.name}</p>
                        <p className="text-xs text-muted-foreground mono">
                          {new Date(comment.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{comment.message}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
