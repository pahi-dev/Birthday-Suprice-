"use client";

import { motion } from "framer-motion";
import { Heart, Users, Star, Coffee } from "lucide-react";

const FRIEND_WISHES = [
  {
    type: "The Bestie",
    icon: <Heart className="text-pink-400" />,
    message: "To my soul sister and best friend: Thank you for being the person who knows me best and loves me anyway. Here's to another year of creating beautiful memories together!",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    type: "The Ride or Die",
    icon: <Users className="text-purple-400" />,
    message: "Happy Birthday to the one who has been through it all with me. Your friendship is the greatest gift, and I'm so lucky to have you by my side.",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    type: "The Partner in Crime",
    icon: <Star className="text-yellow-400" />,
    message: "Another year of mischief, laughter, and making the most of every moment. I wouldn't want to do life with anyone else!",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    type: "The Forever Friend",
    icon: <Coffee className="text-orange-400" />,
    message: "To the person who is always there for a coffee or a long talk. May your year be filled with as much warmth and happiness as you give to everyone around you.",
    gradient: "from-orange-500/20 to-pink-500/20"
  }
];

export default function RelationalWishes() {
  return (
    <section className="py-24 px-4 w-full max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-gradient"
      >
        To My Dearest Friend
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FRIEND_WISHES.map((wish, index) => (
          <motion.div
            key={wish.type}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${wish.gradient} border border-white/10 backdrop-blur-sm group hover:border-pink-500/30 transition-all hover:-translate-y-2 cursor-default shadow-xl`}
          >
            <div className="absolute -top-6 left-8 bg-[#1a0b2e] p-4 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform shadow-lg">
              {wish.icon}
            </div>
            
            <div className="mt-4 space-y-4 text-left">
              <h3 className="text-xl font-bold text-white/60 tracking-widest uppercase">
                {wish.type}
              </h3>
              <p className="text-xl text-purple-100/90 leading-relaxed italic font-light">
                "{wish.message}"
              </p>
            </div>
            
            <div className="absolute bottom-4 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
               {wish.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
