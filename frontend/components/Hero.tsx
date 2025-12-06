'use client';

import { motion } from 'framer-motion';
import { Download, PlayCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-secondary-600" />
              <span className="text-sm font-semibold text-neutral-700">
                Powered by AI
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="heading-1 mb-6">
              Kelola Keuangan Lebih{' '}
              <span className="gradient-text">Pintar</span> dengan AI
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Dapatkan rekomendasi keuangan personal dari AI, lacak transaksi
              otomatis, dan capai tujuan finansialmu dengan lebih mudah dan
              cerdas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 text-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-neutral-600 mt-1">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-neutral-600 mt-1">Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">4.8</div>
                <div className="text-sm text-neutral-600 mt-1">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for illustration/mockup */}
            <div className="relative">
              {/* Main Card - AI Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">AI Financial Insights</h3>
                  <Sparkles className="w-6 h-6 text-secondary-600" />
                </div>

                <div className="space-y-4">
                  {/* AI Insight Card */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-neutral-800 mb-1">
                          Smart Recommendation
                        </p>
                        <p className="text-xs text-neutral-600">
                          You can save Rp 500K this month by reducing dining expenses by 20%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-neutral-50 rounded-lg p-4 h-40 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-accent-500 opacity-20" />
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>Food & Dining</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>Transportation</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-sm font-semibold">+Rp 2.5M saved</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-secondary-600" />
                  <span className="text-sm font-semibold">AI Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
