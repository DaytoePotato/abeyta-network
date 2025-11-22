'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { FAQS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  // Group FAQs by category
  const categories = [...new Set(FAQS.map((f) => f.category))];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

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
              FAQ
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="section">
        <div className="container mx-auto max-w-3xl">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">{category}</h2>
              <div className="space-y-3">
                {FAQS.filter((f) => f.category === category).map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="card overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-white pr-4">{faq.question}</span>
                      <HiChevronDown
                        className={cn(
                          'w-5 h-5 text-neon-orange flex-shrink-0 transition-transform',
                          openId === faq.id && 'rotate-180'
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 text-gray-400 text-sm leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-dark-800/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
              Book a free consultation or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book Consultation
              </Link>
              <Link href="/contact#form" className="btn-secondary">
                Send Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
