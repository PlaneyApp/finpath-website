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

          {/* Right Content - App Showcase Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:ml-10 mt-12 lg:mt-0 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md animate-float">
               <img
                src="/finpath-home.png"
                alt="FinPath App Preview"
                className="w-full h-full object-contain drop-shadow-2xl filter dark:brightness-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
