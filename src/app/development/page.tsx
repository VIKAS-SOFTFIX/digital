'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope, FaChevronRight, FaTools, FaClock, FaBell, FaCheckCircle } from 'react-icons/fa';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './development.module.css';

const DevelopmentPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Notification email:', email);
      setSubmitted(true);
      setEmail('');
    }
  };
  
  return (
    <>
      <Header isTransparent={false} />
      <main className={styles.developmentPage}>
        <div className={styles.developmentBackground}>
          <div className={styles.bgGradient1}></div>
          <div className={styles.bgGradient2}></div>
        </div>
        
        <div className="container">
          <div className={styles.developmentContent}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <FaChevronRight className={styles.breadcrumbIcon} />
              <span>Under Development</span>
            </div>
            
            <motion.div 
              className={styles.developmentAnimation}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className={styles.animationIcon}
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  y: [0, -5, 0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut" 
                }}
              >
                <FaTools size={70} />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={styles.developmentText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1>This Page is Under <span className={styles.highlight}>Development</span></h1>
              <div className={styles.titleAccent}></div>
              <p>We're working hard to bring you a great experience. This feature will be available soon.</p>
              
              <div className={styles.developmentFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaClock />
                  </div>
                  <h3>Coming Soon</h3>
                  <p>We're working hard to complete this page. It will be ready in the near future.</p>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaTools />
                  </div>
                  <h3>Under Construction</h3>
                  <p>Our development team is building this feature with the latest technologies.</p>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <FaBell />
                  </div>
                  <h3>Get Notified</h3>
                  <p>Sign up below to receive a notification when this feature is ready.</p>
                </div>
              </div>
              
              <div className={styles.developmentActions}>
                <Link href="/" className={styles.primaryButton}>
                  <FaHome className={styles.buttonIcon} />
                  Back to Home
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  <FaEnvelope className={styles.buttonIcon} />
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.notificationSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={styles.notificationCard}>
                <h2>Get Notified When We Launch</h2>
                <p>Leave your email and we'll let you know when this feature is available.</p>
                
                {submitted ? (
                  <div className={styles.successMessage}>
                    <FaCheckCircle className={styles.successIcon} />
                    <p>Thank you! We'll notify you when this feature launches.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.notificationForm}>
                    <div className={styles.inputWithButton}>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className={styles.notifyButton}>
                        Notify Me
                      </button>
                    </div>
                    <div className={styles.formNote}>
                      We respect your privacy and will never share your email.
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DevelopmentPage; 