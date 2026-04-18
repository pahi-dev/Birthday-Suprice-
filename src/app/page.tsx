"use client";

import { useState } from "react";
import LandingScreen from "@/components/LandingScreen";
import Hero from "@/components/Hero";
import TypewriterMessage from "@/components/TypewriterMessage";
import InteractiveWishes from "@/components/InteractiveWishes";
import PoemSection from "@/components/PoemSection";
import VirtualGift from "@/components/VirtualGift";
import SpecialNote from "@/components/SpecialNote";
import FinalSurprise from "@/components/FinalSurprise";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingBalloons from "@/components/FloatingBalloons";
import ConfettiEffect from "@/components/ConfettiEffect";
import CursorGlow from "@/components/CursorGlow";
import FunnyCharacters from "@/components/FunnyCharacters";
import { motion } from "framer-motion";

// --- CONFIGURATION (Personalize here) ---
const BIRTHDAY_NAME = "Vaishu";
const SPECIAL_MESSAGE = "You are the center of my universe. Every heartbeat is a celebration of the day you were born. Wishing you a day as luminous as your soul.";
const NOTE_MESSAGE = "In the symphony of life, your laughter is my favorite melody. May this year be a masterpiece of joy, love, and endless pink skies.";
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; // Stable festive/upbeat track
// ----------------------------------------

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#11001c] text-white selection:bg-pink-500/30 overflow-x-hidden">
      <CursorGlow />
      
      {!isOpen && (
        <LandingScreen onOpen={() => setIsOpen(true)} />
      )}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          {/* Background Elements */}
          <div className="glow-bg" />
          <FloatingBalloons />
          <FunnyCharacters />
          <ConfettiEffect active={isOpen} />
          
          {/* Audio Player */}
          <AudioPlayer play={isOpen} url={MUSIC_URL} />

          {/* Main Content Sections */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <Hero name={BIRTHDAY_NAME} />
            
            <div className="container mx-auto px-4 space-y-48 pb-32 flex flex-col items-center text-center">
              <TypewriterMessage 
                text={SPECIAL_MESSAGE}
                delay={1}
              />
              
              <InteractiveWishes />

              <PoemSection />

              <VirtualGift />
              
              <SpecialNote 
                message={NOTE_MESSAGE}
              />
              
              <FinalSurprise />
            </div>
            
            <footer className="py-10 text-center text-white/10 text-xs tracking-[0.5em] border-t border-white/5 uppercase">
              Designed for a Lifetime of Joy
            </footer>
          </div>
        </motion.div>
      )}
    </main>
  );
}
