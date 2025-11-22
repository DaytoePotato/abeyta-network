'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HiWifi,
  HiServer,
  HiDesktopComputer,
  HiHome,
  HiCog,
  HiPhone,
  HiChartBar,
  HiShieldCheck,
} from 'react-icons/hi';
import { SectionHeader } from '@/components/ui/section-header';

const services = [
  {
    icon: HiWifi,
    title: 'WiFi Optimization',
    description: 'Eliminate dead zones with professional Omada mesh system installation.',
    href: '/services#wifi',
  },
  {
    icon: HiServer,
    title: 'Network Installation',
    description: 'Complete infrastructure with ethernet, POE switches, and security.',
    href: '/services#network',
  },
  {
    icon: HiDesktopComputer,
    title: 'PC Building',
    description: 'Custom high-performance builds for gaming and workstations.',
    href: '/services#pc',
  },
  {
    icon: HiHome,
    title: 'Smart Home',
    description: 'IoT integration, security cameras, and home automation.',
    href: '/services#smart-home',
  },
  {
    icon: HiShieldCheck,
    title: 'Managed IT',
    description: '24/7 monitoring, maintenance, and support for businesses.',
    href: '/services#managed-it',
  },
  {
    icon: HiPhone,
    title: 'VoIP Systems',
    description: 'Business phone solutions at a fraction of traditional costs.',
    href: '/services#voip',
  },
  {
    icon: HiChartBar,
    title: 'Pi Monitoring',
    description: '4G-enabled systems for outage detection and ISP accountability.',
    href: '/services#monitoring',
  },
  {
    icon: HiCog,
    title: 'Troubleshooting',
    description: 'Expert diagnosis and repair for all your tech issues.',
    href: '/services#troubleshooting',
  },
];

export function ServicesPreview() {
  return (
    <section className="section bg-dark-800/50">
      <div className="container mx-auto">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive tech support for homes and businesses in Central Texas"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.href} className="block h-full">
                <div className="card-hover h-full p-6 group">
                  <div className="w-12 h-12 rounded-lg bg-neon-orange/10 flex items-center justify-center mb-4 group-hover:bg-neon-orange/20 transition-colors">
                    <service.icon className="w-6 h-6 text-neon-orange" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
