'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPalette, FaUsers, FaStar, FaChartLine } from 'react-icons/fa';
import './AboutSection.scss';

const AboutSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="about-title"
          >
            <motion.span 
              variants={fadeInUp} 
              className="subtitle"
            >
              Our Mission & Approach
            </motion.span>
            <motion.h2 variants={fadeInUp}>
              Transforming Businesses with <span className="highlight">Innovative</span> <br />
              Technology Solutions
            </motion.h2>
          </motion.div>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <div className="pattern-bg"></div>
              <div className="img-wrapper">
                <Image 
                  src="/images/about/team-collaboration.jpg" 
                  alt="Our team collaboration" 
                  width={600} 
                  height={500}
                  className="main-image"
                />
              </div>
              <div className="experience-badge">
                <span className="years">20+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.p variants={fadeInUp} className="lead-text">
              We're a team of experienced technologists, consultants, and strategists creating enterprise solutions that help businesses transform and achieve their strategic objectives.
            </motion.p>

            <motion.div variants={fadeInUp} className="features-grid">
              <div className="feature-card">
                <div className="icon-box">
                  <FaPalette />
                </div>
                <h3>Strategic Solutions</h3>
                <p>We develop sophisticated technology solutions aligned with your business objectives and industry requirements.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <FaUsers />
                </div>
                <h3>Expert Team</h3>
                <p>Our team consists of highly skilled professionals with specialized expertise across multiple technology domains.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <FaStar />
                </div>
                <h3>Client Satisfaction</h3>
                <p>We prioritize client satisfaction with a collaborative approach that ensures we deliver beyond expectations.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <FaChartLine />
                </div>
                <h3>Measurable Results</h3>
                <p>Our solutions deliver tangible business outcomes with clear metrics for success and continuous improvement.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="cta-box">
              <p>Ready to transform your business with innovative technology?</p>
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="stat-item" variants={statsVariants}>
            <span className="stat-number">500+</span>
            <span className="stat-label">Global Clients</span>
          </motion.div>
          <motion.div className="stat-item" variants={statsVariants}>
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Retention</span>
          </motion.div>
          <motion.div className="stat-item" variants={statsVariants}>
            <span className="stat-number">30+</span>
            <span className="stat-label">Countries Served</span>
          </motion.div>
          <motion.div className="stat-item" variants={statsVariants}>
            <span className="stat-number">150+</span>
            <span className="stat-label">Expert Professionals</span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  );
};

export default AboutSection; 