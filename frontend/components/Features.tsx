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
    <section id="features" className="section-padding bg-white">
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
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-600">
              Fitur Unggulan
            </span>
          </div>
          <h2 className="heading-2 mb-4">
            Kelola Keuangan dengan{' '}
            <span className="gradient-text">Kekuatan AI</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            FinPath menggunakan teknologi AI terkini untuk memberikan
            pengalaman manajemen keuangan yang personal dan intelligent
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="card card-hover h-full relative overflow-hidden group">
                {/* AI Badge */}
                {feature.isAI && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-secondary-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>AI</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect - Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Features Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary-50 via-secondary-50 to-purple-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
                <Brain className="w-5 h-5 text-secondary-600" />
                <span className="text-sm font-semibold text-neutral-700">
                  AI-Powered Intelligence
                </span>
              </div>
              <h3 className="heading-3 mb-4">
                Teknologi AI yang Memahami Keuanganmu
              </h3>
              <p className="text-neutral-600 mb-6">
                Sistem AI kami menganalisis pola pengeluaran, memprediksi cash
                flow, dan memberikan rekomendasi yang dipersonalisasi untuk
                membantu kamu mencapai tujuan finansial lebih cepat.
              </p>
              <ul className="space-y-3">
                {[
                  'Analisis pola pengeluaran secara real-time',
                  'Prediksi keuangan dengan akurasi tinggi',
                  'Rekomendasi budget yang optimal',
                  'Deteksi anomali dan peringatan dini',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Visualization */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">
                      AI Analysis Dashboard
                    </h4>
                    <p className="text-xs text-neutral-500">
                      Real-time insights
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: 'Spending Pattern',
                      value: 85,
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      label: 'Savings Goal',
                      value: 70,
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      label: 'Budget Health',
                      value: 92,
                      color: 'from-purple-500 to-pink-500',
                    },
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-neutral-600 mb-2">
                        <span>{metric.label}</span>
                        <span className="font-semibold">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-2.5 bg-gradient-to-r ${metric.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating AI Badge */}
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
                className="absolute -top-4 -right-4 bg-gradient-to-br from-secondary-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold">AI Active</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
