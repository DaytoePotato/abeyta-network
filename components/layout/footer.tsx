'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  // Use static year for SSR, then update on client to prevent hydration mismatch
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialIcons: Record<string, React.ReactNode> = {
    facebook: <FaFacebook size={20} />,
    linkedin: <FaLinkedin size={20} />,
    google: <FaGoogle size={20} />,
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <span className="font-display font-bold text-lg text-white block">
                  {COMPANY.name}
                </span>
                <span className="text-xs text-gray-500">{COMPANY.tagline}</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Veteran-led tech support serving Killeen, Temple, and Central Texas
              with military-grade reliability and 24/7 availability.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 text-gray-400 hover:text-neon-orange hover:bg-dark-700 transition-all"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-neon-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#home-tech"
                  className="text-sm text-gray-400 hover:text-neon-orange transition-colors"
                >
                  Home Tech Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services#network-home"
                  className="text-sm text-gray-400 hover:text-neon-orange transition-colors"
                >
                  Home Network Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services#it-consulting"
                  className="text-sm text-gray-400 hover:text-neon-orange transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#website-design"
                  className="text-sm text-gray-400 hover:text-neon-orange transition-colors"
                >
                  Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#managed-services"
                  className="text-sm text-gray-400 hover:text-neon-orange transition-colors"
                >
                  Managed IT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{COMPANY.address}</li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-neon-orange transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-neon-orange transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-neon-orange font-medium">{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-neon-orange transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-neon-orange transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
