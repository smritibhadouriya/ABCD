import React, { useEffect, useRef } from 'react';
import ServiceCard from '../components/Servicecard';
import { servicesData } from '../Data/Service';
const OurServices = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // empty dependency array ensures it runs only once
  return (
    <>
    <div className="min-h-screen bg-slate-50">
  <section className="bg-gradient-to-tl to-orange-100 via-orange-50  from-slate-50 relative overflow-hidden h-[85vh] md:h-[65vh] lg:h-[calc(75vh-4rem)]" >
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-16 left-8 w-16 h-16 bg-orange-500 rounded-full animate-float opacity-30"></div>
    <div className="absolute top-32 right-16 w-20 h-20 bg-orange-400 rounded-full animate-float delay-200 opacity-40"></div>
    <div className="absolute bottom-40 left-1/4 w-14 h-14 bg-orange-500 rounded-full animate-float delay-400 opacity-25"></div>
    <div className="absolute bottom-24 right-1/4 w-18 h-18 bg-orange-300 rounded-full animate-float delay-600 opacity-45"></div>

    {/* Achievement Icons Floating */}
    <div className="absolute top-1/4 right-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float delay-800 opacity-80">
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    </div>

    <div className="absolute bottom-1/3 left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float opacity-80">
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>

    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float delay-400 opacity-80">
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    </div>
  </div>

  <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
    <div className="text-center max-w-5xl">
      <div className="opacity-0 animate-fadeInUp">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Our <span className="text-orange-500">Services</span>
        </h1>
      </div>

      <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed opacity-0 animate-fadeInUp delay-200 mb-8 max-w-4xl mx-auto">
        Discover our wide range of marketing and technology services — from SEO, social media, and branding 
        to web development, custom software, and automation. 
        We craft solutions that help businesses grow, innovate, and succeed.
      </p>
    </div>
  </div>
</section>

      {/* Header Section 
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl font-extrabold my-4 text-gray-900">
            Our <span className="text-orange-500">Services</span>
          </h1>
        </div>
      </div>*/}

      {/* Services Grid */}
      <main className="px-6 pt-10 pb-16 lg:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </main>

      {/* CTA Button 
      <div className="max-w-4xl mx-auto text-center px-6 pb-12">
        <button 
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        >
          View All Services
        </button>
      </div>*/}
    </div>
    </>
  );
};

export default OurServices;