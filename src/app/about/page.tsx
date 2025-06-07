'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader';
import styles from './about.module.css';
import { FaChevronRight, FaLightbulb, FaStar, FaUsers, FaChartLine, FaEye, FaBullseye, FaCheckCircle, FaTrophy, FaBuilding, FaLinkedin, FaTwitter, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

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

  // Stats for the about page
  const aboutStats = [
    { number: "20+", label: "Years of Experience" },
    { number: "500+", label: "Global Clients" },
    { number: "150+", label: "Tech Experts" }
  ];

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

  // Office images data
  const officeImages = [
    {
      src: "/images/about/office-1.jpg",
      alt: "Modern collaborative workspace",
      caption: "Collaborative Workspace"
    },
    {
      src: "/images/about/office-2.jpg",
      alt: "Team meeting room",
      caption: "Strategy Room"
    },
    {
      src: "/images/about/office-3.jpg",
      alt: "Innovation lab",
      caption: "Innovation Lab"
    },
    {
      src: "/images/about/office-4.jpg",
      alt: "Technology hub",
      caption: "Technology Hub"
    },
    {
      src: "/images/about/office-5.jpg",
      alt: "Relaxation area",
      caption: "Creative Lounge"
    },
    {
      src: "/images/about/office-6.jpg",
      alt: "Global headquarters",
      caption: "Global Headquarters"
    }
  ];

  return (
    <>
      <Header isTransparent={false} />
      <main className={styles.aboutPage}>
        <PageHeader 
          title={<>About <span className="highlight">GlobalTech</span></>}
          subtitle="For over 20 years, we've been transforming enterprises through technology and innovation, creating solutions that power the world's leading businesses."
          imageSrc="/images/about/about-banner.jpg"
          imageAlt="GlobalTech Team"
          pageName="About"
          stats={aboutStats}
        />
        
        <AboutSection />
        
        {/* Vision & Mission Section - Redesigned */}
        <section className={styles.visionMissionNew}>
          <div className="container">
            <motion.div 
              className={styles.visionMissionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className={styles.subtitle}>Our Purpose</motion.span>
              <motion.h2 variants={fadeInUp}>
                Vision & <span className={styles.highlight}>Mission</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.sectionDescription}>
                Guided by clear principles, we're building a technology company that makes a difference.
              </motion.p>
            </motion.div>
              </div>
              
          <div className={styles.visionMissionWrapper}>
            <div className={styles.visionMissionBg}></div>
            
            <div className="container">
              <div className={styles.visionMissionContent}>
                <motion.div 
                  className={styles.visionBox}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={styles.visionIconWrapper}>
                    <FaEye className={styles.visionIcon} />
                  </div>
                  <h3>Our Vision</h3>
                  <div className={styles.visionQuote}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p>To be the global leader in innovative technology solutions that empower organizations to thrive in a rapidly evolving digital landscape.</p>
                  </div>
                  <ul className={styles.visionPoints}>
                    <li>
                      <div className={styles.pointIcon}>
                        <FaCheckCircle />
                      </div>
                      <p>Creating lasting impact for our clients</p>
                    </li>
                    <li>
                      <div className={styles.pointIcon}>
                        <FaCheckCircle />
                      </div>
                      <p>Empowering our employees to excel</p>
                    </li>
                    <li>
                      <div className={styles.pointIcon}>
                        <FaCheckCircle />
                      </div>
                      <p>Contributing positively to communities</p>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  className={styles.missionBox}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className={styles.missionIconWrapper}>
                    <FaBullseye className={styles.missionIcon} />
                  </div>
                  <h3>Our Mission</h3>
                  <div className={styles.missionStatement}>
                    <p>We deliver transformative technology solutions that solve complex business challenges, drive growth, and enhance operational efficiency.</p>
                  </div>
                  <div className={styles.missionApproach}>
                    <h4>Our Approach</h4>
                    <div className={styles.approachItems}>
                      <div className={styles.approachItem}>
                        <span className={styles.approachNumber}>01</span>
                        <p>Combine deep industry expertise with cutting-edge technology</p>
                      </div>
                      <div className={styles.approachItem}>
                        <span className={styles.approachNumber}>02</span>
                        <p>Develop solutions that deliver measurable business value</p>
                      </div>
                      <div className={styles.approachItem}>
                        <span className={styles.approachNumber}>03</span>
                        <p>Help clients navigate digital transformation with confidence</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.missionCta}>
                    <Link href="/contact" className={styles.missionBtn}>
                      Partner With Us <FaArrowRight className={styles.btnIcon} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founder Messages Section */}
        <section className={`${styles.foundersSection} ${styles.sectionPadding}`}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className={styles.subtitle}>Leadership Message</motion.span>
              <motion.h2 variants={fadeInUp}>
                From Our <span className={styles.highlight}>Founders</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.sectionDescription}>
                Hear directly from the visionaries who established GlobalTech and continue to guide our journey.
              </motion.p>
            </motion.div>
            
            <div className={styles.foundersGrid}>
              <motion.div 
                className={styles.founderCard}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.founderInfo}>
                  <div className={styles.founderImageWrapper}>
                    <img src="/images/about/founder.jpg" alt="Michael Anderson" className={styles.founderImage} />
                  </div>
                  <div className={styles.founderMeta}>
                    <h3>Michael Anderson</h3>
                    <p className={styles.founderTitle}>Founder & CEO</p>
                    <div className={styles.founderSocial}>
                      <a href="#" className={styles.socialLink}><FaLinkedin /></a>
                      <a href="#" className={styles.socialLink}><FaTwitter /></a>
                    </div>
                  </div>
                </div>
                <div className={styles.founderMessage}>
                  <p>"When we founded GlobalTech over two decades ago, we envisioned creating a company that would harness the power of technology to solve the world's most complex business challenges. Today, that vision has expanded beyond what we ever imagined, as we continue to drive innovation that transforms industries and improves lives."</p>
                  <p>"Our success is built on our unwavering commitment to our clients, our passion for innovation, and our exceptional team who bring their best every day. As we look to the future, we remain dedicated to pushing boundaries and creating solutions that enable businesses to thrive in an increasingly digital world."</p>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.founderCard}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={styles.founderInfo}>
                  <div className={styles.founderImageWrapper}>
                    <img src="/images/about/co-founder.jpg" alt="Jennifer Williams" className={styles.founderImage} />
                  </div>
                  <div className={styles.founderMeta}>
                    <h3>Jennifer Williams</h3>
                    <p className={styles.founderTitle}>Co-Founder & CTO</p>
                    <div className={styles.founderSocial}>
                      <a href="#" className={styles.socialLink}><FaLinkedin /></a>
                      <a href="#" className={styles.socialLink}><FaTwitter /></a>
                    </div>
                  </div>
                </div>
                <div className={styles.founderMessage}>
                  <p>"Technology has the power to transform not just businesses, but societies. At GlobalTech, we've always approached innovation with both ambition and responsibility, asking not just 'Can we build it?' but 'Should we build it, and how can it make the world better?'"</p>
                  <p>"What sets us apart is our unique approach to problem-solving: we combine technical expertise with deep industry knowledge and a human-centered design philosophy. This enables us to create solutions that are not just technically superior but also intuitive, ethical, and aligned with our clients' strategic objectives. I'm incredibly proud of what our team has accomplished and excited about the innovations we'll pioneer in the years ahead."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Office Gallery Section */}
        <section className={`${styles.officeGallerySection} ${styles.sectionPadding} ${styles.bgLight}`}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className={styles.subtitle}>Our Workspace</motion.span>
              <motion.h2 variants={fadeInUp}>
                Where <span className={styles.highlight}>Innovation</span> Happens
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.sectionDescription}>
                Take a visual tour of our state-of-the-art facilities designed to foster creativity, collaboration, and innovation.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className={styles.officeGallery}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {officeImages.map((image, index) => (
                <motion.div 
                  key={index}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.galleryImageWrapper}>
                    <img src={image.src} alt={image.alt} className={styles.galleryImage} />
                  </div>
                  <div className={styles.galleryCaption}>
                    <FaBuilding className={styles.galleryIcon} />
                    <span>{image.caption}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
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
      </main>
      <Footer />
    </>
  );
};

export default AboutPage; 