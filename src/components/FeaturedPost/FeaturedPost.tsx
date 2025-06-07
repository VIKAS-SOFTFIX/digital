'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import './FeaturedPost.scss';

interface FeaturedPostProps {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  id,
  image,
  category,
  title,
  excerpt,
  author,
  date
}) => {
  return (
    <motion.div 
      className="featured-post"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="featured-post-wrapper">
        <motion.div 
          className="featured-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href={`/insights/${id}`}>
            <div className="image-wrapper">
              <img src={image} alt={title} />
              <div className="featured-tag">Featured</div>
              <div className="category-tag">{category}</div>
            </div>
          </Link>
        </motion.div>
        
        <motion.div 
          className="featured-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="featured-meta">
            <div className="meta-item">
              <FaCalendarAlt />
              <span>{date}</span>
            </div>
            <div className="meta-item">
              <FaUser />
              <span>{author}</span>
            </div>
          </div>
          
          <Link href={`/insights/${id}`}>
            <h2 className="featured-title">{title}</h2>
          </Link>
          
          <p className="featured-excerpt">{excerpt}</p>
          
          <Link href={`/insights/${id}`} className="featured-read-more">
            <span>Read Article</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedPost; 