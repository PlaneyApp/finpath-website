'use client';

import { motion } from 'framer-motion';
import { Download, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-white dark:bg-neutral-950 relative transition-colors duration-300">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 p-8 sm:p-12 lg:p-20 shadow-xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Background Animated Gradients */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary-600/30 rounded-full blur-[100px] animate-pulse-slow font-delay-1000"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-neutral-900 dark:text-white">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
                  AI-Powered Financial Intelligence
                </span>
              </motion.div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-500 dark:from-white dark:via-white dark:to-neutral-500 drop-shadow-sm">
                Evolusi Cara Kamu Mengelola Uang.
              </h2>

              {/* Description */}
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 font-light leading-relaxed">
                Bergabunglah dengan ekosistem FinPath. Biarkan AI kami yang bekerja keras merencanakan masa depan keuanganmu. Mulai gratis sekarang.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                {[
                  'Rekomendasi taktis investasi yang akurat',
                  'Otomatisasi tracking 24/7',
                  'Sistem perlindungan over-budget',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center border border-primary-200 dark:border-primary-500/30">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.yourcompany.finpath"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-2"
                >
                  <img 
                    src="/download-ps.svg" 
                    alt="Download di Google Play" 
                    className="h-14 sm:h-16 w-auto drop-shadow-lg hover:drop-shadow-xl transition-all"
                  />
                </motion.a>
              </div>

              {/* Trust Indicator */}
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mt-8 flex flex-wrap gap-4">
                <span>✓ Tanpa Kartu Kredit</span>
                <span>✓ Setup &lt; 2 Menit</span>
                <span>✓ Enkripsi SSL Setara Bank</span>
              </p>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  {
                    value: '10K+',
                    label: 'Active Users',
                    gradient: 'from-accent-400 to-primary-500',
                  },
                  {
                    value: '98%',
                    label: 'Akurasi Prediksi',
                    gradient: 'from-secondary-400 to-purple-500',
                  },
                  {
                    value: '30%',
                    label: 'Avg. Profit',
                    gradient: 'from-green-400 to-emerald-500',
                  },
                  {
                    value: '5★',
                    label: 'User Rating',
                    gradient: 'from-amber-400 to-orange-500',
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-neutral-950/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-neutral-100 dark:border-white/5 shadow-md dark:shadow-2xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div
                      className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Badge Centralized */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-secondary-500 to-primary-600 text-white p-4 rounded-3xl shadow-[0_0_30px_rgba(139,92,246,0.4)] hidden lg:flex items-center justify-center border border-white/20"
              >
                  <Sparkles className="w-8 h-8" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
