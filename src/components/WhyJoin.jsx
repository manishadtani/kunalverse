// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiGlobe, FiTrendingUp, FiUsers, FiZap, FiHeart, FiStar } from 'react-icons/fi';

// const WhyJoin = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const reasons = [
//     {
//       id: 1,
//       icon: FiGlobe,
//       title: 'A Global Hub for Content',
//       description: 'Join a thriving community of creators from around the world. Connect, collaborate, and grow together in a space where creativity knows no boundaries. Share your stories and learn from the best.',
//       color: '#0066FF',
//       gradient: 'linear-gradient(135deg, #0066FF, #00B4FF)',
//       features: ['Global Network', 'Cross-border Collaboration', 'Diverse Perspectives'],
//     },
//     {
//       id: 2,
//       icon: FiTrendingUp,
//       title: 'Driving the Future of Content',
//       description: 'Be part of the revolution shaping how content is created and consumed. Stay ahead with cutting-edge techniques, trending formats, and innovative storytelling methods that define the next generation of digital media.',
//       color: '#8B5CF6',
//       gradient: 'linear-gradient(135deg, #8B5CF6, #C084FC)',
//       features: ['Innovation First', 'Trend Setting', 'Future Ready'],
//     },
//     {
//       id: 3,
//       icon: FiUsers,
//       title: 'An Ecosystem of Support',
//       description: 'Experience genuine community backing at every step of your journey. From mentorship to resources, feedback to opportunities—get everything you need to thrive. We grow together, succeed together.',
//       color: '#C400FF',
//       gradient: 'linear-gradient(135deg, #C400FF, #FF00FF)',
//       features: ['Mentorship', '24/7 Support', 'Resource Library'],
//     },
//   ];

//   return (
//     <section
//       id="whyjoin"
//       style={{
//         position: 'relative',
//         minHeight: 'auto',
//         padding: isMobile ? '80px 20px' : '120px 60px',
//         background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 50%, #0A0F1F 100%)',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Effects */}
//       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//         {/* Animated Gradient Orbs */}
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, 60, 0],
//             y: [0, -40, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             top: '10%',
//             left: '-10%',
//             width: isMobile ? '400px' : '700px',
//             height: isMobile ? '400px' : '700px',
//             background: 'radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(100px)',
//           }}
//         />

//         <motion.div
//           animate={{
//             scale: [1.3, 1, 1.3],
//             x: [0, -60, 0],
//             y: [0, 40, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             bottom: '10%',
//             right: '-10%',
//             width: isMobile ? '450px' : '800px',
//             height: isMobile ? '450px' : '800px',
//             background: 'radial-gradient(circle, rgba(196, 0, 255, 0.15) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(120px)',
//           }}
//         />

//         {/* Floating Particles */}
//         {!isMobile && [...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -100, 0],
//               x: [0, Math.random() * 100 - 50, 0],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 10 + i * 2,
//               repeat: Infinity,
//               delay: i * 0.5,
//               ease: 'easeInOut',
//             }}
//             style={{
//               position: 'absolute',
//               left: `${5 + i * 8}%`,
//               top: `${20 + (i % 3) * 20}%`,
//               width: '4px',
//               height: '4px',
//               background: i % 2 === 0 ? '#0066FF' : '#C400FF',
//               borderRadius: '50%',
//               boxShadow: `0 0 10px ${i % 2 === 0 ? '#0066FF' : '#C400FF'}`,
//             }}
//           />
//         ))}

//         {/* Grid Pattern */}
//         {!isMobile && (
//           <div
//             style={{
//               position: 'absolute',
//               inset: 0,
//               backgroundImage:
//                 'linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px)',
//               backgroundSize: '60px 60px',
//               opacity: 0.4,
//             }}
//           />
//         )}
//       </div>

//       {/* Main Container */}
//       <div
//         style={{
//           position: 'relative',
//           maxWidth: '1400px',
//           margin: '0 auto',
//           zIndex: 2,
//         }}
//       >
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.3 }}
//           style={{
//             textAlign: 'center',
//             marginBottom: isMobile ? '60px' : '100px',
//           }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.6, type: 'spring' }}
//             viewport={{ once: false }}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '10px',
//               padding: '12px 24px',
//               background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
//               border: '1px solid rgba(0, 102, 255, 0.4)',
//               borderRadius: '50px',
//               marginBottom: '24px',
//               boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
//             }}
//           >
//             <FiZap style={{ color: '#0066FF' }} size={20} />
//             <span
//               style={{
//                 color: '#0066FF',
//                 fontWeight: '600',
//                 fontSize: '14px',
//                 fontFamily: 'Inter, sans-serif',
//                 letterSpacing: '0.5px',
//                 textTransform: 'uppercase',
//               }}
//             >
//               Why Choose Me
//             </span>
//           </motion.div>

//           <motion.h2
//             style={{
//               fontSize: isMobile ? '36px' : '56px',
//               fontWeight: '900',
//               fontFamily: 'Baloo 2, Poppins, sans-serif',
//               marginBottom: '20px',
//               lineHeight: '1.2',
//             }}
//           >
//             <motion.span
//               animate={{
//                 backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//               style={{
//                 background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 25%, #C400FF 50%, #8B5CF6 75%, #0066FF 100%)',
//                 backgroundSize: '200% auto',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 display: 'inline-block',
//               }}
//             >
//               Why Join the Journey?
//             </motion.span>
//           </motion.h2>

//           <motion.p
//             style={{
//               fontSize: isMobile ? '16px' : '20px',
//               color: '#9CA3AF',
//               lineHeight: '1.6',
//               fontFamily: 'Inter, sans-serif',
//               maxWidth: '800px',
//               margin: '0 auto',
//             }}
//           >
//             Discover the three pillars that make this community extraordinary and transform content creators into industry leaders
//           </motion.p>
//         </motion.div>

//         {/* Reasons Grid */}
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: isMobile ? '40px' : '60px',
//           }}
//         >
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             const isEven = index % 2 === 0;

//             return (
//               <motion.div
//                 key={reason.id}
//                 initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: false, amount: 0.3 }}
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//                   gap: isMobile ? '30px' : '60px',
//                   alignItems: 'center',
//                   flexDirection: isEven || isMobile ? 'row' : 'row-reverse',
//                 }}
//               >
//                 {/* Icon Side */}
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   style={{
//                     order: isMobile ? 1 : (isEven ? 1 : 2),
//                     position: 'relative',
//                     height: isMobile ? '280px' : '350px',
//                     borderRadius: '24px',
//                     background: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, ${reason.color}20 100%)`,
//                     border: `2px solid ${reason.color}40`,
//                     backdropFilter: 'blur(10px)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '24px',
//                     padding: '40px',
//                     overflow: 'hidden',
//                     boxShadow: `0 20px 60px ${reason.color}30`,
//                   }}
//                 >
//                   {/* Animated Background Effect */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       opacity: [0.2, 0.4, 0.2],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                     }}
//                     style={{
//                       position: 'absolute',
//                       width: '200%',
//                       height: '200%',
//                       background: reason.gradient,
//                       borderRadius: '50%',
//                       filter: 'blur(60px)',
//                       zIndex: 0,
//                     }}
//                   />

//                   {/* Icon Container */}
//                   <motion.div
//                     animate={{
//                       rotate: [0, 360],
//                     }}
//                     transition={{
//                       duration: 20,
//                       repeat: Infinity,
//                       ease: 'linear',
//                     }}
//                     style={{
//                       position: 'relative',
//                       width: '120px',
//                       height: '120px',
//                       background: `${reason.color}20`,
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       border: `3px solid ${reason.color}60`,
//                       boxShadow: `0 0 40px ${reason.color}60, inset 0 0 20px ${reason.color}30`,
//                       zIndex: 1,
//                     }}
//                   >
//                     <motion.div
//                       animate={{
//                         rotate: [0, -360],
//                       }}
//                       transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: 'linear',
//                       }}
//                     >
//                       <Icon size={48} style={{ color: reason.color }} />
//                     </motion.div>
//                   </motion.div>

//                   {/* Features Badges */}
//                   <div
//                     style={{
//                       position: 'relative',
//                       display: 'flex',
//                       gap: '12px',
//                       flexWrap: 'wrap',
//                       justifyContent: 'center',
//                       zIndex: 1,
//                     }}
//                   >
//                     {reason.features.map((feature, idx) => (
//                       <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, scale: 0 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
//                         viewport={{ once: false }}
//                         style={{
//                           padding: '8px 16px',
//                           background: `${reason.color}15`,
//                           border: `1px solid ${reason.color}30`,
//                           borderRadius: '20px',
//                           fontSize: '12px',
//                           color: 'white',
//                           fontWeight: '600',
//                           fontFamily: 'Inter, sans-serif',
//                           boxShadow: `0 0 15px ${reason.color}20`,
//                         }}
//                       >
//                         {feature}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 {/* Content Side */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   viewport={{ once: false, amount: 0.3 }}
//                   style={{
//                     order: isMobile ? 2 : (isEven ? 2 : 1),
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '20px',
//                   }}
//                 >
//                   {/* Number Badge */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ duration: 0.5, type: 'spring' }}
//                     viewport={{ once: false }}
//                     style={{
//                       width: '50px',
//                       height: '50px',
//                       borderRadius: '50%',
//                       background: reason.gradient,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '24px',
//                       fontWeight: '900',
//                       color: 'white',
//                       fontFamily: 'Poppins, sans-serif',
//                       boxShadow: `0 0 30px ${reason.color}60`,
//                     }}
//                   >
//                     {index + 1}
//                   </motion.div>

//                   {/* Title with Character Animation */}
//                   <h3
//                     style={{
//                       fontSize: isMobile ? '28px' : '36px',
//                       fontWeight: '800',
//                       color: 'white',
//                       fontFamily: 'Poppins, sans-serif',
//                       lineHeight: '1.2',
//                       marginBottom: '8px',
//                     }}
//                   >
//                     {reason.title.split('').map((char, idx) => (
//                       <motion.span
//                         key={idx}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: 0.5 + idx * 0.03 }}
//                         viewport={{ once: false }}
//                         style={{ display: 'inline-block' }}
//                       >
//                         {char === ' ' ? '\u00A0' : char}
//                       </motion.span>
//                     ))}
//                   </h3>

//                   {/* Description */}
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.6 }}
//                     viewport={{ once: false }}
//                     style={{
//                       fontSize: isMobile ? '15px' : '17px',
//                       color: '#D1D5DB',
//                       lineHeight: '1.8',
//                       fontFamily: 'Inter, sans-serif',
//                     }}
//                   >
//                     {reason.description}
//                   </motion.p>

//                   {/* Animated Line */}
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: '100px' }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                     viewport={{ once: false }}
//                     style={{
//                       height: '4px',
//                       background: reason.gradient,
//                       borderRadius: '2px',
//                       boxShadow: `0 0 20px ${reason.color}80`,
//                     }}
//                   />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: false, amount: 0.3 }}
//           style={{
//             textAlign: 'center',
//             marginTop: isMobile ? '60px' : '100px',
//             padding: isMobile ? '40px 24px' : '60px 40px',
//             background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(196, 0, 255, 0.1) 100%)',
//             border: '1px solid rgba(0, 102, 255, 0.3)',
//             borderRadius: '24px',
//             backdropFilter: 'blur(10px)',
//             position: 'relative',
//             overflow: 'hidden',
//           }}
//         >
//           {/* Background Glow */}
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//             style={{
//               position: 'absolute',
//               inset: '-50%',
//               background: 'radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%)',
//               filter: 'blur(60px)',
//             }}
//           />

//           <div style={{ position: 'relative', zIndex: 1 }}>
//             <motion.h3
//               style={{
//                 fontSize: isMobile ? '24px' : '32px',
//                 fontWeight: '800',
//                 color: 'white',
//                 fontFamily: 'Poppins, sans-serif',
//                 marginBottom: '16px',
//               }}
//             >
//               Ready to Transform Your Content Journey?
//             </motion.h3>
//             <motion.p
//               style={{
//                 fontSize: isMobile ? '15px' : '18px',
//                 color: '#9CA3AF',
//                 marginBottom: '32px',
//                 fontFamily: 'Inter, sans-serif',
//               }}
//             >
//               Join thousands of creators who are already making their mark
//             </motion.p>

//             <motion.a
//               href="#contact"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(196, 0, 255, 0.6)',
//               }}
//               whileTap={{ scale: 0.95 }}
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: isMobile ? '16px 40px' : '20px 56px',
//                 background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #C400FF)',
//                 color: 'white',
//                 borderRadius: '50px',
//                 fontWeight: '700',
//                 fontSize: isMobile ? '16px' : '18px',
//                 textDecoration: 'none',
//                 fontFamily: 'Poppins, sans-serif',
//                 border: '1px solid rgba(255, 255, 255, 0.1)',
//                 boxShadow: '0 12px 48px rgba(0, 102, 255, 0.4)',
//                 cursor: 'pointer',
//                 position: 'relative',
//                 overflow: 'hidden',
//               }}
//             >
//               <span style={{ position: 'relative', zIndex: 2 }}>Join Now</span>
//               <FiStar size={20} style={{ position: 'relative', zIndex: 2 }} />
              
//               {/* Shimmer Effect */}
//               <motion.div
//                 animate={{ x: ['-100%', '200%'] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '50%',
//                   height: '100%',
//                   background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
//                   transform: 'skewX(-20deg)',
//                 }}
//               />
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyJoin;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiTrendingUp, FiUsers, FiZap, FiStar } from 'react-icons/fi';

const WhyJoin = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reasons = [
    {
      id: 1,
      icon: FiGlobe,
      title: 'A Global Hub for Content',
      description: 'Join a thriving community of creators from around the world. Connect, collaborate, and grow together in a space where creativity knows no boundaries.',
      color: '#0066FF',
      gradient: 'linear-gradient(135deg, #0066FF, #00B4FF)',
      features: ['Global Network', 'Collaboration', 'Diverse Views'],
    },
    {
      id: 2,
      icon: FiTrendingUp,
      title: 'Driving the Future of Content',
      description: 'Be part of the revolution shaping how content is created and consumed. Stay ahead with cutting-edge techniques and innovative storytelling methods.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #C084FC)',
      features: ['Innovation First', 'Trend Setting', 'Future Ready'],
    },
    {
      id: 3,
      icon: FiUsers,
      title: 'An Ecosystem of Support',
      description: 'Experience genuine community backing at every step. From mentorship to resources, feedback to opportunities—get everything you need to thrive.',
      color: '#C400FF',
      gradient: 'linear-gradient(135deg, #C400FF, #FF00FF)',
      features: ['Mentorship', '24/7 Support', 'Resources'],
    },
  ];

  return (
    <section
      id="whyjoin"
      style={{
        position: 'relative',
        minHeight: 'auto',
        padding: isMobile ? '50px 20px' : '80px 40px',
        background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 50%, #0A0F1F 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '-10%',
            width: isMobile ? '400px' : '700px',
            height: isMobile ? '400px' : '700px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            width: isMobile ? '450px' : '800px',
            height: isMobile ? '450px' : '800px',
            background: 'radial-gradient(circle, rgba(196, 0, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(120px)',
          }}
        />

        {/* Floating Particles */}
        {!isMobile && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${5 + i * 9}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? '#0066FF' : '#C400FF',
              borderRadius: '50%',
              boxShadow: `0 0 8px ${i % 2 === 0 ? '#0066FF' : '#C400FF'}`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              opacity: 0.3,
            }}
          />
        )}
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
            marginBottom: isMobile ? '40px' : '60px',
          }}
        >
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
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
              border: '1px solid rgba(0, 102, 255, 0.4)',
              borderRadius: '50px',
              marginBottom: '20px',
              boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
            }}
          >
            <FiZap style={{ color: '#0066FF' }} size={18} />
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
              Why Choose Me
            </span>
          </motion.div>

          <motion.h2
            style={{
              fontSize: isMobile ? '28px' : '44px',
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
                background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 25%, #C400FF 50%, #8B5CF6 75%, #0066FF 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Why Join the Journey?
            </motion.span>
          </motion.h2>

          <motion.p
            style={{
              fontSize: isMobile ? '14px' : '17px',
              color: '#9CA3AF',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Three pillars that make this community extraordinary and transform creators into industry leaders
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '30px' : '40px',
          }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: isMobile ? '24px' : '50px',
                  alignItems: 'center',
                  flexDirection: isEven || isMobile ? 'row' : 'row-reverse',
                }}
              >
                {/* Icon Side */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    order: isMobile ? 1 : (isEven ? 1 : 2),
                    position: 'relative',
                    height: isMobile ? '200px' : '280px',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, ${reason.color}20 100%)`,
                    border: `2px solid ${reason.color}40`,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    padding: isMobile ? '24px' : '32px',
                    overflow: 'hidden',
                    boxShadow: `0 20px 60px ${reason.color}30`,
                  }}
                >
                  {/* Animated Background Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      width: '200%',
                      height: '200%',
                      background: reason.gradient,
                      borderRadius: '50%',
                      filter: 'blur(60px)',
                      zIndex: 0,
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'relative',
                      width: isMobile ? '80px' : '100px',
                      height: isMobile ? '80px' : '100px',
                      background: `${reason.color}20`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `3px solid ${reason.color}60`,
                      boxShadow: `0 0 40px ${reason.color}60, inset 0 0 20px ${reason.color}30`,
                      zIndex: 1,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Icon size={isMobile ? 32 : 40} style={{ color: reason.color }} />
                    </motion.div>
                  </motion.div>

                  {/* Features Badges */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      zIndex: 1,
                    }}
                  >
                    {reason.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                        viewport={{ once: false }}
                        style={{
                          padding: isMobile ? '6px 12px' : '7px 14px',
                          background: `${reason.color}15`,
                          border: `1px solid ${reason.color}30`,
                          borderRadius: '20px',
                          fontSize: isMobile ? '11px' : '12px',
                          color: 'white',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                          boxShadow: `0 0 15px ${reason.color}20`,
                        }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{
                    order: isMobile ? 2 : (isEven ? 2 : 1),
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    viewport={{ once: false }}
                    style={{
                      width: isMobile ? '44px' : '50px',
                      height: isMobile ? '44px' : '50px',
                      borderRadius: '50%',
                      background: reason.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: '900',
                      color: 'white',
                      fontFamily: 'Poppins, sans-serif',
                      boxShadow: `0 0 30px ${reason.color}60`,
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: isMobile ? '24px' : '30px',
                      fontWeight: '800',
                      color: 'white',
                      fontFamily: 'Poppins, sans-serif',
                      lineHeight: '1.2',
                      marginBottom: '4px',
                    }}
                  >
                    {reason.title.split('').map((char, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + idx * 0.02 }}
                        viewport={{ once: false }}
                        style={{ display: 'inline-block' }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: false }}
                    style={{
                      fontSize: isMobile ? '14px' : '16px',
                      color: '#D1D5DB',
                      lineHeight: '1.7',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {reason.description}
                  </motion.p>

                  {/* Animated Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: isMobile ? '80px' : '100px' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: false }}
                    style={{
                      height: '3px',
                      background: reason.gradient,
                      borderRadius: '2px',
                      boxShadow: `0 0 20px ${reason.color}80`,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
      
      </div>
    </section>
  );
};

export default WhyJoin;