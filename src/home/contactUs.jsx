import React, { useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Facebook,
  Building2,
  Users,
  MessageSquare,
  CheckCircle,
  Award,
  BookOpen,
  Globe
} from 'lucide-react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
export default function ContactUs() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // empty dependency array ensures it runs only once

      const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Thank you for your message! We will get back to you soon.');
        reset();
      };
  return (
        <div className="min-h-screen">
          {/* Hero Section */}
          <section
            className="bg-gradient-to-tl to-orange-100 via-orange-50 from-slate-50 relative overflow-hidden h-[80vh] md:h-[65vh] lg:h-[calc(75vh-4rem)]"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-orange-500 rounded-full animate-float opacity-30"></div>
              <div className="absolute top-12 sm:top-16 right-4 sm:right-12 w-14 sm:w-20 h-14 sm:h-20 bg-orange-400 rounded-full animate-float delay-200 opacity-40"></div>
              <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-10 sm:w-14 h-10 sm:h-14 bg-orange-500 rounded-full animate-float delay-400 opacity-25"></div>
              <div className="absolute bottom-12 sm:bottom-16 right-1/4 w-12 sm:w-18 h-12 sm:h-18 bg-orange-200 rounded-full animate-float delay-600 opacity-45"></div>
              
              {/* Achievement Icons Floating */}
              <div className="absolute top-1/4 right-4 sm:right-8 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float delay-800 opacity-80">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-1/3 left-4 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float opacity-80">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-center relative z-10">
              <div className="text-center max-w-full sm:max-w-5xl">
                <div className="opacity-0 animate-fadeInUp">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                    Ready to <span className="text-orange-500">Transform</span> Your Business?
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed opacity-0 animate-fadeInUp delay-200 mb-6 sm:mb-8 max-w-3xl sm:max-w-4xl mx-auto">
                  With over 8 years of experience, we've helped 150+ businesses transform their digital presence through strategic marketing and innovative technology solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="py-12 sm:py-16 bg-slate-50">
            {/* Placeholder for Contact component */}
            
<Contact />
          </div>

          {/* Bottom Section */}
          <div className="bg-slate-50 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28580.03158210663!2d80.310593!3d26.439480000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47a336b9cda1%3A0xf2ece4fcdef68047!2s127%2F1%2F4A%2C%20127%2F1%2C%20W-1%2C%20Juhi%20Kalan%2C%20Saket%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208014%2C%20India!5e0!3m2!1sen!2sus!4v1756119596907!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
  );
}
