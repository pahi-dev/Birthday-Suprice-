"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

export default function FinalSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);

  const triggerFireworks = useCallback(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
    
    setIsRevealed(true);
  }, []);

  return (
    <div className="py-20 text-center relative overflow-hidden">
      {!isRevealed ? (
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(157, 78, 221, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerFireworks}
          className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-xl shadow-2xl flex items-center justify-center gap-3 mx-auto"
        >
          One More Surprise 🎁
          <Sparkles className="animate-pulse" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-600">
              You Are My Universe
            </h2>
          </motion.div>
          <p className="text-2xl text-purple-200 font-light">Forever and always. ❤️</p>
          
          {/* Floating Hearts Animation */}
          <div className="flex justify-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: -100, opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                className="text-pink-500"
              >
                <Heart size={32} fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
