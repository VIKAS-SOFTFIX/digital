'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaChevronRight, FaTools } from 'react-icons/fa';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.notFoundPage}>
        <div className={styles.notFoundBackground}>
          <div className={styles.bgGradient1}></div>
          <div className={styles.bgGradient2}></div>
        </div>
        
        <div className="container">
          <div className={styles.notFoundContent}>
            <motion.div 
              className={styles.notFoundAnimation}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className={styles.animationIcon}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut" 
                }}
              >
                <FaTools size={80} />
              </motion.div>
              <motion.div 
                className={styles.statusCode}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                404
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={styles.notFoundText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1>Page Not Found</h1>
              <p>We're sorry, the page you're looking for doesn't exist or is currently under development.</p>
              
              <div className={styles.notFoundActions}>
                <Link href="/" className={styles.primaryButton}>
                  <FaHome className={styles.buttonIcon} />
                  Back to Home
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  <FaChevronRight className={styles.buttonIcon} />
                  Contact Support
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.searchSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2>Looking for something specific?</h2>
              <div className={styles.searchBox}>
                <FaSearch className={styles.searchIcon} />
                <input type="text" placeholder="Search for solutions, industries, insights..." />
                <button className={styles.searchButton}>Search</button>
              </div>
              
              <div className={styles.popularLinks}>
                <h3>Popular pages:</h3>
                <div className={styles.linksGrid}>
                  <Link href="/solutions">Solutions</Link>
                  <Link href="/about">About Us</Link>
                  <Link href="/industries">Industries</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 