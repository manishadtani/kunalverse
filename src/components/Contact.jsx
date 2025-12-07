// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';
// import { FaWhatsapp } from 'react-icons/fa';

// const Contact = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     // Validate fields
//     if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
//       alert('Please fill in all fields');
//       return;
//     }
    
//     // Store user data in console (optional - for your records)
//     console.log('New Member Details:', {
//       name: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//       timestamp: new Date().toISOString()
//     });
    
//     // WhatsApp GROUP invite link
//     const whatsappGroupLink = 'https://chat.whatsapp.com/DiPijogvuHVGHllGMTlT8F';
    
//     // Open group link directly
//     window.open(whatsappGroupLink, '_blank');
    
//     // Clear form after submission
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       message: ''
//     });
    
//     // Success message
//     alert('✅ Opening WhatsApp group! Click "Join Group" to complete your registration and connect with the community.');
//   };

//   return (
//     <section
//       id="contact"
//       style={{
//         position: 'relative',
//         minHeight: 'auto',
//         padding: isMobile ? '60px 20px' : '100px 40px',
//         background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Effects */}
//       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
//         {/* Gradient Orbs */}
//         <motion.div
//           animate={{
//             scale: [1, 1.4, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             top: '-20%',
//             right: '-10%',
//             width: isMobile ? '500px' : '800px',
//             height: isMobile ? '500px' : '800px',
//             background: 'radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(80px)',
//           }}
//         />

//         <motion.div
//           animate={{
//             scale: [1.4, 1, 1.4],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             position: 'absolute',
//             bottom: '-20%',
//             left: '-10%',
//             width: isMobile ? '450px' : '700px',
//             height: isMobile ? '450px' : '700px',
//             background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(80px)',
//           }}
//         />

//         {/* Grid Pattern */}
//         {!isMobile && (
//           <div
//             style={{
//               position: 'absolute',
//               inset: 0,
//               backgroundImage:
//                 'linear-gradient(rgba(0, 102, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.02) 1px, transparent 1px)',
//               backgroundSize: '50px 50px',
//               opacity: 0.4,
//             }}
//           />
//         )}

//         {/* Floating Particles */}
//         {!isMobile && [...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -60, 0],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 8 + i,
//               repeat: Infinity,
//               delay: i * 0.7,
//               ease: 'easeInOut',
//             }}
//             style={{
//               position: 'absolute',
//               left: `${10 + i * 12}%`,
//               top: `${30 + (i % 2) * 30}%`,
//               width: '3px',
//               height: '3px',
//               background: i % 2 === 0 ? '#0066FF' : '#8B5CF6',
//               borderRadius: '50%',
//               boxShadow: `0 0 10px ${i % 2 === 0 ? '#0066FF' : '#8B5CF6'}`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div
//         style={{
//           position: 'relative',
//           maxWidth: '1200px',
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
//             marginBottom: isMobile ? '50px' : '70px',
//           }}
//         >
//           {/* Badge */}
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.6, type: 'spring' }}
//             viewport={{ once: false }}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '10px',
//               padding: '10px 20px',
//               background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
//               border: '1px solid rgba(0, 102, 255, 0.4)',
//               borderRadius: '50px',
//               marginBottom: '20px',
//               boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
//             }}
//           >
//             <FiSend style={{ color: '#0066FF' }} size={18} />
//             <span
//               style={{
//                 color: '#0066FF',
//                 fontWeight: '600',
//                 fontSize: '13px',
//                 fontFamily: 'Inter, sans-serif',
//                 letterSpacing: '0.5px',
//                 textTransform: 'uppercase',
//               }}
//             >
//               Get In Touch
//             </span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h2
//             style={{
//               fontSize: isMobile ? '32px' : '48px',
//               fontWeight: '900',
//               fontFamily: 'Baloo 2, Poppins, sans-serif',
//               marginBottom: '16px',
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
//                 background: 'linear-gradient(90deg, #0066FF 0%, #8B5CF6 50%, #C400FF 100%)',
//                 backgroundSize: '200% auto',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 display: 'inline-block',
//               }}
//             >
//               Join Our Community
//             </motion.span>
//           </motion.h2>

//           <motion.p
//             style={{
//               fontSize: isMobile ? '15px' : '18px',
//               color: '#9CA3AF',
//               lineHeight: '1.6',
//               fontFamily: 'Inter, sans-serif',
//               maxWidth: '650px',
//               margin: '0 auto',
//             }}
//           >
//             Fill in your details and connect with us on WhatsApp to join our exclusive creator community
//           </motion.p>
//         </motion.div>

//         {/* Contact Form Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: false, amount: 0.3 }}
//           style={{
//             maxWidth: '700px',
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           {/* Glow Effect */}
//           <div
//             style={{
//               position: 'absolute',
//               inset: '-2px',
//               background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #C400FF)',
//               borderRadius: '24px',
//               filter: 'blur(20px)',
//               opacity: 0.4,
//               zIndex: -1,
//             }}
//           />

//           {/* Form Container */}
//           <div
//             style={{
//               background: 'linear-gradient(135deg, rgba(10, 15, 31, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)',
//               border: '1px solid rgba(0, 102, 255, 0.3)',
//               borderRadius: '24px',
//               padding: isMobile ? '40px 24px' : '50px 40px',
//               backdropFilter: 'blur(20px)',
//               boxShadow: '0 20px 80px rgba(0, 0, 0, 0.5)',
//             }}
//           >
//             {/* Full Name Field */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: false }}
//               style={{ marginBottom: '24px' }}
//             >
//               <label
//                 style={{
//                   display: 'block',
//                   color: '#E5E7EB',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   marginBottom: '10px',
//                   fontFamily: 'Inter, sans-serif',
//                 }}
//               >
//                 Full Name *
//               </label>
//               <div style={{ position: 'relative' }}>
//                 <FiUser
//                   style={{
//                     position: 'absolute',
//                     left: '16px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#6B7280',
//                   }}
//                   size={20}
//                 />
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   style={{
//                     width: '100%',
//                     padding: '14px 16px 14px 48px',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     border: '1px solid rgba(0, 102, 255, 0.3)',
//                     borderRadius: '12px',
//                     color: 'white',
//                     fontSize: '15px',
//                     fontFamily: 'Inter, sans-serif',
//                     outline: 'none',
//                     transition: 'all 0.3s ease',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#0066FF';
//                     e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>
//             </motion.div>

//             {/* Email Field */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: false }}
//               style={{ marginBottom: '24px' }}
//             >
//               <label
//                 style={{
//                   display: 'block',
//                   color: '#E5E7EB',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   marginBottom: '10px',
//                   fontFamily: 'Inter, sans-serif',
//                 }}
//               >
//                 Email Address *
//               </label>
//               <div style={{ position: 'relative' }}>
//                 <FiMail
//                   style={{
//                     position: 'absolute',
//                     left: '16px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#6B7280',
//                   }}
//                   size={20}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your.email@example.com"
//                   style={{
//                     width: '100%',
//                     padding: '14px 16px 14px 48px',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     border: '1px solid rgba(0, 102, 255, 0.3)',
//                     borderRadius: '12px',
//                     color: 'white',
//                     fontSize: '15px',
//                     fontFamily: 'Inter, sans-serif',
//                     outline: 'none',
//                     transition: 'all 0.3s ease',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#0066FF';
//                     e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>
//             </motion.div>

//             {/* Phone Field */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               viewport={{ once: false }}
//               style={{ marginBottom: '24px' }}
//             >
//               <label
//                 style={{
//                   display: 'block',
//                   color: '#E5E7EB',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   marginBottom: '10px',
//                   fontFamily: 'Inter, sans-serif',
//                 }}
//               >
//                 Phone Number *
//               </label>
//               <div style={{ position: 'relative' }}>
//                 <FiPhone
//                   style={{
//                     position: 'absolute',
//                     left: '16px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#6B7280',
//                   }}
//                   size={20}
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+91 98765 43210"
//                   style={{
//                     width: '100%',
//                     padding: '14px 16px 14px 48px',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     border: '1px solid rgba(0, 102, 255, 0.3)',
//                     borderRadius: '12px',
//                     color: 'white',
//                     fontSize: '15px',
//                     fontFamily: 'Inter, sans-serif',
//                     outline: 'none',
//                     transition: 'all 0.3s ease',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#0066FF';
//                     e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>
//             </motion.div>

//             {/* Message Field */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               viewport={{ once: false }}
//               style={{ marginBottom: '32px' }}
//             >
//               <label
//                 style={{
//                   display: 'block',
//                   color: '#E5E7EB',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   marginBottom: '10px',
//                   fontFamily: 'Inter, sans-serif',
//                 }}
//               >
//                 Message *
//               </label>
//               <div style={{ position: 'relative' }}>
//                 <FiMessageSquare
//                   style={{
//                     position: 'absolute',
//                     left: '16px',
//                     top: '16px',
//                     color: '#6B7280',
//                   }}
//                   size={20}
//                 />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us about yourself and why you want to join..."
//                   rows={5}
//                   style={{
//                     width: '100%',
//                     padding: '14px 16px 14px 48px',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     border: '1px solid rgba(0, 102, 255, 0.3)',
//                     borderRadius: '12px',
//                     color: 'white',
//                     fontSize: '15px',
//                     fontFamily: 'Inter, sans-serif',
//                     outline: 'none',
//                     transition: 'all 0.3s ease',
//                     resize: 'vertical',
//                     minHeight: '120px',
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#0066FF';
//                     e.target.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(0, 102, 255, 0.3)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>
//             </motion.div>

//             {/* Submit Button */}
//             <motion.button
//               onClick={handleSubmit}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               viewport={{ once: false }}
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: '0 0 50px rgba(37, 211, 102, 0.6)',
//               }}
//               whileTap={{ scale: 0.98 }}
//               style={{
//                 width: '100%',
//                 padding: isMobile ? '16px' : '18px',
//                 background: 'linear-gradient(135deg, #25D366, #128C7E)',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '12px',
//                 fontSize: isMobile ? '16px' : '18px',
//                 fontWeight: '700',
//                 fontFamily: 'Poppins, sans-serif',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '12px',
//                 boxShadow: '0 10px 40px rgba(37, 211, 102, 0.3)',
//                 position: 'relative',
//                 overflow: 'hidden',
//               }}
//             >
//               <span style={{ position: 'relative', zIndex: 2 }}>
//                 Join WhatsApp Group
//               </span>
//               <FaWhatsapp size={24} style={{ position: 'relative', zIndex: 2 }} />
              
//               {/* Shimmer Effect */}
//               <motion.div
//                 animate={{ x: ['-100%', '200%'] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
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
//             </motion.button>

//             {/* Info Text */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               viewport={{ once: false }}
//               style={{
//                 marginTop: '20px',
//                 textAlign: 'center',
//                 fontSize: '13px',
//                 color: '#9CA3AF',
//                 fontFamily: 'Inter, sans-serif',
//                 lineHeight: '1.6',
//               }}
//             >
//               🔒 Your information is secure. By clicking the button, you'll be redirected to WhatsApp to complete your registration.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* Additional Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: false }}
//           style={{
//             marginTop: isMobile ? '40px' : '60px',
//             textAlign: 'center',
//           }}
//         >
//           <p
//             style={{
//               fontSize: isMobile ? '14px' : '16px',
//               color: '#6B7280',
//               fontFamily: 'Inter, sans-serif',
//               lineHeight: '1.8',
//             }}
//           >
//             Have questions? We're here to help! 💬
//             <br />
//             <span style={{ color: '#0066FF', fontWeight: '600' }}>
//               Response time: Within 2 hours
//             </span>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    console.log('New Member Details:', {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      timestamp: new Date().toISOString()
    });
    
    const whatsappGroupLink = 'https://chat.whatsapp.com/DiPijogvuHVGHllGMTlT8F';
    window.open(whatsappGroupLink, '_blank');
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    
    alert('✅ Opening WhatsApp group! Click "Join Group" to complete your registration and connect with the community.');
  }, [formData]);

  const InputField = useCallback(({ icon: Icon, label, name, type, placeholder, rows }) => {
    const isTextarea = type === 'textarea';
    const InputComponent = isTextarea ? 'textarea' : 'input';
    const isFocused = focusedField === name;
    const hasValue = formData[name]?.length > 0;

    return (
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
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
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {label}
          {hasValue && (
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <FiCheckCircle size={16} style={{ color: '#25D366' }} />
            </motion.span>
          )}
        </label>
        <div style={{ position: 'relative' }}>
          <motion.div
            animate={{
              scale: isFocused ? 1.1 : 1,
              color: isFocused ? '#0066FF' : '#6B7280',
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              left: '16px',
              top: isTextarea ? '16px' : '50%',
              transform: isTextarea ? 'none' : 'translateY(-50%)',
            }}
          >
            <Icon size={20} />
          </motion.div>

          <motion.div
            animate={{
              scale: isFocused ? [1, 1.02, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <InputComponent
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              rows={rows}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              style={{
                width: '100%',
                padding: isTextarea ? '14px 16px 14px 48px' : '14px 16px 14px 48px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: `2px solid ${isFocused ? '#0066FF' : 'rgba(0, 102, 255, 0.3)'}`,
                borderRadius: '14px',
                color: 'white',
                fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                resize: isTextarea ? 'vertical' : 'none',
                minHeight: isTextarea ? '130px' : 'auto',
                boxShadow: isFocused ? '0 0 25px rgba(0, 102, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)' : 'inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            />
          </motion.div>

          {/* Animated border glow */}
          {isFocused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(135deg, #0066FF, #8B5CF6)',
                borderRadius: '14px',
                filter: 'blur(10px)',
                opacity: 0.3,
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      </motion.div>
    );
  }, [formData, focusedField, handleChange]);

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: 'auto',
        padding: isMobile ? '80px 20px' : '120px 60px',
        background: 'linear-gradient(180deg, #0A0F1F 0%, #000000 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Optimized Background Effects */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: isMobile ? '500px' : '800px',
            height: isMobile ? '500px' : '800px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
        />

        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: isMobile ? '450px' : '700px',
            height: isMobile ? '450px' : '700px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
        />

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

        {!isMobile && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -70, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${15 + i * 14}%`,
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
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '60px' : '80px',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              border: '1px solid rgba(0, 102, 255, 0.5)',
              borderRadius: '50px',
              marginBottom: '24px',
              boxShadow: '0 0 30px rgba(0, 102, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiSend style={{ color: '#0066FF' }} size={18} />
            </motion.div>
            <span
              style={{
                color: '#0066FF',
                fontWeight: '600',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Get In Touch
            </span>
          </motion.div>

          {/* Title */}
          <h2
            style={{
              fontSize: isMobile ? '36px' : '52px',
              fontWeight: '900',
              fontFamily: 'Baloo 2, Poppins, sans-serif',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
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
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Animated Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              inset: '-3px',
              background: 'linear-gradient(135deg, #0066FF, #8B5CF6, #C400FF)',
              borderRadius: '28px',
              filter: 'blur(25px)',
              zIndex: -1,
            }}
          />

          {/* Form Container */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 31, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)',
              border: '2px solid rgba(0, 102, 255, 0.4)',
              borderRadius: '24px',
              padding: isMobile ? '40px 24px' : '50px 40px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <InputField
              icon={FiUser}
              label="Full Name *"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
            />

            <InputField
              icon={FiMail}
              label="Email Address *"
              name="email"
              type="email"
              placeholder="your.email@example.com"
            />

            <InputField
              icon={FiPhone}
              label="Phone Number *"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
            />

            <InputField
              icon={FiMessageSquare}
              label="Message *"
              name="message"
              type="textarea"
              placeholder="Tell us about yourself and why you want to join..."
              rows={5}
            />

            {/* Submit Button */}
            <motion.button
              onClick={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 60px rgba(37, 211, 102, 0.7), 0 20px 40px rgba(37, 211, 102, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: isMobile ? '18px' : '20px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                fontSize: isMobile ? '17px' : '19px',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 12px 40px rgba(37, 211, 102, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 2, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                Join WhatsApp Group
              </span>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <FaWhatsapp size={24} />
              </motion.div>
              
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                  transform: 'skewX(-20deg)',
                }}
              />
            </motion.button>

            {/* Info Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
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
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: isMobile ? '50px' : '70px',
            textAlign: 'center',
            padding: isMobile ? '30px 20px' : '40px',
            background: 'rgba(0, 102, 255, 0.05)',
            border: '1px solid rgba(0, 102, 255, 0.2)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ marginBottom: '12px' }}
          >
            <span style={{ fontSize: '32px' }}>💬</span>
          </motion.div>
          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#D1D5DB',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8',
            }}
          >
            Have questions? We're here to help!
            <br />
            <span style={{ color: '#0066FF', fontWeight: '600', textShadow: '0 0 20px rgba(0, 102, 255, 0.5)' }}>
              Response time: Within 2 hours
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;