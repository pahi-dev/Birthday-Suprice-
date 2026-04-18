"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift, Sparkles, Heart } from "lucide-react";

export default function VirtualGift() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 text-center">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-light text-pink-300 mb-8 tracking-widest uppercase">Tap to unwrap your gift</h3>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-20 animate-pulse" />
              <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(255,0,110,0.3)] relative z-10">
                <Gift size={80} className="text-white drop-shadow-lg" />
                <div className="absolute w-full h-4 bg-white/20 top-1/2 -translate-y-1/2" />
                <div className="absolute w-4 h-full bg-white/20 left-1/2 -translate-x-1/2" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border-2 border-dashed border-pink-500/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10"
              >
                <Heart size={60} className="text-pink-500" fill="currentColor" />
              </motion.div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-gradient">The Gift of Love</h2>
            <p className="max-w-xl mx-auto text-xl text-purple-200 font-light leading-relaxed">
              Sometimes the best gifts aren't objects, but moments. I promise to fill this year with 
              more laughter, more support, and more beautiful memories together.
            </p>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
              className="h-[1px] w-24 bg-pink-500/50 mx-auto"
            />
            
            <div className="flex justify-center gap-4 text-pink-400">
              <Sparkles className="animate-pulse" />
              <span className="uppercase tracking-[0.3em] text-sm">Forever Yours</span>
              <Sparkles className="animate-pulse" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
