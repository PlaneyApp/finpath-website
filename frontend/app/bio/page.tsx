'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const links = [
  {
    label: 'Install di Google Play',
    description: 'Tersedia di Android',
    href: 'https://play.google.com/store/apps/details?id=com.yourcompany.finpath',
    icon: (
      <Image src="/play-store-icon.png" alt="Google Play" width={24} height={24} className="w-6 h-6 object-contain" />
    ),
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-500/10 hover:bg-green-500/20 border-green-500/30 hover:border-green-500/60',
    iconColor: 'text-green-400',
  },
  {
    label: 'Official Website',
    description: 'finpathapp.com',
    href: 'https://www.finpathapp.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-primary-600',
    bg: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 hover:border-blue-500/60',
    iconColor: 'text-blue-400',
  },
  {
    label: 'Instagram',
    description: '@finpath.ai',
    href: 'https://www.instagram.com/finpath.ai',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    gradient: 'from-pink-500 via-purple-500 to-orange-400',
    bg: 'bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/30 hover:border-pink-500/60',
    iconColor: 'text-pink-400',
  },
  {
    label: 'TikTok',
    description: '@finpath.ai',
    href: 'https://www.tiktok.com/@finpath.ai',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
    gradient: 'from-neutral-900 to-neutral-700',
    bg: 'bg-neutral-500/10 hover:bg-neutral-500/20 border-neutral-500/30 hover:border-neutral-400/60',
    iconColor: 'text-neutral-300',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-start px-4 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-secondary-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-50 rounded-full scale-110" />
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
              <Image
                src="/images/FinPath_Logo.jpg"
                alt="FinPath Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-2xl font-extrabold text-white mb-1">FinPath</h1>
          <p className="text-neutral-400 text-sm text-center max-w-xs">
            Ngatur Keuangan Jadi Lebih Gampang dengan AI!
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3 w-full"
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${link.bg} group`}
            >
              <div className={`flex-shrink-0 ${link.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">{link.label}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{link.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center text-neutral-600 text-xs mt-10"
        >
          © {new Date().getFullYear()} FinPath. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
}
