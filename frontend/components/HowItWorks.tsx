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
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary-600">
              Cara Kerja
            </span>
          </div>
          <h2 className="heading-2 mb-4">
            Mulai dalam{' '}
            <span className="gradient-text">4 Langkah Mudah</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Dari download hingga optimasi keuangan, semuanya bisa dilakukan
            dengan cepat dan mudah
          </p>
        </motion.div>

        {/* Steps - Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Arrow Between Steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute top-10 -right-4 z-10"
                  >
                    <ArrowRight className="w-8 h-8 text-primary-400" />
                  </motion.div>
                )}

                <div className="text-center">
                  {/* Step Number and Icon */}
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <span className="text-xs font-bold text-neutral-700">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="card flex items-start space-x-4">
                {/* Step Number and Icon */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center">
                    <span className="text-xs font-bold text-neutral-700">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow Down for Mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowRight className="w-6 h-6 text-primary-400 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg">
            Mulai Sekarang - Gratis!
          </button>
          <p className="text-sm text-neutral-500 mt-3">
            Tidak perlu kartu kredit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
