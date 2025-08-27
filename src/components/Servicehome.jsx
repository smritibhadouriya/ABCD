import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './Servicecard';
import { servicesData } from '../Data/Service';

const OurServices = () => {
  const navigate = useNavigate();

  // Pick 6 random services
  const getRandomServices = (data, count = 6) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomServices = getRandomServices(servicesData, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl  font-extrabold my-3 sm:my-4 text-gray-900">
            Our <span className="text-orange-500">Services</span>
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {randomServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </main>

      {/* CTA Button */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
        <button 
          onClick={() => navigate('/services')}
          className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        >
          View All Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;