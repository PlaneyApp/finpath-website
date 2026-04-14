'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'API Documentation', href: '#' },
    { name: 'Community', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-white/5 relative z-10 transition-colors duration-300">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center space-x-3 mb-6 relative group inline-flex">
                <div className="w-10 h-10 relative rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10">
                  <Image
                    src="/images/FinPath_Logo.jpg"
                    alt="FinPath Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-2xl font-black text-neutral-900 dark:text-white tracking-wide">FinPath</span>
                <div className="absolute inset-0 bg-primary-100 dark:bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 font-light leading-relaxed pr-4">
                Your AI-powered personal finance companion. Kelola keuangan
                lebih pintar dan mulus dengan kecerdasan buatan.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 text-sm font-light">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center border border-neutral-200 dark:border-transparent">
                    <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">admin@finpathapp.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center border border-neutral-200 dark:border-transparent">
                    <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">+62 813-1547-3983</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center border border-neutral-200 dark:border-transparent">
                    <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="lg:ml-auto">
              <h3 className="text-neutral-900 dark:text-white font-bold tracking-wide mb-6">Product</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-light flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary-500 mr-0 transition-all group-hover:w-2 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:ml-auto">
              <h3 className="text-neutral-900 dark:text-white font-bold tracking-wide mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-light flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary-500 mr-0 transition-all group-hover:w-2 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:ml-auto">
              <h3 className="text-neutral-900 dark:text-white font-bold tracking-wide mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-light flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary-500 mr-0 transition-all group-hover:w-2 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="lg:ml-auto">
              <h3 className="text-neutral-900 dark:text-white font-bold tracking-wide mb-6">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-light flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary-500 mr-0 transition-all group-hover:w-2 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 dark:border-white/5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-neutral-500 text-center md:text-left font-light">
              © 2026 FinPath. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-primary-600 dark:hover:bg-primary-600 hover:border-transparent dark:hover:border-transparent hover:text-white dark:hover:text-white transition-all shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
