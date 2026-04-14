'use client';

import { motion } from 'framer-motion';
import { Download, PlayCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Animated Glowing Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-200/50 dark:bg-secondary-600/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-200/40 dark:bg-primary-600/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-200/30 dark:bg-accent-900/40 rounded-full blur-[100px]"></div>
        
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="section-container relative z-10 py-24 sm:py-32 flex flex-col items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center bg-transparent">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left pt-10"
          >
            {/* Minimalist AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-8"
            >
              <Sparkles className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300">
                Powered by Advanced AI
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-neutral-900 dark:text-white drop-shadow-sm">
              Ngatur Keuangan Jadi Lebih{' '}
              <br className="hidden md:block" />
              <span className="gradient-text drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                Gampang
              </span>
              {' '}dengan AI
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              FinPath bantu kamu lacak pengeluaran, paham kebiasaan finansialmu, dan dapet insight praktis biar uangmu gak bocor tiap bulan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
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

            {/* Micro Stats */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-14 pt-8 border-t border-neutral-200 dark:border-white/10 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <div className="text-3xl font-black text-neutral-900 dark:text-white tracking-tight">10K+</div>
                <div className="text-sm text-neutral-500 font-medium">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-black text-neutral-900 dark:text-white tracking-tight">98%</div>
                <div className="text-sm text-neutral-500 font-medium">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-black text-neutral-900 dark:text-white tracking-tight flex items-center justify-center lg:justify-start">
                  5 <span className="text-yellow-500 text-lg ml-1">★</span>
                </div>
                <div className="text-sm text-neutral-500 font-medium">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Tech/AI UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:ml-10 mt-12 lg:mt-0"
          >
            {/* The Main "Glass" Dashboard Frame */}
            <div className="relative z-10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 md:p-8 animate-float">
              
              {/* Inner Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white tracking-wide">AI Assistant</h3>
                    <p className="text-xs text-primary-600 dark:text-primary-400">analyzing finances...</p>
                  </div>
                </div>
              </div>

              {/* Mockup Body Elements */}
              <div className="space-y-6">
                
                {/* AI Insight Pill */}
                <div className="relative group overflow-hidden bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 dark:from-secondary-500/20 dark:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-secondary-500 dark:bg-secondary-400 rounded-full shadow-[0_0_10px_#a78bfa]"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1 shadow-sm">
                        Smart Recommendation
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                        Based on your habits, reducing dining expenses by 20% will save you <span className="text-primary-600 dark:text-primary-400 font-medium">Rp 500K</span> this month.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Area Component */}
                <div className="bg-white dark:bg-neutral-950/50 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-sm text-neutral-500 dark:text-neutral-400">Cash Flow Projection</span>
                     <TrendingUp className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  </div>
                  
                  {/* Neon Progress Bars */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                        <span>Food & Dining</span>
                        <span className="text-primary-600 dark:text-primary-400">70%</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '70%' }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                        <span>Transportation</span>
                        <span className="text-secondary-600 dark:text-secondary-400">45%</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '45%' }}
                          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                          className="bg-gradient-to-r from-secondary-500 to-secondary-400 h-2.5 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)] dark:shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Floating Widgets */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-10 bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-4 z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 shadow-[0_0_10px_#3b82f6] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">+Rp 2.5M Saved</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 bg-gradient-to-br from-secondary-500 to-primary-600 dark:from-secondary-900 dark:to-primary-900 border border-transparent dark:border-white/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-4 z-20"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white shadow-sm">AI Optimizing...</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
