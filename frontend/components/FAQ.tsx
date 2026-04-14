'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah FinPath gratis?',
    answer:
      'Ya! FinPath tersedia gratis untuk semua pengguna. Kami juga menyediakan fitur premium dengan lebih banyak AI insights dan analytics mendalam untuk yang membutuhkan.',
  },
  {
    question: 'Bagaimana AI di FinPath bekerja?',
    answer:
      'AI kami menggunakan machine learning untuk menganalisis pola pengeluaran Anda, memprediksi cash flow masa depan, dan memberikan rekomendasi yang dipersonalisasi. Semakin lama Anda menggunakan FinPath, semakin akurat rekomendasi AI-nya.',
  },
  {
    question: 'Apakah data saya aman?',
    answer:
      'Keamanan data adalah prioritas utama kami. Semua data dienkripsi end-to-end, dan AI kami berjalan dengan protokol keamanan tinggi. Kami tidak pernah membagikan data pribadi Anda kepada pihak ketiga tanpa izin eksplisit.',
  },
  {
    question: 'Apakah AI menggunakan data pribadi saya?',
    answer:
      'AI kami hanya menggunakan data transaksi dan preferensi keuangan Anda untuk memberikan rekomendasi yang personal. Data ini disimpan dengan aman dan hanya digunakan untuk meningkatkan pengalaman Anda dengan FinPath.',
  },
  {
    question: 'Seberapa akurat rekomendasi AI nya?',
    answer:
      'Akurasi rekomendasi AI kami mencapai 90%+, dan terus meningkat seiring AI mempelajari pola keuangan Anda. Ribuan pengguna telah melaporkan peningkatan savings hingga 30% setelah mengikuti rekomendasi AI kami.',
  },
  {
    question: 'Platform apa saja yang didukung?',
    answer:
      'FinPath tersedia untuk iOS dan Android. Kami juga sedang mengembangkan web dashboard untuk akses yang lebih fleksibel.',
  },
  {
    question: 'Bagaimana cara mulai menggunakan FinPath?',
    answer:
      'Sangat mudah! Download aplikasi, buat akun, tambahkan transaksi atau hubungkan akun Anda, set budget dan goals, lalu biarkan AI kami membantu mengoptimalkan keuangan Anda.',
  },
  {
    question: 'Apakah saya perlu koneksi internet untuk menggunakan fitur AI?',
    answer:
      'Fitur AI memerlukan koneksi internet untuk menganalisis data dan memberikan rekomendasi real-time. Namun, fitur dasar seperti tracking transaksi dapat digunakan offline dan akan sinkron saat online.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300">
      {/* Background accents */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-secondary-100 dark:bg-secondary-900/10 blur-[100px] rounded-full"></div>

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
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="heading-2 mb-4 text-neutral-900 dark:text-white">
            Pertanyaan yang{' '}
            <span className="gradient-text">Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Punya pertanyaan seputar AI dan cara kerjanya? Kami punya jawabannya!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="bg-white dark:bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-primary-200 dark:hover:border-white/10 shadow-sm dark:shadow-none">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className={`font-medium ${openIndex === index ? 'text-primary-700 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'} pr-8 transition-colors`}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center border border-primary-200 dark:border-primary-500/30">
                         <Minus className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center border border-neutral-200 dark:border-white/10">
                         <Plus className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                      </div>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-neutral-50/50 dark:bg-white/[0.02]"
                    >
                      <div className="px-6 pb-6 pt-2 text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 font-light">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <button className="btn-secondary dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-800 dark:text-white bg-white hover:bg-neutral-50 shadow-sm border border-neutral-300">Hubungi Support Kami</button>
        </motion.div>
      </div>
    </section>
  );
}
