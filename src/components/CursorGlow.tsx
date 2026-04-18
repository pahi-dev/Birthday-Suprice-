"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 110, 0.08), transparent 80%)`,
        }}
      />
      {/* Optional Sparkle Trail */}
      <motion.div
        className="text-xl fixed pointer-events-none select-none opacity-40 blur-[1px]"
        animate={{
          x: mousePos.x + 10,
          y: mousePos.y + 10,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      >
        ✨
      </motion.div>
    </div>
  );
}
