import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, MessageSquare } from "lucide-react";
import { supabase } from "../lib/supabase";

// Interface for type safety
interface Comment {
    id: number;
    name: string;
    message: string;
    date: string;
    timestamp: number;
}

const timeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 10) return "Just now";
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
};

const Guestbook = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tick, setTick] = useState(0);

    // Fetch comments from Supabase
    const fetchComments = async () => {
        const { data, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('timestamp', { ascending: false });

        if (error) {
            console.error("Error fetching comments:", error);
        } else if (data) {
            setComments(data);
        }
    };

    // Load comments on mount
    useEffect(() => {
        fetchComments();

        // Update time every 30 seconds
        const timer = setInterval(() => {
            setTick(t => t + 1);
        }, 30000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        const newComment = {
            name: name,
            message: message,
            date: "Just now",
            timestamp: Date.now(),
        };

        // Insert into Supabase
        const { error } = await supabase
            .from('guestbook')
            .insert([newComment]);

        if (error) {
            console.error("Error saving comment:", error);
            alert("Failed to save comment. Please make sure your database is connected.");
        } else {
            // Refresh comments to show the new one
            await fetchComments();
            setName("");
            setMessage("");
        }

        setIsSubmitting(false);
    };

    return (
        <section id="guestbook" className="py-20 sm:py-32 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-200 backdrop-blur-md mb-6"
                    >
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                        <span>Sign the Guestbook</span>
                    </motion.div>

                    <motion.h2
                        className="font-display text-4xl sm:text-5xl font-bold mb-6 text-foreground"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Comment</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        className="text-muted-foreground max-w-lg mx-auto mb-6"
                    >
                        Drop a comment, feedback, or just say hello! Your message will appear below instanty.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-foreground/80">
                            {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'} so far
                        </span>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-3xl p-8 backdrop-blur-md h-fit shadow-xl transition-colors"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-display"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none font-display"
                                    placeholder="Type your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Sign Guestbook
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Comments List - Infinite Vertical Scroll (bottom to top) */}
                    <div className="relative h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden mask-gradient-y">
                        {/* Gradient Masks for smooth fade in/out */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none transition-colors" />

                        <div className="animate-marquee-vertical space-y-4">
                            {/* Duplicate comments for seamless loop */}
                            {(comments.length > 0 ? [...comments, ...comments] : []).map((comment, index) => (
                                <div
                                    key={`${comment.id}-${index}`}
                                    className={`relative border rounded-2xl p-6 backdrop-blur-md flex gap-4 transition-all ${comment.date === "Just now" ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-fade-in-up" : "bg-card border-white/5 shadow-sm"}`}
                                >
                                    {(comment.timestamp ? timeAgo(comment.timestamp) : comment.date) === "Just now" && (
                                        <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                                            NEW
                                        </span>
                                    )}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-foreground">{comment.name}</h4>
                                            <span className="text-xs text-muted-foreground">• {comment.timestamp ? timeAgo(comment.timestamp) : comment.date}</span>
                                        </div>
                                        <p className="text-foreground/80 text-sm leading-relaxed">{comment.message}</p>
                                    </div>
                                </div>
                            ))}

                            {comments.length === 0 && (
                                <div className="text-center text-muted-foreground py-10">
                                    No comments yet. Be the first to sign!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guestbook;
