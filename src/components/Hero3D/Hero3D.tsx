'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGlobe, FaServer, FaShieldAlt, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import './Hero3D.scss';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ModernHero: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features: Feature[] = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Solutions",
      description: "Harness the power of artificial intelligence to transform your business processes and decision-making."
    },
    {
      icon: <FaGlobe />,
      title: "Global Infrastructure",
      description: "Enterprise-grade cloud infrastructure that scales seamlessly across international boundaries."
    },
    {
      icon: <FaCode />,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies to solve your unique challenges."
    },
    {
      icon: <FaShieldAlt />,
      title: "Advanced Security",
      description: "Enterprise-level security protocols protecting your critical data across every touchpoint."
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);
  
  return (
    <section className="hero-section">
      <div className="hero-backdrop"></div>
      
      <div className="hero-gradient-bg">
        <div className="gradient-circle gradient-circle-1"></div>
        <div className="gradient-circle gradient-circle-2"></div>
        <div className="gradient-circle gradient-circle-3"></div>
      </div>
      
      <div className="hero-grid-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="company-badge"
            >
              Enterprise Technology Solutions
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="highlight">Innovate</span> & <span className="highlight">Transform</span>
              <br />Your Enterprise Technology
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Future-proof your business with our cutting-edge technology solutions, 
              tailored for enterprise scalability and innovation.
            </motion.p>
            
            <motion.div 
              className="feature-cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`feature-card ${index === activeFeature ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ 
                    opacity: index === activeFeature ? 1 : 0.7,
                    y: 0,
                    scale: index === activeFeature ? 1 : 0.98
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + (index * 0.1)
                  }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="/solutions" className="btn btn-primary">
                Explore Solutions <FaArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="image-container">
              <div className="floating-elements">
                <motion.div 
                  className="floating-element element-1"
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                >
                  <FaCode />
                  <span>API Integration</span>
                </motion.div>
                
                <motion.div 
                  className="floating-element element-2"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                >
                  <FaServer />
                  <span>Cloud Infrastructure</span>
                </motion.div>
                
                <motion.div 
                  className="floating-element element-3"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                >
                  <FaShieldAlt />
                  <span>Security</span>
                </motion.div>
              </div>
              
              <div className="dashboard-mockup">
                <div className="dashboard-header">
                  <div className="header-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="header-title">Enterprise Dashboard</div>
                </div>
                <div className="dashboard-content">
                  <div className="chart-container">
                    <div className="chart-bars">
                      <motion.div 
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: '65%' }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      ></motion.div>
                      <motion.div 
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: '85%' }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      ></motion.div>
                      <motion.div 
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: '45%' }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                      ></motion.div>
                      <motion.div 
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: '70%' }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                      ></motion.div>
                      <motion.div 
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: '90%' }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="dashboard-metrics">
                    <motion.div 
                      className="metric"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.3 }}
                    >
                      <div className="metric-value">92%</div>
                      <div className="metric-label">Efficiency</div>
                    </motion.div>
                    <motion.div 
                      className="metric"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 }}
                    >
                      <div className="metric-value">3.4x</div>
                      <div className="metric-label">ROI</div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="hero-stats right-stats"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="stat">
                  <span className="value">500+</span>
                  <span className="label">Projects Delivered</span>
                </div>
                <div className="stat">
                  <span className="value">98%</span>
                  <span className="label">Client Satisfaction</span>
                </div>
                <div className="stat">
                  <span className="value">30+</span>
                  <span className="label">Global Markets</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero; 