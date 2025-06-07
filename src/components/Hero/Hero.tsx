'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="subtitle">Creative Digital Agency</span>
            <h1>
              <span className="highlight">Transform</span> Your Business With
              <span className="gradient-text"> Creative Solutions</span>
            </h1>
            <p>
              We craft digital experiences that captivate, engage, and deliver results. 
              Our team of experts combines innovation and strategy to help your business thrive in the digital world.
            </p>
            <div className="hero-btns">
              <Link href="/portfolio" className="btn btn-lg">
                Our Work <FaArrowRight className="btn-icon" />
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Let's Talk
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-text">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-text">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-text">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="img-wrapper">
              <div className="shape shape-1 animate-float"></div>
              <div className="shape shape-2 animate-float delay-2"></div>
              <div className="shape shape-3 animate-pulse delay-1"></div>
              <div className="shape shape-4 animate-spin"></div>
              <div className="main-img animate-float delay-1">
                {/* Placeholder for hero image */}
                <div className="hero-img-placeholder">
                  <div className="placeholder-text">
                    <span className="gradient-text">Creative</span>
                    <br />Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-1 animate-float"></div>
      <div className="hero-shape-2 animate-float delay-2"></div>
      <div className="hero-shape-3 animate-pulse"></div>
    </section>
  );
};

export default Hero; 