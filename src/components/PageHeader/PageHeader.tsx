'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './PageHeader.scss';

interface BreadcrumbItem {
  label: string;
  url: string;
  active?: boolean;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="page-header">
      <div className="container">
        <div className="page-header-content">
          <motion.div 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </motion.div>
          
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div 
              className="breadcrumbs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul>
                {breadcrumbs.map((item, index) => (
                  <li key={index} className={item.active ? 'active' : ''}>
                    {item.active ? (
                      <span>{item.label}</span>
                    ) : (
                      <Link href={item.url}>{item.label}</Link>
                    )}
                    {index < breadcrumbs.length - 1 && <span className="separator">/</span>}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
      <div className="overlay"></div>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  );
};

export default PageHeader; 