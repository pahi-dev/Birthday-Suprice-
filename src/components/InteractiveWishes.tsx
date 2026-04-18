"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const WISHES = [
  {
    id: 1,
    title: "The Dreamer",
    text: "May your year be filled with the kind of magic that keeps your spirit soaring. Never stop dreaming big!",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "The Adventurer",
    text: "Here's to new horizons and the courage to explore them. May every path you take lead to beautiful discoveries.",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "The Infinite Joy",
    text: "Wishing you a lifetime of laughter that echoes, friendships that endure, and a heart that's always full.",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    id: 4,
    title: "The Inner Peace",
    text: "Amongst the noise of the world, may you always find that quiet place of calm and contentment within yourself.",
    color: "from-pink-400 to-rose-500",
  }
];

export default function InteractiveWishes() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % WISHES.length);
  const prev = () => setIndex((prev) => (prev - 1 + WISHES.length) % WISHES.length);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
      >
        Wishes for Your Journey
      </motion.h2>

      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 md:gap-12">
        <button 
          onClick={prev}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-pink-400 transition-colors hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="relative flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0, rotateY: 45 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              exit={{ x: -100, opacity: 0, rotateY: -45 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full h-full"
            >
              <div className={`p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${WISHES[index].color} shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star size={120} />
                </div>
                
                <Quote className="text-white/20 mb-6" size={48} />
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                  {WISHES[index].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                  {WISHES[index].text}
                </p>

                <div className="mt-12 flex items-center gap-4">
                  <div className="h-1 w-12 bg-white/30 rounded-full" />
                  <span className="text-white/50 font-mono">0{index + 1} / 0{WISHES.length}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={next}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-pink-400 transition-colors hidden md:block"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="flex justify-center gap-6 mt-8 md:hidden">
        <button onClick={prev} className="p-4 rounded-full bg-white/5 text-pink-400"><ChevronLeft /></button>
        <button onClick={next} className="p-4 rounded-full bg-white/5 text-pink-400"><ChevronRight /></button>
      </div>
    </section>
  );
}
