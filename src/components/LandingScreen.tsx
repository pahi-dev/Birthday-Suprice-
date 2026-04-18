"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PartyPopper } from "lucide-react";

interface LandingScreenProps {
  onOpen: () => void;
}

export default function LandingScreen({ onOpen }: LandingScreenProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(onOpen, 1000); // Match animation duration
  };

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#11001c] flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-pink-600 mb-6 flex justify-center"
            >
              <PartyPopper size={80} />
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-widest leading-relaxed">
              Hey... <br />
              <span className="text-pink-500">I have something special for you ❤️</span>
            </h1>
            
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 0, 110, 0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpen}
              className="mt-12 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-widest rounded-full transition-all shadow-xl"
            >
              Click to Open
            </motion.button>
          </motion.div>

          <footer className="absolute bottom-10 w-full text-white/20 text-xs tracking-tighter">
            PROMISE IT'S WORTH IT
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
