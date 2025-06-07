'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AboutSection from '@/components/AboutSection';
import Team from '@/components/Team/Team';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';
import { FaChevronRight, FaLightbulb, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';

// export const metadata = {
//   title: 'About | GlobalTech',
//   description: 'Learn about GlobalTech - our history, our team, and our mission to deliver enterprise technology solutions.',
// };

const AboutPage = () => {
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

  // Company values data
  const companyValues = [
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
      icon: <FaLightbulb className={styles.valueIcon} />,
      color: "#FF6B6B"
    },
    {
      title: "Excellence",
      description: "We commit to delivering exceptional quality in everything we do, exceeding client expectations.",
      icon: <FaStar className={styles.valueIcon} />,
      color: "#4ECDC4"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, working closely with our clients and partners.",
      icon: <FaUsers className={styles.valueIcon} />,
      color: "#FFD166"
    },
    {
      title: "Integrity",
      description: "We conduct business ethically, building trust through transparency and accountability.",
      icon: <FaChartLine className={styles.valueIcon} />,
      color: "#6A67CE"
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.aboutPage}>
        {/* Custom About Hero Header */}
        <section className={styles.aboutHero}>
          <div className="container">
            <div className={styles.aboutHeroContent}>
              <div className={styles.breadcrumbs}>
                <Link href="/">Home</Link>
                <FaChevronRight className={styles.breadcrumbIcon} />
                <span>About</span>
              </div>
              
              <div className={styles.aboutHeroTextContent}>
                <motion.div 
                  className={styles.aboutHeroLeft}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    About <span className={styles.highlight}>GlobalTech</span>
                  </motion.h1>
                  
                  <motion.p 
                    className={styles.aboutHeroLead}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    For over 20 years, we've been transforming enterprises through technology and innovation, creating solutions that power the world's leading businesses.
                  </motion.p>
                  
                  <motion.div 
                    className={styles.aboutHeroStats}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, staggerChildren: 0.2 }}
                  >
                    <motion.div 
                      className={styles.statItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <span className={styles.statNumber}>20+</span>
                      <span className={styles.statLabel}>Years of Experience</span>
                    </motion.div>
                    
                    <motion.div 
                      className={styles.statItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <span className={styles.statNumber}>500+</span>
                      <span className={styles.statLabel}>Global Clients</span>
                    </motion.div>
                    
                    <motion.div 
                      className={styles.statItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <span className={styles.statNumber}>150+</span>
                      <span className={styles.statLabel}>Tech Experts</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className={styles.aboutHeroRight}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={styles.aboutHeroImage}>
                    <div className={styles.imageWrapper}>
                      <img 
                        src="/images/about/team-meeting.jpg" 
                        alt="GlobalTech Team" 
                        className={styles.mainImage}
                      />
                    </div>
                    <div className={styles.imagePulse}></div>
                    <motion.div 
                      className={styles.imageAccent}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutHeroBg}>
            <div className={styles.heroBgGradient1}></div>
            <div className={styles.heroBgGradient2}></div>
          </div>
        </section>
        
        <AboutSection />
        
        {/* Company Values Section */}
        <section className={`${styles.valuesSection} ${styles.sectionPadding}`} style={{margin: '0px'}}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className={styles.subtitle}>Our Core Values</motion.span>
              <motion.h2 variants={fadeInUp}>
                The Principles That <span className={styles.highlight}>Guide Our Work</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.sectionDescription}>
                Our values shape our culture and define how we approach every client project and interaction.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className={styles.valuesGrid}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            >
              {companyValues.map((value, index) => (
                <motion.div 
                  key={index}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15, 
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1)`,
                    transition: { duration: 0.3 }
                  }}
                  style={{ 
                    '--color': value.color 
                  } as React.CSSProperties}
                >
                  <div className={styles.valueIconWrapper} style={{ backgroundColor: `${value.color}20` }}>
                    <div className={styles.valueIconInner} style={{ color: value.color }}>
                      {value.icon}
                    </div>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Timeline/History Section */}
        <section className={`${styles.historySection} ${styles.sectionPadding} ${styles.bgLight}`}>
          <div className="container">
            <motion.div 
              className={`${styles.sectionHeader} ${styles.textCenter}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className={styles.subtitle}>Our Journey</motion.span>
              <motion.h2 variants={fadeInUp}>
                Two Decades of <span className={styles.highlight}>Growth & Innovation</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className={styles.timeline}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.timelineTrack}></div>
              
              <div className={styles.timelineItems}>
                <motion.div 
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>2003</span>
                    <h3>Company Founded</h3>
                    <p>GlobalTech was established as a small tech consultancy with a vision to transform enterprise technology.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>2008</span>
                    <h3>Global Expansion</h3>
                    <p>Opened offices across three continents to better serve our growing international client base.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>2013</span>
                    <h3>Enterprise Focus</h3>
                    <p>Shifted our primary focus to enterprise solutions, becoming a trusted partner for Fortune 500 companies.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>2018</span>
                    <h3>Digital Transformation</h3>
                    <p>Launched our cloud services division to help clients navigate the digital transformation journey.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>2023</span>
                    <h3>Industry Leadership</h3>
                    <p>Recognized as an industry leader with numerous awards for innovation and client satisfaction.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage; 