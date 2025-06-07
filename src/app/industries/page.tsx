'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader';
import { FaChevronRight, FaBuilding, FaHospital, FaShoppingCart, FaUniversity, 
  FaIndustry, FaGlobe, FaBriefcase, FaLightbulb, FaRocket, FaCheck, FaChartLine, FaQuoteLeft, FaRegLightbulb, FaShieldAlt, FaExpandArrowsAlt, FaStar } from 'react-icons/fa';
import './industries.scss';

const IndustriesPage = () => {
  // Animation variants
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Industry stats
  const industryStats = [
    { number: "12+", label: "Industries Served" },
    { number: "300+", label: "Enterprise Clients" },
    { number: "95%", label: "Client Retention" }
  ];

  // Featured industries
  const featuredIndustries = [
    {
      title: "Finance & Banking",
      icon: <FaBuilding />,
      description: "Digital transformation for banking, insurance, and financial institutions to enhance security and customer experience.",
      benefits: ["Secure transaction processing", "Customer portal development", "Regulatory compliance", "Fraud detection systems"],
      imageUrl: "/images/industries/finance.jpg",
      caseStudyUrl: "/insights/case-finance"
    },
    {
      title: "Healthcare",
      icon: <FaHospital />,
      description: "Technology solutions for hospitals, clinics, and healthcare providers to improve patient care and operational efficiency.",
      benefits: ["Patient management systems", "Telehealth platforms", "Medical data analysis", "Healthcare compliance"],
      imageUrl: "/images/industries/healthcare.jpg",
      caseStudyUrl: "/insights/case-healthcare"
    },
    {
      title: "Retail & E-commerce",
      icon: <FaShoppingCart />,
      description: "Omnichannel retail solutions that create seamless shopping experiences across physical and digital platforms.",
      benefits: ["E-commerce platforms", "Inventory management", "Customer analytics", "Mobile shopping apps"],
      imageUrl: "/images/industries/retail.jpg",
      caseStudyUrl: "/insights/case-retail"
    },
    {
      title: "Education",
      icon: <FaUniversity />,
      description: "Digital learning platforms and administrative systems for educational institutions of all sizes.",
      benefits: ["Learning management systems", "Student information systems", "Digital classrooms", "Educational analytics"],
      imageUrl: "/images/industries/education.jpg",
      caseStudyUrl: "/insights/case-education"
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry />,
      description: "Smart manufacturing solutions that leverage IoT, automation, and data analytics to optimize production.",
      benefits: ["IoT implementation", "Supply chain optimization", "Predictive maintenance", "Production analytics"],
      imageUrl: "/images/industries/manufacturing.jpg",
      caseStudyUrl: "/insights/case-manufacturing"
    },
    {
      title: "Government",
      icon: <FaGlobe />,
      description: "Secure and efficient technology solutions for government agencies and public sector organizations.",
      benefits: ["Citizen service portals", "Data security", "Process automation", "Public information systems"],
      imageUrl: "/images/industries/government.jpg",
      caseStudyUrl: "/insights/case-government"
    }
  ];

  // Industry approach steps
  const approachSteps = [
    {
      number: "01",
      title: "Industry Analysis",
      description: "We thoroughly analyze your industry's specific challenges, competitive landscape, and technology trends."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts design customized solutions that address your specific industry pain points and growth opportunities."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We implement solutions with careful attention to industry regulations, standards, and best practices."
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous improvement ensures your technology evolves with changing industry demands and opportunities."
    }
  ];

  return (
    <>
      <Header isTransparent={false} />
      <main className="industries-page">
        <PageHeader 
          title={<>Industry <span className="highlight">Solutions</span></>}
          subtitle="Tailored technology solutions that address the unique challenges and opportunities of your specific industry."
          imageSrc="/images/industries/industries-banner.jpg"
          imageAlt="Industry Solutions"
          pageName="Industries"
          stats={industryStats}
        />
        
        {/* Industries Overview Section */}
        <section className="industries-overview">
          <div className="container">
            <motion.div 
              className="section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="subtitle">Industries We Serve</motion.span>
              <motion.h2 variants={fadeInUp}>
                Specialized Solutions for <span className="highlight">Every Industry</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="section-description">
                Our deep industry expertise allows us to develop solutions that address the specific 
                challenges and opportunities in your field. Explore our industry specializations below.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="industries-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredIndustries.map((industry, index) => (
                <motion.div 
                  key={index} 
                  className="industry-card"
                  variants={cardVariant}
                >
                  <div className="industry-image">
                    <img src={industry.imageUrl} alt={industry.title} />
                    <div className="industry-overlay"></div>
                  </div>
                  <div className="industry-content">
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                    <ul className="benefits-list">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>
                          <FaCheck className="benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="industry-actions">
                      <Link href={industry.caseStudyUrl} className="case-study-link">
                        <span>View Case Study</span>
                        <FaChevronRight />
                      </Link>
                      <Link href="/contact" className="solution-link">
                        <span>Explore Solutions</span>
                        <FaChevronRight />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Industry Approach Section */}
        <section className="industry-approach">
          <div className="approach-background"></div>
          <div className="container">
            <motion.div 
              className="approach-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="subtitle">Our Approach</motion.span>
              <motion.h2 variants={fadeInUp}>
                How We Deliver <span className="highlight">Industry-Specific Solutions</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="approach-description">
                Our structured methodology ensures that we develop solutions that truly address 
                the unique requirements of your industry.
              </motion.p>
            </motion.div>
            
            <div className="approach-steps">
              {approachSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="approach-step"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Metrics Section */}
        <section className="success-metrics">
          <div className="container">
            <div className="metrics-content">
              <motion.div 
                className="metrics-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="subtitle">Industry Success</span>
                <h2>
                  Delivering <span className="highlight">Measurable Results</span> Across Industries
                </h2>
                <p>
                  Our industry-specific approach has consistently delivered quantifiable improvements
                  in efficiency, revenue, and customer satisfaction across all sectors we serve.
                </p>
                <div className="metrics-stats">
                  <div className="metric-item">
                    <FaRocket className="metric-icon" />
                    <div className="metric-content">
                      <span className="metric-number">40%</span>
                      <span className="metric-label">Average Efficiency Improvement</span>
                    </div>
                  </div>
                  <div className="metric-item">
                    <FaLightbulb className="metric-icon" />
                    <div className="metric-content">
                      <span className="metric-number">35%</span>
                      <span className="metric-label">Cost Reduction</span>
                    </div>
                  </div>
                  <div className="metric-item">
                    <FaChartLine className="metric-icon" />
                    <div className="metric-content">
                      <span className="metric-number">55%</span>
                      <span className="metric-label">ROI Increase</span>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="contact-btn">
                  <span>Discuss Your Industry Needs</span>
                  <FaChevronRight />
                </Link>
              </motion.div>
              
              <motion.div 
                className="metrics-right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img 
                  src="/images/industries/success-metrics.jpg" 
                  alt="Industry Success Metrics" 
                  className="metrics-image"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Industry Challenges Section - Redesigned */}
        <section className="industry-challenges">
          <div className="challenges-background"></div>
          <div className="container">
            <motion.div 
              className="challenges-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="subtitle">Common Challenges</motion.span>
              <motion.h2 variants={fadeInUp}>
                Industry <span className="highlight">Pain Points</span> We Solve
              </motion.h2>
              <motion.p variants={fadeInUp} className="challenges-description">
                Our industry-specific solutions address the most pressing challenges faced by businesses today. 
                We combine deep domain knowledge with technical expertise to overcome these obstacles.
              </motion.p>
            </motion.div>
            
            <div className="challenges-container">
              <div className="challenges-image">
                <img 
                  src="/images/industries/challenges.jpg" 
                  alt="Solving Industry Challenges" 
                  className="challenges-img"
                />
                <div className="challenges-pattern"></div>
              </div>
              
              <div className="challenges-list">
                <motion.div 
                  className="challenge-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="challenge-icon">
                    <FaRegLightbulb />
                  </div>
                  <div className="challenge-content">
                    <h3>Legacy System Integration</h3>
                    <p>Seamlessly connect outdated systems with modern technologies without disrupting business operations.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="challenge-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="challenge-icon">
                    <FaChartLine />
                  </div>
                  <div className="challenge-content">
                    <h3>Digital Transformation</h3>
                    <p>Navigate the complex journey from traditional processes to digital workflows while maximizing adoption.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="challenge-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="challenge-icon">
                    <FaShieldAlt />
                  </div>
                  <div className="challenge-content">
                    <h3>Cybersecurity Threats</h3>
                    <p>Protect sensitive industry data and systems from increasingly sophisticated cyber attacks.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="challenge-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="challenge-icon">
                    <FaExpandArrowsAlt />
                  </div>
                  <div className="challenge-content">
                    <h3>Scalability Limitations</h3>
                    <p>Build flexible systems that can grow with your business without performance degradation.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Redesigned */}
        <section className="industry-testimonials">
          <div className="container">
            <motion.div 
              className="testimonials-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="subtitle">Client Success</motion.span>
              <motion.h2 variants={fadeInUp}>
                What Our <span className="highlight">Industry Partners</span> Say
              </motion.h2>
            </motion.div>
            
            <div className="testimonials-slider">
              <div className="testimonials-track">
                <motion.div 
                  className="testimonial-card featured"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="testimonial-bubble">
                    <FaQuoteLeft className="quote-icon" />
                    <p>"Their deep understanding of the healthcare industry allowed them to create a solution that addressed our specific compliance needs while improving patient care workflows."</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="/images/industries/testimonial-1.jpg" alt="Sarah Johnson" />
                    </div>
                    <div className="author-info">
                      <h4>Sarah Johnson</h4>
                      <span>CTO, MedLife Healthcare</span>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span>5.0</span>
                  </div>
                </motion.div>
                
                <div className="testimonials-row">
                  <motion.div 
                    className="testimonial-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="testimonial-bubble">
                      <FaQuoteLeft className="quote-icon" />
                      <p>"The financial services solution they developed transformed our customer experience while ensuring compliance with strict banking regulations."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src="/images/industries/testimonial-2.jpg" alt="Michael Rivera" />
                      </div>
                      <div className="author-info">
                        <h4>Michael Rivera</h4>
                        <span>COO, Global Financial Group</span>
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <span>5.0</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="testimonial-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="testimonial-bubble">
                      <FaQuoteLeft className="quote-icon" />
                      <p>"Their manufacturing solutions helped us optimize our production line, reducing waste by 30% and increasing output by 25%."</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src="/images/industries/testimonial-3.jpg" alt="Jennifer Chen" />
                      </div>
                      <div className="author-info">
                        <h4>Jennifer Chen</h4>
                        <span>VP Operations, Precision Manufacturing</span>
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <span>5.0</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="testimonials-controls">
                <Link href="/contact" className="testimonials-cta">
                  <span>Read More Success Stories</span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>
    </div>
          <div className="testimonials-shape"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustriesPage; 