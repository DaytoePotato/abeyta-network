'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/section-header';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="section">
      <div className="container mx-auto">
        <SectionHeader
          title="What Clients Say"
          subtitle="Trusted by homes and businesses throughout Central Texas"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-colors hidden md:block"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-colors hidden md:block"
              aria-label="Next testimonial"
            >
              <HiChevronRight size={24} />
            </button>

            {/* Testimonial card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card p-8 text-center"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-neon-orange" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile navigation */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <HiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-colors"
                aria-label="Next testimonial"
              >
                <HiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-neon-orange w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
