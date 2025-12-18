import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, MessageSquare } from "lucide-react";

// Initial dummy data
const initialComments = [
    { id: 1, name: "Alex Morgan", message: "The 3D interactions are insane! Love it.", date: "2m ago" },
    { id: 2, name: "Sarah Chen", message: "Cleanest portfolio I've seen all year.", date: "1h ago" },
    { id: 3, name: "Jordan Lee", message: "Hired immediately. Let's talk!", date: "2h ago" },
];

const Guestbook = () => {
    const [comments, setComments] = useState(initialComments);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                date: "Just now",
            };

            setComments([newComment, ...comments]);
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl sm:text-5xl font-bold mb-6"
                    >
                        Leave a <span className="text-gradient-primary">Mark</span>
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
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md h-fit"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                                    placeholder="Type your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
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

                    {/* Comments List - Infinite Vertical Scroll */}
                    <div className="relative h-[500px] overflow-hidden mask-gradient-y">
                        {/* Gradient Masks for smooth fade in/out */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />

                        <div className="animate-marquee-vertical space-y-4">
                            {/* Duplicate comments for seamless loop */}
                            {[...comments, ...comments].map((comment, index) => (
                                <div
                                    key={`${comment.id}-${index}`}
                                    className={`relative border rounded-2xl p-6 backdrop-blur-md flex gap-4 transition-colors ${comment.date === "Just now" ? "bg-white/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]" : "bg-white/5 border-white/10"}`}
                                >
                                    {comment.date === "Just now" && (
                                        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                                            NEW
                                        </span>
                                    )}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-white">{comment.name}</h4>
                                            <span className="text-xs text-white/40">• {comment.date}</span>
                                        </div>
                                        <p className="text-white/80 text-sm leading-relaxed">{comment.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guestbook;
