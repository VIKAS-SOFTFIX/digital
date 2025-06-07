'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaServer, 
  FaCloudUploadAlt, 
  FaShieldAlt, 
  FaChartBar, 
  FaCode, 
  FaLaptopCode,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import './Services.scss';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  index, 
  isActive, 
  onClick 
}) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div 
      className={`service-card ${isActive ? 'active' : ''} ${isHovering ? 'hovering' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -15, 
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      onClick={onClick}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className="card-glow"></div>
      <div className="service-content">
        <motion.div 
          className="icon-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: index * 0.15 + 0.3,
            duration: 0.5,
            type: "spring"
          }}
        >
          <div className="icon">{icon}</div>
          <div className="icon-bg-circle"></div>
          <div className="icon-particles">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`particle particle-${i+1}`}></span>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
        >
          <h4>{title}</h4>
          <p>{description}</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="service-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
      >
        <button className="read-more">
          <span>Learn More</span>
          <motion.div
            animate={isHovering ? { x: 8 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight />
          </motion.div>
        </button>
      </motion.div>
      
      {isActive && (
        <motion.div 
          className="active-indicator" 
          layoutId="serviceActive"
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
        />
      )}
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };

  const services = [
    {
      icon: <FaServer />,
      title: 'Enterprise Solutions',
      description: 'Custom enterprise software solutions designed to optimize operations, enhance productivity, and drive business growth.',
    },
    {
      icon: <FaCloudUploadAlt />,
      title: 'Cloud Services',
      description: 'Secure and scalable cloud infrastructure and migration services to modernize your business applications.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your critical assets, data, and infrastructure from evolving threats.',
    },
    {
      icon: <FaChartBar />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights using advanced analytics, machine learning, and visualization.',
    },
    {
      icon: <FaCode />,
      title: 'API Development',
      description: 'Robust API architecture and development for seamless integration between systems and applications.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies and implementation to future-proof your business.',
    },
  ];

  return (
    <section 
      id="services"
      className="services-section section-padding" 
      onMouseMove={handleMouseMove}
    >
      <div className="services-section-bg">
        <div 
          className="bg-gradient-1" 
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
          }}
        ></div>
        <div 
          className="bg-gradient-2"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
          }}
        ></div>
        <div className="floating-circles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`floating-circle circle-${i+1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="subtitle-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Enterprise Solutions
            </motion.span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transformative <span className="gradient-text">Technology Services</span>
          </motion.h2>
          
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We deliver tailored enterprise solutions that address complex business challenges and create sustainable competitive advantages.
          </motion.p>
          
          <motion.div 
            className="header-highlight"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="services-stats-container">
          <motion.div
            className="stats-wrapper"
            initial={{ opacity: 0, y: 20, boxShadow: "0 0px 0px rgba(10, 91, 150, 0)" }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              boxShadow: "0 15px 40px rgba(10, 91, 150, 0.08)" 
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              boxShadow: "0 20px 50px rgba(10, 91, 150, 0.15)",
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.span 
                className="number"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                250+
              </motion.span>
              <span className="label">Projects Completed</span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.span 
                className="number"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                120+
              </motion.span>
              <span className="label">Happy Clients</span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.span 
                className="number"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                15+
              </motion.span>
              <span className="label">Awards Won</span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.span 
                className="number"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                30+
              </motion.span>
              <span className="label">Team Members</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onHoverStart={() => setIsHovering(1)}
          onHoverEnd={() => setIsHovering(null)}
          whileHover={{
            boxShadow: "0 20px 50px rgba(10, 91, 150, 0.12)",
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="cta-shine"></div>
          <div className="cta-content">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Need a custom solution?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Contact our expert team to discuss your specific business requirements
            </motion.p>
          </div>
          <AnimatePresence>
            {isHovering === 1 ? (
              <motion.div
                initial={{ x: 5, opacity: 0.8, scale: 0.98 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 5, opacity: 0.8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/contact" className="cta-btn">
                  <span>Schedule Consultation</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </Link>
              </motion.div>
            ) : (
              <Link href="/contact" className="cta-btn">
                <span>Schedule Consultation</span>
                <FaArrowRight />
              </Link>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 