import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/slide1.png',
    title: 'Expert Financial Solutions',
    description: 'Empowering your business with strategic financial guidance and audit services.'
  },
  {
    image: '/slide2.png',
    title: 'Professional Team Support',
    description: 'Dedicated professionals working together to manage your taxes and finances efficiently.'
  },
  {
    image: '/slide3.png',
    title: 'Modern Fintech Excellence',
    description: 'Leveraging cutting-edge technology for faster and more accurate financial processing.'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-gray-900 mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={slides[current].image} 
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slides[current].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slides[current].description}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-brand-green/20">
                    Get Started
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg font-bold transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-brand-green w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
