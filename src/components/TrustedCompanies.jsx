import React from 'react';
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

// Array of company logo objects with src and alt text
const companyLogos = [
  { id: 1, src: fundsindia, alt: 'FundsIndia Logo' },
  { id: 2, src: hdfc, alt: 'HDFC Logo' },
  { id: 3, src: imbue, alt: 'Imbue Logo' },
  { id: 4, src: kotak, alt: 'Kotak Logo' },
  { id: 5, src: myntra, alt: 'Myntra Logo' },
  { id: 6, src: nature4nature, alt: 'Nature4Nature Logo' },
  { id: 7, src: PaySense, alt: 'PaySense Logo' },
  { id: 8, src: shemaroo, alt: 'Shemaroo Logo' },
  { id: 9, src: woman, alt: 'Woman Logo' },
  { id: 10, src: woo, alt: 'Woo Logo' },
  { id: 11, src: zigly, alt: 'Zigly Logo' },
];

const TrustedCompanies = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
        Trusted by leading companies
      </p>
      <div className="overflow-hidden w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        <div className="flex animate-scroll gap-4 sm:gap-6">
          {[...companyLogos, ...companyLogos].map((logo, i) => (
            <img
              key={`${logo.id}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="w-20 sm:w-24 md:w-35 h-10 sm:h-12 md:h-20 object-contain rounded-lg mx-2 sm:mx-3 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;