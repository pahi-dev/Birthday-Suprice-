"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeroProps {
  name: string;
}

export default function Hero({ name }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
        />

        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-purple-300 font-medium tracking-widest uppercase"
          >
            Today is a very special day
          </motion.p>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
            <span className="block text-white">Happy</span>
            <span className="block text-gradient">Birthday</span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="block text-white"
            >
              {name} 🎂
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 flex items-center justify-center gap-4 text-purple-200"
        >
          <div className="h-[1px] w-12 bg-purple-500/50" />
          <Sparkles className="text-yellow-400" />
          <p className="font-light italic text-lg">Wishing you a day full of magic</p>
          <Sparkles className="text-yellow-400" />
          <div className="h-[1px] w-12 bg-purple-500/50" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/40">Scroll to explore</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
