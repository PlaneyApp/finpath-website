'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Entrepreneur',
    avatar: 'BS',
    rating: 5,
    text: 'AI insights dari FinPath membantu saya menghemat 30% pengeluaran bulanan! Rekomendasi budgetnya sangat akurat dan personal.',
    highlight: 'AI insights',
  },
  {
    name: 'Sarah Wijaya',
    role: 'Marketing Manager',
    avatar: 'SW',
    rating: 5,
    text: 'Fitur AI untuk tracking otomatis sangat memudahkan. Saya tidak perlu lagi manual input transaksi, semuanya ter-kategorisasi dengan tepat.',
    highlight: 'AI tracking',
  },
  {
    name: 'Andi Pratama',
    role: 'Software Developer',
    avatar: 'AP',
    rating: 5,
    text: 'Prediksi cash flow dari AI-nya sangat membantu dalam perencanaan keuangan. Sekarang saya bisa lebih tenang mengatur investasi.',
    highlight: 'AI prediction',
  },
  {
    name: 'Linda Kusuma',
    role: 'Content Creator',
    avatar: 'LK',
    rating: 5,
    text: 'Smart notifications nya selalu on point! AI-nya tahu kapan saya over budget dan memberikan tips yang relevan untuk saving.',
    highlight: 'Smart AI',
  },
  {
    name: 'Rizki Firmansyah',
    role: 'Financial Analyst',
    avatar: 'RF',
    rating: 5,
    text: 'Sebagai finance analyst, saya impressed dengan akurasi AI analysis dari FinPath. Dashboard insights-nya sangat comprehensive.',
    highlight: 'AI analysis',
  },
  {
    name: 'Maya Puspita',
    role: 'Small Business Owner',
    avatar: 'MP',
    rating: 5,
    text: 'Rekomendasi AI-nya sangat personal dan praktis. Dalam 3 bulan, saya berhasil mencapai target savings yang tadinya terasa mustahil!',
    highlight: 'Personal AI',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Show 3 testimonials at a time on desktop, 1 on mobile
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 dark:bg-neutral-950 overflow-hidden relative transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 dark:bg-secondary-600/10 blur-[100px] rounded-full"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-4 py-2 rounded-full mb-4 shadow-sm">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="heading-2 mb-4 text-neutral-900 dark:text-white">
            Dipercaya oleh{' '}
            <span className="gradient-text">Ribuan Pengguna</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Lihat bagaimana FinPath membantu users mencapai tujuan finansial
            mereka dengan bantuan AI
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-full shadow-md dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-full shadow-md dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </button>

          {/* Desktop View - 3 Cards */}
          <div className="hidden md:block">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div key={`${testimonial.name}-${index}`}>
                    <div className="card h-full relative overflow-hidden bg-white dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-white/5 hover:border-primary-200 dark:hover:border-white/20 transition-all shadow-lg dark:shadow-xl group">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Quote className="w-12 h-12 text-primary-500" />
                      </div>

                      {/* Rating */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)] dark:drop-shadow-[0_0_5px_rgba(251,191,36,0.6)]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed relative z-10 min-h-[120px] font-light">
                        "{testimonial.text}"
                      </p>

                      {/* User Info */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-neutral-100 dark:border-white/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-white font-bold text-sm">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Highlight Badge */}
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-primary-500/10 border border-primary-500/30 text-primary-400 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                          {testimonial.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile View - 1 Card */}
          <div className="md:hidden py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <div className="card relative overflow-hidden bg-white dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-white/5 shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary-500" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)] dark:drop-shadow-[0_0_5px_rgba(251,191,36,0.6)]"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed relative z-10 font-light">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-neutral-100 dark:border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">
                        {testimonials[currentIndex].avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      {testimonials[currentIndex].highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8 shadow-[0_0_10px_#3b82f6]'
                    : 'bg-neutral-300 dark:bg-neutral-700 w-2 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-3xl shadow-xl dark:shadow-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/60 dark:to-secondary-900/60 backdrop-blur-xl border border-neutral-200 dark:border-white/10 z-0"></div>
          <div className="relative z-10 p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-black mb-2 text-neutral-900 dark:text-white drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">10K+</div>
                <div className="text-primary-600 dark:text-primary-300 font-medium tracking-wide uppercase text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-black mb-2 text-neutral-900 dark:text-white drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">98%</div>
                <div className="text-secondary-600 dark:text-secondary-300 font-medium tracking-wide uppercase text-sm">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Rp 50M+</div>
                <div className="text-emerald-600 dark:text-emerald-500 font-medium tracking-wide uppercase text-sm">Total Savings Tracked</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
