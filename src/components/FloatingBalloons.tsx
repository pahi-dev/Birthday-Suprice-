"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BALLOON_COLORS = ["#9d4edd", "#ff006e", "#ffbe0b", "#4361ee", "#4cc9f0"];

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<{ id: number; x: number; color: string; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newBalloons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 15,
      size: 40 + Math.random() * 40,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{ y: "120%", opacity: 0 }}
          animate={{
            y: "-20%",
            opacity: [0, 1, 1, 0],
            x: [`${balloon.x}%`, `${balloon.x + 5}%`, `${balloon.x - 5}%`, `${balloon.x}%`],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${balloon.x}%`,
            width: balloon.size,
            height: balloon.size * 1.3,
          }}
        >
          {/* Balloon Body */}
          <div 
            className="w-full h-full rounded-[50%] relative shadow-xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 50% 50%, ${balloon.color} 20%, rgba(0,0,0,0.4) 120%)`,
              boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)`
            }}
          >
            {/* Highlight Shine */}
            <div className="absolute top-[15%] left-[20%] w-[25%] h-[15%] bg-white/40 rounded-full blur-[1px] rotate-[-45deg]" />
            
            {/* Balloon Knot */}
            <div 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
              style={{ backgroundColor: balloon.color }}
            />
          </div>
          
          {/* Animated String */}
          <motion.div 
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[95%] left-1/2 -translate-x-1/2 w-[1px] h-32 origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
