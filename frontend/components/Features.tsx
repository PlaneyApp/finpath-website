'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  TrendingUp,
  Wallet,
  BarChart3,
  CreditCard,
  Bell,
  FileText,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Financial Insights',
    description:
      'Dapatkan rekomendasi keuangan personal dan analisis mendalam dari AI tentang pola pengeluaranmu',
    isAI: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    description:
      'AI yang memberikan saran untuk mengoptimalkan budget dan mencapai tujuan finansial',
    isAI: true,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Wallet,
    title: 'Transaction Tracking',
    description:
      'Catat semua transaksi dengan mudah dan otomatis kategorikan dengan AI',
    isAI: true,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Budget Management',
    description:
      'Atur budget dan pantau pengeluaran dengan prediksi AI yang akurat',
    isAI: true,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Cash Flow Analysis',
    description:
      'Analisis arus kas kamu dengan visualisasi yang jelas dan insights mendalam',
    isAI: false,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Multi-Account Support',
    description:
      'Kelola banyak akun dalam satu aplikasi dengan mudah dan terorganisir',
    isAI: false,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Notifikasi pintar untuk pengeluaran dan tips hemat dari AI',
    isAI: true,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description:
      'Laporan keuangan yang komprehensif dengan insights AI yang actionable',
    isAI: true,
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-neutral-50 dark:bg-neutral-950/50 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-5 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">
              Fitur Cerdas
            </span>
          </div>
          <h2 className="heading-2 mb-6 text-neutral-900 dark:text-white">
            Kelola Keuangan dengan{' '}
            <span className="gradient-text">Kekuatan AI</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            FinPath memanfaatkan teknologi AI paling canggih untuk memberikan personalisasi tanpa batas dalam mengelola masa depan finansialmu.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="card h-full flex flex-col items-start bg-white dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-100 dark:border-white/5 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 shadow-lg dark:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {/* AI Badge inside Card */}
                {feature.isAI && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-secondary-500 to-primary-600 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full flex items-center space-x-1.5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <Sparkles className="w-3 h-3" />
                      <span>AI</span>
                    </div>
                  </div>
                )}

                {/* Background Card Glow Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10`}>
                  <feature.icon className="w-6 h-6 text-white drop-shadow-md" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive into AI AI Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 lg:mt-32 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-100 to-primary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-950 border border-white/50 dark:border-white/5 backdrop-blur-xl"></div>
          
          <div className="relative p-10 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-5 py-2.5 rounded-full mb-8 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                <Brain className="w-5 h-5 text-secondary-500 dark:text-secondary-400" />
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 tracking-wide uppercase">
                  Kecerdasan Buatan FinPath
                </span>
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                AI yang Benar-Benar Memahami Keuanganmu
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 font-light leading-relaxed">
                Superkomputer FinPath secara serealistis menganalisis set data pengeluaranmu. Menemukan peluang menabung, dan melindungi dari overbudgeting sebelum itu terjadi.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Analisis miliaran data keuangan real-time',
                  'Prediksi arus kas hingga 12 bulan ke depan',
                  'Rekomendasi taktis untuk investasi',
                  'Notifikasi dini anomali pengeluaran',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center border border-primary-200 dark:border-primary-500/50">
                      <svg className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated Data Hub Right Side */}
            <div className="relative">
              <div className="bg-white/80 dark:bg-neutral-950/80 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative z-10 backdrop-blur-lg">
                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-neutral-100 dark:border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-lg tracking-wide">Brain Engine</h4>
                    <p className="text-xs font-mono text-primary-600 dark:text-primary-400 uppercase tracking-widest mt-1 text-blink">Analyzing patterns...</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'Neural Network Accuracy', value: 98, color: 'from-primary-500 to-cyan-400' },
                    { label: 'Risk Protection Active', value: 100, color: 'from-green-500 to-emerald-400' },
                    { label: 'Wealth Optimization', value: 87, color: 'from-secondary-500 to-purple-400' },
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
                        <span>{metric.label}</span>
                        <span className="text-neutral-900 dark:text-white">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-900 rounded-full h-2 overflow-hidden shadow-inner border border-transparent dark:border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.3 + 0.5, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${metric.color} shadow-[0_0_10px_currentColor]`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backglow for the card */}
              <div className="absolute inset-0 bg-primary-200 dark:bg-primary-500/20 blur-[80px] -z-10 rounded-full translate-x-10 translate-y-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
