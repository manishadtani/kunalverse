// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FiTarget, FiTrendingUp, FiUsers, FiAward, FiStar } from 'react-icons/fi';

// const Goals = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
      
//       const rect = sectionRef.current.getBoundingClientRect();
//       const sectionTop = rect.top;
//       const sectionHeight = rect.height;
//       const windowHeight = window.innerHeight;
      
//       // Calculate scroll progress (0 when section enters viewport, 1 when it exits)
//       const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const goals = [
//     {
//       id: 1,
//       icon: FiTarget,
//       title: 'Grow Audience',
//       description: '1 mahine mein 5k+ naye followers — engaging short-form videos',
//       color: '#0066FF',
//     },
//     {
//       id: 2,
//       icon: FiTrendingUp,
//       title: 'Consistent Content',
//       description: 'Har hafte 2 high-quality videos + weekly community post',
//       color: '#8B5CF6',
//     },
//     {
//       id: 3,
//       icon: FiUsers,
//       title: 'Collaboration',
//       description: '2 creator collabs per quarter for audience cross-pollination',
//       color: '#C400FF',
//     },
//     {
//       id: 4,
//       icon: FiAward,
//       title: 'Skill Mastery',
//       description: 'Cinematic editing + sound design — monthly showcase project',
//       color: '#0066FF',
//     },
//     {
//       id: 5,
//       icon: FiStar,
//       title: 'Impact & Value',
//       description: 'Tutorials + behind-the-scenes that teach aur entertain both',
//       color: '#C400FF',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="goals"
//       style={{
//         position: 'relative',
//         minHeight: isMobile ? 'auto' : '150vh',
//         padding: isMobile ? '60px 20px' : '100px 60px',
//         background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Animated Background Elements */}
//       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//         {/* Gradient Orb - Top Right */}
//         <motion.div
//           animate={{
//             scale: [0.8, 1.1, 0.8],
//             x: [0, 50, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             top: '-10%',
//             right: '-10%',
//             width: '600px',
//             height: '600px',
//             background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(80px)',
//           }}
//         />

//         {/* Gradient Orb - Bottom Left */}
//         <motion.div
//           animate={{
//             scale: [1.1, 0.8, 1.1],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             bottom: '-15%',
//             left: '-10%',
//             width: '500px',
//             height: '500px',
//             background: 'radial-gradient(circle, rgba(196, 0, 255, 0.12) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(100px)',
//           }}
//         />

//         {/* Grid Pattern */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundImage:
//               'linear-gradient(rgba(0, 102, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.02) 1px, transparent 1px)',
//             backgroundSize: '60px 60px',
//             opacity: 0.5,
//           }}
//         />
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
//         {/* Header with Image Preview */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//             gap: isMobile ? '40px' : '80px',
//             alignItems: 'center',
//             marginBottom: isMobile ? '40px' : '80px',
//           }}
//         >
//           {/* Left: Image Container with Scroll Animation */}
//           <motion.div
//             style={{
//               position: 'relative',
//               height: isMobile ? '300px' : '500px',
//               borderRadius: '24px',
//               overflow: 'hidden',
//               border: '2px solid',
//               borderImage: 'linear-gradient(135deg, #0066FF, #C400FF) 1',
//               boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 102, 255, 0.3)',
//               transform: `scale(${0.85 + scrollProgress * 0.15}) translateY(${scrollProgress * 80}px)`,
//               transformOrigin: 'center bottom',
//               opacity: 0.6 + scrollProgress * 0.4,
//             }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             {/* Hero Image */}
//             <img
//               src="/kunal-photo.jpeg"
//               alt="Kunal - Content Creator"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 filter: 'contrast(1.15) saturate(1.3)',
//               }}
//             />

//             {/* Overlay Gradients */}
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.2) 0%, rgba(196, 0, 255, 0.2) 100%)',
//                 mixBlendMode: 'overlay',
//                 pointerEvents: 'none',
//               }}
//             />

//             {/* Glow Effect */}
//             <motion.div
//               animate={{
//                 opacity: [0.3, 0.6, 0.3],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//               style={{
//                 position: 'absolute',
//                 inset: '-2px',
//                 background: 'linear-gradient(135deg, #0066FF, #C400FF)',
//                 borderRadius: '24px',
//                 filter: 'blur(15px)',
//                 zIndex: -1,
//               }}
//             />
//           </motion.div>

//           {/* Right: Title and Small Description */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: false, amount: 0.3 }}
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '24px',
//             }}
//           >
//             <div>
//               <motion.h2
//                 style={{
//                   fontSize: isMobile ? '32px' : '48px',
//                   fontWeight: '900',
//                   fontFamily: 'Baloo 2, Poppins, sans-serif',
//                   background: 'linear-gradient(135deg, #0066FF, #C400FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   marginBottom: '12px',
//                   lineHeight: '1.2',
//                 }}
//               >
//                 My Creative Goals
//               </motion.h2>
//               <motion.p
//                 style={{
//                   fontSize: isMobile ? '15px' : '18px',
//                   color: '#9CA3AF',
//                   lineHeight: '1.6',
//                   fontFamily: 'Inter, sans-serif',
//                   maxWidth: '500px',
//                 }}
//               >
//                 Building a strong community aur making an impact through innovative, high-quality content creation. Yeh 5 key goals meri success journey ko guide karte hain.
//               </motion.p>
//             </div>

//             {/* Quick Stats */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '16px',
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 viewport={{ once: false }}
//                 style={{
//                   padding: '16px',
//                   background: 'rgba(0, 102, 255, 0.1)',
//                   borderRadius: '12px',
//                   border: '1px solid rgba(0, 102, 255, 0.3)',
//                 }}
//               >
//                 <div style={{ fontSize: '24px', fontWeight: '800', color: '#0066FF' }}>5+</div>
//                 <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>Major Goals</div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 viewport={{ once: false }}
//                 style={{
//                   padding: '16px',
//                   background: 'rgba(196, 0, 255, 0.1)',
//                   borderRadius: '12px',
//                   border: '1px solid rgba(196, 0, 255, 0.3)',
//                 }}
//               >
//                 <div style={{ fontSize: '24px', fontWeight: '800', color: '#C400FF' }}>2024-25</div>
//                 <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>Timeline</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Goals Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           style={{
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: isMobile ? '20px' : '28px',
//             marginTop: isMobile ? '40px' : '60px',
//           }}
//         >
//           {goals.map((goal, index) => {
//             const Icon = goal.icon;
//             return (
//               <motion.div
//                 key={goal.id}
//                 variants={itemVariants}
//                 whileHover={!isMobile ? { y: -8, scale: 1.02 } : {}}
//                 style={{
//                   padding: isMobile ? '24px' : '32px',
//                   background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 102, 255, 0.05) 100%)',
//                   border: `1px solid ${goal.color}33`,
//                   borderRadius: '16px',
//                   backdropFilter: 'blur(10px)',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Hover Glow */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   style={{
//                     position: 'absolute',
//                     inset: 0,
//                     background: `radial-gradient(circle at center, ${goal.color}22 0%, transparent 70%)`,
//                     pointerEvents: 'none',
//                   }}
//                 />

//                 {/* Icon */}
//                 <motion.div
//                   animate={{ rotate: [0, 5, 0] }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                   }}
//                   style={{
//                     marginBottom: '16px',
//                     display: 'inline-block',
//                   }}
//                 >
//                   <Icon
//                     size={32}
//                     style={{
//                       color: goal.color,
//                       filter: `drop-shadow(0 0 10px ${goal.color}66)`,
//                     }}
//                   />
//                 </motion.div>

//                 {/* Title */}
//                 <h3
//                   style={{
//                     fontSize: isMobile ? '18px' : '20px',
//                     fontWeight: '700',
//                     color: 'white',
//                     fontFamily: 'Poppins, sans-serif',
//                     marginBottom: '12px',
//                   }}
//                 >
//                   {goal.title}
//                 </h3>

//                 {/* Description */}
//                 <p
//                   style={{
//                     fontSize: isMobile ? '14px' : '15px',
//                     color: '#D1D5DB',
//                     lineHeight: '1.6',
//                     fontFamily: 'Inter, sans-serif',
//                   }}
//                 >
//                   {goal.description}
//                 </p>

//                 {/* Colored Line */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: '40px' }}
//                   transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
//                   viewport={{ once: false }}
//                   style={{
//                     height: '3px',
//                     background: goal.color,
//                     borderRadius: '2px',
//                     marginTop: '16px',
//                     boxShadow: `0 0 15px ${goal.color}88`,
//                   }}
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: false, amount: 0.3 }}
//           style={{
//             textAlign: 'center',
//             marginTop: isMobile ? '50px' : '80px',
//           }}
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             style={{
//               display: 'inline-block',
//               padding: isMobile ? '14px 32px' : '18px 48px',
//               background: 'linear-gradient(135deg, #0066FF, #C400FF)',
//               color: 'white',
//               borderRadius: '50px',
//               fontWeight: '700',
//               fontSize: isMobile ? '16px' : '18px',
//               textDecoration: 'none',
//               fontFamily: 'Poppins, sans-serif',
//               border: '1px solid rgba(255, 255, 255, 0.1)',
//               boxShadow: '0 10px 40px rgba(0, 102, 255, 0.4)',
//               cursor: 'pointer',
//             }}
//           >
//             Let's Collaborate
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Goals;















// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import { FiTarget, FiTrendingUp, FiUsers, FiAward, FiStar } from 'react-icons/fi';

// // const Goals = () => {
// //   const [isMobile, setIsMobile] = useState(false);
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth < 768);
// //     handleResize();
// //     window.addEventListener('resize', handleResize);
    
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!sectionRef.current) return;
      
// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const sectionTop = rect.top;
// //       const sectionHeight = rect.height;
// //       const windowHeight = window.innerHeight;
      
// //       // Calculate scroll progress (0 when section enters viewport, 1 when it exits)
// //       const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
// //       setScrollProgress(progress);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const goals = [
// //     {
// //       id: 1,
// //       icon: FiTarget,
// //       title: 'Grow Audience',
// //       description: '1 mahine mein 5k+ naye followers — engaging short-form videos',
// //       color: '#0066FF',
// //     },
// //     {
// //       id: 2,
// //       icon: FiTrendingUp,
// //       title: 'Consistent Content',
// //       description: 'Har hafte 2 high-quality videos + weekly community post',
// //       color: '#8B5CF6',
// //     },
// //     {
// //       id: 3,
// //       icon: FiUsers,
// //       title: 'Collaboration',
// //       description: '2 creator collabs per quarter for audience cross-pollination',
// //       color: '#C400FF',
// //     },
// //     {
// //       id: 4,
// //       icon: FiAward,
// //       title: 'Skill Mastery',
// //       description: 'Cinematic editing + sound design — monthly showcase project',
// //       color: '#0066FF',
// //     },
// //     {
// //       id: 5,
// //       icon: FiStar,
// //       title: 'Impact & Value',
// //       description: 'Tutorials + behind-the-scenes that teach aur entertain both',
// //       color: '#C400FF',
// //     },
// //   ];

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, ease: 'easeOut' },
// //     },
// //   };

// //   return (
// //     <section
// //       ref={sectionRef}
// //       id="goals"
// //       style={{
// //         position: 'relative',
// //         minHeight: isMobile ? 'auto' : '150vh',
// //         padding: isMobile ? '60px 20px' : '100px 60px',
// //         background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
// //         overflow: 'hidden',
// //       }}
// //     >
// //       {/* Animated Background Elements */}
// //       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
// //         {/* Gradient Orb - Top Right */}
// //         <motion.div
// //           animate={{
// //             scale: [0.8, 1.1, 0.8],
// //             x: [0, 50, 0],
// //           }}
// //           transition={{
// //             duration: 15,
// //             repeat: Infinity,
// //             ease: 'easeInOut',
// //           }}
// //           style={{
// //             position: 'absolute',
// //             top: '-10%',
// //             right: '-10%',
// //             width: '600px',
// //             height: '600px',
// //             background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
// //             borderRadius: '50%',
// //             filter: 'blur(80px)',
// //           }}
// //         />

// //         {/* Gradient Orb - Bottom Left */}
// //         <motion.div
// //           animate={{
// //             scale: [1.1, 0.8, 1.1],
// //             y: [0, 50, 0],
// //           }}
// //           transition={{
// //             duration: 18,
// //             repeat: Infinity,
// //             ease: 'easeInOut',
// //           }}
// //           style={{
// //             position: 'absolute',
// //             bottom: '-15%',
// //             left: '-10%',
// //             width: '500px',
// //             height: '500px',
// //             background: 'radial-gradient(circle, rgba(196, 0, 255, 0.12) 0%, transparent 70%)',
// //             borderRadius: '50%',
// //             filter: 'blur(100px)',
// //           }}
// //         />

// //         {/* Grid Pattern */}
// //         <div
// //           style={{
// //             position: 'absolute',
// //             inset: 0,
// //             backgroundImage:
// //               'linear-gradient(rgba(0, 102, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.02) 1px, transparent 1px)',
// //             backgroundSize: '60px 60px',
// //             opacity: 0.5,
// //           }}
// //         />
// //       </div>

// //       {/* Main Container */}
// //       <div
// //         style={{
// //           position: 'relative',
// //           maxWidth: '1400px',
// //           margin: '0 auto',
// //           zIndex: 2,
// //         }}
// //       >
// //         {/* Header with Image Preview */}
// //         <div
// //           style={{
// //             display: 'grid',
// //             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
// //             gap: isMobile ? '40px' : '80px',
// //             alignItems: 'center',
// //             marginBottom: isMobile ? '40px' : '80px',
// //           }}
// //         >
// //           {/* Left: Image Container with Scroll Animation */}
// //           <motion.div
// //             style={{
// //               position: 'relative',
// //               height: isMobile ? '300px' : '500px',
// //               borderRadius: '24px',
// //               overflow: 'hidden',
// //               border: '2px solid',
// //               borderImage: 'linear-gradient(135deg, #0066FF, #C400FF) 1',
// //               boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 102, 255, 0.3)',
// //               transform: `scale(${0.85 + scrollProgress * 0.15}) translateY(${scrollProgress * 80}px)`,
// //               transformOrigin: 'center bottom',
// //               opacity: 0.6 + scrollProgress * 0.4,
// //             }}
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: false, amount: 0.2 }}
// //           >
// //             {/* Hero Image */}
// //             <img
// //               src="/kunal-photo.jpeg"
// //               alt="Kunal - Content Creator"
// //               style={{
// //                 width: '100%',
// //                 height: '100%',
// //                 objectFit: 'cover',
// //                 filter: 'contrast(1.15) saturate(1.3)',
// //               }}
// //             />

// //             {/* Overlay Gradients */}
// //             <div
// //               style={{
// //                 position: 'absolute',
// //                 inset: 0,
// //                 background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.2) 0%, rgba(196, 0, 255, 0.2) 100%)',
// //                 mixBlendMode: 'overlay',
// //                 pointerEvents: 'none',
// //               }}
// //             />

// //             {/* Glow Effect */}
// //             <motion.div
// //               animate={{
// //                 opacity: [0.3, 0.6, 0.3],
// //               }}
// //               transition={{
// //                 duration: 3,
// //                 repeat: Infinity,
// //                 ease: 'easeInOut',
// //               }}
// //               style={{
// //                 position: 'absolute',
// //                 inset: '-2px',
// //                 background: 'linear-gradient(135deg, #0066FF, #C400FF)',
// //                 borderRadius: '24px',
// //                 filter: 'blur(15px)',
// //                 zIndex: -1,
// //               }}
// //             />
// //           </motion.div>

// //           {/* Right: Title and Small Description */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             viewport={{ once: false, amount: 0.3 }}
// //             style={{
// //               display: 'flex',
// //               flexDirection: 'column',
// //               gap: '24px',
// //             }}
// //           >
// //             <div>
// //               <motion.h2
// //                 style={{
// //                   fontSize: isMobile ? '32px' : '48px',
// //                   fontWeight: '900',
// //                   fontFamily: 'Baloo 2, Poppins, sans-serif',
// //                   background: 'linear-gradient(135deg, #0066FF, #C400FF)',
// //                   WebkitBackgroundClip: 'text',
// //                   WebkitTextFillColor: 'transparent',
// //                   backgroundClip: 'text',
// //                   marginBottom: '12px',
// //                   lineHeight: '1.2',
// //                 }}
// //               >
// //                 My Creative Goals
// //               </motion.h2>
// //               <motion.p
// //                 style={{
// //                   fontSize: isMobile ? '15px' : '18px',
// //                   color: '#9CA3AF',
// //                   lineHeight: '1.6',
// //                   fontFamily: 'Inter, sans-serif',
// //                   maxWidth: '500px',
// //                 }}
// //               >
// //                 Building a strong community aur making an impact through innovative, high-quality content creation. Yeh 5 key goals meri success journey ko guide karte hain.
// //               </motion.p>
// //             </div>

// //             {/* Quick Stats */}
// //             <div
// //               style={{
// //                 display: 'grid',
// //                 gridTemplateColumns: '1fr 1fr',
// //                 gap: '16px',
// //               }}
// //             >
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.3 }}
// //                 viewport={{ once: false }}
// //                 style={{
// //                   padding: '16px',
// //                   background: 'rgba(0, 102, 255, 0.1)',
// //                   borderRadius: '12px',
// //                   border: '1px solid rgba(0, 102, 255, 0.3)',
// //                 }}
// //               >
// //                 <div style={{ fontSize: '24px', fontWeight: '800', color: '#0066FF' }}>5+</div>
// //                 <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>Major Goals</div>
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.4 }}
// //                 viewport={{ once: false }}
// //                 style={{
// //                   padding: '16px',
// //                   background: 'rgba(196, 0, 255, 0.1)',
// //                   borderRadius: '12px',
// //                   border: '1px solid rgba(196, 0, 255, 0.3)',
// //                 }}
// //               >
// //                 <div style={{ fontSize: '24px', fontWeight: '800', color: '#C400FF' }}>2024-25</div>
// //                 <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>Timeline</div>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* Goals Grid */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: false, amount: 0.2 }}
// //           style={{
// //             display: 'grid',
// //             gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
// //             gap: isMobile ? '20px' : '28px',
// //             marginTop: isMobile ? '40px' : '60px',
// //           }}
// //         >
// //           {goals.map((goal, index) => {
// //             const Icon = goal.icon;
// //             return (
// //               <motion.div
// //                 key={goal.id}
// //                 variants={itemVariants}
// //                 whileHover={!isMobile ? { y: -8, scale: 1.02 } : {}}
// //                 style={{
// //                   padding: isMobile ? '24px' : '32px',
// //                   background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 102, 255, 0.05) 100%)',
// //                   border: `1px solid ${goal.color}33`,
// //                   borderRadius: '16px',
// //                   backdropFilter: 'blur(10px)',
// //                   cursor: 'pointer',
// //                   transition: 'all 0.3s ease',
// //                   position: 'relative',
// //                   overflow: 'hidden',
// //                 }}
// //               >
// //                 {/* Hover Glow */}
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   whileHover={{ opacity: 1 }}
// //                   style={{
// //                     position: 'absolute',
// //                     inset: 0,
// //                     background: `radial-gradient(circle at center, ${goal.color}22 0%, transparent 70%)`,
// //                     pointerEvents: 'none',
// //                   }}
// //                 />

// //                 {/* Icon */}
// //                 <motion.div
// //                   animate={{ rotate: [0, 5, 0] }}
// //                   transition={{
// //                     duration: 4,
// //                     repeat: Infinity,
// //                     ease: 'easeInOut',
// //                   }}
// //                   style={{
// //                     marginBottom: '16px',
// //                     display: 'inline-block',
// //                   }}
// //                 >
// //                   <Icon
// //                     size={32}
// //                     style={{
// //                       color: goal.color,
// //                       filter: `drop-shadow(0 0 10px ${goal.color}66)`,
// //                     }}
// //                   />
// //                 </motion.div>

// //                 {/* Title */}
// //                 <h3
// //                   style={{
// //                     fontSize: isMobile ? '18px' : '20px',
// //                     fontWeight: '700',
// //                     color: 'white',
// //                     fontFamily: 'Poppins, sans-serif',
// //                     marginBottom: '12px',
// //                   }}
// //                 >
// //                   {goal.title}
// //                 </h3>

// //                 {/* Description */}
// //                 <p
// //                   style={{
// //                     fontSize: isMobile ? '14px' : '15px',
// //                     color: '#D1D5DB',
// //                     lineHeight: '1.6',
// //                     fontFamily: 'Inter, sans-serif',
// //                   }}
// //                 >
// //                   {goal.description}
// //                 </p>

// //                 {/* Colored Line */}
// //                 <motion.div
// //                   initial={{ width: 0 }}
// //                   whileInView={{ width: '40px' }}
// //                   transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
// //                   viewport={{ once: false }}
// //                   style={{
// //                     height: '3px',
// //                     background: goal.color,
// //                     borderRadius: '2px',
// //                     marginTop: '16px',
// //                     boxShadow: `0 0 15px ${goal.color}88`,
// //                   }}
// //                 />
// //               </motion.div>
// //             );
// //           })}
// //         </motion.div>

// //         {/* CTA Button */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.6 }}
// //           viewport={{ once: false, amount: 0.3 }}
// //           style={{
// //             textAlign: 'center',
// //             marginTop: isMobile ? '50px' : '80px',
// //           }}
// //         >
// //           <motion.a
// //             href="#contact"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             style={{
// //               display: 'inline-block',
// //               padding: isMobile ? '14px 32px' : '18px 48px',
// //               background: 'linear-gradient(135deg, #0066FF, #C400FF)',
// //               color: 'white',
// //               borderRadius: '50px',
// //               fontWeight: '700',
// //               fontSize: isMobile ? '16px' : '18px',
// //               textDecoration: 'none',
// //               fontFamily: 'Poppins, sans-serif',
// //               border: '1px solid rgba(255, 255, 255, 0.1)',
// //               boxShadow: '0 10px 40px rgba(0, 102, 255, 0.4)',
// //               cursor: 'pointer',
// //             }}
// //           >
// //             Let's Collaborate
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Goals;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiUsers, FiAward, FiStar } from 'react-icons/fi';

const Goals = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goals = [
    {
      id: 1,
      icon: FiTarget,
      title: 'Grow Audience',
      description: '1 mahine mein 5k+ naye followers — engaging short-form videos',
      color: '#0066FF',
    },
    {
      id: 2,
      icon: FiTrendingUp,
      title: 'Consistent Content',
      description: 'Har hafte 2 high-quality videos + weekly community post',
      color: '#8B5CF6',
    },
    {
      id: 3,
      icon: FiUsers,
      title: 'Collaboration',
      description: '2 creator collabs per quarter for audience cross-pollination',
      color: '#C400FF',
    },
    {
      id: 4,
      icon: FiAward,
      title: 'Skill Mastery',
      description: 'Cinematic editing + sound design — monthly showcase project',
      color: '#0066FF',
    },
    {
      id: 5,
      icon: FiStar,
      title: 'Impact & Value',
      description: 'Tutorials + behind-the-scenes that teach aur entertain both',
      color: '#C400FF',
    },
  ];

  return (
    <section
      id="goals"
      style={{
        position: 'relative',
        minHeight: 'auto',
        padding: isMobile ? '80px 20px' : '120px 60px',
        background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Gradient Orb - Top Right */}
        <motion.div
          animate={{
            scale: [0.8, 1.1, 0.8],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: isMobile ? '400px' : '600px',
            height: isMobile ? '400px' : '600px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Gradient Orb - Bottom Left */}
        <motion.div
          animate={{
            scale: [1.1, 0.8, 1.1],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-10%',
            width: isMobile ? '350px' : '500px',
            height: isMobile ? '350px' : '500px',
            background: 'radial-gradient(circle, rgba(196, 0, 255, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
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
              backgroundSize: '60px 60px',
              opacity: 0.5,
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '60px' : '100px',
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
            My Creative Goals
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
            Building a strong community aur making an impact through innovative, high-quality content creation
          </motion.p>
        </motion.div>

        {/* Main Layout: Goals + Center Image */}
        <div
          style={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: isMobile ? 'column' : undefined,
            gridTemplateColumns: isMobile ? undefined : '1fr 420px 1fr',
            gap: isMobile ? '30px' : '50px',
            alignItems: isMobile ? 'center' : 'start',
          }}
        >
          {/* Left Side - Top 2 Goals */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '20px' : '35px',
              order: isMobile ? 2 : 1,
              width: '100%',
            }}
          >
            {goals.slice(0, 2).map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={!isMobile ? { x: 10, scale: 1.02 } : {}}
                  style={{
                    padding: isMobile ? '24px' : '32px',
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 102, 255, 0.1) 100%)',
                    border: `2px solid ${goal.color}50`,
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px ${goal.color}20`,
                  }}
                >
                  {/* Hover Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at left, ${goal.color}25 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', position: 'relative', zIndex: 1 }}>
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: [0, 8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        flexShrink: 0,
                        background: `${goal.color}15`,
                        padding: '12px',
                        borderRadius: '12px',
                        border: `1px solid ${goal.color}30`,
                      }}
                    >
                      <Icon
                        size={isMobile ? 24 : 32}
                        style={{
                          color: goal.color,
                          filter: `drop-shadow(0 0 10px ${goal.color}66)`,
                        }}
                      />
                    </motion.div>

                    <div style={{ flex: 1 }}>
                      {/* Title */}
                      <h3
                        style={{
                          fontSize: isMobile ? '19px' : '24px',
                          fontWeight: '700',
                          color: 'white',
                          fontFamily: 'Poppins, sans-serif',
                          marginBottom: '10px',
                        }}
                      >
                        {goal.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: isMobile ? '14px' : '15px',
                          color: '#D1D5DB',
                          lineHeight: '1.7',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {goal.description}
                      </p>
                    </div>
                  </div>

                  {/* Colored Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70px' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: false }}
                    style={{
                      height: '4px',
                      background: goal.color,
                      borderRadius: '2px',
                      marginTop: '20px',
                      boxShadow: `0 0 20px ${goal.color}88`,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Center - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              position: 'relative',
              height: isMobile ? '400px' : '600px',
              width: '100%',
              maxWidth: isMobile ? '350px' : '420px',
              borderRadius: '24px',
              overflow: 'visible',
              order: isMobile ? 1 : 2,
            }}
          >
            {/* Neon Border Animation */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                inset: '-4px',
                background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #C400FF)',
                borderRadius: '28px',
                filter: 'blur(25px)',
                zIndex: 0,
              }}
            />

            {/* Image Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid rgba(0, 102, 255, 0.6)',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 100px rgba(0, 102, 255, 0.4)',
                zIndex: 1,
              }}
            >
              {/* Hero Image */}
              <img
                src="/kunal-photo.jpeg"
                alt="Kunal - Content Creator"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.15) saturate(1.3) brightness(1.05)',
                }}
              />

              {/* Overlay Gradients */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Shine Effect */}
              <motion.div
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transform: 'skewX(-20deg)',
                  pointerEvents: 'none',
                }}
              />

              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '16px',
                  padding: '14px 28px',
                  background: 'rgba(0, 0, 0, 0.85)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '50px',
                  border: '1px solid rgba(0, 102, 255, 0.4)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#0066FF', fontFamily: 'Poppins, sans-serif' }}>5+</div>
                  <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Goals</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#C400FF', fontFamily: 'Poppins, sans-serif' }}>2026</div>
                  <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Year</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Bottom 3 Goals */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '20px' : '35px',
              order: isMobile ? 3 : 3,
              width: '100%',
            }}
          >
            {goals.slice(2, 5).map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={!isMobile ? { x: -10, scale: 1.02 } : {}}
                  style={{
                    padding: isMobile ? '24px' : '32px',
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(196, 0, 255, 0.1) 100%)',
                    border: `2px solid ${goal.color}50`,
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px ${goal.color}20`,
                  }}
                >
                  {/* Hover Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at right, ${goal.color}25 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', position: 'relative', zIndex: 1 }}>
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: [0, 8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        flexShrink: 0,
                        background: `${goal.color}15`,
                        padding: '12px',
                        borderRadius: '12px',
                        border: `1px solid ${goal.color}30`,
                      }}
                    >
                      <Icon
                        size={isMobile ? 24 : 32}
                        style={{
                          color: goal.color,
                          filter: `drop-shadow(0 0 10px ${goal.color}66)`,
                        }}
                      />
                    </motion.div>

                    <div style={{ flex: 1 }}>
                      {/* Title */}
                      <h3
                        style={{
                          fontSize: isMobile ? '19px' : '24px',
                          fontWeight: '700',
                          color: 'white',
                          fontFamily: 'Poppins, sans-serif',
                          marginBottom: '10px',
                        }}
                      >
                        {goal.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: isMobile ? '14px' : '15px',
                          color: '#D1D5DB',
                          lineHeight: '1.7',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {goal.description}
                      </p>
                    </div>
                  </div>

                  {/* Colored Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70px' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: false }}
                    style={{
                      height: '4px',
                      background: goal.color,
                      borderRadius: '2px',
                      marginTop: '20px',
                      boxShadow: `0 0 20px ${goal.color}88`,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '60px' : '100px',
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(196, 0, 255, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '16px 40px' : '20px 56px',
              background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #C400FF)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: isMobile ? '17px' : '19px',
              textDecoration: 'none',
              fontFamily: 'Poppins, sans-serif',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 12px 48px rgba(0, 102, 255, 0.4)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Let's Collaborate</span>
            {/* Shimmer Effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
