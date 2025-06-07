'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaQuoteRight, FaArrowLeft, FaArrowRight, FaStar, FaLinkedinIn, FaBuilding, FaGlobeAmericas, FaUser } from 'react-icons/fa';
import './Testimonials.scss';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  companyLogo?: string;
  industry?: string;
  region?: string;
  fullQuote?: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jennifer Roberts',
      position: 'Chief Information Officer',
      company: 'Vertex Financial Services',
      content: 'GlobalTech\'s cloud infrastructure solutions have transformed our digital operations. We\'ve reduced operational costs by 32% while improving system reliability and scalability to support our global expansion.',
      rating: 5,
      image: '/images/placeholder.jpg',
      companyLogo: '',
      industry: 'Financial Services',
      region: 'North America',
      fullQuote: 'GlobalTech\'s cloud infrastructure solutions have completely transformed our digital operations. Their team worked closely with us to design a custom architecture that addressed our specific security and compliance requirements. We\'ve reduced operational costs by 32% while significantly improving system reliability and scalability to support our global expansion. Their 24/7 support team has been exceptional, providing immediate assistance whenever needed. I would highly recommend GlobalTech to any enterprise looking for a strategic technology partner.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'VP of Technology',
      company: 'NexGen Healthcare',
      content: 'Implementing GlobalTech\'s cybersecurity framework has strengthened our data protection strategy and ensured HIPAA compliance. Their expertise in healthcare security protocols has been invaluable to our organization.',
      rating: 5,
      image: '/images/placeholder.jpg',
      companyLogo: '',
      industry: 'Healthcare',
      region: 'Global',
      fullQuote: 'Implementing GlobalTech\'s cybersecurity framework has significantly strengthened our data protection strategy and ensured HIPAA compliance across all our systems. Their expertise in healthcare security protocols has been invaluable to our organization. The team conducted a comprehensive security assessment and implemented a multi-layered defense strategy that has effectively eliminated vulnerabilities while maintaining system performance. Their continuous monitoring and threat intelligence services provide us with peace of mind, knowing our sensitive patient data is protected by industry-leading security measures.'
    },
    {
      id: 3,
      name: 'Sarah Martinez',
      position: 'Director of Digital Transformation',
      company: 'Atlas Manufacturing',
      content: 'Our partnership with GlobalTech on our digital transformation initiative has revolutionized our production processes. Their custom IoT solution has increased manufacturing efficiency by 45% and provided unprecedented visibility into our operations.',
      rating: 5,
      image: '/images/placeholder.jpg',
      companyLogo: '',
      industry: 'Manufacturing',
      region: 'Europe',
      fullQuote: 'Our partnership with GlobalTech on our digital transformation initiative has revolutionized our production processes. Their custom IoT solution has increased manufacturing efficiency by 45% and provided unprecedented visibility into our operations. The implementation was seamless, with minimal disruption to our existing workflows. Their team demonstrated exceptional knowledge of industrial automation and data analytics, delivering actionable insights that have directly contributed to our bottom line. The ROI we\'ve seen from this investment has exceeded our expectations, and we\'re now exploring additional solutions with GlobalTech to further enhance our competitive advantage.'
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'Global IT Director',
      company: 'Quantum Logistics',
      content: 'GlobalTech\'s enterprise applications have streamlined our supply chain management across 27 countries. The integration capabilities and data analytics features have given us a competitive edge in the logistics industry.',
      rating: 5,
      image: '/images/placeholder.jpg',
      companyLogo: '',
      industry: 'Logistics & Transportation',
      region: 'Asia Pacific',
      fullQuote: 'GlobalTech\'s enterprise applications have streamlined our supply chain management across 27 countries. The integration capabilities and data analytics features have given us a competitive edge in the logistics industry. We particularly value the platform\'s flexibility to adapt to regional regulations and business practices while maintaining a consistent global standard. The real-time tracking and predictive analytics have reduced shipping delays by 23% and improved inventory management efficiency by 37%. Their implementation team demonstrated exceptional cross-cultural communication skills and technical expertise throughout the project.'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (expanded === null) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, expanded]);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleExpandClick = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <FaStar key={index} className={index < rating ? 'star active' : 'star'} />
    ));
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const expandedCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };
  
  return (
    <section className="testimonials-section section-padding" ref={sectionRef}>
      <div className="testimonials-bg">
        <div className="testimonials-bg-gradient"></div>
        <div className="testimonials-bg-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge">Client Success Stories</span>
          <h2 className="section-title">Trusted by <span className="highlight">Industry Leaders</span></h2>
          <p className="section-description">
            Discover how our enterprise solutions have helped organizations across various industries 
            overcome challenges, optimize operations, and achieve sustainable growth.
          </p>
        </motion.div>
        
        <div className="testimonials-wrapper">
          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div 
                className="testimonial-card"
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <FaQuoteRight />
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  <p>{testimonials[activeIndex].content}</p>
                  <button 
                    className="read-more-btn"
                    onClick={() => handleExpandClick(testimonials[activeIndex].id)}
                  >
                    Read Full Testimonial
                  </button>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <div className="avatar-container">
                      <div className="avatar-placeholder">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="author-info">
                    <h3>{testimonials[activeIndex].name}</h3>
                    <span className="author-position">{testimonials[activeIndex].position}</span>
                    <span className="author-company">
                      {testimonials[activeIndex].company}
                    </span>
                  </div>
                  <div className="author-metadata">
                    <div className="metadata-item">
                      <FaBuilding className="metadata-icon" />
                      <span>{testimonials[activeIndex].industry}</span>
                    </div>
                    <div className="metadata-item">
                      <FaGlobeAmericas className="metadata-icon" />
                      <span>{testimonials[activeIndex].region}</span>
                    </div>
                    <div className="metadata-item">
                      <FaLinkedinIn className="metadata-icon" />
                      <span>Connect</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="testimonial-nav">
              <button className="nav-btn prev" onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button className="nav-btn next" onClick={nextSlide}>
                <FaArrowRight />
              </button>
            </div>
          </div>
          
          <motion.div 
            className="testimonials-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">48</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">97%</span>
              <span className="stat-label">Client Retention</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="client-logos"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="logos-title">Trusted by Global Enterprises</h3>
            <div className="logos-grid">
              {/* Replace with actual client logos */}
              <div className="logo-item">
                <div className="logo-placeholder">Client 1</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Client 2</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Client 3</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Client 4</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Client 5</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {expanded !== null && (
          <motion.div 
            className="expanded-testimonial-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          >
            <motion.div 
              className="expanded-testimonial"
              variants={expandedCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setExpanded(null)}>
                <FaArrowLeft /> Back to Testimonials
              </button>
              
              {testimonials.map((testimonial) => {
                if (testimonial.id === expanded) {
                  return (
                    <div className="expanded-content" key={testimonial.id}>
                      <div className="expanded-header">
                        <div className="expanded-author-info">
                          <div className="expanded-avatar">
                            <div className="expanded-avatar-placeholder">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          <div className="expanded-details">
                            <h3>{testimonial.name}</h3>
                            <span className="expanded-position">{testimonial.position}</span>
                            <div className="expanded-company">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                        <div className="expanded-metadata">
                          <div className="expanded-metadata-item">
                            <FaBuilding className="expanded-metadata-icon" />
                            <span>{testimonial.industry}</span>
                          </div>
                          <div className="expanded-metadata-item">
                            <FaGlobeAmericas className="expanded-metadata-icon" />
                            <span>{testimonial.region}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="expanded-testimonial-content">
                        <div className="expanded-quote-icon">
                          <FaQuoteRight />
                        </div>
                        <p>{testimonial.fullQuote || testimonial.content}</p>
                      </div>
                      
                      <div className="expanded-cta">
                        <p>Learn how we can deliver similar results for your organization</p>
                        <button className="cta-button">Schedule a Consultation</button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials; 