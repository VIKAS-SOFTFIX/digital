'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaUsers, FaAward, FaArrowRight, FaCheckCircle, FaClock, FaGlobe, FaChartLine, FaServer, FaRocket } from 'react-icons/fa';
import './About.scss';

const About: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2023);
  const [isHoveringImage, setIsHoveringImage] = useState<number | null>(null);
  
  const milestones = [
    { 
      year: 2003, 
      title: 'Foundation', 
      description: 'Established as a tech consultancy',
      icon: <FaRocket />
    },
    { 
      year: 2008, 
      title: 'Global Expansion', 
      description: 'Opened offices in 3 continents',
      icon: <FaGlobe />
    },
    { 
      year: 2013, 
      title: 'Enterprise Focus', 
      description: 'Shifted to enterprise solutions',
      icon: <FaServer />
    },
    { 
      year: 2018, 
      title: 'Digital Transformation', 
      description: 'Launched cloud services division',
      icon: <FaChartLine />
    },
    { 
      year: 2023, 
      title: 'Industry Leadership', 
      description: 'Recognized as industry leader',
      icon: <FaAward />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear(prev => {
        const currentIndex = milestones.findIndex(m => m.year === prev);
        const nextIndex = (currentIndex + 1) % milestones.length;
        return milestones[nextIndex].year;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <section className="about-section section-padding">
      <div className="about-section-bg">
        <div className="bg-grid"></div>
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Legacy of Excellence
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">Two Decades</span> of<br />
            Innovation & Transformation
          </motion.h2>
          
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            For over 20 years, we've partnered with leading enterprises to navigate complex technological landscapes and drive transformative business outcomes.
          </motion.p>
        </motion.div>
        
        <div className="timeline-container">
          <div className="timeline-background">
            <motion.div 
              className="timeline-track"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>
          
          <div className="timeline-milestones">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                className={`milestone-card ${activeYear === milestone.year ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveYear(milestone.year)}
                whileHover={{ y: -5 }}
              >
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-year">{milestone.year}</div>
                <h4 className="milestone-title">{milestone.title}</h4>
                <p className="milestone-description">{milestone.description}</p>
                {activeYear === milestone.year && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="timelineActive"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-text-inner">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Enterprise Solutions<br /><span className="highlight">With Global Impact</span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our team of experts combines industry knowledge with technical expertise to deliver solutions that transform businesses and create lasting competitive advantages.
              </motion.p>
              
              <motion.div 
                className="achievement-list"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
               
                <div className="achievement-item">
                  <FaLightbulb className="check-icon" />
                  <span><strong>Strategic Innovation</strong></span>
                </div>
                <div className="achievement-item">
                  <FaUsers className="check-icon" />
                  <span><strong>Expert Team</strong></span>
                </div>
                <div className="achievement-item">
                  <FaAward className="check-icon" />
                  <span><strong>Excellence Delivered</strong></span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Link href="/about" className="btn-discover">
                  <span>Discover Our Full Story</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-media"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-grid">
              <motion.div 
                className="image-main"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setIsHoveringImage(0)}
                onHoverEnd={() => setIsHoveringImage(null)}
              >
                <div className="image-wrapper">
                  <img 
                    src="/images/home/leadership-team.jpg" 
                    alt="Leadership Team" 
                    className="real-image"
                  />
                  <AnimatePresence>
                    {isHoveringImage === 0 && (
                      <motion.div 
                        className="image-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Strategic Innovation</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <div className="image-secondary-container">
                <motion.div 
                  className="image-secondary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHoveringImage(1)}
                  onHoverEnd={() => setIsHoveringImage(null)}
                >
                  <div className="image-wrapper">
                    <img 
                      src="/images/home/global-expertise.jpg" 
                      alt="Global Expertise" 
                      className="real-image"
                    />
                    <AnimatePresence>
                      {isHoveringImage === 1 && (
                        <motion.div 
                          className="image-overlay"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span>Global Expertise</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="image-secondary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHoveringImage(2)}
                  onHoverEnd={() => setIsHoveringImage(null)}
                >
                  <div className="image-wrapper">
                    <img 
                      src="/images/home/corporate-excellence.jpg" 
                      alt="Corporate Excellence" 
                      className="real-image"
                    />
                    <AnimatePresence>
                      {isHoveringImage === 2 && (
                        <motion.div 
                          className="image-overlay"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span>Excellence Delivered</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="experience-badge"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                style={{ 
                  backgroundImage: 'url("/images/home/experience-badge.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="badge-content">
                  <span className="years">20+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;