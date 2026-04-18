"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 flex flex-col items-center overflow-hidden">
      {/* Static Background Images (Fallback) */}
      {/* <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/pc-hero-bg-fallback.webp"
          alt=""
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/images/hero_mb-bg.webp"
          alt=""
          className="md:hidden w-full h-full object-cover"
        />
      </motion.div> */}

      {/* Background Videos - Only load the appropriate one */}
      {isClient && !isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-1920/1080 object-cover"
          src="/videos/pc-hero-vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('PC video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {isClient && isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-640/1136 object-cover"
          src="/videos/mb-hero-vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('Mobile video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      <img src="/images/logo-tien-nghich.png" alt="" className="absolute top-[3.5%] left-[28%] w-[15%] object-contain" />
      <img src="/images/hero_pc-title.png" alt="" className="absolute top-0 left-[13.8%] w-[42.19%] object-contain" />
      <img src="/images/pc-hero-effect.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen" />
      <img src="/images/hero_effect-bottom.png" alt="" className="z-10 absolute bottom-0 w-full object-cover" />
      <div className="z-20 absolute w-[61.67%] bottom-[12%] flex justify-between">
        <img src="/images/hero_btn-vongquay.png" alt="" className="w-[26.18%] object-contain img-btn" />
        <img src="/images/hero_btn-xephang.png" alt="" className="w-[26.18%] object-contain img-btn" />
        <img src="/images/hero_btn-phucloi.png" alt="" className="w-[26.18%] object-contain img-btn" />     
        <img src="/images/hero_btn-sukien.png" alt="" className="w-[26.18%] object-contain img-btn" /> 
      </div>
    </section>
  );
};

export default Hero;