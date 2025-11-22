'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Calendar from 'react-calendar';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheck } from 'react-icons/hi';
import { COMPANY, SERVICES } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/section-header';
import 'react-calendar/dist/Calendar.css';

// Phone number formatting helper
const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(14, 'Please enter a valid phone number'), // (XXX) XXX-XXXX = 14 chars
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone', 'either']),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'either',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('https://formspree.io/f/xwpzpzjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone, // Already formatted from input
          service: data.service,
          message: data.message,
          preferredContact: data.preferredContact,
          preferredDate: selectedDate ? selectedDate.toLocaleDateString() : 'Not specified',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error sending your message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or call us directly.');
    }
  };

  // Handle phone input with formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
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
              Contact Us
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to upgrade your network? Get in touch for a free consultation
              or book an appointment online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HiPhone className="w-5 h-5 text-neon-orange mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="text-white hover:text-neon-orange transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiMail className="w-5 h-5 text-neon-orange mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-white hover:text-neon-orange transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiLocationMarker className="w-5 h-5 text-neon-orange mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white">{COMPANY.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiClock className="w-5 h-5 text-neon-orange mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="text-green-400 font-medium">{COMPANY.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Calendar */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Select a Date</h3>
                <Calendar
                  onChange={(value) => setSelectedDate(value as Date)}
                  value={selectedDate}
                  minDate={new Date()}
                  className="!bg-transparent !border-0"
                />
                {selectedDate && (
                  <p className="mt-4 text-sm text-gray-400">
                    Selected: {selectedDate.toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8" id="form">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <HiCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      We&apos;ll get back to you within 24 hours. For urgent issues,
                      call us directly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">First Name *</label>
                          <input
                            {...register('firstName')}
                            className="input"
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Last Name *</label>
                          <input
                            {...register('lastName')}
                            className="input"
                            placeholder="Smith"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Email *</label>
                          <input
                            {...register('email')}
                            type="email"
                            className="input"
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Phone *</label>
                          <input
                            {...register('phone', {
                              onChange: handlePhoneChange,
                            })}
                            type="tel"
                            className="input"
                            placeholder="(254) 555-1234"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Service *</label>
                        <select {...register('service')} className="input">
                          <option value="">Select a service</option>
                          {SERVICES.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.title}
                            </option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                        {errors.service && (
                          <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                        )}
                      </div>

                      {/* Preferred Contact */}
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          {['email', 'phone', 'either'].map((method) => (
                            <label key={method} className="flex items-center gap-2 cursor-pointer">
                              <input
                                {...register('preferredContact')}
                                type="radio"
                                value={method}
                                className="accent-neon-orange"
                              />
                              <span className="text-sm text-gray-300 capitalize">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Message *</label>
                        <textarea
                          {...register('message')}
                          rows={5}
                          className="input resize-none"
                          placeholder="Tell us about your project or issue..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-dark-800/50">
        <div className="container mx-auto">
          <SectionHeader title="Our Location" subtitle="Serving Killeen, Temple, and Central Texas" />
          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109889.42954066374!2d-97.82754!3d31.1171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645b7e3d5b0f1af%3A0x9e9e1c0b3c5c5f0a!2sKilleen%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
