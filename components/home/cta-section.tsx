'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-neon-orange/20 opacity-50" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Get a free consultation and discover how we can optimize your home or
            business technology. Same-day service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ Veteran-Owned</span>
            <span>✓ 10% Military Discount</span>
            <span>✓ 24/7 Support</span>
            <span>✓ Satisfaction Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
