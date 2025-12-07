// import { motion } from 'framer-motion';
// import { FiArrowRight, FiPlay, FiStar, FiTrendingUp } from 'react-icons/fi';

// const Hero = () => {
//   const handleVoteClick = (e) => {
//     e.preventDefault();
//     const element = document.querySelector('#contact');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleExploreClick = (e) => {
//     e.preventDefault();
//     const element = document.querySelector('#work');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section 
//       id="home"
//       style={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         background: 'linear-gradient(180deg, #000000 0%, #0A0F1F 100%)',
//         overflow: 'hidden',
//         paddingTop: '85px',
//       }}
//     >
//       {/* Cinematic Background Effects */}
//       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
//         {/* Large Neon Orb - Left */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 30, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             top: '15%',
//             left: '-10%',
//             width: '600px',
//             height: '600px',
//             background: 'radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(100px)',
//           }}
//         />

//         {/* Large Neon Orb - Right */}
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             x: [0, -30, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             top: '20%',
//             right: '-10%',
//             width: '700px',
//             height: '700px',
//             background: 'radial-gradient(circle, rgba(196, 0, 255, 0.2) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(120px)',
//           }}
//         />

//         {/* Floating Geometric Shapes */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, i % 2 === 0 ? 20 : -20, 0],
//               rotate: [0, 360],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: 10 + i * 2,
//               repeat: Infinity,
//               delay: i * 0.5,
//               ease: "easeInOut"
//             }}
//             style={{
//               position: 'absolute',
//               left: `${10 + i * 15}%`,
//               top: `${20 + i * 10}%`,
//               width: `${40 + i * 10}px`,
//               height: `${40 + i * 10}px`,
//               border: '2px solid',
//               borderColor: i % 2 === 0 ? 'rgba(0, 102, 255, 0.3)' : 'rgba(196, 0, 255, 0.3)',
//               borderRadius: i % 3 === 0 ? '50%' : '0',
//               transform: `rotate(${i * 45}deg)`,
//             }}
//           />
//         ))}

//         {/* Grid Pattern Overlay */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: 'linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px)',
//           backgroundSize: '50px 50px',
//           opacity: 0.3,
//         }} />
//       </div>

//       {/* Main Content */}
//       <div style={{ 
//         position: 'relative', 
//         maxWidth: '1400px', 
//         margin: '0 auto', 
//         padding: '0 2rem',
//         width: '100%',
//         zIndex: 1,
//       }}>
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '60px',
//           alignItems: 'center',
//         }}>
          
//           {/* Left Side - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             style={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               gap: '32px',
//               maxWidth: '650px',
//             }}
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               whileHover={{ scale: 1.05 }}
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '10px',
//                 padding: '10px 20px',
//                 background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(196, 0, 255, 0.1) 100%)',
//                 border: '1px solid rgba(0, 102, 255, 0.3)',
//                 borderRadius: '50px',
//                 maxWidth: 'fit-content',
//                 boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)',
//               }}
//             >
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               >
//                 <FiStar style={{ color: '#0066FF', width: '18px', height: '18px' }} />
//               </motion.div>
//               <span style={{ 
//                 color: '#0066FF', 
//                 fontWeight: '600', 
//                 fontSize: '13px',
//                 fontFamily: 'Inter, sans-serif',
//                 letterSpacing: '0.5px',
//               }}>
//                 Content Creation Club • PW IOI
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <div>
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 style={{
//                   fontSize: 'clamp(42px, 6vw, 72px)',
//                   fontWeight: '900',
//                   lineHeight: '1.1',
//                   fontFamily: 'Poppins, sans-serif',
//                   marginBottom: '24px',
//                 }}
//               >
//                 <span style={{ color: 'white' }}>Vote for </span>
//                 <motion.span
//                   animate={{
//                     backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                   style={{
//                     background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 25%, #C400FF 50%, #8B5CF6 75%, #0066FF 100%)',
//                     backgroundSize: '200% auto',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                     display: 'inline-block',
//                     textShadow: '0 0 80px rgba(0, 102, 255, 0.5)',
//                   }}
//                 >
//                   Kunal
//                 </motion.span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 style={{
//                   fontSize: 'clamp(18px, 2vw, 22px)',
//                   color: '#9CA3AF',
//                   lineHeight: '1.7',
//                   fontFamily: 'Inter, sans-serif',
//                   maxWidth: '550px',
//                 }}
//               >
//                 Creative storyteller | Video editor | Content strategist bringing 
//                 <span style={{ 
//                   color: '#0066FF', 
//                   fontWeight: '700',
//                   margin: '0 6px',
//                 }}>
//                   innovation
//                 </span> 
//                 and 
//                 <span style={{ 
//                   color: '#C400FF', 
//                   fontWeight: '700',
//                   margin: '0 6px',
//                 }}>
//                   passion
//                 </span>
//                 to every frame.
//               </motion.p>
//             </div>

//             {/* Stats */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               style={{
//                 display: 'flex',
//                 gap: '40px',
//                 flexWrap: 'wrap',
//               }}
//             >
//               {[
//                 { icon: FiPlay, label: 'Videos Created', value: '50+' },
//                 { icon: FiTrendingUp, label: 'Engagement Rate', value: '95%' },
//                 { icon: FiStar, label: 'Quality Score', value: '5.0' },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '8px',
//                   }}
//                 >
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                     <stat.icon style={{ color: '#0066FF', width: '20px', height: '20px' }} />
//                     <span style={{
//                       fontSize: '28px',
//                       fontWeight: '800',
//                       background: 'linear-gradient(135deg, #0066FF, #C400FF)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                       fontFamily: 'Poppins, sans-serif',
//                     }}>
//                       {stat.value}
//                     </span>
//                   </div>
//                   <span style={{ 
//                     color: '#6B7280', 
//                     fontSize: '12px',
//                     fontFamily: 'Inter, sans-serif',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px',
//                   }}>
//                     {stat.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div> */}

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.9 }}
//               style={{
//                 display: 'flex',
//                 gap: '20px',
//                 flexWrap: 'wrap',
//               }}
//             >
//               {/* Primary CTA */}
//               <motion.a
//                 href="#vote"
//                 onClick={handleVoteClick}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(196, 0, 255, 0.6)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   padding: '16px 36px',
//                   background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
//                   borderRadius: '50px',
//                   fontWeight: '700',
//                   color: 'white',
//                   fontSize: '16px',
//                   textDecoration: 'none',
//                   fontFamily: 'Poppins, sans-serif',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   boxShadow: '0 10px 40px rgba(0, 102, 255, 0.4)',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <span style={{ position: 'relative', zIndex: 2 }}>Vote Now</span>
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                   style={{ position: 'relative', zIndex: 2 }}
//                 >
//                   <FiArrowRight size={20} />
//                 </motion.div>
//                 {/* Shimmer */}
//                 <motion.div
//                   animate={{ x: ['-100%', '200%'] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '50%',
//                     height: '100%',
//                     background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
//                     transform: 'skewX(-20deg)',
//                   }}
//                 />
//               </motion.a>

//               {/* Secondary CTA */}
//               <motion.a
//                 href="#work"
//                 onClick={handleExploreClick}
//                 whileHover={{ 
//                   scale: 1.05,
//                   borderColor: 'rgba(0, 102, 255, 0.8)',
//                   background: 'rgba(0, 102, 255, 0.1)',
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   padding: '16px 36px',
//                   background: 'rgba(0, 0, 0, 0.4)',
//                   borderRadius: '50px',
//                   fontWeight: '700',
//                   color: 'white',
//                   fontSize: '16px',
//                   textDecoration: 'none',
//                   fontFamily: 'Poppins, sans-serif',
//                   border: '1px solid rgba(255, 255, 255, 0.2)',
//                   backdropFilter: 'blur(10px)',
//                   transition: 'all 0.3s ease',
//                 }}
//               >
//                 Explore Work
//                 <FiPlay size={18} />
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             style={{
//               position: 'relative',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             {/* Neon Frame Glow */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.05, 1],
//                 rotate: [0, 2, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               style={{
//                 position: 'absolute',
//                 inset: '-20px',
//                 background: 'linear-gradient(135deg, #0066FF, #C400FF)',
//                 borderRadius: '30px',
//                 filter: 'blur(40px)',
//                 opacity: 0.6,
//               }}
//             />

//             {/* Image Container */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 position: 'relative',
//                 width: '100%',
//                 maxWidth: '500px',
//                 aspectRatio: '1',
//                 borderRadius: '24px',
//                 overflow: 'hidden',
//                 border: '2px solid',
//                 borderImage: 'linear-gradient(135deg, #0066FF, #C400FF) 1',
//                 boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 102, 255, 0.3)',
//               }}
//             >
//               {/* Image */}
//               <img
//                 src="/kunal-photo.jpeg"
//                 alt="Kunal - Content Creator"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   filter: 'contrast(1.1) saturate(1.2)',
//                 }}
//               />

//               {/* Gradient Overlay */}
//               <div style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
//                 mixBlendMode: 'overlay',
//                 pointerEvents: 'none',
//               }} />

//               {/* Top Glow */}
//               <div style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: '40%',
//                 background: 'linear-gradient(180deg, rgba(0, 102, 255, 0.2) 0%, transparent 100%)',
//                 pointerEvents: 'none',
//               }} />
//             </motion.div>

//             {/* Floating Badge */}
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//                 rotate: [-2, 2, -2],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               style={{
//                 position: 'absolute',
//                 bottom: '20px',
//                 right: '20px',
//                 padding: '12px 20px',
//                 background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 102, 255, 0.3) 100%)',
//                 backdropFilter: 'blur(20px)',
//                 borderRadius: '50px',
//                 border: '1px solid rgba(0, 102, 255, 0.5)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 102, 255, 0.4)',
//               }}
//             >
//               <span style={{
//                 color: 'white',
//                 fontSize: '14px',
//                 fontWeight: '700',
//                 fontFamily: 'Poppins, sans-serif',
//               }}>
//                 🎬 Content Creator
//               </span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2, duration: 0.6 }}
//         style={{
//           position: 'absolute',
//           bottom: '40px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '8px',
//         }}
//       >
//         <span style={{
//           color: '#6B7280',
//           fontSize: '12px',
//           fontFamily: 'Inter, sans-serif',
//           textTransform: 'uppercase',
//           letterSpacing: '1px',
//         }}>
//           Scroll to Explore
//         </span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           style={{
//             width: '24px',
//             height: '36px',
//             border: '2px solid rgba(0, 102, 255, 0.5)',
//             borderRadius: '12px',
//             display: 'flex',
//             justifyContent: 'center',
//             paddingTop: '6px',
//           }}
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             style={{
//               width: '4px',
//               height: '8px',
//               background: 'linear-gradient(180deg, #0066FF, #C400FF)',
//               borderRadius: '2px',
//             }}
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { FiArrowRight, FiPlay, FiStar, FiTrendingUp } from 'react-icons/fi';

// const Hero = () => {
//   const handleVoteClick = (e) => {
//     e.preventDefault();
//     const element = document.querySelector('#contact');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleExploreClick = (e) => {
//     e.preventDefault();
//     const element = document.querySelector('#work');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const [isMobile, setIsMobile] = useState(false);
//   const [navOffset, setNavOffset] = useState(85);

//   useEffect(() => {
//     const update = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       // navbar height from `Navbar.jsx` is ~85px on desktop, smaller on mobile
//       setNavOffset(mobile ? 70 : 85);
//     };

//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   return (
//     <section 
//       id="home"
//       style={{
//         position: 'relative',
//         // height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         background: 'linear-gradient(180deg, #000000 0%, #0A0F1F 100%)',
//         overflow: 'hidden',
//         // paddingTop: `${navOffset}px`,
//       }}
//     >
//       {/* Hero Image as Background - Right 45% */}
//       <div style={{
//         position: 'absolute',
//         top: `${navOffset}px`,
//         left: 0,
//         right: 0,
//         width: '100%',
//         height: `calc(100vh - ${navOffset}px)`,
//         zIndex: 0,
//       }}>
//         {/* Image */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           height: '100%',
//           backgroundImage: 'url(/kunal-photo.jpeg)',
//           backgroundSize: 'cover',
//           backgroundPosition: isMobile ? 'center top' : 'center right',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'scroll',
//         }} />

//         {/* Gradient Overlays */}
//         {/* Left fade to blend with content */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.3) 40%, transparent 100%)',
//         }} />

//         {/* Top fade */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, transparent 30%)',
//         }} />

//         {/* Bottom fade */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(0deg, rgba(10, 15, 31, 0.9) 0%, transparent 30%)',
//         }} />

//         {/* Neon glow overlay */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
//           mixBlendMode: 'overlay',
//         }} />

//         {/* Animated neon edge glow */}
//         <motion.div
//           animate={{
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             bottom: 0,
//             width: '3px',
//             background: 'linear-gradient(180deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
//             boxShadow: '0 0 30px rgba(0, 102, 255, 0.8), 0 0 60px rgba(196, 0, 255, 0.6)',
//           }}
//         />
//       </div>

//       {/* Cinematic Background Effects */}
//       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//         {/* Large Neon Orb - Left */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 30, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             top: '15%',
//             left: '-10%',
//             width: '600px',
//             height: '600px',
//             background: 'radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(100px)',
//           }}
//         />

//         {/* Large Neon Orb - Center */}
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             x: [0, -30, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             top: '30%',
//             left: '30%',
//             width: '500px',
//             height: '500px',
//             background: 'radial-gradient(circle, rgba(196, 0, 255, 0.15) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(120px)',
//           }}
//         />

//         {/* Floating Geometric Shapes */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, i % 2 === 0 ? 20 : -20, 0],
//               rotate: [0, 360],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: 10 + i * 2,
//               repeat: Infinity,
//               delay: i * 0.5,
//               ease: "easeInOut"
//             }}
//             style={{
//               position: 'absolute',
//               left: `${10 + i * 15}%`,
//               top: `${20 + i * 10}%`,
//               width: `${40 + i * 10}px`,
//               height: `${40 + i * 10}px`,
//               border: '2px solid',
//               borderColor: i % 2 === 0 ? 'rgba(0, 102, 255, 0.3)' : 'rgba(196, 0, 255, 0.3)',
//               borderRadius: i % 3 === 0 ? '50%' : '0',
//               transform: `rotate(${i * 45}deg)`,
//             }}
//           />
//         ))}

//         {/* Grid Pattern Overlay */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: 'linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px)',
//           backgroundSize: '50px 50px',
//           opacity: 0.3,
//         }} />
//       </div>

//       {/* Main Content */}
//       <div style={{ 
//         position: 'relative', 
//         maxWidth: '1400px', 
//         margin: '0 auto', 
//         padding: '0 2rem',
//         width: '100%',
//         zIndex: 1,
//       }}>
//         <div style={{ 
//           display: 'flex',
//           alignItems: 'center',
//           minHeight: `calc(100vh - ${navOffset}px)`,
//         }}>
          
//           {/* Left Side - Text Content (takes ~55% space) */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             style={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               gap: '32px',
//               maxWidth: '700px',
//               width: '100%',
//               paddingRight: isMobile ? '1rem' : '4rem',
//             }}
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               whileHover={{ scale: 1.05 }}
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '10px',
//                 padding: '10px 20px',
//                 background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
//                 border: '1px solid rgba(0, 102, 255, 0.4)',
//                 borderRadius: '50px',
//                 maxWidth: 'fit-content',
//                 boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
//                 backdropFilter: 'blur(10px)',
//               }}
//             >
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               >
//                 <FiStar style={{ color: '#0066FF', width: '18px', height: '18px' }} />
//               </motion.div>
//               <span style={{ 
//                 color: '#0066FF', 
//                 fontWeight: '600', 
//                 fontSize: '13px',
//                 fontFamily: 'Inter, sans-serif',
//                 letterSpacing: '0.5px',
//               }}>
//                 Content Creation Club • PW IOI
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <div>
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 style={{
//                   fontSize: 'clamp(42px, 6vw, 72px)',
//                   fontWeight: '900',
//                   lineHeight: '1.1',
//                   fontFamily: 'Baloo 2, Poppins, sans-serif',
//                   marginBottom: '24px',
//                 }}
//               >
//                 <span style={{ color: 'white' }}>Vote for </span>
//                 <motion.span
//                   animate={{
//                     backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                   style={{
//                     background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 25%, #C400FF 50%, #8B5CF6 75%, #0066FF 100%)',
//                     backgroundSize: '200% auto',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                     display: 'inline-block',
//                     filter: 'drop-shadow(0 0 40px rgba(0, 102, 255, 0.5))',
//                   }}
//                 >
//                   Kunal
//                 </motion.span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 style={{
//                   fontSize: 'clamp(18px, 2vw, 22px)',
//                   color: '#E6F0FF',
//                   lineHeight: '1.7',
//                   fontFamily: 'Inter, sans-serif',
//                   maxWidth: '600px',
//                   textShadow: '0 2px 8px rgba(0,0,0,0.45)'
//                 }}
//               >
//                 Creative storyteller | Video editor | Content strategist bringing 
//                 <span style={{ 
//                   color: '#0066FF', 
//                   fontWeight: '700',
//                   margin: '0 6px',
//                 }}>
//                   innovation
//                 </span> 
//                 and 
//                 <span style={{ 
//                   color: '#C400FF', 
//                   fontWeight: '700',
//                   margin: '0 6px',
//                 }}>
//                   passion
//                 </span>
//                 to every frame.
//               </motion.p>
//             </div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               style={{
//                 display: 'flex',
//                 gap: '20px',
//                 flexWrap: 'wrap',
//               }}
//             >
//               {/* Primary CTA */}
//               <motion.a
//                 href="#vote"
//                 onClick={handleVoteClick}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(196, 0, 255, 0.6)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   padding: '18px 40px',
//                   background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
//                   borderRadius: '50px',
//                   fontWeight: '700',
//                   color: 'white',
//                   fontSize: '17px',
//                   textDecoration: 'none',
//                   fontFamily: 'Poppins, sans-serif',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   boxShadow: '0 10px 40px rgba(0, 102, 255, 0.4)',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <span style={{ position: 'relative', zIndex: 2 }}>Vote Now</span>
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                   style={{ position: 'relative', zIndex: 2 }}
//                 >
//                   <FiArrowRight size={22} />
//                 </motion.div>
//                 {/* Shimmer */}
//                 <motion.div
//                   animate={{ x: ['-100%', '200%'] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '50%',
//                     height: '100%',
//                     background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
//                     transform: 'skewX(-20deg)',
//                   }}
//                 />
//               </motion.a>

//               {/* Secondary CTA */}
//               <motion.a
//                 href="#work"
//                 onClick={handleExploreClick}
//                 whileHover={{ 
//                   scale: 1.05,
//                   borderColor: 'rgba(0, 102, 255, 0.8)',
//                   background: 'rgba(0, 102, 255, 0.15)',
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   padding: '18px 40px',
//                   background: 'rgba(0, 0, 0, 0.5)',
//                   borderRadius: '50px',
//                   fontWeight: '700',
//                   color: 'white',
//                   fontSize: '17px',
//                   textDecoration: 'none',
//                   fontFamily: 'Poppins, sans-serif',
//                   border: '1px solid rgba(255, 255, 255, 0.3)',
//                   backdropFilter: 'blur(10px)',
//                   transition: 'all 0.3s ease',
//                 }}
//               >
//                 Explore Work
//                 <FiPlay size={20} />
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.6 }}
//         style={{
//           position: 'absolute',
//           bottom: '40px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '8px',
//           zIndex: 2,
//         }}
//       >
//         <span style={{
//           color: '#6B7280',
//           fontSize: '12px',
//           fontFamily: 'Inter, sans-serif',
//           textTransform: 'uppercase',
//           letterSpacing: '1px',
//         }}>
//           Scroll to Explore
//         </span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           style={{
//             width: '24px',
//             height: '36px',
//             border: '2px solid rgba(0, 102, 255, 0.5)',
//             borderRadius: '12px',
//             display: 'flex',
//             justifyContent: 'center',
//             paddingTop: '6px',
//           }}
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             style={{
//               width: '4px',
//               height: '8px',
//               background: 'linear-gradient(180deg, #0066FF, #C400FF)',
//               borderRadius: '2px',
//             }}
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi';

const Hero = () => {
  const handleVoteClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const navbarHeight = isMobile ? 70 : 80;

  return (
    <section 
      id="home"
      style={{
        position: 'relative',
        minHeight: '120vh', 
          paddingTop: `${navbarHeight}px`,
        display: 'flex',
        alignItems: 'center',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      {/* Hero Image as Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: isMobile ? '100vh' : '112rem',
        zIndex: 0,
      }}>
        {/* Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          height: '[90rem]',
          padding: `50px`,
          backgroundImage: 'url(/kunal-photo.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'center center' : 'center right',
          backgroundRepeat: 'no-repeat',
        }} />

        {/* Gradient Overlays - Lighter to show image better */}
        {/* Left fade to blend with content */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: isMobile 
  ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.75) 100%)'
  : 'linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)',
        }} />

        {/* Neon glow overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(196, 0, 255, 0.08) 100%)',
          mixBlendMode: 'overlay',
        }} />

        {/* Animated neon edge glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(180deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
            boxShadow: '0 0 30px rgba(0, 102, 255, 0.8), 0 0 60px rgba(196, 0, 255, 0.6)',
          }}
        />
      </div>

      {/* Cinematic Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Large Neon Orb - Left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '-10%',
            width: isMobile ? '400px' : '600px',
            height: isMobile ? '400px' : '600px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        {/* Large Neon Orb - Center */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '30%',
            left: '30%',
            width: isMobile ? '300px' : '500px',
            height: isMobile ? '300px' : '500px',
            background: 'radial-gradient(circle, rgba(196, 0, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(120px)',
          }}
        />

        {/* Floating Geometric Shapes */}
        {!isMobile && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              border: '2px solid',
              borderColor: i % 2 === 0 ? 'rgba(0, 102, 255, 0.3)' : 'rgba(196, 0, 255, 0.3)',
              borderRadius: i % 3 === 0 ? '50%' : '0',
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
          }} />
        )}
      </div>

      {/* Main Content */}
      <div style={{ 
        position: 'relative', 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1.5rem' : '0 2rem',
        width: '100%',
        zIndex: 1,
        paddingTop: `${navbarHeight}px`,
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          minHeight: `calc(100vh - ${navbarHeight}px)`,
        }}>
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '24px' : '32px',
              maxWidth: isMobile ? '100%' : '700px',
              width: '100%',
              paddingRight: isMobile ? '0' : '4rem',
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: isMobile ? '8px 16px' : '10px 20px',
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(196, 0, 255, 0.15) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.4)',
                borderRadius: '50px',
                maxWidth: 'fit-content',
                boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FiStar style={{ color: '#0066FF', width: isMobile ? '16px' : '18px', height: isMobile ? '16px' : '18px' }} />
              </motion.div>
              <span style={{ 
                color: '#0066FF', 
                fontWeight: '600', 
                fontSize: isMobile ? '11px' : '13px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.5px',
              }}>
                Content Creation Club • PW IOI
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: isMobile ? 'clamp(36px, 10vw, 48px)' : 'clamp(42px, 6vw, 65px)',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  fontFamily: 'Baloo 2, Poppins, sans-serif',
                  marginBottom: isMobile ? '16px' : '22px',
                }}
              >
                <span style={{ color: 'white' }}>Vote for </span>
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 25%, #C400FF 50%, #8B5CF6 75%, #0066FF 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 0 40px rgba(0, 102, 255, 0.5))',
                  }}
                >
                  Kunal
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  fontSize: isMobile ? 'clamp(15px, 4vw, 18px)' : 'clamp(18px, 2vw, 20px)',
                  color: '#E6F0FF',
                  lineHeight: '1.7',
                  fontFamily: 'Inter, sans-serif',
                  maxWidth: isMobile ? '100%' : '600px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                }}
              >
                Creative storyteller | Video editor | Content strategist bringing 
                <span style={{ 
                  color: '#0066FF', 
                  fontWeight: '700',
                  margin: '0 6px',
                }}>
                  innovation
                </span> 
                and 
                <span style={{ 
                  color: '#C400FF', 
                  fontWeight: '700',
                  margin: '0 6px',
                }}>
                  passion
                </span>
                to every frame.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex',
                gap: isMobile ? '12px' : '20px',
                flexWrap: 'wrap',
              }}
            >
              {/* Primary CTA */}
              <motion.a
                href="#contact"
onClick={(e) => {
  e.preventDefault();
  window.open('https://chat.whatsapp.com/DiPijogvuHVGHllGMTlT8F', '_blank');
}}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(196, 0, 255, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: isMobile ? '14px 28px' : '18px 40px',
                  background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
                  borderRadius: '50px',
                  fontWeight: '700',
                  color: 'white',
                  fontSize: isMobile ? '15px' : '17px',
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 40px rgba(0, 102, 255, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>Join us</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <FiArrowRight size={isMobile ? 18 : 22} />
                </motion.div>
                {/* Shimmer */}
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

              {/* Secondary CTA */}
              {/* <motion.a
                href="#work"
                onClick={handleExploreClick}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(0, 102, 255, 0.8)',
                  background: 'rgba(0, 102, 255, 0.15)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: isMobile ? '14px 28px' : '18px 40px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '50px',
                  fontWeight: '700',
                  color: 'white',
                  fontSize: isMobile ? '15px' : '17px',
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Work
                <FiPlay size={isMobile ? 16 : 20} />
              </motion.a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            zIndex: 2,
          }}
        >
          <span style={{
            color: '#6B7280',
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '24px',
              height: '36px',
              border: '2px solid rgba(0, 102, 255, 0.5)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '4px',
                height: '8px',
                background: 'linear-gradient(180deg, #0066FF, #C400FF)',
                borderRadius: '2px',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;