'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import './PageHeader.scss';

interface PageHeaderProps {
  title: ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  pageName: string;
  stats?: Array<{ number: string; label: string }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt, 
  pageName,
  stats 
}) => {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <FaChevronRight className="breadcrumb-icon" />
          <span>{pageName}</span>
        </div>
        
        <div className="header-content">
          <motion.div 
            className="header-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
            
            {stats && stats.length > 0 && (
              <motion.div 
                className="header-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, staggerChildren: 0.2 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  >
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="header-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="header-image">
              <div className="image-wrapper">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="main-image"
                />
              </div>
              <div className="image-pulse"></div>
              <motion.div 
                className="image-accent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="header-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
    </section>
  );
};

export default PageHeader; 