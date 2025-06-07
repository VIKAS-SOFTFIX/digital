'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight, FaSpinner, FaEnvelope } from 'react-icons/fa';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader';
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';
import InsightFilter from '@/components/InsightFilter/InsightFilter';
import BlogCard from '@/components/BlogCard/BlogCard';
import './insights.scss';

// Sample blog post data
const blogPosts = [
  {
    id: 'ai-future-enterprise',
    image: '/images/insights/blog/ai-enterprise.jpg',
    category: 'Artificial Intelligence',
    title: 'The Future of AI in Enterprise Solutions',
    excerpt: 'Explore how artificial intelligence is transforming enterprise software solutions and driving business innovation across industries.',
    author: 'John Smith',
    date: 'June 15, 2023'
  },
  {
    id: 'cloud-migration-strategies',
    image: '/images/insights/blog/cloud-migration.jpg',
    category: 'Cloud Computing',
    title: 'Effective Cloud Migration Strategies for 2023',
    excerpt: 'Learn the latest approaches to migrating your infrastructure to the cloud while minimizing disruption and maximizing ROI.',
    author: 'Sarah Johnson',
    date: 'May 28, 2023'
  },
  {
    id: 'cybersecurity-best-practices',
    image: '/images/insights/blog/cybersecurity.jpg',
    category: 'Cybersecurity',
    title: 'Cybersecurity Best Practices for Remote Workforces',
    excerpt: 'Discover essential security measures to protect your organization in an increasingly distributed work environment.',
    author: 'David Chen',
    date: 'May 12, 2023'
  },
  {
    id: 'software-development-trends',
    image: '/images/insights/blog/software-dev.jpg',
    category: 'Development',
    title: 'Software Development Trends Shaping the Industry',
    excerpt: 'Stay ahead of the curve with these emerging software development methodologies and technologies gaining traction.',
    author: 'Lisa Wong',
    date: 'April 30, 2023'
  },
  {
    id: 'digital-transformation-guide',
    image: '/images/insights/blog/digital-transform.jpg',
    category: 'Digital Transformation',
    title: 'A Comprehensive Guide to Digital Transformation',
    excerpt: 'Navigate the complexities of digital transformation with this step-by-step approach to modernizing your business.',
    author: 'Michael Brown',
    date: 'April 18, 2023'
  },
  {
    id: 'ux-design-principles',
    image: '/images/insights/blog/ux-design.jpg',
    category: 'UX Design',
    title: 'Essential UX Design Principles for Enterprise Applications',
    excerpt: 'Learn how to create intuitive, user-friendly enterprise applications that boost productivity and user satisfaction.',
    author: 'Emma Davis',
    date: 'April 5, 2023'
  }
];

// Featured post
const featuredPost = {
  id: 'ai-future-enterprise',
  image: '/images/insights/blog/ai-enterprise.jpg',
  category: 'Artificial Intelligence',
  title: 'The Future of AI in Enterprise Solutions',
  excerpt: 'Artificial intelligence is revolutionizing how businesses operate, from streamlining operations to enabling data-driven decision making. Explore the latest AI trends and learn how forward-thinking enterprises are leveraging this technology to gain competitive advantages.',
  author: 'John Smith',
  date: 'June 15, 2023'
};

// Available categories
const categories = ['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Development', 'Digital Transformation', 'UX Design'];

const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visiblePosts, setVisiblePosts] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
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
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Load more posts
  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="insights-page">
      <Header isTransparent={false} />
      
      <PageHeader 
        title={<>GlobalTech <span className="highlight">Insights</span></>}
        subtitle="Stay up to date with the latest trends, best practices, and insights in technology, digital transformation, and enterprise solutions."
        imageSrc="/images/insights/insights-banner.jpg" 
        imageAlt="GlobalTech Insights"
        pageName="Insights"
      />
      
      {/* Featured Post Section */}
      <section className="featured-section section-padding">
        <div className="container">
          <motion.div 
            className="featured-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeInUp} className="subtitle">Featured Article</motion.span>
            <motion.h2 variants={fadeInUp}>Latest <span>Insights</span></motion.h2>
            <motion.p variants={fadeInUp} className="section-description">
              Explore our most recent and thought-provoking insights on technology trends, industry best practices, and digital transformation strategies.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="featured-spotlight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="featured-spotlight-content">
              <div className="featured-badge">
                <span>Featured</span>
              </div>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>
              <div className="featured-meta">
                <div className="author-info">
                  <img src="/images/about/team-meeting.jpg" alt={featuredPost.author} className="author-image" />
                  <div>
                    <span className="author-name">{featuredPost.author}</span>
                    <span className="post-date">{featuredPost.date}</span>
                  </div>
                </div>
                <Link href={`/insights/${featuredPost.id}`} className="read-more-btn">
                  Read Article
                  <motion.span 
                    className="arrow"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </div>
            </div>
            <div className="featured-spotlight-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="category-tag">{featuredPost.category}</div>
            </div>
          </motion.div>
          
          <div className="other-featured-posts">
            <div className="section-subheading">
              <h3>More Popular Articles</h3>
              <Link href="/insights" className="view-all">
                View All <span>→</span>
              </Link>
            </div>
            
            <motion.div 
              className="featured-posts-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {blogPosts.slice(1, 4).map((post, index) => (
                <motion.div 
                  key={post.id}
                  className="mini-featured-post"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/insights/${post.id}`} className="mini-post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="mini-category">{post.category}</div>
                  </Link>
                  <div className="mini-post-content">
                    <Link href={`/insights/${post.id}`}>
                      <h4>{post.title}</h4>
                    </Link>
                    <div className="mini-post-meta">
                      <span className="mini-post-date">{post.date}</span>
                      <span className="mini-post-author">By {post.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="insights-content">
        <div className="container">
          <InsightFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          {filteredPosts.length > 0 ? (
            <>
              <div className="insights-grid">
                {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    category={post.category}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                    index={index}
                  />
                ))}
              </div>
              
              {visiblePosts < filteredPosts.length && (
                <div className="load-more-container">
                  <button 
                    className="load-more-btn"
                    onClick={handleLoadMore}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span>Loading</span>
                        <FaSpinner className="loading-spinner" />
                      </>
                    ) : (
                      <span>Load More</span>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ 
                textAlign: 'center', 
                padding: '50px 0',
                color: '#6c757d'
              }}
            >
              <h3>No matching articles found</h3>
              <p>Try adjusting your search or category filter</p>
            </motion.div>
          )}
    </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default InsightsPage; 