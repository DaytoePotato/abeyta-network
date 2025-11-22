'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedText } from '@/components/ui/animated-text';

// Static background (Three.js disabled - not compatible with React 19)
const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-800 via-navy-900 to-dark-900 overflow-hidden">
    {/* Animated gradient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-orange/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <HeroBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300">24/7 Support Available</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
            <AnimatedText
              text="Reliable Veteran-Led Tech Support"
              className="justify-center text-white"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="block text-gradient mt-2"
            >
              in Killeen/Temple
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            From WiFi Optimization to Managed Networks – Quality You Can Trust.
            Military-grade reliability for homes and businesses in Central Texas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-neon-orange">★</span>
              <span>Veteran Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-orange">✓</span>
              <span>A+ & Network+ Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-orange">⚡</span>
              <span>Same-Day Service</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-neon-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
}
