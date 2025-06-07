'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope, FaAward, FaCode, FaServer, FaShieldAlt, FaChartLine, FaDatabase, FaLaptopCode, FaUserTie, FaGlobe, FaBriefcase, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import './Team.scss';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  expertise: string[];
  experience: string;
  education: string;
  bio: string;
  achievements?: string[];
  previousCompanies?: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  skills: {
    name: string;
    icon: React.ReactNode;
    level?: number;
  }[];
}

const Team: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<'bio' | 'expertise' | 'achievements'>('bio');
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alexander Mitchell',
      position: 'Chief Technology Officer',
      image: '/images/placeholder.jpg',
      expertise: ['Enterprise Architecture', 'Cloud Strategy', 'Digital Transformation', 'IT Governance', 'Technology Roadmapping'],
      experience: '20+ years',
      education: 'Ph.D. in Computer Science, Stanford University',
      bio: 'Alexander leads our technology strategy and innovation initiatives. With over two decades of experience working with Fortune 500 companies, he specializes in enterprise architecture and cloud transformation.',
      achievements: [
        'Led digital transformation for 3 Fortune 100 companies',
        'Published author on enterprise cloud architecture',
        'Former CTO of CloudSphere Technologies',
        'Keynote speaker at Enterprise Technology Summit 2023'
      ],
      previousCompanies: ['Microsoft', 'Oracle', 'Deloitte'],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'contact@globaltech.com',
      },
      skills: [
        { name: 'Enterprise Architecture', icon: <FaServer />, level: 95 },
        { name: 'Cloud Computing', icon: <FaCloud />, level: 90 },
        { name: 'Digital Transformation', icon: <FaChartLine />, level: 85 },
      ]
    },
    {
      id: 2,
      name: 'Rebecca Chen',
      position: 'Head of Cybersecurity',
      image: '/images/placeholder.jpg',
      expertise: ['Information Security', 'Risk Management', 'Compliance', 'Security Architecture', 'Threat Intelligence'],
      experience: '15+ years',
      education: 'M.S. in Cybersecurity, MIT',
      bio: 'Rebecca oversees our cybersecurity practice, helping clients protect their critical assets and data. Her extensive background includes designing security frameworks for financial institutions and healthcare organizations.',
      achievements: [
        'Led security operations for a global financial institution',
        'CISSP, CISM certified security professional',
        'Former security advisor for government agencies',
        'Developed proprietary threat detection methodology'
      ],
      previousCompanies: ['Symantec', 'Cisco', 'PWC'],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'contact@globaltech.com',
      },
      skills: [
        { name: 'Cybersecurity', icon: <FaShieldAlt />, level: 95 },
        { name: 'Risk Assessment', icon: <FaAward />, level: 90 },
        { name: 'Compliance', icon: <FaDatabase />, level: 85 },
      ]
    },
    {
      id: 3,
      name: 'Michael Patel',
      position: 'Director of Software Engineering',
      image: '/images/placeholder.jpg',
      expertise: ['Software Architecture', 'Microservices', 'DevOps', 'API Development', 'Enterprise Applications'],
      experience: '18+ years',
      education: 'M.S. in Computer Engineering, Carnegie Mellon',
      bio: 'Michael leads our software engineering division, specializing in enterprise-grade applications. He has successfully delivered mission-critical systems for clients across banking, healthcare, and manufacturing sectors.',
      achievements: [
        'Architected mission-critical systems for Fortune 500 companies',
        'Led development of award-winning enterprise platforms',
        'Published contributor to open-source enterprise frameworks',
        'Former Principal Engineer at Global Financial Services'
      ],
      previousCompanies: ['IBM', 'SAP', 'Accenture'],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'contact@globaltech.com',
      },
      skills: [
        { name: 'Software Architecture', icon: <FaCode />, level: 95 },
        { name: 'Microservices', icon: <FaServer />, level: 90 },
        { name: 'DevOps', icon: <FaGears />, level: 85 },
      ]
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      position: 'VP of Data Analytics',
      image: '/images/placeholder.jpg',
      expertise: ['Business Intelligence', 'Machine Learning', 'Data Governance', 'Predictive Analytics', 'Big Data'],
      experience: '12+ years',
      education: 'Ph.D. in Data Science, University of California',
      bio: 'Sarah specializes in helping organizations leverage their data assets to drive business outcomes. Her expertise spans data strategy, advanced analytics, and implementing enterprise data platforms.',
      achievements: [
        'Pioneered AI-driven analytics solutions for retail sector',
        'Led data transformation for 2 Fortune 100 companies',
        'Published researcher in machine learning applications',
        'Former Head of Analytics at Global Retail Corporation'
      ],
      previousCompanies: ['Amazon', 'Salesforce', 'McKinsey'],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'contact@globaltech.com',
      },
      skills: [
        { name: 'Data Analytics', icon: <FaChartLine />, level: 95 },
        { name: 'Machine Learning', icon: <FaBrain />, level: 90 },
        { name: 'Data Governance', icon: <FaDatabase />, level: 85 },
      ]
    },
  ];

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setActiveTab('bio');
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };
  
  return (
    <section className="team-section section-padding" ref={sectionRef}>
      <div className="team-bg">
        <div className="team-bg-gradient"></div>
        <div className="team-bg-pattern"></div>
        <div className="team-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge">Leadership Team</span>
          <h2 className="section-title">Technology <span className="highlight">Experts</span></h2>
        </motion.div>
        
        <div className="team-stats">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="stat-icon">
              <FaUserTie />
            </div>
            <div className="stat-value">65+</div>
            <div className="stat-label">Years Experience</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="stat-icon">
              <FaGlobe />
            </div>
            <div className="stat-value">12</div>
            <div className="stat-label">Markets</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="stat-icon">
              <FaBriefcase />
            </div>
            <div className="stat-value">500+</div>
            <div className="stat-label">Projects</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="stat-icon">
              <FaGraduationCap />
            </div>
            <div className="stat-value">20+</div>
            <div className="stat-label">Certifications</div>
          </motion.div>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="team-card" 
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.1 + 0.2
                }
              } : { opacity: 0, y: 50 }}
              onClick={() => handleMemberClick(member)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="team-card-inner">
                <div className="team-avatar">
                  <div className="avatar-placeholder">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-position">{member.position}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="team-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="cta-content">
            <h3>Join Our Team of Enterprise Technology Experts</h3>
            <p>
              Looking for exceptional talent to help us deliver transformative 
              technology solutions for global enterprises.
            </p>
          </div>
          <div className="cta-buttons">
            <button className="cta-button primary">View Careers</button>
            <Link href="/about-us" className="cta-button secondary">Our Culture</Link>
          </div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="team-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div 
              className="team-modal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={handleCloseModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-avatar">
                    <div className="avatar-placeholder">
                      {selectedMember.name.charAt(0)}
                    </div>
                  </div>
                  <div className="modal-title">
                    <h3>{selectedMember.name}</h3>
                    <span className="modal-position">{selectedMember.position}</span>
                    <div className="modal-experience">
                      <span className="experience-badge">{selectedMember.experience}</span>
                      <span className="education-badge">{selectedMember.education.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-tabs">
                  <button 
                    className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bio')}
                  >
                    Biography
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'expertise' ? 'active' : ''}`}
                    onClick={() => setActiveTab('expertise')}
                  >
                    Expertise & Skills
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                    onClick={() => setActiveTab('achievements')}
                  >
                    Achievements
                  </button>
                </div>
                
                <div className="modal-tab-content">
                  {activeTab === 'bio' && (
                    <div className="tab-bio">
                      <p className="bio-text">{selectedMember.bio}</p>
                      
                      <div className="background">
                        <h4>Professional Background</h4>
                        <div className="previous-companies">
                          {selectedMember.previousCompanies && selectedMember.previousCompanies.map((company, i) => (
                            <span className="company-badge" key={i}>{company}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="education-full">
                        <h4>Education</h4>
                        <p>{selectedMember.education}</p>
                      </div>
                      
                      <div className="modal-social">
                        <h4>Connect</h4>
                        <div className="social-links">
                          {selectedMember.socialLinks.linkedin && (
                            <a href={selectedMember.socialLinks.linkedin} className="social-link" aria-label="LinkedIn">
                              <FaLinkedinIn />
                            </a>
                          )}
                          {selectedMember.socialLinks.twitter && (
                            <a href={selectedMember.socialLinks.twitter} className="social-link" aria-label="Twitter">
                              <FaTwitter />
                            </a>
                          )}
                          {selectedMember.socialLinks.github && (
                            <a href={selectedMember.socialLinks.github} className="social-link" aria-label="GitHub">
                              <FaGithub />
                            </a>
                          )}
                          {selectedMember.socialLinks.email && (
                            <a href={`mailto:${selectedMember.socialLinks.email}`} className="social-link" aria-label="Email">
                              <FaEnvelope />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'expertise' && (
                    <div className="tab-expertise">
                      <div className="expertise-areas">
                        <h4>Areas of Expertise</h4>
                        <div className="expertise-tags">
                          {selectedMember.expertise.map((item, i) => (
                            <span className="expertise-tag" key={i}>{item}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="skills-section">
                        <h4>Core Competencies</h4>
                        <div className="skills-list">
                          {selectedMember.skills.map((skill, i) => (
                            <div className="skill-item-full" key={i}>
                              <div className="skill-info">
                                <div className="skill-icon">
                                  {skill.icon}
                                </div>
                                <span className="skill-name">{skill.name}</span>
                              </div>
                              {skill.level && (
                                <div className="skill-level">
                                  <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                  </div>
                                  <span className="skill-percentage">{skill.level}%</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'achievements' && (
                    <div className="tab-achievements">
                      <div className="achievements-list">
                        <h4>Key Achievements</h4>
                        <ul>
                          {selectedMember.achievements && selectedMember.achievements.map((achievement, i) => (
                            <li key={i}>
                              <div className="achievement-icon">
                                <FaAward />
                              </div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FaCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" width="1em" height="1em">
    <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
  </svg>
);

const FaGears = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" width="1em" height="1em">
    <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/>
  </svg>
);

const FaBrain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="1em" height="1em">
    <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56zM184 80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H184zm96 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H296c-8.8 0-16-7.2-16-16V96zM184 208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H184zm96 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H296c-8.8 0-16-7.2-16-16V224zM184 336c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H184zm96 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H296c-8.8 0-16-7.2-16-16V352z"/>
  </svg>
);

export default Team; 