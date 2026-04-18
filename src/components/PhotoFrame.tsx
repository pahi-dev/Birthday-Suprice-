"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

export default function PhotoFrame() {
  const photos = [
    { src: "/birthday-girl.jpg", alt: "Birthday Girl 1", rotation: -2 },
    { src: "/birthday-girl-2.jpg", alt: "Birthday Girl 2", rotation: 2 },
  ];

  return (
    <section className="py-24 px-4 relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-6xl">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation * 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
            className="relative group"
          >
            {/* Frame Container */}
            <div className="relative p-4 md:p-6">
              {/* Animated Decorative Corners */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index }}
                className="absolute -top-2 -left-2 text-pink-300 z-30"
              >
                <Sparkles size={32} />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index + 1 }}
                className="absolute -bottom-2 -right-2 text-purple-300 z-30"
              >
                <Heart size={32} />
              </motion.div>

              {/* Floral Frame Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <Image
                  src="/flower-frame.png"
                  alt="Floral Frame"
                  fill
                  className="object-stretch scale-110"
                />
              </div>

              <div className="relative bg-white/5 p-2 rounded-[2rem] overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/5] w-[280px] md:w-[360px] overflow-hidden rounded-[1.5rem] z-10">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Subtle Polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent z-15" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Caption */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center space-y-4 max-w-lg mx-auto relative z-10"
      >
        <div className="flex flex-col items-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mb-6" />
          <p className="text-pink-100 text-xl italic font-light leading-relaxed">
            "A beauty that flourishes like a garden, 
            radiating joy in every smile."
          </p>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full shadow-xl border border-white/20"
          >
            <h3 className="text-white font-bold tracking-widest uppercase text-sm">
              Our Birthday Princess
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
