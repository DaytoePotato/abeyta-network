'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiShieldCheck, HiClock, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { SectionHeader } from '@/components/ui/section-header';

const certifications = [
  { name: 'CompTIA A+', year: '2019' },
  { name: 'CompTIA Network+', year: '2019' },
  { name: 'BS Computer Networking', year: '2020' },
  { name: 'MBA', year: '2022' },
];

const timeline = [
  { year: '2010-2018', title: 'U.S. Army Infantry', description: 'Served with distinction, developing leadership and problem-solving skills under pressure.' },
  { year: '2019', title: 'Tech Certifications', description: 'Earned CompTIA A+ and Network+ certifications while completing BS in Computer Networking.' },
  { year: '2020', title: 'Founded Abeyta Network', description: 'Launched tech support business serving Killeen/Temple area with focus on quality and reliability.' },
  { year: '2022', title: 'MBA Completed', description: 'Enhanced business operations and expanded managed IT services for small businesses.' },
  { year: 'Present', title: 'Growing Strong', description: 'Serving hundreds of clients across Central Texas with 24/7 support and military-grade reliability.' },
];

const values = [
  {
    icon: HiShieldCheck,
    title: 'Military-Grade Reliability',
    description: 'We bring the same discipline and attention to detail from military service to every tech project.',
  },
  {
    icon: HiClock,
    title: '24/7 Availability',
    description: 'Tech problems don\'t wait for business hours. Neither do we. Support when you need it.',
  },
  {
    icon: HiAcademicCap,
    title: 'Continuous Learning',
    description: 'Technology evolves. So do we. Constant certification and training ensure top-tier service.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Quality First',
    description: 'We use enterprise-grade equipment like TP-Link Omada, not consumer-grade shortcuts.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-hero-gradient">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-neon-orange mb-6">
                Veteran-Owned & Operated
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                About Abeyta Network
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From Army Infantry to IT expert – bringing military precision and
                dedication to tech support in Central Texas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
                <Image
                  src="/founder.jpeg"
                  alt="Anthony Abeyta - Founder of Abeyta Network LLC"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover brightness-75"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Meet the Founder
              </h2>
              <p className="text-gray-400 mb-4">
                After 8 years serving in the U.S. Army Infantry, I transitioned into
                technology with the same commitment to excellence that defined my military
                career. Based here in Killeen, I understand the unique needs of our
                community – from military families to local businesses.
              </p>
              <p className="text-gray-400 mb-6">
                With CompTIA A+ and Network+ certifications, a BS in Computer Networking,
                and an MBA, I combine technical expertise with business acumen to deliver
                solutions that actually work. No unnecessary upsells, no shortcuts – just
                quality service you can trust.
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="px-3 py-2 bg-dark-700 rounded-lg text-sm text-gray-300"
                  >
                    {cert.name} <span className="text-neon-orange">({cert.year})</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-dark-800/50">
        <div className="container mx-auto">
          <SectionHeader
            title="Why Choose Us"
            subtitle="What sets Abeyta Network apart from other IT providers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-neon-orange/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-neon-orange" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container mx-auto">
          <SectionHeader title="Our Journey" subtitle="From service to tech support excellence" />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-8 pb-8 border-l-2 border-neon-orange/30 last:border-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-neon-orange -translate-x-[9px]" />
                <span className="text-sm text-neon-orange font-mono">{item.year}</span>
                <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
