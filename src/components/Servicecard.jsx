import React, { useEffect, useRef } from 'react'

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current.classList.add('animate');
          }, index * 150);
        }
      },
      { threshold: 0.1, rootMargin: '0px 25px -25px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const handleClick = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(0.98)';
      setTimeout(() => {
        cardRef.current.style.transform = '';
      }, 150);
    }
  };

  return (
    <div
      ref={cardRef}
      className="service-card bg-white rounded-2xl p-8 shadow-lg border border-orange-100 cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-center">
     <div className="w-15 h-15 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 pulse-orange">
  <service.icon className="w-7 h-7 text-orange-500 icon-bounce" />
</div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard