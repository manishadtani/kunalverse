import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validate fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // WhatsApp message format
    const whatsappMessage = `
🌟 *New Contact Request* 🌟

👤 *Name:* ${formData.fullName}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

💬 *Message:*
${formData.message}

---
_I want to join the community group!_
    `.trim();

    // Replace with your WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = '916377499766'; // Example: 919876543210 for India
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: 'auto',
        padding: isMobile ? '60px 20px' : '100px 40px',
        background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: isMobile ? '500px' : '800px',
            height: isMobile ? '500px' : '800px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        <motion.div
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: isMobile ? '450px' : '700px',
            height: isMobile ? '450px' : '700px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Grid Pattern */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(0, 102, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.02) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              opacity: 0.4,
            }}
          />
        )}

        {/* Floating Particles */}
        {!isMobile && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${10 + i * 12}%`,
              top: `${30 + (i % 2) * 30}%`,
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? '#0066FF' : '#8B5CF6',
              borderRadius: '50%',
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#0066FF' : '#8B5CF6'}`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          zIndex: 2,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '50px' : '70px',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: false }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              border: '1px solid rgba(0, 102, 255, 0.4)',
              borderRadius: '50px',
              marginBottom: '20px',
              boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
            }}
          >
            <FiSend style={{ color: '#0066FF' }} size={18} />
            <span
              style={{
                color: '#0066FF',
                fontWeight: '600',
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Get In Touch
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '900',
              fontFamily: 'Baloo 2, Poppins, sans-serif',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Join Our Community
            </motion.span>
          </motion.h2>

          <motion.p
            style={{
              fontSize: isMobile ? '15px' : '18px',
              color: '#9CA3AF',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '650px',
              margin: '0 auto',
            }}
          >
            Fill in your details and connect with us on WhatsApp to join our exclusive creator community
          </motion.p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Glow Effect */}
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #C400FF)',
              borderRadius: '24px',
              filter: 'blur(20px)',
              opacity: 0.4,
              zIndex: -1,
            }}
          />

          {/* Form Container */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 31, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)',
              border: '1px solid rgba(0, 102, 255, 0.3)',
              borderRadius: '24px',
              padding: isMobile ? '40px 24px' : '50px 40px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Full Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false }}
              style={{ marginBottom: '24px' }}
            >
              <label
                style={{
                  display: 'block',
                  color: '#E5E7EB',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Full Name *
              </label>
              <div style={{ position: 'relative' }}>
                <FiUser
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6B7280',
                  }}
                  size={20}
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0066FF';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false }}
              style={{ marginBottom: '24px' }}
            >
              <label
                style={{
                  display: 'block',
                  color: '#E5E7EB',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Email Address *
              </label>
              <div style={{ position: 'relative' }}>
                <FiMail
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6B7280',
                  }}
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0066FF';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
              style={{ marginBottom: '24px' }}
            >
              <label
                style={{
                  display: 'block',
                  color: '#E5E7EB',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Phone Number *
              </label>
              <div style={{ position: 'relative' }}>
                <FiPhone
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6B7280',
                  }}
                  size={20}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0066FF';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false }}
              style={{ marginBottom: '32px' }}
            >
              <label
                style={{
                  display: 'block',
                  color: '#E5E7EB',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Message *
              </label>
              <div style={{ position: 'relative' }}>
                <FiMessageSquare
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    color: '#6B7280',
                  }}
                  size={20}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you want to join..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0066FF';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              onClick={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 50px rgba(37, 211, 102, 0.6)',
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: isMobile ? '16px' : '18px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 10px 40px rgba(37, 211, 102, 0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>
                Join WhatsApp Group
              </span>
              <FaWhatsapp size={24} style={{ position: 'relative', zIndex: 2 }} />
              
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transform: 'skewX(-20deg)',
                }}
              />
            </motion.button>

            {/* Info Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false }}
              style={{
                marginTop: '20px',
                textAlign: 'center',
                fontSize: '13px',
                color: '#9CA3AF',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6',
              }}
            >
              🔒 Your information is secure. By clicking the button, you'll be redirected to WhatsApp to complete your registration.
            </motion.p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          style={{
            marginTop: isMobile ? '40px' : '60px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#6B7280',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8',
            }}
          >
            Have questions? We're here to help! 💬
            <br />
            <span style={{ color: '#0066FF', fontWeight: '600' }}>
              Response time: Within 2 hours
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;