// import { motion } from 'framer-motion';
// import { FiInstagram, FiLinkedin, FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
// import { SiYoutube } from 'react-icons/si';

// const Footer = () => {
//   const socialLinks = [
//     { name: 'Instagram', icon: FiInstagram, href: '#', color: '#E4405F' },
//     { name: 'LinkedIn', icon: FiLinkedin, href: '#', color: '#0077B5' },
//     { name: 'YouTube', icon: SiYoutube, href: '#', color: '#FF0000' },
//     { name: 'Twitter', icon: FiTwitter, href: '#', color: '#1DA1F2' },
//     { name: 'GitHub', icon: FiGithub, href: '#', color: '#333' },
//   ];

//   const quickLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Work', href: '#work' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer className="relative bg-gradient-to-b from-dark via-navy to-black text-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Neon Line Divider */}
//       <div className="relative h-1 bg-gradient-to-r from-transparent via-primary to-secondary to-transparent">
//         <motion.div
//           animate={{
//             x: ['-100%', '100%'],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="space-y-4"
//           >
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg opacity-70"></div>
//                 <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-xl">
//                   K
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                   KUNALVERSE
//                 </h3>
//                 <p className="text-xs text-gray-400">Content Creator • PW IOI</p>
//               </div>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Creative storyteller passionate about crafting engaging content. 
//               Vote for innovation, creativity, and dedication.
//             </p>
//             <motion.a
//               href="#vote"
//               onClick={(e) => handleNavClick(e, '#contact')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block px-6 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white shadow-lg"
//             >
//               Vote for Kunal
//             </motion.a>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="space-y-4"
//           >
//             <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <a
//                     href={link.href}
//                     onClick={(e) => handleNavClick(e, link.href)}
//                     className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
//                   >
//                     <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-4 transition-all duration-300"></span>
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
//             <div className="flex flex-wrap gap-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
//                 >
//                   <motion.div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                     style={{ background: `linear-gradient(135deg, ${social.color}, transparent)` }}
//                   />
//                   <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
//                 </motion.a>
//               ))}
//             </div>
//             <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
//               <div className="flex items-center gap-2 text-gray-400 text-sm">
//                 <FiMail className="w-4 h-4" />
//                 <a href="mailto:kunal@kunalverse.com" className="hover:text-white transition-colors">
//                   kunal@kunalverse.com
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="pt-8 border-t border-white/10"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
//             <p className="flex items-center gap-2">
//               Made with <FiHeart className="text-red-500 animate-pulse" /> by Kunal
//             </p>
//             <p>
//               © {new Date().getFullYear()} KunalVerse. All rights reserved.
//             </p>
//             <p className="text-xs">
//               Powered by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">React + Framer Motion</span>
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Floating Particles */}
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-white/20 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}
//     </footer>
//   );
// };

// export default Footer;





import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiGithub, FiTwitter, FiMail, FiHeart, FiExternalLink } from 'react-icons/fi';
import { SiYoutube } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: FiInstagram, href: '#', color: '#E4405F' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#', color: '#0077B5' },
    { name: 'YouTube', icon: SiYoutube, href: '#', color: '#FF0000' },
    { name: 'Twitter', icon: FiTwitter, href: '#', color: '#1DA1F2' },
    { name: 'GitHub', icon: FiGithub, href: '#', color: '#6e5494' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
      color: 'white',
      overflow: 'hidden',
      borderTop: '1px solid rgba(0, 102, 255, 0.1)',
    }}>
      {/* Cinematic Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.4 }}>
        {/* Neon Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(196, 0, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Neon Line Divider - Cinematic */}
      <div style={{ 
        position: 'relative', 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent 0%, #0066FF 20%, #8B5CF6 50%, #C400FF 80%, transparent 100%)',
        boxShadow: '0 0 20px rgba(0, 102, 255, 0.5), 0 0 40px rgba(196, 0, 255, 0.3)',
      }}>
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '-2px',
            left: 0,
            width: '30%',
            height: '6px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
            filter: 'blur(4px)',
          }}
        />
      </div>

      <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: '80px 32px 32px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '60px', 
          marginBottom: '60px' 
        }}>
          
          {/* Brand Section - Cinematic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ position: 'relative' }}>
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    inset: '-6px',
                    background: 'linear-gradient(135deg, #0066FF, #C400FF)',
                    filter: 'blur(20px)',
                    borderRadius: '14px',
                  }}
                />
                <img 
                  src="/kunalverse1.png" 
                  alt="KunalVerse"
                  style={{
                    position: 'relative',
                    width: '52px',
                    height: '52px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.6))',
                  }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: '26px',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.5px',
                }}>
                  KUNALVERSE
                </h3>
                <p style={{ 
                  fontSize: '11px', 
                  color: '#6B7280', 
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}>
                  Content Creator • PW IOI
                </p>
              </div>
            </div>
            
            <p style={{ 
              color: '#9CA3AF', 
              fontSize: '14px', 
              lineHeight: '1.8', 
              fontFamily: 'Inter, sans-serif',
              maxWidth: '350px',
            }}>
              Crafting stories through visual excellence. Passionate about creating content that inspires and engages. 
              <span style={{ 
                color: '#0066FF', 
                fontWeight: '600',
                display: 'block',
                marginTop: '8px',
              }}>
                Vote for creativity, dedication & innovation.
              </span>
            </p>
            
            <motion.a
              href="#vote"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 102, 255, 0.6), 0 0 60px rgba(196, 0, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                borderRadius: '50px',
                fontWeight: '700',
                color: 'white',
                boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxWidth: 'fit-content',
              }}
            >
              Vote for Kunal
              <FiExternalLink size={18} />
            </motion.a>
          </motion.div>

          {/* Quick Links - Cinematic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <h4 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'white', 
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.5px',
            }}>
              Quick Links
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '14px' 
            }}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      paddingLeft: '20px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.textShadow = '0 0 15px rgba(0, 102, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9CA3AF';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <motion.span 
                      style={{ 
                        position: 'absolute',
                        left: 0,
                        width: '8px', 
                        height: '2px', 
                        background: 'linear-gradient(90deg, #0066FF, #C400FF)',
                        borderRadius: '2px',
                      }}
                      initial={{ width: '8px' }}
                      whileHover={{ width: '14px' }}
                      transition={{ duration: 0.3 }}
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links - Cinematic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h4 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'white', 
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.5px',
            }}>
              Connect With Me
            </h4>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: `0 0 30px ${social.color}80`
                  }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${social.color}60`;
                    e.currentTarget.style.background = `${social.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                  }}
                >
                  <social.icon style={{ 
                    width: '24px', 
                    height: '24px', 
                    color: '#9CA3AF', 
                    zIndex: 10,
                    transition: 'color 0.3s ease',
                  }} />
                </motion.a>
              ))}
            </div>
            
            {/* Email Contact - Cinematic Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                marginTop: '12px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 102, 255, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 102, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 102, 255, 0.05)',
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                color: '#9CA3AF', 
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
              }}>
                <FiMail style={{ width: '20px', height: '20px', color: '#0066FF' }} />
                <a
                  href="mailto:kunal@kunalverse.com"
                  style={{ 
                    color: '#9CA3AF', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.textShadow = '0 0 15px rgba(0, 102, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#9CA3AF';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  kunal@kunalverse.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar - Cinematic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ 
            paddingTop: '40px', 
            borderTop: '1px solid rgba(0, 102, 255, 0.1)',
            marginTop: '20px',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '14px',
            color: '#6B7280',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
          }} className="md:flex-row md:justify-between">
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              Crafted with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart style={{ color: '#EF4444' }} />
              </motion.span>
              by Kunal
            </p>
            <p style={{ margin: 0, fontWeight: '500' }}>
              © {new Date().getFullYear()} KunalVerse. All rights reserved.
            </p>
            <p style={{ fontSize: '12px', margin: 0 }}>
              Powered by{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0066FF, #C400FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
              }}>
                React + Framer Motion
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles - Cinematic */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
            background: i % 2 === 0 ? '#0066FF' : '#C400FF',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            boxShadow: `0 0 20px ${i % 2 === 0 ? '#0066FF' : '#C400FF'}`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;