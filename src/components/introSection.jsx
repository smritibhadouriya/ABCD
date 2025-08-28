import React from 'react';

const IntroSection = () => {
  return (
    <div className="bg-slate-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl  font-bold text-gray-900">
                Leading{' '}
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Marketing & Tech
                </span>{' '}
                Solutions
              </h1>
            </div>

       <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
  <p className="transform hover:translate-x-2 transition-transform duration-300">
    At 
    <span className="font-semibold text-orange-600 mx-1">Marcadeo</span>, 
    we empower businesses with a perfect blend of marketing expertise and cutting-edge technology. 
    From building impactful digital campaigns to developing scalable software solutions, 
    we help brands grow faster and smarter.
  </p>

  <p className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
    Whether it’s driving customer engagement, optimizing digital presence, 
    or engineering custom tech solutions — we provide flexibility, transparency, 
    and full control, just like your in-house team. 
    Our collaborative approach ensures that every strategy we build 
    aligns with your long-term vision and business goals.
  </p>

  <p className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
    Our deep business insights, marketing strategies, and technical expertise 
    deliver high-value solutions that fuel sustainable growth. 
    That’s why Marcadeo is trusted as one of{' '}
    <span className="font-semibold text-orange-600 mx-1">
      India’s top Marketing & Technology solution providers.
    </span>
    Beyond execution, we continuously track performance, refine strategies, 
    and adapt to changing market trends — ensuring that your brand always stays ahead.
  </p>

  <p className="transform hover:translate-x-2 transition-transform duration-300 delay-300">
    With us, you don’t just get a service provider — 
    you gain a growth partner who is committed to innovation, measurable results, 
    and long-lasting impact in today’s competitive digital landscape.
  </p>
</div>

          </div>

          {/* Right Images Grid */}
          <div className="relative mt-8 lg:mt-0">
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-br from-blue-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {/* Main large image */}
              <div className="col-span-2 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-blue-500 to-orange-600">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    alt="Team Meeting"
                    className="w-full h-32 sm:h-48 md:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">Collaborative Growth</h3>
                    <p className="text-xs sm:text-sm opacity-90 hidden sm:block">Where marketing meets technology</p>
                  </div>
                </div>
              </div>

              {/* Top right image */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent group-hover:from-purple-900/20 transition-all duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                    alt="Development Team"
                    className="w-full h-32 md:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-white">
                    <p className="text-xs sm:text-sm font-medium">Smart Technology</p>
                  </div>
                </div>
              </div>

              {/* Bottom right image */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent group-hover:from-orange-900/20 transition-all duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Strategic Planning"
                    className="w-full h-32 md:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-white">
                    <p className="text-xs sm:text-sm font-medium">Marketing Strategy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-xs text-gray-600">Campaigns & Projects</div>
                </div>
                <div className="w-px h-5 sm:h-10 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-600">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;