'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const ContactPage = () => {
  return (
    <main>
      <Header />
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Contact Us</span>
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <p>Contact page content will go here.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage; 