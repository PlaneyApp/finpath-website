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
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-neutral-50">
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
            <span className="text-sm font-semibold text-primary-600">FAQ</span>
          </div>
          <h2 className="heading-2 mb-4">
            Pertanyaan yang{' '}
            <span className="gradient-text">Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Punya pertanyaan? Kami punya jawabannya!
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-neutral-400" />
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
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
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
          <p className="text-neutral-600 mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <button className="btn-secondary">Hubungi Kami</button>
        </motion.div>
      </div>
    </section>
  );
}
