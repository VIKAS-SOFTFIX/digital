'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import './InsightFilter.scss';

interface InsightFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const InsightFilter: React.FC<InsightFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery
}) => {
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="insight-filter">
      <div className="filter-wrapper">
        <motion.div 
          className="filter-search"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="filter-categories"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul>
            <li 
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => handleCategoryClick('all')}
            >
              All
              {activeCategory === 'all' && (
                <motion.div 
                  className="active-indicator" 
                  layoutId="categoryIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
            {categories.map((category, index) => (
              <li 
                key={index}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="categoryIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightFilter; 