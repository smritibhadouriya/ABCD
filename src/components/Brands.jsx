import { useState, useEffect, useRef } from "react";
import { brands } from "../Data/Brands";
import BrandCard from "./BrandCard";

const Brands = () => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    // Auto-scroll hint on mount
    setTimeout(() => {
      container.scrollBy({ left: 50, behavior: "smooth" });
      setTimeout(() => {
        container.scrollBy({ left: -50, behavior: "smooth" });
      }, 1000);
    }, 2000);

    // Update active dot based on scroll position
    const updateActiveDot = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.8; // Approximate card width
      const index = Math.round(scrollPosition / cardWidth);
      setActiveDot(Math.min(index, brands.length - 1));
    };

    container.addEventListener("scroll", updateActiveDot);
    return () => container.removeEventListener("scroll", updateActiveDot);
  }, []);

  return (
    <div className="py-8 sm:py-12 bg-gray-50 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Our <span className="text-orange-500">Products</span>
      </h2>

      {/* Scroll Indicator */}
      <div className="flex items-center justify-end mb-6">
        <span className="text-gray-500 mr-3">View All</span>
        <div className="scroll-hint flex items-center">
          <svg
            className="w-6 h-6 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="brand-container flex gap-3 sm:gap-4 overflow-x-auto p-4 sm:p-6 snap-x snap-mandatory scrollbar-none hover:scroll-smooth"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex-shrink-0 snap-start w-80 animate-fade-in-up"
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
        {/* Gradient overlay */}
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    
    </div>
  );
};

export default Brands;