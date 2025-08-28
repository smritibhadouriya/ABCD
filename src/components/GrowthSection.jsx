import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Growth from '../assets/growth.png'

const GrowthSection = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
      <div className=" flex grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        
        {/* Left Side - Illustration */}
        <div className="flex-1/3 justify-center">
          <img
            src={Growth}
            alt="Marketing Tech Solutions"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="mt-6 lg:mt-0 flex-2/3">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4 sm:mb-6">
            Why <span className="text-orange-500">Choose</span> Us?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            We combine creativity and technology to help your brand grow. 
            From digital marketing to custom tech solutions, we deliver strategies 
            that drive engagement, innovation, and measurable results.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {/* Point 1 */}
            <div>
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-800">
                <FaCheckCircle className="text-purple-600" /> Digital Marketing
              </h3>
              <p className="text-gray-600 ml-7 text-sm sm:text-base">
                Build a powerful online presence with SEO, social media, and performance-driven campaigns designed to reach the right audience.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-800">
                <FaCheckCircle className="text-purple-600" /> Technology Solutions
              </h3>
              <p className="text-gray-600 ml-7 text-sm sm:text-base">
                Transform your business with modern web & mobile applications, automation tools, and AI-powered solutions tailored to your goals.
              </p>
            </div>

            {/* Point 3 */}
            <div>
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-800">
                <FaCheckCircle className="text-purple-600" /> Data-Driven Insights
              </h3>
              <p className="text-gray-600 ml-7 text-sm sm:text-base">
                Harness analytics and reporting to make smarter decisions, optimize campaigns, and drive long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;