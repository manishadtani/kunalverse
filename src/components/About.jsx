import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiEdit, FiTrendingUp, FiAward, FiHeart, FiZap } from 'react-icons/fi';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    '/kunal-photo.jpeg',
    '/kunal-photo.jpeg',
    '/kunal-photo.jpeg',
    '/kunal-photo.jpeg',
  ];

  const cards = [
    {
      id: 1,
      icon: FiCamera,
      title: 'Video Production',
      frontText: 'Professional video editing & cinematography',
      backImage: '/kunal-photo.jpeg',
      color: '#0066FF',
    },
    {
      id: 2,
      icon: FiEdit,
      title: 'Content Strategy',
      frontText: 'Creative storytelling that engages audiences',
      backImage: '/kunal-photo.jpeg',
      color: '#8B5CF6',
    },
    {
      id: 3,
      icon: FiTrendingUp,
      title: 'Growth Focused',
      frontText: 'Data-driven content optimization',
      backImage: '/kunal-photo.jpeg',
      color: '#C400FF',
    },
    {
      id: 4,
      icon: FiAward,
      title: 'Quality First',
      frontText: 'High production value in every project',
      backImage: '/kunal-photo.jpeg',
      color: '#0066FF',
    },
  ];

  const stats = [
    { label: 'Videos Created', value: '50+', icon: FiCamera },
    { label: 'Happy Clients', value: '30+', icon: FiHeart },
    { label: 'Engagement', value: '95%', icon: FiZap },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: 'auto',
        padding: isMobile ? '0px 20px' : '120px 60px',
        background: 'linear-gradient(180deg, #000000 0%, #0A0F1F 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Gradient Orb - Left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '-15%',
            width: isMobile ? '350px' : '600px',
            height: isMobile ? '350px' : '900px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Gradient Orb - Right */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '-15%',
            width: isMobile ? '400px' : '700px',
            height: isMobile ? '400px' : '700px',
            background: 'radial-gradient(circle, rgba(196, 0, 255, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1400px',
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
            marginBottom: isMobile ? '50px' : '80px',
          }}
        >
          <motion.h2
            style={{
              fontSize: isMobile ? '36px' : '56px',
              fontWeight: '900',
              fontFamily: 'Baloo 2, Poppins, sans-serif',
              background: 'linear-gradient(135deg, #0066FF, #C400FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            style={{
              fontSize: isMobile ? '16px' : '20px',
              color: '#9CA3AF',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Creative storyteller bringing ideas to life through video
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '50px' : '80px',
            alignItems: 'start',
          }}
        >
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {/* Main Image with Slider */}
            <div
              style={{
                position: 'relative',
                height: isMobile ? '350px' : '535px',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
            >
              {/* Neon Glow */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  background: 'linear-gradient(135deg, #0066FF, #C400FF)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />

              {/* Image Slider */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '2px solid rgba(0, 102, 255, 0.5)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt={`Gallery ${currentImageIndex + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.1) saturate(1.2)',
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(196, 0, 255, 0.1) 100%)',
                      mixBlendMode: 'overlay',
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 3,
                }}
              >
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: currentImageIndex === index ? '32px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: currentImageIndex === index 
                        ? 'linear-gradient(90deg, #0066FF, #C400FF)'
                        : 'rgba(255, 255, 255, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: currentImageIndex === index ? '0 0 10px rgba(0, 102, 255, 0.8)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            {/* <div
              style={{
                padding: isMobile ? '24px' : '32px',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 102, 255, 0.08) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.3)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? '15px' : '17px',
                  color: '#E5E7EB',
                  lineHeight: '1.8',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '24px',
                }}
              >
                Main ek passionate content creator hoon jo storytelling ko life mein laata hoon through powerful visuals aur engaging narratives. Har project mein creativity, technical expertise, aur dedication combine karta hoon.
              </p>

              {/* Stats */}
              {/* <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                }}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: false }}
                      style={{
                        textAlign: 'center',
                        padding: '16px 8px',
                        background: 'rgba(0, 102, 255, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 102, 255, 0.2)',
                      }}
                    >
                      <Icon size={20} style={{ color: '#0066FF', marginBottom: '8px' }} />
                      <div style={{ fontSize: '20px', fontWeight: '800', color: '#0066FF', fontFamily: 'Poppins, sans-serif' }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div> */}
            {/* </div> */} 
          </motion.div>

          {/* Right Side - Flip Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '24px',
            }}
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              const isFlipped = flippedCard === card.id;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  onHoverStart={() => setFlippedCard(card.id)}
                  onHoverEnd={() => setFlippedCard(null)}
                  onClick={() => setFlippedCard(isFlipped ? null : card.id)}
                  style={{
                    perspective: '1000px',
                    height: isMobile ? '220px' : '250px',
                    cursor: 'pointer',
                  }}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Front Side */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        padding: '28px',
                        background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, ${card.color}15 100%)`,
                        border: `2px solid ${card.color}40`,
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: `0 8px 32px ${card.color}20`,
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          background: `${card.color}20`,
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `1px solid ${card.color}30`,
                          boxShadow: `0 0 20px ${card.color}40`,
                        }}
                      >
                        <Icon size={28} style={{ color: card.color }} />
                      </div>

                      {/* Content */}
                      <div>
                        <h3
                          style={{
                            fontSize: isMobile ? '18px' : '20px',
                            fontWeight: '700',
                            color: 'white',
                            fontFamily: 'Poppins, sans-serif',
                            marginBottom: '8px',
                          }}
                        >
                          {card.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#D1D5DB',
                            lineHeight: '1.5',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {card.frontText}
                        </p>
                      </div>

                      {/* Flip Indicator */}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                          position: 'absolute',
                          bottom: '16px',
                          right: '16px',
                          fontSize: '12px',
                          color: card.color,
                          fontWeight: '600',
                        }}
                      >
                        Hover to flip →
                      </motion.div>
                    </div>

                    {/* Back Side */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: `2px solid ${card.color}60`,
                        boxShadow: `0 8px 32px ${card.color}30`,
                      }}
                    >
                      <img
                        src={card.backImage}
                        alt={card.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.8) contrast(1.1)',
                        }}
                      />
                      {/* Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: `linear-gradient(135deg, ${card.color}40 0%, transparent 100%)`,
                          display: 'flex',
                          alignItems: 'flex-end',
                          padding: '20px',
                        }}
                      >
                        <div
                          style={{
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: '700',
                            fontFamily: 'Poppins, sans-serif',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                          }}
                        >
                          {card.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;