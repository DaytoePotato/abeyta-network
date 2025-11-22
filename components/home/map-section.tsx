'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { COMPANY } from '@/lib/constants';

export function MapSection() {
  return (
    <section className="section bg-dark-800/50">
      <div className="container mx-auto">
        <SectionHeader
          title="Service Area"
          subtitle="Proudly serving Killeen, Temple, Fort Hood, and surrounding Central Texas communities"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Map embed */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109889.42954066374!2d-97.82754!3d31.1171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645b7e3d5b0f1af%3A0x9e9e1c0b3c5c5f0a!2sKilleen%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            />
          </div>

          {/* Contact info */}
          <div className="card p-6">
            <h3 className="font-semibold text-white text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-sm text-gray-500 block">Address</span>
                <span className="text-gray-300">{COMPANY.address}</span>
              </li>
              <li>
                <span className="text-sm text-gray-500 block">Phone</span>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-neon-orange hover:text-neon-orange-light transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-500 block">Email</span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-neon-orange hover:text-neon-orange-light transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-500 block">Hours</span>
                <span className="text-green-400 font-medium">{COMPANY.hours}</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-semibold text-white text-sm mb-3">Areas Served</h4>
              <div className="flex flex-wrap gap-2">
                {['Killeen', 'Temple', 'Fort Hood', 'Harker Heights', 'Belton', 'Copperas Cove'].map(
                  (area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-xs bg-dark-700 rounded-full text-gray-400"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
