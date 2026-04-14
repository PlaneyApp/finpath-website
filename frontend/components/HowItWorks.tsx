'use client';

import { motion } from 'framer-motion';
import { Download, Settings, Target, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download & Sign Up',
    description:
      'Download aplikasi FinPath dan buat akun dalam hitungan detik. Gratis dan mudah!',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Setup Your Profile',
    description:
      'Hubungkan akun atau tambahkan transaksi manual. AI akan mulai mempelajari pola keuanganmu.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Target,
    title: 'Set Goals & Budget',
    description:
      'Tentukan tujuan finansial dan budget bulanan. AI akan membantu membuat rencana yang optimal.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Track & Optimize',
    description:
      'Lacak progress kamu dan dapatkan insights AI untuk optimasi keuangan yang lebih baik.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary-100/50 dark:bg-primary-600/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center space-x-2 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-5 py-2 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 tracking-wide uppercase">
              Cara Kerja
            </span>
          </div>
          <h2 className="heading-2 mb-6 text-neutral-900 dark:text-white drop-shadow-sm">
            Mulai dalam{' '}
            <span className="gradient-text-alt drop-shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">4 Langkah Mudah</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Dari download hingga optimasi keuangan, semuanya bisa dilakukan
            dengan integrasi satu sentuhan dan kekuatan AI.
          </p>
        </motion.div>

        {/* Steps - Desktop View */}
        <div className="hidden lg:block relative py-10">
          {/* Connecting Line */}
          <div className="absolute top-[88px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-neutral-200 via-primary-500/50 to-neutral-200 dark:from-neutral-800 dark:to-neutral-800 -z-10"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative text-center group"
              >
                {/* Step Number and Icon */}
                <div className="relative inline-block mb-8">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-white dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200 dark:border-white/10 flex items-center justify-center shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative z-10`}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-10 dark:opacity-20 blur-md group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <step.icon className="w-10 h-10 text-neutral-700 dark:text-white relative z-10" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_#3b82f6] flex items-center justify-center z-20 border border-white dark:border-white/20">
                    <span className="text-sm font-black text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet View */}
        <div className="lg:hidden space-y-6 relative">
          {/* Vertical connecting line for mobile */}
          <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary-500/50 via-secondary-500/30 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="relative"
            >
              <div className="card flex items-center p-6 space-x-6 border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-900/40 backdrop-blur-xl shadow-md dark:shadow-xl">
                {/* Step Number and Icon */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center shadow-sm relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 dark:opacity-20`}></div>
                    <step.icon className="w-7 h-7 text-neutral-800 dark:text-white relative z-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center border border-white dark:border-white/20">
                    <span className="text-xs font-black text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1.5 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <a 
            href="https://play.google.com/store/apps/details?id=com.yourcompany.finpath"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-xl px-12 py-5 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Mulai Sekarang - Gratis!
          </a>
          <p className="text-sm font-medium text-neutral-500 mt-5 tracking-wide">
            TIDAK PERLU KARTU KREDIT
          </p>
        </motion.div>
      </div>
    </section>
  );
}
