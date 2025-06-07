'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaUser, FaShieldAlt, FaChevronRight } from 'react-icons/fa';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './access.module.css';

const AccessPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      activeTab,
      email,
      password,
      name,
      company
    });
  };
  
  return (
    <>
      <Header />
      <main className={styles.accessPage}>
        {/* Access Hero Header */}
        <section className={styles.accessHero}>
          <div className="container">
            <div className={styles.accessHeroContent}>
              <div className={styles.breadcrumbs}>
                <Link href="/">Home</Link>
                <FaChevronRight className={styles.breadcrumbIcon} />
                <span>Access</span>
              </div>
              
              <motion.div 
                className={styles.accessTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Account <span className={styles.highlight}>Access</span></h1>
                <div className={styles.titleAccent}></div>
              </motion.div>
            </div>
          </div>
          
          <div className={styles.accessHeroBg}>
            <div className={styles.heroBgGradient1}></div>
            <div className={styles.heroBgGradient2}></div>
            <div className={styles.heroBgPattern}></div>
          </div>
        </section>
        
        {/* Access Form Section */}
        <section className={styles.accessFormSection}>
          <div className="container">
            <div className={styles.accessFormWrapper}>
              <div className={styles.formTabs}>
                <button 
                  className={`${styles.formTab} ${activeTab === 'login' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('login')}
                >
                  <FaUser className={styles.tabIcon} />
                  Login
                </button>
                <button 
                  className={`${styles.formTab} ${activeTab === 'register' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('register')}
                >
                  <FaShieldAlt className={styles.tabIcon} />
                  Register
                </button>
              </div>
              
              <motion.div 
                className={styles.formContent}
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === 'login' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeTab === 'login' ? (
                  <div className={styles.loginForm}>
                    <h2>Welcome Back</h2>
                    <p>Log in to your GlobalTech account to access resources and support.</p>
                    
                    <form onSubmit={handleSubmit}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <div className={styles.inputWithIcon}>
                          <FaEnvelope className={styles.inputIcon} />
                          <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className={styles.formGroup}>
                        <div className={styles.labelWithLink}>
                          <label htmlFor="password">Password</label>
                          <Link href="/forgot-password" className={styles.forgotLink}>Forgot Password?</Link>
                        </div>
                        <div className={styles.inputWithIcon}>
                          <FaLock className={styles.inputIcon} />
                          <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className={styles.formCheckbox}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Keep me logged in</label>
                      </div>
                      
                      <button type="submit" className={styles.submitButton}>
                        Login to Account
                        <FaChevronRight className={styles.buttonIcon} />
                      </button>
                    </form>
                    
                    <div className={styles.formFooter}>
                      <p>Don't have an account? <button onClick={() => setActiveTab('register')} className={styles.switchFormLink}>Create Account</button></p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.registerForm}>
                    <h2>Create Account</h2>
                    <p>Join GlobalTech to access exclusive resources and solutions.</p>
                    
                    <form onSubmit={handleSubmit}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <div className={styles.inputWithIcon}>
                          <FaUser className={styles.inputIcon} />
                          <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter your full name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="registerEmail">Email Address</label>
                        <div className={styles.inputWithIcon}>
                          <FaEnvelope className={styles.inputIcon} />
                          <input 
                            type="email" 
                            id="registerEmail" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="company">Company Name</label>
                        <div className={styles.inputWithIcon}>
                          <FaShieldAlt className={styles.inputIcon} />
                          <input 
                            type="text" 
                            id="company" 
                            placeholder="Enter your company name" 
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="registerPassword">Create Password</label>
                        <div className={styles.inputWithIcon}>
                          <FaLock className={styles.inputIcon} />
                          <input 
                            type="password" 
                            id="registerPassword" 
                            placeholder="Create a secure password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className={styles.formCheckbox}>
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link></label>
                      </div>
                      
                      <button type="submit" className={styles.submitButton}>
                        Create Account
                        <FaChevronRight className={styles.buttonIcon} />
                      </button>
                    </form>
                    
                    <div className={styles.formFooter}>
                      <p>Already have an account? <button onClick={() => setActiveTab('login')} className={styles.switchFormLink}>Login</button></p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            
            <div className={styles.formFeatures}>
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.featureIcon}>
                  <FaShieldAlt />
                </div>
                <h3>Secure Access</h3>
                <p>State-of-the-art security protocols to keep your data safe and protected.</p>
              </motion.div>
              
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.featureIcon}>
                  <FaUser />
                </div>
                <h3>Client Portal</h3>
                <p>Access project details, reports, and resources from a centralized dashboard.</p>
              </motion.div>
              
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.featureIcon}>
                  <FaLock />
                </div>
                <h3>Privacy First</h3>
                <p>Your information is never shared with third parties and is fully encrypted.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AccessPage; 