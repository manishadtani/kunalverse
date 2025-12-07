import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiEdit, FiTrendingUp, FiAward } from 'react-icons/fi';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryImages = useMemo(() => [
    '/cam4.jpeg',
    '/cam3.jpeg',
    '/cam5.jpeg',
    '/cam6.png',
  ], []);

  // Preload images
  useEffect(() => {
    galleryImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageLoaded(prev => ({ ...prev, [index]: true }));
      };
    });
  }, [galleryImages]);

  // Auto-rotate with optimized timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handleImageChange = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const cards = useMemo(() => [
    {
      id: 1,
      icon: FiCamera,
      title: 'Video Production',
      frontText: 'Professional video editing & cinematography',
      backImage: '/videdit.jpg',
      color: '#0066FF',
    },
    {
      id: 2,
      icon: FiEdit,
      title: 'Content Strategy',
      frontText: 'Creative storytelling that engages audiences',
      backImage: '/cont2.jpg',
      color: '#8B5CF6',
    },
    {
      id: 3,
      icon: FiTrendingUp,
      title: 'Growth Focused',
      frontText: 'Data-driven content optimization',
      backImage: '/content1.jpg',
      color: '#C400FF',
    },
    {
      id: 4,
      icon: FiAward,
      title: 'Quality First',
      frontText: 'High production value in every project',
      backImage: '/cam10.png',
      color: '#0066FF',
    },
  ], []);

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: 'auto',
        padding: isMobile ? '60px 20px' : '120px 60px',
        background: 'linear-gradient(180deg, #000000 0%, #0A0F1F 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Optimized Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
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
            willChange: 'transform',
          }}
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 22,
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
            willChange: 'transform',
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
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '50px' : '80px',
          }}
        >
          <h2
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
          </h2>
          <p
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
          </p>
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
          {/* Left Side - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              style={{
                position: 'relative',
                height: isMobile ? '350px' : '535px',
                borderRadius: '24px',
              }}
            >
              {/* Neon Glow - Optimized */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
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

              {/* Image Container with Black Background */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(0, 102, 255, 0.5)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
                  zIndex: 1,
                  backgroundColor: '#000',
                }}
              >
                {/* Smooth Crossfade Image Slider */}
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={galleryImages[currentImageIndex]}
                      alt={`Gallery ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(1.1) saturate(1.2)',
                      }}
                    />
                  </AnimatePresence>
                </div>

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(196, 0, 255, 0.08) 100%)',
                    mixBlendMode: 'overlay',
                    pointerEvents: 'none',
                  }}
                />

                {/* Navigation Arrows */}
                {!isMobile && (
                  <>
                    {/* Left Arrow */}
                    <motion.button
                      onClick={handlePrevImage}
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(0, 102, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 4,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 102, 255, 0.3)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </motion.button>

                    {/* Right Arrow */}
                    <motion.button
                      onClick={handleNextImage}
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(0, 102, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 4,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 102, 255, 0.3)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '8px 16px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 102, 255, 0.4)',
                    zIndex: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <span style={{ color: '#0066FF', fontWeight: '700', fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
                    {currentImageIndex + 1}
                  </span>
                  <span style={{ color: '#6B7280', fontSize: '12px' }}>/</span>
                  <span style={{ color: '#9CA3AF', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
                    {galleryImages.length}
                  </span>
                </motion.div>
              </div>

              {/* Slider Dots - Optimized */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '10px',
                  zIndex: 3,
                  padding: '8px 16px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                }}
              >
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleImageChange(index)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: currentImageIndex === index ? '36px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
                      background: currentImageIndex === index 
                        ? 'linear-gradient(90deg, #0066FF, #C400FF)'
                        : 'rgba(255, 255, 255, 0.4)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: currentImageIndex === index ? '0 0 15px rgba(0, 102, 255, 0.8)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Flip Cards - Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  onHoverStart={() => !isMobile && setFlippedCard(card.id)}
                  onHoverEnd={() => !isMobile && setFlippedCard(null)}
                  onClick={() => isMobile && setFlippedCard(isFlipped ? null : card.id)}
                  style={{
                    perspective: '1000px',
                    height: isMobile ? '220px' : '250px',
                    cursor: 'pointer',
                  }}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.4, 0, 0.2, 1],
                    }}
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

                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          position: 'absolute',
                          bottom: '16px',
                          right: '16px',
                          fontSize: '12px',
                          color: card.color,
                          fontWeight: '600',
                        }}
                      >
                        {isMobile ? 'Tap to flip →' : 'Hover to flip →'}
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