'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './HeroBanner.scss';

const HeroBanner: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  
  const rotatingTexts = [
    "CRM",
    "AI Solutions",
    "Cloud Services",
    "Cloud Integration"
  ];
  
  // Handle video loaded state
  const handleVideoLoaded = () => {
    console.log('Video loaded');
    setVideoLoaded(true);
  };
  
  // Force play video when component mounts
  useEffect(() => {
    console.log('Attempting to play video');
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.error('Error playing video:', error);
        }
      } else {
        console.error('Video ref is null');
      }
    };
    
    playVideo();
  }, []);
  
  // Rotate text phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.4,
        duration: 1.5
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring", 
        damping: 15,
        stiffness: 100,
        delay: 0.2,
        duration: 1.2
      }
    }
  };
  
  const textSlideVariants = {
    enter: { 
      y: 40, 
      opacity: 0,
      x: 20
    },
    center: { 
      y: 0, 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.7
      }
    },
    exit: { 
      y: -40, 
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        delay: 0.6, 
        duration: 1.2
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        delay: 0.8,
        duration: 1
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-banner">
      <div className="video-container">
        {/* Video background */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className={`bg-video ${videoLoaded ? 'loaded' : ''}`}
          onLoadedData={handleVideoLoaded}
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay */}
        <div className="video-overlay"></div>
        
        {/* Text glow effect */}
        <div className="text-glow"></div>
        
        {/* Floating particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.span 
                className="hero-subtitle"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
              >
                Enterprise Solutions
              </motion.span>
              
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="title-container"
              >
                Innovative{" "}
                <span className="text-animation-container">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      className="text-highlight"
                      variants={textSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {rotatingTexts[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
              
              <motion.p
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
              >
                Transform your business with our custom enterprise software solutions designed to streamline operations and drive growth with cutting-edge technology.
              </motion.p>
              
              <div className="hero-cta">
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Link href="/solutions" className="btn btn-primary">
                    Explore Solutions
                    <FaArrowRight className="btn-icon" />
                  </Link>
                </motion.div>
                
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={1}
                >
                  <Link href="/contact" className="btn btn-outline">
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>EXPLORE</span>
          <FaChevronDown className="scroll-icon" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner; 