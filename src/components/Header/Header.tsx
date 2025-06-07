'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaGlobe, 
  FaSearch, 
  FaChevronDown, 
  FaChevronRight, 
  FaRegLightbulb,
  FaCloud,
  FaRobot,
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaDatabase,
  FaPaintBrush,
  FaCogs,
  FaClipboardCheck,
  FaComments,
  FaUsers,
  FaHandshake,
  FaServer
} from 'react-icons/fa';
import Logo from '@/components/Logo/Logo';
import './Header.scss';

interface HeaderProps {
  isTransparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent = false }) => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('development');
  
  // Determine if header should be transparent based on pathname
  const shouldBeTransparent = pathname === '/' || isTransparent;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const navVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') {
      return true;
    }
    if (path !== '/' && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''} ${shouldBeTransparent ? 'transparent' : 'solid'}`}>
      <div className="header-background">
        <div className="header-pattern"></div>
        <div className="header-gradient"></div>
      </div>
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size="medium" />
            </motion.div>
          </div>
          
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav 
                className={`doc-sidebar ${mobileMenuOpen ? 'show' : ''}`}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="sidebar-header">
                  <div className="sidebar-logo">
                    <Logo size="small" />
                  </div>
                  <button className="close-sidebar" onClick={closeMobileMenu}>
                    <FaTimes />
                  </button>
                </div>
                
                <div className="sidebar-search">
                  <input type="text" placeholder="Search..." />
                  <FaSearch className="search-icon" />
                </div>
                
                <ul className="sidebar-nav">
                  <motion.li className="nav-item" variants={itemVariants}>
                    <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                      <span className="nav-text">Home</span>
                      {isActive('/') && <span className="active-indicator" />}
                    </Link>
                  </motion.li>
                  
                  <motion.li className="nav-item" variants={itemVariants}>
                    <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                      <span className="nav-text">About</span>
                      {isActive('/about') && <span className="active-indicator" />}
                    </Link>
                  </motion.li>
                  
                  <motion.li className="nav-item has-children" variants={itemVariants}>
                    <div 
                      className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}
                      onClick={() => toggleDropdown('solutions-mobile')}
                    >
                      <span className="nav-text">Solutions</span>
                      <FaChevronDown className={`submenu-icon ${activeDropdown === 'solutions-mobile' ? 'rotated' : ''}`} />
                      {isActive('/solutions') && <span className="active-indicator" />}
                    </div>
                    <AnimatePresence>
                      {activeDropdown === 'solutions-mobile' && (
                        <motion.ul 
                          className="submenu"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <li className="submenu-section">
                            <span className="section-title">Development</span>
                            <Link 
                              href="/development"
                              onClick={closeMobileMenu}
                            >
                              <FaChevronRight className="list-icon" />
                              Custom Software Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/development"
                              onClick={closeMobileMenu}
                            >
                              <FaChevronRight className="list-icon" />
                              Web Application Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/development"
                              onClick={closeMobileMenu}
                            >
                              <FaChevronRight className="list-icon" />
                              Mobile App Development
                            </Link>
                          </li>
                          
                          <li className="submenu-section">
                            <span className="section-title">Staff Solutions</span>
                            <Link 
                              href="/it-augmentation"
                              onClick={closeMobileMenu}
                            >
                              <FaChevronRight className="list-icon" />
                              IT Staff Augmentation
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/outsourcing"
                              onClick={closeMobileMenu}
                            >
                              <FaChevronRight className="list-icon" />
                              IT Outsourcing
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/partnerships"
                              onClick={closeMobileMenu}
                            >
                              <FaChevronRight className="list-icon" />
                              Strategic IT Partnerships
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/contact"
                              onClick={closeMobileMenu}
                              className="highlight-link"
                            >
                              <FaChevronRight className="list-icon" />
                              Need a custom solution?
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                  
                  <motion.li className="nav-item" variants={itemVariants}>
                    <Link href="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>
                      <span className="nav-text">Industries</span>
                      {isActive('/industries') && <span className="active-indicator" />}
                    </Link>
                  </motion.li>
                  
                  <motion.li className="nav-item" variants={itemVariants}>
                    <Link href="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>
                      <span className="nav-text">Insights</span>
                      {isActive('/insights') && <span className="active-indicator" />}
                    </Link>
                  </motion.li>
                  
                  <motion.li className="nav-item" variants={itemVariants}>
                    <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                      <span className="nav-text">Contact</span>
                      {isActive('/contact') && <span className="active-indicator" />}
                    </Link>
                  </motion.li>
                </ul>
                
                <div className="sidebar-footer">
                  <Link href="/contact" className="btn-sidebar">
                    Request Demo
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
          
          <div className="header-center">
            <motion.nav 
              className="main-nav"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <ul className="nav-list">
                <motion.li className="nav-item" variants={itemVariants}>
                  <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                    <span className="nav-text">Home</span>
                    {isActive('/') && <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />}
                  </Link>
                </motion.li>
                <motion.li className="nav-item" variants={itemVariants}>
                  <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                    <span className="nav-text">About</span>
                    {isActive('/about') && <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />}
                  </Link>
                </motion.li>
                <motion.li 
                  className="nav-item dropdown"
                  variants={itemVariants}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div 
                    className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}
                    onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  >
                    <span className="nav-text">Solutions</span>
                    <FaChevronDown className={`dropdown-icon ${activeDropdown === 'solutions' ? 'rotated' : ''}`} />
                    {isActive('/solutions') && <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />}
                  </div>
                  <AnimatePresence>
                    {activeDropdown === 'solutions' && (
                      <motion.div 
                        className="dropdown-menu mega-menu"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="dropdown-inner">
                          <div className="dropdown-tabs">
                            <div className="tabs-navigation">
                              <button 
                                className={`tab-button ${activeTab === 'development' ? 'active' : ''}`}
                                onClick={() => setActiveTab('development')}
                              >
                                <FaCode className="tab-icon" />
                                <span>Development</span>
                              </button>
                              <button 
                                className={`tab-button ${activeTab === 'applications' ? 'active' : ''}`}
                                onClick={() => setActiveTab('applications')}
                              >
                                <FaDesktop className="tab-icon" />
                                <span>Applications</span>
                              </button>
                              <button 
                                className={`tab-button ${activeTab === 'specialized' ? 'active' : ''}`}
                                onClick={() => setActiveTab('specialized')}
                              >
                                <FaRobot className="tab-icon" />
                                <span>Specialized</span>
                              </button>
                              <button 
                                className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
                                onClick={() => setActiveTab('services')}
                              >
                                <FaServer className="tab-icon" />
                                <span>IT Services</span>
                              </button>
                              <button 
                                className={`tab-button ${activeTab === 'staff' ? 'active' : ''}`}
                                onClick={() => setActiveTab('staff')}
                              >
                                <FaUsers className="tab-icon" />
                                <span>Staff Solutions</span>
                              </button>
                            </div>
                            
                            <div className="tabs-content">
                              {activeTab === 'development' && (
                                <div className="tab-pane">
                                  <div className="dropdown-group">
                                    <h4>Software Development</h4>
                                    <ul>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaCode />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Custom Software Development</span>
                                            <span className="dropdown-description">Tailored software solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaDesktop />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Web Application Development</span>
                                            <span className="dropdown-description">Custom web applications</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaCloud />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">SaaS Product Development</span>
                                            <span className="dropdown-description">Cloud-based software services</span>
                                          </div>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                              
                              {activeTab === 'applications' && (
                                <div className="tab-pane">
                                  <div className="dropdown-group">
                                    <h4>Application Development</h4>
                                    <ul>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaDesktop />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Web Application</span>
                                            <span className="dropdown-description">Dynamic web solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaRegLightbulb />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Custom Application</span>
                                            <span className="dropdown-description">Bespoke application solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaDatabase />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Application Integration</span>
                                            <span className="dropdown-description">Seamless system connections</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaCloud />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Ecommerce Application</span>
                                            <span className="dropdown-description">Online shopping solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                              
                              {activeTab === 'specialized' && (
                                <div className="tab-pane">
                                  <div className="dropdown-group">
                                    <h4>Specialized Development</h4>
                                    <ul>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaMobileAlt />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Mobile App Development</span>
                                            <span className="dropdown-description">iOS and Android solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaCode />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Full Stack Development</span>
                                            <span className="dropdown-description">End-to-end development</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaRobot />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Artificial Intelligence</span>
                                            <span className="dropdown-description">Smart AI-powered solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                              
                              {activeTab === 'services' && (
                                <div className="tab-pane">
                                  <div className="dropdown-group">
                                    <h4>IT Services</h4>
                                    <ul>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaPaintBrush />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">UX/UI Design</span>
                                            <span className="dropdown-description">User-centered design</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaCogs />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">DevOps</span>
                                            <span className="dropdown-description">Continuous integration/delivery</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/development"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaClipboardCheck />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">QA and Testing</span>
                                            <span className="dropdown-description">Quality assurance services</span>
                                          </div>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                              
                              {activeTab === 'staff' && (
                                <div className="tab-pane">
                                  <div className="dropdown-group">
                                    <h4>Staff Solutions</h4>
                                    <ul>
                                      <li>
                                        <Link 
                                          href="/it-augmentation"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper highlight-icon">
                                            <FaUsers />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">IT Staff Augmentation</span>
                                            <span className="dropdown-description">Extend your team with skilled professionals</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/outsourcing"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper highlight-icon">
                                            <FaGlobe />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">IT Outsourcing</span>
                                            <span className="dropdown-description">Comprehensive outsourced IT services</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/partnerships"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaHandshake />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Strategic IT Partnerships</span>
                                            <span className="dropdown-description">Long-term technology partnerships</span>
                                          </div>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link 
                                          href="/managed-services"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          <span className="dropdown-icon-wrapper">
                                            <FaServer />
                                          </span>
                                          <div className="dropdown-content">
                                            <span className="dropdown-title">Managed IT Services</span>
                                            <span className="dropdown-description">End-to-end IT management solutions</span>
                                          </div>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="mega-menu-cta">
                            <div className="cta-card">
                              <div className="cta-icon">
                                <FaRegLightbulb />
                              </div>
                              <h3>Need a custom solution?</h3>
                              <p>Let our experts create the perfect tech solution tailored specifically for your business needs and growth objectives.</p>
                              <Link 
                                href="/contact"
                                onClick={() => setActiveDropdown(null)}
                                className="cta-button"
                              >
                                <span>Free Consultation</span>
                                <FaChevronRight className="cta-arrow" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
                <motion.li className="nav-item" variants={itemVariants}>
                  <Link href="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>
                    <span className="nav-text">Industries</span>
                    {isActive('/industries') && <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />}
                  </Link>
                </motion.li>
                <motion.li className="nav-item" variants={itemVariants}>
                  <Link href="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>
                    <span className="nav-text">Insights</span>
                    {isActive('/insights') && <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />}
                  </Link>
                </motion.li>
                <motion.li className="nav-item" variants={itemVariants}>
                  <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                    <span className="nav-text">Contact</span>
                    {isActive('/contact') && <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />}
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          </div>
          
          <div className="header-right">
            <button className="search-toggle" onClick={toggleSearch}>
              <FaSearch />
            </button>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(10, 91, 150, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn btn-primary">
                Request Demo
              </Link>
            </motion.div>
            
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="global-search"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="container">
              <div className="search-container">
                <input type="text" placeholder="Search for solutions, industries, insights..." autoFocus />
                <FaSearch className="search-icon" />
                <button className="close-search" onClick={toggleSearch}>
                  <FaTimes />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 