"use client"
import React, { useState, useEffect } from 'react';
import { Send, User, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen  bg-black flex items-center justify-center px-4 relative overflow-hidden">

        
        <div className="max-w-md w-full relative z-10">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl rounded-3xl p-10 text-center border border-gray-600 shadow-2xl animate-success-bounce">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-success-pulse shadow-lg shadow-green-500/50">
                <svg className="w-12 h-12 text-white animate-check-draw" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 animate-text-glow">Message Sent Successfully! ✨</h3>
            <p className="text-[#aaaaaa] text-lg animate-fade-in-up delay-300">Thank you for reaching out! We'll get back to you within 24 hours.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 relative overflow-hidden w-full">
      {/* Dynamic Mouse Follower */}
      <div 
        className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 transition-all duration-300 animate-pulse"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: focusedField ? 'scale(2)' : 'scale(1)'
        }}
      ></div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute top-2/3 right-1/5 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-morph-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl font-black text-white mb-6 animate-title-reveal tracking-tight relative">
             Contact us
            </h2>
            <div className="absolute -top-4 -right-4 animate-bounce">
              <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
            </div>
          </div>
          <p className="text-xl text-[#eaeaea] max-w-2xl mx-auto animate-subtitle-slide leading-relaxed">
            Let's create something amazing together! Share your ideas with us.
          </p>
        </div>

        {/* Enhanced Contact Form */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700 shadow-2xl animate-form-rise relative overflow-hidden">
          {/* Form Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          </div>
          
          <div className="space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Enhanced Name Field */}
              <div className="group">
                <label className="block text-[#eaeaea] text-sm font-bold mb-4 animate-label-slide-right tracking-wide uppercase">
                  Full Name 
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className="w-full bg-black/70 border-2 border-gray-600 rounded-2xl px-8 py-5 pl-16 text-white text-lg placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-700 group-hover:bg-black/90 group-hover:border-gray-500 transform hover:scale-[1.02] animate-input-slide-right group-hover:shadow-lg group-hover:shadow-white/10"
                    placeholder="Enter your amazing name"
                  />
                  <User className={`absolute left-5 top-5 w-7 h-7 transition-all duration-700 ${
                    focusedField === 'name' ? 'text-white scale-125 animate-bounce' : 'text-gray-400'
                  }`} />
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
                    focusedField === 'name'
                  }`}></div>
                </div>
              </div>

              {/* Enhanced Email Field */}
              <div className="group">
                <label className="block text-[#eaeaea] text-sm font-bold mb-4 animate-label-slide-left tracking-wide uppercase">
                  Email Address 
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className="w-full bg-black/70 border-2 border-gray-600 rounded-2xl px-8 py-5 pl-16 text-white text-lg placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-700 group-hover:bg-black/90 group-hover:border-gray-500 transform hover:scale-[1.02] animate-input-slide-left group-hover:shadow-lg group-hover:shadow-white/10"
                    placeholder="your.email@awesome.com"
                  />
                  <Mail className={`absolute left-5 top-5 w-7 h-7 transition-all duration-700 ${
                    focusedField === 'email' ? 'text-white scale-125 animate-bounce' : 'text-gray-400'
                  }`} />
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
                    focusedField === 'email' 
                  }`}></div>
                </div>
              </div>
            </div>

            {/* Enhanced Subject Field */}
            <div className="group">
              <label className="block text-[#eaeaea] text-sm font-bold mb-4 animate-label-slide-up tracking-wide uppercase">
                Subject 
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-black/70 border-2 border-gray-600 rounded-2xl px-8 py-5 pl-16 text-white text-lg placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-700 group-hover:bg-black/90 group-hover:border-gray-500 transform hover:scale-[1.02] animate-input-slide-up group-hover:shadow-lg group-hover:shadow-white/10"
                  placeholder="What's your brilliant idea about?"
                />
                <MessageSquare className={`absolute left-5 top-5 w-7 h-7 transition-all duration-700 ${
                  focusedField === 'subject' ? 'text-white scale-125 animate-bounce' : 'text-gray-400'
                }`} />
                <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
                  focusedField === 'subject' 
                }`}></div>
              </div>
            </div>

            {/* Enhanced Message Field */}
            <div className="group">
              <label className="block text-[#eaeaea] text-sm font-bold mb-4 animate-label-slide-up tracking-wide uppercase">
                Your Message 
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows="7"
                  className="w-full bg-black/70 border-2 border-gray-600 rounded-2xl px-8 py-6 pl-16 text-white text-lg placeholder-gray-400 focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-700 resize-none group-hover:bg-black/90 group-hover:border-gray-500 transform hover:scale-[1.01] animate-textarea-slide-up group-hover:shadow-lg group-hover:shadow-white/10"
                  placeholder="Tell us about your amazing project, dreams, or just say hello! We love hearing from creative minds like yours..."
                ></textarea>
                <MessageSquare className={`absolute left-5 top-6 w-7 h-7 transition-all duration-700 ${
                  focusedField === 'message' ? 'text-white scale-125 animate-bounce' : 'text-gray-400'
                }`} />
                <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
                  focusedField === 'message' ? 'bg-gradient-to-r from-white/30 via-white/10 to-red-500/20 animate-pulse' : 'bg-transparent'
                }`}></div>
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:from-white hover:via-gray-100 hover:to-gray-200 text-white hover:text-black font-black py-6 px-10 rounded-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-4 group relative overflow-hidden animate-button-rise"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  {isSubmitting ? (
                    <>
                      <div className="w-7 h-7 border-3 border-current border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xl font-bold animate-pulse">Sending Your Awesome Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-7 h-7 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 animate-bounce-subtle" />
                      <span className="text-xl font-bold cursor-pointer">Send My Message </span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
          
        </div>
         {/* Center Tagline Section */}
          <div className="text-center mb-12 sm:mb-16 px-2 lg:mt-18">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-wide sm:tracking-wider">
              IDEATE • DESIGN • BUILD • SECURE
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#aaaaaa] leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-3xl mx-auto px-2">
              We're a diverse and passionate team that takes ownership of your project and delivers results.
            </p>
            <button className="w-full sm:w-auto bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-md transition-colors duration-300 text-base sm:text-lg">
              Contact Sales!
            </button>
          </div>
      </div>

      <style jsx>{`
        @keyframes title-reveal {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes letter-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes subtitle-slide {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes form-rise {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes label-slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes label-slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes label-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes input-slide-right {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes input-slide-left {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes input-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes textarea-slide-up {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes button-rise {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes morph {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          25% {
            transform: scale(1.2) rotate(90deg);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          50% {
            transform: scale(0.8) rotate(180deg);
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          }
          75% {
            transform: scale(1.1) rotate(270deg);
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
          }
        }
        
        @keyframes morph-delayed {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          33% {
            transform: scale(1.3) rotate(120deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          66% {
            transform: scale(0.7) rotate(240deg);
            border-radius: 30% 60% 70% 40% / 30% 60% 40% 70%;
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes success-bounce {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(100px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
          }
        }
        
        @keyframes success-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
        }
        
        @keyframes check-draw {
          0% {
            stroke-dasharray: 0 100;
          }
          100% {
            stroke-dasharray: 100 0;
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-title-reveal {
          animation: title-reveal 1.5s ease-out;
        }
        
        .animate-letter-float {
          animation: letter-float 2s ease-in-out infinite;
        }
        
        .animate-subtitle-slide {
          animation: subtitle-slide 1s ease-out 0.5s both;
        }
        
        .animate-form-rise {
          animation: form-rise 1.2s ease-out 0.8s both;
        }
        
        .animate-label-slide-right {
          animation: label-slide-right 0.8s ease-out 1s both;
        }
        
        .animate-label-slide-left {
          animation: label-slide-left 0.8s ease-out 1.1s both;
        }
        
        .animate-label-slide-up {
          animation: label-slide-up 0.8s ease-out 1.2s both;
        }
        
        .animate-input-slide-right {
          animation: input-slide-right 0.8s ease-out 1.3s both;
        }
        
        .animate-input-slide-left {
          animation: input-slide-left 0.8s ease-out 1.4s both;
        }
        
        .animate-input-slide-up {
          animation: input-slide-up 0.8s ease-out 1.5s both;
        }
        
        .animate-textarea-slide-up {
          animation: textarea-slide-up 0.8s ease-out 1.6s both;
        }
        
        .animate-button-rise {
          animation: button-rise 0.8s ease-out 1.7s both;
        }
        
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        
        .animate-morph-delayed {
          animation: morph-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-success-bounce {
          animation: success-bounce 1s ease-out;
        }
        
        .animate-success-pulse {
          animation: success-pulse 2s ease-in-out infinite;
        }
        
        .animate-check-draw {
          animation: check-draw 1s ease-out 0.5s both;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .delay-0 { animation-delay: 0s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}