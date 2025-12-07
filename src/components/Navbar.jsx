import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiMail, FiAward } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: FiHome },
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Goals', href: '#skills', icon: FiAward },
    { name: 'Work', href: '#work', icon: FiBriefcase },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          background: scrolled 
            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 15, 31, 0.9) 100%)' 
            : 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(10px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(10px)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 102, 255, 0.1)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 102, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.03)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '85px' }}>
            
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: isMobile ? '10px' : '14px', 
                cursor: 'pointer', 
                textDecoration: 'none',
                zIndex: 60,
              }}
            >
              <div style={{ position: 'relative' }}>
                {/* Neon Glow Effect */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    background: 'linear-gradient(135deg, #0066FF, #C400FF)',
                    filter: 'blur(20px)',
                    borderRadius: '16px',
                    opacity: 0.5,
                  }}
                />
                {/* Logo Image */}
                <motion.img 
                  src="/kunalverse1.png" 
                  alt="KunalVerse Logo"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'relative',
                    width: isMobile ? '40px' : '52px',
                    height: isMobile ? '40px' : '52px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 40px rgba(196, 0, 255, 0.4))',
                  }}
                />
              </div>
              <div>
                <h1 style={{
                  fontSize: isMobile ? '17px' : '24px',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: isMobile ? '0.3px' : '0.5px',
                  textShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
                }}>
                  KUNALVERSE
                </h1>
                <p style={{ 
                  fontSize: isMobile ? '8px' : '10px', 
                  color: '#6B7280', 
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: isMobile ? '0.8px' : '1px',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}>
                  Content Creator • PW IOI
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                    style={{
                      position: 'relative',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      padding: '8px 0',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.textShadow = '0 0 20px rgba(0, 102, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <link.icon style={{ width: '18px', height: '18px' }} />
                    {link.name}
                    {/* Underline Effect */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #0066FF, #C400FF)',
                        borderRadius: '2px',
                        transformOrigin: 'left',
                      }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}

                {/* Vote Button - Cinematic Style */}
                <motion.a
                  href="#vote"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(196, 0, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: 'relative',
                    padding: '13px 32px',
                    background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                    borderRadius: '50px',
                    fontWeight: '700',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(0, 102, 255, 0.4), 0 0 60px rgba(196, 0, 255, 0.2)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '15px',
                    letterSpacing: '0.5px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 10 }}>Vote Now</span>
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
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
                </motion.a>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(0, 102, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 102, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
                }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Menu - Cinematic */}
        {isMobile && (
          <motion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 15, 31, 0.95) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              borderTop: '1px solid rgba(0, 102, 255, 0.2)',
              boxShadow: 'inset 0 1px 0 rgba(0, 102, 255, 0.1)',
            }}
          >
            <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '500',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.background = 'rgba(0, 102, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.3)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <link.icon style={{ width: '22px', height: '22px' }} />
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#vote"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '16px 28px',
                  background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                  borderRadius: '50px',
                  fontWeight: '700',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(0, 102, 255, 0.4), 0 0 60px rgba(196, 0, 255, 0.2)',
                  marginTop: '20px',
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                Vote Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;