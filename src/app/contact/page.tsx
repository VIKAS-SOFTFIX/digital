'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaChevronRight, FaChevronDown, FaGlobe, FaHeadset, FaVideo, FaSlack } from 'react-icons/fa';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader';
import './contact.scss';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const ContactPage: React.FC = () => {
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
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const faqItems: FaqItem[] = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including software development, web application development, mobile app development, UX/UI design, DevOps, and QA testing tailored to meet your business needs. Our solutions are designed to help businesses of all sizes transform their digital presence and streamline their operations through cutting-edge technology."
    },
    {
      question: "How do I request a quote for my project?",
      answer: "You can request a quote by filling out our contact form with details about your project requirements, timeline, and budget. Our team will review your needs and get back to you within 24-48 hours with a detailed proposal. For complex projects, we may schedule a consultation call to better understand your requirements before providing a comprehensive quote."
    },
    {
      question: "What is your typical development process?",
      answer: "Our development process typically includes discovery, planning, design, development, testing, deployment, and maintenance phases. We follow agile methodologies to ensure flexibility and continuous improvement throughout the project lifecycle. We maintain transparent communication with regular updates and demos to ensure the final product meets your expectations."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support and maintenance packages to ensure your software continues to run smoothly after launch. Our team is available for bug fixes, updates, feature enhancements, and performance optimization based on your specific needs. We provide different service level agreements (SLAs) to match your requirements and budget."
    },
    {
      question: "How do you handle project timelines and deadlines?",
      answer: "We work closely with our clients to establish realistic timelines and milestones. Our project managers use advanced project management tools to track progress and ensure timely delivery. We understand the importance of deadlines and communicate proactively if any adjustments are needed. Regular sprint reviews and progress reports keep you informed throughout the development process."
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer: "Our team is proficient in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, .NET, Java, and mobile frameworks like React Native and Flutter. We stay updated with the latest industry trends to provide cutting-edge solutions. We choose the most appropriate technology stack based on your project requirements and long-term business goals."
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormError(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormError(true);
      console.error('Error submitting form:', error);
    }
  };
  
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="contact-page">
      <Header isTransparent={false} />
      
      <PageHeader 
        title={<>Contact <span className="highlight">GlobalTech</span></>}
        subtitle="We'd love to hear from you. Get in touch with our team and let us know how we can help with your next project."
        imageSrc="/images/contact/digital-contact.jpg" 
        imageAlt="GlobalTech Digital Team"
        pageName="Contact"
      />
      
      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="container">
          <motion.div 
            className="contact-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
          >
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon-inner">
                  <FaGlobe />
                </div>
              </div>
              <h3>Global Service</h3>
              <p>We serve clients worldwide</p>
              <p>100% Remote capability</p>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon-inner">
                  <FaPhoneAlt />
                </div>
              </div>
              <h3>Phone Number</h3>
              <p>+1 (555) 987-6543</p>
              <p>+1 (555) 987-6544</p>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon-inner">
                  <FaEnvelope />
                </div>
              </div>
              <h3>Email Address</h3>
              <p>info@globaltech.com</p>
              <p>support@globaltech.com</p>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon-inner">
                  <FaClock />
                </div>
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 2pm</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-form-section section-padding">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeInUp} className="subtitle">Get In Touch</motion.span>
            <motion.h2 variants={fadeInUp}>Send Us A <span>Message</span></motion.h2>
            <motion.p variants={fadeInUp}>
              Have questions about our services or want to discuss your project? 
              Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
          
          <div className="contact-wrapper">
            <motion.div 
              className="form-side"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {formSubmitted ? (
                <motion.div 
                  className="form-success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Support">Technical Support</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="Career">Career Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={6}
                      required
                    ></textarea>
                  </div>
                  
                  {formError && (
                    <div className="form-error">
                      <p>There was an error sending your message. Please try again.</p>
                    </div>
                  )}
                  
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div 
              className="digital-connect-side"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="digital-connect-wrapper">
                <img 
                  src="/images/contact/digital-connect.jpg" 
                  alt="Digital Communication" 
                  className="digital-image"
                />
                <div className="connect-overlay">
                  <h3>Connect Digitally</h3>
                  <p>We're a digital-first company offering multiple ways to connect with our team.</p>
                  
                  <div className="connect-options">
                    <div className="connect-option">
                      <div className="option-icon">
                        <FaVideo />
                      </div>
                      <div className="option-content">
                        <h4>Video Conference</h4>
                        <p>Schedule a face-to-face digital meeting with our experts</p>
                      </div>
                    </div>
                    
                    <div className="connect-option">
                      <div className="option-icon">
                        <FaHeadset />
                      </div>
                      <div className="option-content">
                        <h4>Live Chat Support</h4>
                        <p>Connect with our support team instantly for quick queries</p>
                      </div>
                    </div>
                    
                    <div className="connect-option">
                      <div className="option-icon">
                        <FaSlack />
                      </div>
                      <div className="option-content">
                        <h4>Collaborative Workspace</h4>
                        <p>Join our client workspace for project collaboration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeInUp} className="subtitle">FAQs</motion.span>
            <motion.h2 variants={fadeInUp}>Frequently Asked <span>Questions</span></motion.h2>
            <motion.p variants={fadeInUp}>
              Find answers to the most common questions about our services, process, and support.
            </motion.p>
          </motion.div>
          
          <div className="faq-wrapper">
            {faqItems.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="faq-header" onClick={() => toggleFaq(index)}>
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className={`faq-icon ${activeFaq === index ? 'active' : ''}`}>
                    <FaChevronDown />
                  </div>
                </div>
                <div className={`faq-content ${activeFaq === index ? 'active' : ''}`}>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </main>
  );
};

export default ContactPage; 