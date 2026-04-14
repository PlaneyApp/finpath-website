'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-white/5 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 relative group">
            <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full group-hover:bg-primary-500/40 transition-all duration-300"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative rounded-lg overflow-hidden border border-neutral-200 dark:border-white/10 z-10 bg-white dark:bg-neutral-900 shadow-sm">
              <Image
                src="/images/FinPath_Logo.jpg"
                alt="FinPath Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 group-hover:to-primary-600 dark:group-hover:to-primary-400 transition-all duration-300 z-10">
              FinPath
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {/* CTA Button - Desktop */}
            <a
              href="https://play.google.com/store/apps/details?id=com.yourcompany.finpath"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 border border-transparent dark:border-neutral-200 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200 dark:border-white/5 shadow-xl"
          >
            <div className="section-container py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors border-b border-neutral-100 dark:border-white/5"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.yourcompany.finpath"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center space-x-2 mt-4 bg-primary-600 hover:bg-primary-700 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100"
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
