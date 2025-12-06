'use client';

import { motion } from 'framer-motion';
import { Download, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-secondary-600 to-purple-700 p-8 lg:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  AI-Powered Financial Management
                </span>
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Siap Mengelola Keuangan Lebih Pintar dengan AI?
              </h2>

              {/* Description */}
              <p className="text-lg text-primary-50 mb-8">
                Bergabunglah dengan ribuan pengguna yang sudah merasakan manfaat
                AI dalam mengoptimalkan keuangan mereka. Gratis untuk memulai!
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {[
                  'AI insights yang personal dan akurat',
                  'Tracking otomatis dengan machine learning',
                  'Rekomendasi budget berdasarkan pola spending',
                  'Gratis selamanya untuk fitur dasar',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    <span className="text-primary-50">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Sekarang</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </div>

              {/* Trust Indicator */}
              <p className="text-sm text-primary-100 mt-6">
                ✓ Tidak perlu kartu kredit &nbsp;•&nbsp; ✓ Setup dalam 2 menit
                &nbsp;•&nbsp; ✓ Data aman & terenkripsi
              </p>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: '10K+',
                    label: 'Active Users',
                    gradient: 'from-blue-500 to-cyan-500',
                  },
                  {
                    value: '98%',
                    label: 'Satisfaction',
                    gradient: 'from-purple-500 to-pink-500',
                  },
                  {
                    value: '30%',
                    label: 'Avg. Savings',
                    gradient: 'from-green-500 to-emerald-500',
                  },
                  {
                    value: '4.8★',
                    label: 'User Rating',
                    gradient: 'from-yellow-500 to-orange-500',
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  >
                    <div
                      className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 bg-accent-500 text-white px-4 py-3 rounded-full shadow-xl hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-bold">AI Powered</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
