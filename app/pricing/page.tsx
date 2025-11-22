'use client';

import { motion } from 'framer-motion';
import { HiCheck, HiStar } from 'react-icons/hi';
import { PRICING_TIERS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/section-header';
// import { PricingCalculator } from '@/components/pricing/calculator'; // Uncomment when quote store is ready
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function PricingPage() {
  const hourlyTiers = PRICING_TIERS.filter((t) => t.type === 'hourly');
  const bundleTiers = PRICING_TIERS.filter((t) => t.type === 'bundle');
  const subscriptionTiers = PRICING_TIERS.filter((t) => t.type === 'subscription');

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
              Transparent Pricing
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No hidden fees, no surprises. Quality service at competitive rates
              with options for every budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="section">
        <div className="container mx-auto">
          <SectionHeader
            title="Home Services"
            subtitle="On-site tech support for all your home technology needs"
          />

          <div className="flex justify-center">
            {hourlyTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6 max-w-md w-full"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-neon-orange mb-4">
                  {formatCurrency(tier.price)}
                  <span className="text-sm text-gray-500 font-normal">/{tier.unit}</span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <HiCheck className="w-4 h-4 text-neon-orange flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Packages - Website Design */}
      <section className="section bg-dark-800/50">
        <div className="container mx-auto">
          <SectionHeader
            title="Website Packages"
            subtitle="Professional websites for your business"
          />

          {/* Inverted pyramid: 2 on top, 1 centered below */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {bundleTiers.slice(0, 2).map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`card p-6 relative ${
                    tier.popular ? 'border-neon-orange' : ''
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neon-orange text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <HiStar className="w-3 h-3" /> Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-neon-orange mb-4">
                    {formatCurrency(tier.price)}
                    <span className="text-sm text-gray-500 font-normal"> total</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <HiCheck className="w-4 h-4 text-neon-orange flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={tier.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
            {/* Centered bottom card */}
            {bundleTiers.length > 2 && (
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`card p-6 relative max-w-md w-full ${
                    bundleTiers[2].popular ? 'border-neon-orange' : ''
                  }`}
                >
                  {bundleTiers[2].popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neon-orange text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <HiStar className="w-3 h-3" /> Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">{bundleTiers[2].name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{bundleTiers[2].description}</p>
                  <div className="text-3xl font-bold text-neon-orange mb-4">
                    {formatCurrency(bundleTiers[2].price)}
                    <span className="text-sm text-gray-500 font-normal"> total</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {bundleTiers[2].features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <HiCheck className="w-4 h-4 text-neon-orange flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={bundleTiers[2].popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section">
        <div className="container mx-auto">
          <SectionHeader
            title="Monthly Subscriptions"
            subtitle="Managed IT services for businesses with ISP cost coverage included"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`card p-6 relative ${
                  tier.popular ? 'border-neon-orange' : ''
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neon-orange text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <HiStar className="w-3 h-3" /> Recommended
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-neon-orange mb-4">
                  {formatCurrency(tier.price)}
                  <span className="text-sm text-gray-500 font-normal">/{tier.unit}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <HiCheck className="w-4 h-4 text-neon-orange flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={tier.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                >
                  Start Free Trial
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator - Uncomment when quote store is ready
      <section className="section bg-dark-800/50">
        <div className="container mx-auto">
          <SectionHeader
            title="Custom Quote Calculator"
            subtitle="Get an instant estimate for your specific needs"
          />
          <PricingCalculator />
        </div>
      </section>
      */}

      {/* Promotions */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Current Promotions" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6 border-green-500/30"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-400">
                  Book a no-obligation consultation to assess your needs. We&apos;ll provide
                  honest recommendations with no pressure to buy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card p-6 border-neon-blue/30"
              >
                <h3 className="text-lg font-semibold text-white mb-2">10% Veteran Discount</h3>
                <p className="text-sm text-gray-400">
                  Active military, veterans, and their immediate families receive 10% off
                  all services. Thank you for your service.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
