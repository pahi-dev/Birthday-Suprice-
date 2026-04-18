"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARACTERS = ["🦖", "🐱", "🦄", "🐼", "🦊", "🏃‍♂️💨", "✨", "🍕"];

export default function FunnyCharacters() {
  const [elements, setElements] = useState<{ id: number; char: string; y: number; duration: number; delay: number; scale: number; direction: number }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
      y: 10 + Math.random() * 80, // 10% to 90% height
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 20,
      scale: 1 + Math.random() * 2,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ x: el.direction === 1 ? "-10%" : "110%", y: `${el.y}%`, opacity: 0, scale: el.scale }}
          animate={{
            x: el.direction === 1 ? "110%" : "-10%",
            opacity: [0, 1, 1, 0],
            rotate: [0, 10, -10, 0, 10, -10, 0], // Wiggle while running
            y: [`${el.y}%`, `${el.y + (Math.random() * 5 - 2.5)}%`, `${el.y}%`]
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-4xl select-none"
          style={{ transform: el.direction === -1 ? "scaleX(-1)" : "none" }}
        >
          {el.char}
        </motion.div>
      ))}
    </div>
  );
}
