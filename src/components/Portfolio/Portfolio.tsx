'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaLink } from 'react-icons/fa';
import './Portfolio.scss';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioData: Project[] = [
    {
      id: 1,
      title: 'Creative Website Design',
      category: 'web-design',
      image: '/placeholder.jpg',
      link: '/portfolio/creative-website-design',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      category: 'app-development',
      image: '/placeholder.jpg',
      link: '/portfolio/mobile-app-development',
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'branding',
      image: '/placeholder.jpg',
      link: '/portfolio/brand-identity-design',
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'web-design',
      image: '/placeholder.jpg',
      link: '/portfolio/e-commerce-platform',
    },
    {
      id: 5,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      image: '/placeholder.jpg',
      link: '/portfolio/digital-marketing-campaign',
    },
    {
      id: 6,
      title: 'UI/UX Design System',
      category: 'ui-ux',
      image: '/placeholder.jpg',
      link: '/portfolio/ui-ux-design-system',
    },
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Design', value: 'web-design' },
    { name: 'App Development', value: 'app-development' },
    { name: 'UI/UX', value: 'ui-ux' },
    { name: 'Branding', value: 'branding' },
    { name: 'Marketing', value: 'marketing' },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeFilter);
  
  return (
    <section className="portfolio-section section-padding">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Our Portfolio</span>
          <h2>Our Latest Creative Works</h2>
        </div>
        
        <div className="portfolio-filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-img">
                <div className="img-placeholder">
                  <div className="placeholder-text">{project.title}</div>
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>{project.title}</h4>
                    <span className="category">{filters.find(f => f.value === project.category)?.name}</span>
                    <div className="portfolio-links">
                      <Link href={project.link} className="portfolio-link">
                        <FaEye />
                      </Link>
                      <Link href={project.link} className="portfolio-link">
                        <FaLink />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-btn">
          <Link href="/portfolio" className="btn">
            View All Projects
          </Link>
        </div>
      </div>
      
      <div className="portfolio-shape-1 animate-float"></div>
      <div className="portfolio-shape-2 animate-pulse"></div>
    </section>
  );
};

export default Portfolio; 