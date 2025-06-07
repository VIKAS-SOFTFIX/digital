import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaBrain } from 'react-icons/fa';
import './Logo.scss';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default',
  size = 'medium'
}) => {
  const logoColor = variant === 'light' ? 'white' : '#0a5b96';
  const textColor = variant === 'light' ? 'white' : '#2c3345';
  
  const logoSize = {
    small: {
      wrapper: 30,
      icon: 14,
      fontSize: 16
    },
    medium: {
      wrapper: 38,
      icon: 18,
      fontSize: 20
    },
    large: {
      wrapper: 46,
      icon: 22,
      fontSize: 24
    }
  };
  
  return (
    <div className={`logo logo-${size} logo-${variant}`}>
      <Link href="/">
        <div className="logo-wrapper">
          <motion.div 
            className="logo-icon-wrapper"
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            style={{ 
              width: logoSize[size].wrapper, 
              height: logoSize[size].wrapper,
              background: logoColor
            }}
          >
            <div className="logo-icons">
              <FaBrain className="logo-icon" style={{ fontSize: logoSize[size].icon }} />
              <FaCode className="logo-icon logo-icon-overlay" style={{ fontSize: logoSize[size].icon }} />
            </div>
          </motion.div>
          <span className="logo-text" style={{ fontSize: logoSize[size].fontSize, color: textColor }}>
            NEXUZ<span className="softlabs">DIGITAL</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo; 