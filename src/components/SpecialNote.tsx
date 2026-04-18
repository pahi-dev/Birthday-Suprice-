"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SpecialNoteProps {
  message: string;
}

export default function SpecialNote({ message }: SpecialNoteProps) {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto p-1 relative group"
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
        
        <div className="relative bg-[#0a0118]/80 backdrop-blur-2xl p-10 md:p-16 rounded-3xl border border-white/10 text-center shadow-2xl">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-pink-500 mb-8"
          >
            <Heart size={48} fill="currentColor" />
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">A Special Note</h3>
          <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-light italic">
            "{message}"
          </p>
          
          <div className="mt-10 flex justify-center gap-2">
            {[1, 2, 3].map(i => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-pink-400"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
