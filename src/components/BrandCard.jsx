import React, { useState } from 'react'

const BrandCard = ({ brand }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="brand-card w-[300px] flex-shrink-0 mx-4 transition-all duration-300"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="card-inner relative w-full h-[200px] perspective-1000">
        <div className="absolute w-full h-full transform-style-preserve-3d transition-transform duration-700">
          {/* Front Side */}
          <div className="card-front absolute w-full h-full flex flex-col items-center justify-center p-4 bg-[#FFF7ED] rounded-lg shadow-lg backface-hidden">
            <img src={brand.logo} alt={`${brand.name} logo`} className="w-30 h-20 rounded-3xl object-contain transition-transform duration-300 hover:scale-110" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">{brand.name}</h3>
            <div className="w-25 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">Marcadeo</div>
          </div>
          {/* Back Side */}
          <div className="card-back absolute w-full h-full flex flex-col items-center justify-center p-6 bg-[#FFF7ED] rounded-lg shadow-lg backface-hidden rotate-y-180">
            <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4 text-center">About {brand.name}</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center line-clamp-3">{brand.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard