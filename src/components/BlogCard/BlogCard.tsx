'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaChevronRight } from 'react-icons/fa';
import './BlogCard.scss';

interface BlogCardProps {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  category,
  title,
  excerpt,
  author,
  date,
  index
}) => {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Link href={`/insights/${id}`}>
        <div className="blog-image">
          <img src={image} alt={title} />
          <span className="blog-category">{category}</span>
        </div>
      </Link>
      <div className="blog-content">
        <div className="blog-meta">
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
          <h3 className="blog-title">{title}</h3>
        </Link>
        <p className="blog-excerpt">{excerpt}</p>
        <Link href={`/insights/${id}`} className="read-more">
          <span>Read More</span>
          <FaChevronRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard; 