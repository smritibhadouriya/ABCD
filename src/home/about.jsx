import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaStar, FaUsers } from 'react-icons/fa';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import fundsindia from '../assets/clients/fundsindia.png';
import hdfc from '../assets/clients/hdfc.png';
import imbue from '../assets/clients/imbue.png';
import kotak from '../assets/clients/kotak.png';
import myntra from '../assets/clients/myntra.png';
import nature4nature from '../assets/clients/nature4nature.png';
import PaySense from '../assets/clients/PaySense.png';
import shemaroo from '../assets/clients/shemaroo.png';
import woman from '../assets/clients/woman.png';
import woo from '../assets/clients/woo.png';
import zigly from '../assets/clients/zigly.png';

import vision from '../assets/vision.jpg'
import mission from '../assets/mission.jpg'
import { useNavigate } from 'react-router-dom';
// Client logos array
const clients = [
  { id: 1, name: 'FundsIndia', logo: fundsindia },
  { id: 2, name: 'HDFC', logo: hdfc },
  { id: 3, name: 'Imbue', logo: imbue },
  { id: 4, name: 'Kotak', logo: kotak },
  { id: 5, name: 'Myntra', logo: myntra },
  { id: 6, name: 'Nature4Nature', logo: nature4nature },
  { id: 7, name: 'PaySense', logo: PaySense },
  { id: 8, name: 'Shemaroo', logo: shemaroo },
  { id: 9, name: 'Woman', logo: woman },
  { id: 10, name: 'Woo', logo: woo },
  { id: 11, name: 'Zigly', logo: zigly },
];

// Company values
const values = [
  { id: 1, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions.', icon: <FaRocket /> },
  { id: 2, title: 'Excellence', description: 'Delivering top-quality results every time.', icon: <FaStar /> },
  { id: 3, title: 'Collaboration', description: 'Working together to achieve shared goals.', icon: <FaUsers /> },
];

// Sample projects with details
const projects = [
  { id: 1, title: 'E-Commerce Platform', description: 'A scalable online store with seamless user experience.', image: 'https://via.placeholder.com/400x300?text=Project1' },
  { id: 2, title: 'Mobile App Launch', description: 'A feature-rich mobile app for enhanced customer engagement.', image: 'https://via.placeholder.com/400x300?text=Project2' },
  { id: 3, title: 'Web Development', description: 'Custom websites tailored to business needs.', image: 'https://via.placeholder.com/400x300?text=Project3' },
];

const About = () => {
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array ensures it runs only once

  const navigate = useNavigate();
  return (
<div className="bg-white font-sans">
          {/* Hero Section */}
          <section className="bg-gradient-to-tl to-orange-100 via-orange-50 from-slate-50 relative overflow-hidden h-[90vh] md:h-[65vh] lg:h-[calc(75vh-4rem)]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-orange-500 rounded-full animate-float opacity-30"></div>
              <div className="absolute top-16 sm:top-24 right-4 sm:right-12 w-14 sm:w-20 h-14 sm:h-20 bg-orange-400 rounded-full animate-float delay-200 opacity-40"></div>
              <div className="absolute bottom-24 sm:bottom-32 left-1/4 w-10 sm:w-14 h-10 sm:h-14 bg-orange-500 rounded-full animate-float delay-400 opacity-25"></div>
              <div className="absolute bottom-16 sm:bottom-20 right-1/4 w-12 sm:w-18 h-12 sm:h-18 bg-orange-200 rounded-full animate-float delay-600 opacity-45"></div>
              {/* Achievement Icons Floating */}
              <div className="absolute top-1/4 right-4 sm:right-8 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float delay-800 opacity-80">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div className="absolute bottom-1/3 left-4 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float opacity-80">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="absolute top-1/2 right-1/4 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float delay-400 opacity-80">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-center relative z-10">
              <div className="text-center max-w-full sm:max-w-5xl">
                <div className="opacity-0 animate-fadeInUp">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                    Bridging
                    <span className="text-orange-500"> Marketing </span>
                    & Technology
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fadeInUp delay-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
                  With over 8 years of experience, we've helped 150+ businesses transform their digital presence through strategic marketing and innovative technology solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-slate-50">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8"
              >
                Imagine, <span>Build,</span> Inspire
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto"
              >
                Crafting innovative digital experiences that connect and inspire.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {[
                  { stat: "2018", label: "Founded", isStatic: true },
                  { stat: 375, label: "Happy Clients", suffix: "+" },
                  { stat: 1500, label: "Projects Completed", suffix: "+" },
                  { stat: 695, label: "Ongoing Projects", suffix: "+" },
                ].map((item, index) => {
                  const [ref, inView] = useInView({ triggerOnce: true });
                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="text-center"
                    >
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        {item.isStatic ? (
                          item.stat
                        ) : inView ? (
                          <CountUp end={item.stat} duration={1} suffix={item.suffix || ""} />
                        ) : (
                          "0"
                        )}
                      </p>
                      <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-slate-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">Turning <span className="text-orange-500">Ideas Into</span> Impact</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
  At Marcadeo, we prioritize meaningful customer interactions and long-term partnerships that drive lasting value. 
  Our team of skilled professionals combines creativity, strategy, and technology to deliver innovative digital marketing 
  solutions that help businesses stand out in competitive markets. By blending data-driven insights with fresh ideas, 
  we craft campaigns that engage audiences, strengthen brand presence, and accelerate growth. 

  With advanced tools and a deep commitment to quality, we empower businesses to embrace digital transformation with confidence. 
  From boosting online visibility and optimizing customer journeys to implementing smart automation and future-ready strategies, 
  our goal is to help brands thrive in today’s fast-changing digital landscape while building a foundation for sustainable success. 
</p>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <img
                  src={vision}
                  alt="Vision"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-slate-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">Our Mission <span className="text-orange-500">& Vision</span></h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our success is defined by how we connect and engage with our clients. Guided by innovation, integrity, and collaboration, we deliver high-quality technology and digital marketing solutions that empower businesses to thrive.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700 text-base sm:text-lg">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span> Providing smart, results-driven digital marketing and IT strategies.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span> Continuously improving to achieve excellence and measurable impact.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span> Understanding and exceeding client expectations.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <img
                  src={mission}
                  alt="Mission"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          {/* Clients Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8 sm:mb-12">Our <span className="text-orange-500">Clients</span></h2>
            <div className="overflow-hidden relative max-w-6xl mx-auto">
              <motion.div
                className="flex"
                animate={{
                  x: ['0%', '-50%'],
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 15,
                      ease: 'linear',
                    },
                  },
                }}
                style={{ width: '200%' }}
              >
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 mx-3 sm:mx-6 flex items-center justify-center"
                    style={{ width: '120px', height: '60px', minWidth: '120px' }}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-bl to-orange-100 via-orange-50 from-slate-50 relative overflow-hidden py-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 overflow-hidden"
            >
              <div className="absolute top-[10%] left-[5%] w-12 sm:w-16 h-12 sm:h-16 bg-orange-500 rounded-full animate-float opacity-30"></div>
              <div className="absolute top-[20%] right-[10%] w-14 sm:w-20 h-14 sm:h-20 bg-orange-400 rounded-full animate-float delay-200 opacity-40"></div>
              <div className="absolute bottom-[30%] left-[25%] w-10 sm:w-14 h-10 sm:h-14 bg-orange-500 rounded-full animate-float delay-400 opacity-25"></div>
              <div className="absolute bottom-[20%] right-[25%] w-12 sm:w-18 h-12 sm:h-18 bg-orange-200 rounded-full animate-float delay-600 opacity-45"></div>
            </motion.div>
            <div className="relative z-10 text-center py-12 sm:py-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">Let’s <span className="text-orange-500">Build Something</span> Great</h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
                Transform your vision with our expertise in tech and innovation.
              </p>
              <button
                type="button"
                aria-label="Contact us to start a project"
                 onClick={() => navigate("/contact")}
                className="bg-white text-orange-500 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-md"
              >
                Get in Touch
              </button>
            </div>
          </section>
        </div>
  );
};

export default About;