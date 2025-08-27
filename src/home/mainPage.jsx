import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import IntroSection from '../components/introSection';
import OurServices from '../components/Servicehome';
import Brands from '../components/Brands';
import GrowthSection from '../components/GrowthSection';
import Contact from '../components/Contact';
import TrustedCompanies from '../components/TrustedCompanies';
import thumb1 from '../assets/thumb_1.png'
import thumb2 from '../assets/thumb_2.png'
import thumb3 from '../assets/thumb_3.png'
import thumb4 from '../assets/thumb_4.png'
import thumb5 from '../assets/thumb_5.png'
const Main = () => {
  const handleGetStarted = () => {
    console.log('Navigate to about page');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array ensures it runs only once
  return (
    <div className=" overflow-hidden">
      {/* Hero Section */}
            <section className="bg-gradient-to-tl to-orange-100 via-orange-100 from-slate-50 relative overflow-hidden pt-25 pb-8 lg:pt-24 lg:pb-10" style={{ minHeight: '75vh' }}>
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full animate-float opacity-30 md:top-20 md:left-10"></div>
        <div className="absolute top-20 right-5 w-12 h-12 sm:w-16 sm:h-16 bg-orange-400 rounded-full animate-float delay-200 opacity-40 md:top-70 md:right-15   "></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-orange-300 rounded-full animate-float delay-400 opacity-20 md:bottom-32"></div>
        <div className="absolute bottom-16 right-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-orange-200 rounded-full animate-float delay-600 opacity-30 md:bottom-20 md:right-1/3"></div>
    </div>

    <div className="px-4 sm:px-6 md:px-12 lg:px-20 mx-auto h-full flex items-center relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 ">
                <div className="opacity-0 animate-fadeInUp">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-orange-100 border  text-orange-600 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        Marketing + Technology Expert
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Transform Your
                        <span className="text-orange-500"> Digital</span>
                        Presence
                    </h1>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fadeInUp delay-200 max-w-md lg:max-w-lg">
                    Strategic marketing solutions powered by cutting-edge technology to accelerate your business growth and maximize ROI.
                </p>

                <div className="flex flex-row gap-3 sm:gap-4 opacity-0 animate-fadeInUp delay-400">
                    <button className="group relative bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                        <span className="flex items-center justify-center">
                            <FaEnvelope className="mr-2 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                            Contact Us
                        </span>
                    </button>
                    <button className="group relative border-2 border-orange-500 text-orange-500 hover:text-orange-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
                        <span className="flex items-center justify-center">
                            <FaInfoCircle className="mr-2 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                            Know Us
                        </span>
                    </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 md:gap-8 pt-6 md:pt-8 opacity-0 animate-fadeInUp delay-600">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-orange-500">150+</div>
                        <div className="text-xs sm:text-sm text-gray-700">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-orange-500">98%</div>
                        <div className="text-xs sm:text-sm text-gray-700">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-orange-500">5x</div>
                        <div className="text-xs sm:text-sm text-gray-700">Average ROI Increase</div>
                    </div>
                </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative opacity-0 animate-fadeInUp delay-400 mt-8 lg:mt-0">
                <div className="relative">
                    {/* Main Card */}
                    <div className="p-6 sm:p-8 md:p-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4"></div>

                            {/* Image Grid with Responsive Positioning */}
                            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                                <img src={thumb1} alt="Image 1" className="absolute top-0 left-0 w-full h-full object-contain rounded-lg" />
                                <img src={thumb2} alt="Image 2" className="absolute bottom-0 left-10 sm:left-12 w-24 sm:w-28 h-32 sm:h-50 object-contain rounded-lg" />
                                <img src={thumb3} alt="Image 3" className="absolute top-33 left-30 md:left-40 lg:top-50 lg:left-50 w-20 sm:w-24 h-32 sm:h-50 object-contain rounded-lg" />
                                <img src={thumb4} alt="Image 4" className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-20 sm:w-24 h-20 sm:h-24 object-contain rounded-lg" />
                                <img src={thumb5} alt="Image 5" className="absolute top-4 left-4 w-20 sm:w-24 h-20 sm:h-24 object-contain rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>

                    <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float delay-200">
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-orange-500">4.9</div>
                            <div className="text-xs text-gray-500">Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      <OurServices />
      <IntroSection />
      <Brands />
      <GrowthSection />
   <TrustedCompanies />
   
    <Contact />
    
    </div>
  );
};

export default Main;