"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TypewriterMessageProps {
  text: string;
  delay?: number;
}

export default function TypewriterMessage({ text, delay = 0 }: TypewriterMessageProps) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      const timeout = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, started, delay]);

  useEffect(() => {
    if (started && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [started, displayedText, text]);

  return (
    <div ref={ref} className="min-h-[100px] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 max-w-2xl mx-auto my-12 shadow-2xl">
      <p className="text-xl md:text-2xl font-light text-purple-100 leading-relaxed text-center">
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-6 bg-purple-400 ml-1 mb-[-4px]"
        />
      </p>
    </div>
  );
}
