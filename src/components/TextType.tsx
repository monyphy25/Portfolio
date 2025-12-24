import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextTypeProps {
    text: string[];
    typingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
    className?: string;
}

const TextType = ({
    text,
    typingSpeed = 75,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "|",
    className = ""
}: TextTypeProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            const fullText = text[currentTextIndex];

            if (!isDeleting) {
                // Typing
                setCurrentText(fullText.substring(0, currentText.length + 1));

                if (currentText === fullText) {
                    // Finished typing word, wait before deleting
                    timer = setTimeout(() => setIsDeleting(true), pauseDuration);
                } else {
                    // Keep typing
                    timer = setTimeout(handleTyping, typingSpeed);
                }
            } else {
                // Deleting
                setCurrentText(fullText.substring(0, currentText.length - 1));

                if (currentText === "") {
                    // Finished deleting, move to next word
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % text.length);
                    timer = setTimeout(handleTyping, 500);
                } else {
                    // Keep deleting
                    timer = setTimeout(handleTyping, typingSpeed / 2);
                }
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, pauseDuration]);

    return (
        <div className={`inline-block ${className}`}>
            {currentText}
            {showCursor && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="ml-1 font-light"
                >
                    {cursorCharacter}
                </motion.span>
            )}
        </div>
    );
};

export default TextType;
