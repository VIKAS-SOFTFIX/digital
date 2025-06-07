'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaArrowRight, FaLightbulb, FaServer, FaCloud, FaShieldAlt, FaChartLine, FaGlobe, FaCogs, FaTimes, FaDatabase, FaBriefcase, FaNetworkWired, FaMicrochip, FaRobot, FaUsers } from 'react-icons/fa';
import './PortfolioMotion.scss';

interface Solution {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  features: string[];
  caseStudy?: {
    client: string;
    industry: string;
    outcome: string;
    roi: string;
  };
  bgGradient: string;
  bgColor: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

const SolutionsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredSolutions, setFilteredSolutions] = useState<Solution[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'case-study'>('overview');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const solutionsData: Solution[] = [
    {
      id: 1,
      title: 'Enterprise Cloud Infrastructure',
      category: 'cloud',
      description: 'Secure, scalable, and high-performance cloud infrastructure solutions tailored for enterprise requirements with global availability and 24/7 support.',
      icon: <FaCloud />,
      link: '/solutions/cloud-infrastructure',
      features: ['Auto-scaling architecture', 'Multi-region deployment', 'Enterprise SLA guarantee', 'Dedicated cloud support', 'Cost optimization', 'Hybrid cloud integration'],
      caseStudy: {
        client: 'Global Financial Services Provider',
        industry: 'Banking & Finance',
        outcome: 'Reduced infrastructure costs by 42% while improving system reliability by 99.99%',
        roi: '320% ROI within 18 months'
      },
      bgGradient: 'conic-gradient(from 180deg at 50% 50%, #4F46E5 0deg, #818CF8 180deg, #4F46E5 360deg)',
      bgColor: '#4F46E5',
      stats: [
        { value: '99.99%', label: 'Uptime' },
        { value: '42%', label: 'Cost Reduction' },
        { value: '5x', label: 'Faster Deployment' }
      ]
    },
    {
      id: 2,
      title: 'Advanced Data Analytics',
      category: 'analytics',
      description: 'Transform your business data into actionable insights with our comprehensive analytics solutions powered by machine learning and AI.',
      icon: <FaChartLine />,
      link: '/solutions/data-analytics',
      features: ['Real-time dashboard', 'Predictive analytics', 'Custom reporting', 'Data integration', 'AI-powered insights', 'Business intelligence'],
      caseStudy: {
        client: 'Leading Retail Chain',
        industry: 'Retail',
        outcome: 'Increased sales by 28% through data-driven decision making and personalized customer experiences',
        roi: '215% ROI within 12 months'
      },
      bgGradient: 'conic-gradient(from 180deg at 50% 50%, #0EA5E9 0deg, #38BDF8 180deg, #0EA5E9 360deg)',
      bgColor: '#0EA5E9',
      stats: [
        { value: '28%', label: 'Revenue Increase' },
        { value: '3.5x', label: 'Faster Insights' },
        { value: '65%', label: 'More Accurate Forecasts' }
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Framework',
      category: 'security',
      description: 'End-to-end security solutions designed to protect your organization\'s critical assets and data from evolving cyber threats.',
      icon: <FaShieldAlt />,
      link: '/solutions/cybersecurity',
      features: ['Threat intelligence', 'Vulnerability management', 'Compliance monitoring', 'Incident response', 'Zero-trust architecture', 'Security operations center'],
      caseStudy: {
        client: 'Healthcare Network',
        industry: 'Healthcare',
        outcome: 'Eliminated security breaches and achieved full regulatory compliance across 50+ facilities',
        roi: '280% ROI within 24 months'
      },
      bgGradient: 'conic-gradient(from 180deg at 50% 50%, #F43F5E 0deg, #FB7185 180deg, #F43F5E 360deg)',
      bgColor: '#F43F5E',
      stats: [
        { value: '100%', label: 'Compliance Rate' },
        { value: '0', label: 'Breaches' },
        { value: '95%', label: 'Threat Detection' }
      ]
    },
    {
      id: 4,
      title: 'Digital Transformation',
      category: 'transformation',
      description: 'Strategic consulting and implementation services to guide your organization through successful digital transformation initiatives.',
      icon: <FaLightbulb />,
      link: '/solutions/digital-transformation',
      features: ['Change management', 'Process optimization', 'Technology roadmap', 'Implementation support', 'Cultural transformation', 'Innovation workshops'],
      caseStudy: {
        client: 'Manufacturing Conglomerate',
        industry: 'Manufacturing',
        outcome: 'Achieved 35% operational efficiency increase and launched 3 new digital product lines',
        roi: '185% ROI within 24 months'
      },
      bgGradient: 'conic-gradient(from 180deg at 50% 50%, #F97316 0deg, #FB923C 180deg, #F97316 360deg)',
      bgColor: '#F97316',
      stats: [
        { value: '35%', label: 'Efficiency Gain' },
        { value: '3', label: 'New Product Lines' },
        { value: '40%', label: 'Time-to-Market Reduction' }
      ]
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      category: 'ai',
      description: 'Cutting-edge AI solutions that automate processes, extract insights from complex data, and drive intelligent decision-making across your enterprise.',
      icon: <FaRobot />,
      link: '/solutions/ai-machine-learning',
      features: ['Custom AI models', 'Natural language processing', 'Computer vision', 'Predictive maintenance', 'Automated decision systems', 'AI governance framework'],
      caseStudy: {
        client: 'Global Logistics Provider',
        industry: 'Transportation & Logistics',
        outcome: 'Reduced operational costs by 31% and improved delivery accuracy to 99.8% through AI-powered route optimization',
        roi: '275% ROI within 18 months'
      },
      bgGradient: 'conic-gradient(from 180deg at 50% 50%, #8B5CF6 0deg, #A78BFA 180deg, #8B5CF6 360deg)',
      bgColor: '#8B5CF6',
      stats: [
        { value: '31%', label: 'Cost Reduction' },
        { value: '99.8%', label: 'Accuracy Rate' },
        { value: '4x', label: 'Faster Processing' }
      ]
    },
    {
      id: 6,
      title: 'Enterprise Integration',
      category: 'integration',
      description: 'Seamlessly connect disparate systems, applications, and data sources to create a unified enterprise ecosystem that drives efficiency and innovation.',
      icon: <FaNetworkWired />,
      link: '/solutions/enterprise-integration',
      features: ['API management', 'ESB architecture', 'Data synchronization', 'Legacy system integration', 'Microservices orchestration', 'Event-driven architecture'],
      caseStudy: {
        client: 'Multinational Insurance Corporation',
        industry: 'Insurance',
        outcome: 'Reduced application onboarding time from 6 months to 2 weeks and increased cross-selling by 47%',
        roi: '310% ROI within 24 months'
      },
      bgGradient: 'conic-gradient(from 180deg at 50% 50%, #10B981 0deg, #34D399 180deg, #10B981 360deg)',
      bgColor: '#10B981',
      stats: [
        { value: '90%', label: 'Time Saved' },
        { value: '47%', label: 'Cross-Selling Increase' },
        { value: '60%', label: 'Operational Efficiency' }
      ]
    },
  ];
  
  const filters = [
    { name: 'All Solutions', value: 'all' },
    { name: 'Cloud', value: 'cloud' },
    { name: 'Analytics', value: 'analytics' },
    { name: 'Security', value: 'security' },
    { name: 'AI & ML', value: 'ai' },
    { name: 'Integration', value: 'integration' },
  ];
  
  useEffect(() => {
    setFilteredSolutions(
      activeFilter === 'all'
        ? solutionsData
        : solutionsData.filter(solution => solution.category === activeFilter)
    );
  }, [activeFilter]);
  
  const handleFilterClick = (value: string) => {
    setActiveFilter(value);
    setSelectedId(null);
  };
  
  const getSelectedSolution = () => {
    return solutionsData.find(solution => solution.id === selectedId);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
  
  // Get the selected solution safely outside the JSX
  const selectedSolution = getSelectedSolution();
  const selectedBgColor = selectedSolution?.bgColor || '';
  const selectedBgGradient = selectedSolution?.bgGradient || '';
  const selectedTitle = selectedSolution?.title || '';
  const selectedCategory = selectedSolution?.category || '';
  const selectedDescription = selectedSolution?.description || '';
  const selectedFeatures = selectedSolution?.features || [];
  const selectedStats = selectedSolution?.stats || [];
  const selectedCaseStudy = selectedSolution?.caseStudy;
  const selectedLink = selectedSolution?.link || '#';
  
  // Find the category name safely
  const categoryName = filters.find(f => f.value === selectedCategory)?.name || '';
  
  return (
    <section className="solutions-section section-padding" ref={sectionRef}>
      <div className="solutions-bg">
        <div className="solutions-bg-gradient"></div>
        <div className="solutions-bg-pattern"></div>
        <div className="solutions-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge">Enterprise Technology</span>
          <h2 className="section-title">Global Solutions for <span className="highlight">Enterprise Transformation</span></h2>
          <p className="section-description">
            Our comprehensive suite of enterprise-grade solutions empowers organizations to accelerate digital transformation,
            optimize operations, and achieve sustainable growth in today's complex global marketplace.
          </p>
        </motion.div>
        
        <motion.div 
          className="solutions-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="filters-wrapper">
            {filters.map((filter, index) => (
              <motion.button
                key={index}
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => handleFilterClick(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
                {activeFilter === filter.value && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="activeFilterIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="solutions-grid"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              className="solutions-grid-inner"
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredSolutions.map((solution, index) => (
                <motion.div 
                  className={`solution-card ${hoverIndex === solution.id ? 'is-hovered' : ''}`}
                  key={solution.id}
                  layoutId={`solution-${solution.id}`}
                  variants={cardVariants}
                  onMouseEnter={() => setHoverIndex(solution.id)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => setSelectedId(solution.id)}
                >
                  <div className="card-content">
                    <div className="solution-icon" style={{ background: solution.bgGradient }}>
                      {solution.icon}
                    </div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                    
                    {solution.stats && solution.stats.length > 0 && (
                      <div className="solution-stats">
                        {solution.stats.slice(0, 2).map((stat, i) => (
                          <div className="stat-item" key={i}>
                            <div className="stat-value" style={{ color: solution.bgColor }}>{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="solution-features-preview">
                      {solution.features.slice(0, 2).map((feature, i) => (
                        <div className="feature-item" key={i}>
                          <span className="feature-bullet" style={{ background: solution.bgColor }}></span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                      {solution.features.length > 2 && (
                        <div className="feature-more">+{solution.features.length - 2} more features</div>
                      )}
                    </div>
                    
                    <div className="solution-link">
                      <span>Explore Solution</span>
                      <FaArrowRight className="arrow-icon" />
                    </div>
                  </div>
                  <div className="card-bg"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
   
      </div>
      
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="solution-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="solution-modal"
              layoutId={`solution-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedId(null)}>
                <FaTimes />
              </button>
              
              <div className="modal-content">
                <div className="modal-header" style={{ background: selectedBgGradient }}>
                  <div className="modal-icon">
                    {selectedSolution?.icon}
                  </div>
                  <h3>{selectedTitle}</h3>
                  <span className="category">{categoryName}</span>
                </div>
                
                <div className="modal-tabs">
                  <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'case-study' ? 'active' : ''}`}
                    onClick={() => setActiveTab('case-study')}
                  >
                    Case Study
                  </button>
                </div>
                
                <div className="modal-tab-content">
                  {activeTab === 'overview' && (
                    <div className="tab-overview">
                      <p className="overview-description">{selectedDescription}</p>
                      
                      {selectedStats && (
                        <div className="overview-stats">
                          {selectedStats.map((stat, i) => (
                            <div className="stat-box" key={i}>
                              <div className="stat-value" style={{ color: selectedBgColor }}>{stat.value}</div>
                              <div className="stat-label">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="overview-benefits">
                        <h4>Business Benefits</h4>
                        <div className="benefits-grid">
                          <div className="benefit-item">
                            <div className="benefit-icon" style={{ background: `${selectedBgColor}20`, color: selectedBgColor }}>
                              <FaCogs />
                            </div>
                            <h5>Operational Efficiency</h5>
                            <p>Streamline processes and reduce operational costs</p>
                          </div>
                          <div className="benefit-item">
                            <div className="benefit-icon" style={{ background: `${selectedBgColor}20`, color: selectedBgColor }}>
                              <FaChartLine />
                            </div>
                            <h5>Accelerated Growth</h5>
                            <p>Enable rapid scaling and market expansion</p>
                          </div>
                          <div className="benefit-item">
                            <div className="benefit-icon" style={{ background: `${selectedBgColor}20`, color: selectedBgColor }}>
                              <FaShieldAlt />
                            </div>
                            <h5>Risk Mitigation</h5>
                            <p>Enhance security and ensure compliance</p>
                          </div>
                          <div className="benefit-item">
                            <div className="benefit-icon" style={{ background: `${selectedBgColor}20`, color: selectedBgColor }}>
                              <FaLightbulb />
                            </div>
                            <h5>Innovation Enablement</h5>
                            <p>Foster development of new products and services</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'features' && (
                    <div className="tab-features">
                      <div className="features-list">
                        {selectedFeatures.map((feature, i) => (
                          <div className="feature-item" key={i}>
                            <div className="feature-icon" style={{ background: selectedBgColor }}>
                              <div className="feature-number">{i + 1}</div>
                            </div>
                            <div className="feature-details">
                              <h5>{feature}</h5>
                              <p>Our enterprise-grade implementation provides comprehensive capabilities and seamless integration with your existing systems.</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="features-additional">
                        <h4>Additional Capabilities</h4>
                        <ul>
                          <li>Enterprise-grade scalability and performance</li>
                          <li>Advanced security and compliance measures</li>
                          <li>Global availability with 24/7 support</li>
                          <li>Seamless integration with existing systems</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'case-study' && selectedCaseStudy && (
                    <div className="tab-case-study">
                      <div className="case-study-header">
                        <div className="case-client">
                          <h4>Client</h4>
                          <p>{selectedCaseStudy.client}</p>
                        </div>
                        <div className="case-industry">
                          <h4>Industry</h4>
                          <p>{selectedCaseStudy.industry}</p>
                        </div>
                      </div>
                      
                      <div className="case-results">
                        <h4>Results</h4>
                        <div className="results-box" style={{ borderColor: selectedBgColor }}>
                          <p>{selectedCaseStudy.outcome}</p>
                        </div>
                      </div>
                      
                      <div className="case-roi">
                        <h4>Return on Investment</h4>
                        <div className="roi-value" style={{ color: selectedBgColor }}>
                          {selectedCaseStudy.roi}
                        </div>
                      </div>
                      
                      <div className="case-quote">
                        <blockquote>
                          "GlobalTech's {selectedTitle} solution has been transformative for our business, delivering exceptional results and exceeding our expectations in every way."
                          <cite>— CTO, {selectedCaseStudy.client || ''}</cite>
                        </blockquote>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="modal-actions">
                  <Link href={selectedLink} className="modal-cta" style={{ background: selectedBgGradient }}>
                    <span>Learn More About This Solution</span>
                    <FaArrowRight className="btn-icon" />
                  </Link>
                  <Link href="/contact" className="modal-cta-secondary">
                    <span>Request a Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SolutionsGrid; 