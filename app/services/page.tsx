'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { SERVICES } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/section-header';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'business'>('home');

  const filteredServices = SERVICES.filter((s) => s.category === activeTab);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-hero-gradient">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive tech support solutions for homes and businesses in Central Texas.
              Quality equipment, expert installation, and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section">
        <div className="container mx-auto">
          {/* Tab buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg p-1 bg-dark-800">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'home'
                    ? 'bg-neon-orange text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Home Users
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'business'
                    ? 'bg-neon-orange text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Business
              </button>
            </div>
          </div>

          {/* Services grid - inverted pyramid layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid with centered last item for odd counts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredServices.map((service, index) => {
                  const isLastOdd = filteredServices.length % 2 === 1 && index === filteredServices.length - 1;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      id={service.id}
                      className={`card p-8 ${isLastOdd ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
                    >
                      <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>

                      <p className="text-gray-400 mb-6">{service.description}</p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <HiCheck className="w-5 h-5 text-neon-orange flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="btn-secondary text-sm w-full text-center"
                      >
                        Get Quote
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Equipment Note */}
      <section className="section bg-dark-800/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Quality Equipment"
              subtitle="We use enterprise-grade hardware for residential reliability"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <p className="text-gray-400 mb-4">
                We exclusively use TP-Link Omada for WiFi systems, quality POE switches for
                network installations, and enterprise-grade security cameras – not consumer-grade
                shortcuts. Equipment costs are separate from labor and include a modest markup
                (20-30%) for procurement, configuration, and warranty support.
              </p>
              <p className="text-gray-500 text-sm">
                All equipment comes with manufacturer warranties. We handle all warranty claims
                on your behalf at no additional cost.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Book a free consultation and we&apos;ll assess your needs and recommend the
              best solution for your budget.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
