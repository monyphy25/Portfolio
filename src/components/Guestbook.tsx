import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, MessageSquare } from "lucide-react";

// Interface for type safety
interface Comment {
    id: number;
    name: string;
    message: string;
    date: string;
    timestamp?: number;
}

// Start with empty comments
const initialComments: Comment[] = [];

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
    // Lazy initialization to load comments immediately from local storage
    const [comments, setComments] = useState<Comment[]>(() => {
        try {
            const stored = localStorage.getItem('guestbookComments');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to load comments:", error);
            return [];
        }
    });

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // State to force re-render every minute for time value updates
    const [_, setTick] = useState(0);

    // Removed the separate useEffect for loading since we do it in useState now

    // Update time every 30 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setTick(t => t + 1);
        }, 30000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        // Simulate network delay
        setTimeout(() => {
            const newComment = {
                id: Date.now(),
                name: name,
                message: message,
                date: "Just now", // Fallback
                timestamp: Date.now(), // Store actual time
            };

            const updatedComments = [newComment, ...comments];
            setComments(updatedComments);
            localStorage.setItem('guestbookComments', JSON.stringify(updatedComments));
            setName("");
            setMessage("");
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <section id="guestbook" className="py-20 sm:py-32 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 backdrop-blur-md mb-6"
                    >
                        <MessageSquare className="w-4 h-4 text-pink-400" />
                        <span>Sign the Guestbook</span>
                    </motion.div>

                    <motion.h2
                        className="font-display text-4xl sm:text-5xl font-bold mb-6 text-foreground"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {Array.from("Comment").map((char, index) => (
                            <motion.span
                                key={`comment-${index}`}
                                variants={{
                                    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        transition: { delay: index * 0.06 }
                                    }
                                }}
                                className="inline-block mr-[0.02em] text-gradient-primary"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <p className="text-white/60 max-w-lg mx-auto">
                        Drop a comment, feedback, or just say hello! Your message will appear below instanty.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
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
                                    className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-display"
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
                                    className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-display"
                                    placeholder="Type your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 w-full bg-gradient-primary text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
                    <div className="relative h-[500px] overflow-hidden mask-gradient-y">
                        {/* Gradient Masks for smooth fade in/out */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none transition-colors" />

                        <div className="animate-marquee-vertical space-y-4">
                            {/* Duplicate comments for seamless loop */}
                            {(comments.length > 0 ? [...comments, ...comments] : []).map((comment, index) => (
                                <div
                                    key={`${comment.id}-${index}`}
                                    className={`relative border rounded-2xl p-6 backdrop-blur-md flex gap-4 transition-all ${comment.date === "Just now" ? "bg-primary/10 border-primary shadow-glow-sm animate-fade-in-up" : "bg-card border-border shadow-sm"}`}
                                >
                                    {(comment.timestamp ? timeAgo(comment.timestamp) : comment.date) === "Just now" && (
                                        <span className="absolute -top-2 -right-2 bg-gradient-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                                            NEW
                                        </span>
                                    )}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary-foreground" />
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
