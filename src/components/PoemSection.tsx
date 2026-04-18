"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const POEMS = [
  {
    id: 1,
    title: "Light of My Life",
    content: "Like a star in the night, you shine so bright,\nBringing joy to my world, and ending the night.\nHappy Birthday to the one who makes everything right.",
  },
  {
    id: 2,
    title: "Grace & Beauty",
    content: "With every year, you blossom anew,\nA masterpiece of grace, in everything you do.\nMay your day be as beautiful as the soul within you.",
  },
  {
    id: 3,
    title: "Infinite Love",
    content: "Beyond the words and across the time,\nI'm so grateful that your heart is mine.\nCheers to another year of being sublime.",
  }
];

export default function PoemSection() {
  const [revealedIds, setRevealedIds] = useState<number[]>([]);

  const toggleReveal = (id: number) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter(i => i !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  return (
    <section className="py-24 px-4 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-gradient mb-16"
      >
        Poetic Surprises
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {POEMS.map((poem) => (
          <div key={poem.id} className="relative group">
            <motion.div
              layout
              onClick={() => toggleReveal(poem.id)}
              className={`p-8 rounded-[2rem] cursor-pointer transition-all duration-500 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden ${
                revealedIds.includes(poem.id) 
                ? "bg-white/10 backdrop-blur-2xl border-white/20" 
                : "bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl"
              }`}
            >
              <AnimatePresence mode="wait">
                {!revealedIds.includes(poem.id) ? (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart size={64} fill="white" className="text-white" />
                    </motion.div>
                    <p className="text-white font-bold tracking-widest uppercase text-sm">Tap to Reveal</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <Sparkles className="text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-pink-400 italic">{poem.title}</h3>
                    <p className="text-lg text-slate-100 leading-relaxed whitespace-pre-line font-light">
                      {poem.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Decorative elements */}
              {!revealedIds.includes(poem.id) && (
                <div className="absolute top-0 right-0 p-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="text-white/20" size={40} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
