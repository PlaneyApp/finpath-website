import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-12">Syarat dan Ketentuan FinPath</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Harap membaca Syarat dan Ketentuan (“S&K”) berikut dengan cermat sebelum menggunakan aplikasi FinPath. Dengan mendaftar akun atau menggunakan aplikasi FinPath (“Aplikasi”), Anda menyatakan setuju untuk terikat oleh S&K ini beserta Kebijakan Privasi FinPath. Jika Anda tidak menyetujui bagian apapun dari S&K ini, mohon untuk tidak menggunakan Aplikasi.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Definisi</h2>
            <p className="mb-2">Dalam S&K ini, kecuali jika konteks menentukan lain:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>“FinPath” atau “Kami”</strong> mengacu pada aplikasi FinPath beserta layanan terkait yang disediakan oleh pengembang perorangan yang berdomisili di Jakarta, Indonesia (selanjutnya disebut “Pengembang”). FinPath belum didirikan sebagai badan hukum perseroan.
              </li>
              <li>
                <strong>“Pengguna” atau “Anda”</strong> mengacu pada setiap orang yang mengunduh, mendaftar, atau menggunakan Aplikasi.
              </li>
              <li>
                <strong>“Layanan”</strong> mengacu pada fitur-fitur pengelolaan keuangan pribadi yang disediakan FinPath, termasuk pencatatan pemasukan dan pengeluaran, pengkategorian transaksi secara otomatis, entri data melalui OCR (Optical Character Recognition) dan chatbot AI (model bahasa besar/LLM), serta layanan lain yang mungkin ditambahkan di kemudian hari.
              </li>
              <li>
                <strong>“S&K”</strong> mengacu pada Syarat dan Ketentuan ini beserta kebijakan atau aturan lain yang terkait penggunaan Aplikasi.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Pendaftaran Akun dan Keamanan</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pembuatan Akun:</strong> Untuk menggunakan FinPath, Anda harus membuat akun Pengguna dengan mendaftar menggunakan email yang valid atau melalui login Google. Anda wajib memberikan informasi pendaftaran yang akurat dan lengkap, termasuk alamat email aktif, serta membuat kata sandi yang aman.
              </li>
              <li>
                <strong>Batasan Usia:</strong> Layanan ini hanya dapat digunakan oleh Pengguna berusia 18 tahun ke atas. Jika usia Anda di bawah 18 tahun, Anda harus memperoleh izin dari orang tua atau wali sah sebelum membuat akun. Dengan menyetujui S&K ini, Anda menyatakan bahwa Anda berusia ≥18 tahun atau telah mendapatkan izin yang diperlukan dari orang tua/wali.
              </li>
              <li>
                <strong>Keamanan Akun:</strong> Anda bertanggung jawab menjaga kerahasiaan informasi login akun Anda (email dan kata sandi). Dilarang membagikan atau mengalihkan kredensial akun Anda kepada pihak lain. Segala aktivitas yang terjadi melalui akun Anda akan dianggap sebagai tindakan Anda sendiri. Jika Anda mengetahui atau mencurigai adanya akses tidak sah ke akun Anda, segera beritahu Kami melalui kontak yang tertera agar Kami dapat mengambil tindakan yang diperlukan (misalnya memblokir atau mengamankan akun tersebut).
              </li>
              <li>
                <strong>Kebenaran Data:</strong> Anda menjamin bahwa semua data yang diberikan saat pendaftaran (misalnya alamat email) adalah benar, akurat, dan milik Anda sendiri. Pengguna dilarang menggunakan identitas orang lain atau informasi palsu. Kami berhak menolak atau menangguhkan pendaftaran akun yang melanggar ketentuan ini.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Deskripsi Layanan FinPath</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fungsi Utama:</strong> FinPath adalah aplikasi pengelolaan finansial pribadi yang membantu Anda melacak pemasukan dan pengeluaran pribadi. Aplikasi ini menyediakan metode pencatatan transaksi secara manual maupun otomatis, termasuk: (a) Pemindaian Struk/OCR – Anda dapat mengunggah foto struk atau nota atau screenshot transaksi atau excel dan sistem kami akan mengekstrak teks secara otomatis; (b) Input Berbasis Chat/LLM – Anda dapat memasukkan data transaksi melalui percakapan/chatbot bertenaga Large Language Model (misalnya model “Gemini” AI) yang akan memahami dan mencatat transaksi Anda; serta (c) Kategorisasi Otomatis – FinPath menggolongkan transaksi Anda ke dalam kategori (seperti makanan, transportasi, dll.) secara otomatis berdasarkan data yang Anda berikan.
              </li>
              <li>
                <strong>Batasan Layanan:</strong> PENTING: Anda memahami dan menyetujui bahwa FinPath bukanlah aplikasi penasihat keuangan. Layanan FinPath tidak memberikan nasihat keuangan, investasi, pajak, atau hukum kepada Pengguna. Informasi, pengelompokan, atau hasil lain yang disediakan FinPath semata-mata bersifat otomatis dan informatif untuk membantu Anda mengorganisir keuangan pribadi. FinPath tidak membuat analisis keuangan mendalam atau rekomendasi investasi. Segala keputusan keuangan yang Anda ambil berdasarkan informasi dari Aplikasi merupakan tanggung jawab Anda sendiri.
              </li>
              <li>
                <strong>Ketersediaan Layanan:</strong> Kami akan berusaha menjaga Aplikasi tetap tersedia dan berfungsi dengan baik. Namun, Kami tidak menjamin bahwa seluruh atau sebagian Layanan akan selalu tersedia tanpa gangguan. Pemeliharaan sistem, pembaruan, atau gangguan teknis di luar kendali Kami dapat menyebabkan Aplikasi tidak dapat diakses sementara waktu. Kami berhak menghentikan, mengubah, atau menghentikan sebagian/seluruh Layanan (baik sementara maupun permanen) dengan pemberitahuan sebelumnya kepada Pengguna, kecuali dalam keadaan darurat yang tidak memungkinkan pemberitahuan. Pengguna setuju bahwa Kami tidak bertanggung jawab atas perubahan, penangguhan, atau penghentian Layanan (lihat Pasal 10 di bawah mengenai Pembatasan Tanggung Jawab).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Biaya Berlangganan dan Pembayaran</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Model Monetisasi:</strong> FinPath menyediakan layanannya dengan model berlangganan (subscription). Ada beberapa opsi paket berlangganan, antara lain bulanan, 3 bulanan, 6 bulanan, dan tahunan, dengan manfaat fitur penuh selama periode berlangganan aktif.
              </li>
              <li>
                <strong>Perubahan & Perpindahan Paket.</strong> Kami dapat menambah, mengubah, atau menghentikan opsi paket berlangganan dari waktu ke waktu. Pengguna dapat melakukan upgrade/downgrade paket melalui Google Play. Mekanisme perubahan paket (termasuk penyesuaian masa aktif/entitlement, proration, dan/atau perubahan tanggal penagihan) mengikuti kebijakan dan sistem Google Play Billing yang berlaku dari waktu ke waktu.
              </li>
              <li>
                <strong>Masa Percobaan:</strong> (Jika berlaku) Kami dapat menawarkan masa uji coba gratis untuk Pengguna baru sesuai kebijakan Kami. Setelah masa tersebut berakhir, Pengguna harus berlangganan berbayar untuk terus mengakses fitur premium FinPath.
              </li>
              <li>
                <strong>Pembayaran melalui Google Play:</strong> Transaksi berlangganan ditangani melalui platform Google Play (Google Play Billing). Anda harus memiliki akun Google yang valid dan metode pembayaran yang diterima Google Play untuk berlangganan. Saat Anda mengkonfirmasi pembelian berlangganan di Google Play, Anda tunduk pada syarat dan ketentuan serta kebijakan pembayaran Google Play selain S&K ini. FinPath tidak menyimpan informasi kartu kredit atau pembayaran Anda – semua pembayaran diproses oleh Google melalui sistem mereka yang aman.
              </li>
              <li>
                <strong>Perpanjangan Otomatis:</strong> Kecuali Anda membatalkan sebelum periode berlangganan berakhir, langganan Anda akan diperpanjang secara otomatis sesuai jangka waktu paket yang dipilih (misal, bulanan akan diperpanjang per bulan). Google Play dapat menagihkan biaya perpanjangan beberapa hari sebelum periode berjalan habis. Pastikan Anda memiliki saldo atau limit kartu mencukupi.
              </li>
              <li>
                <strong>Pembatalan:</strong> Anda dapat membatalkan langganan kapan saja melalui pengaturan langganan di akun Google Play Anda. Jika Anda membatalkan di tengah periode berlangganan, Anda akan tetap menikmati manfaat langganan hingga akhir periode yang sudah dibayar. Setelah itu, akses ke fitur premium FinPath akan dihentikan. Pembatalan tidak berlaku surut dan Kami tidak memberikan pengembalian dana untuk sisa periode yang tidak terpakai, kecuali diwajibkan lain oleh hukum yang berlaku atau kebijakan refund Google Play.
              </li>
              <li>
                <strong>Perubahan Harga:</strong> Kami dapat mengubah harga langganan atau menyediakan paket berlangganan baru. Setiap perubahan harga akan diinformasikan melalui Aplikasi atau email yang terdaftar. Jika perubahan harga berlaku bagi Pengguna berlangganan saat ini, Pengguna akan diberi kesempatan untuk menyetujui harga baru tersebut sebelum dikenakan biaya (misalnya melalui notifikasi di Google Play). Apabila Anda tidak setuju dengan perubahan harga, Anda dapat membatalkan langganan sebelum perpanjangan berikutnya.
              </li>
              <li>
                <strong>Kegagalan Pembayaran:</strong> Jika penagihan otomatis gagal (misalnya kartu kredit kadaluwarsa atau dana tidak mencukupi), Kami atau Google Play dapat membatalkan langganan Anda. Anda bertanggung jawab memastikan informasi pembayaran Anda terkini.
              </li>
              <li>
                <strong>Promosi:</strong> Kami dapat sesekali menawarkan promosi atau diskon berlangganan. Ketentuan spesifik promosi akan diinformasikan secara terpisah. Promosi dapat diubah atau ditarik kembali sesuai kebijakan Kami.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Penggunaan Aplikasi dan Larangan</h2>
            <p className="mb-2">Pengguna wajib mematuhi ketentuan berikut saat menggunakan FinPath:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Kegiatan yang Diizinkan:</strong> Aplikasi hanya boleh digunakan untuk tujuan pribadi Pengguna dalam mengelola keuangan sendiri. Anda setuju untuk menggunakan FinPath sesuai fungsinya dan mematuhi hukum serta peraturan perundang-undangan yang berlaku di Indonesia.
              </li>
              <li>
                <strong>Konten Pengguna:</strong> Setiap data transaksi, kategori, jumlah, foto struk, atau konten lain yang Anda unggah ke Aplikasi harus merupakan data milik Anda sendiri atau yang Anda berhak untuk gunakan. Dilarang mengunggah konten ilegal, melanggar hak kekayaan intelektual pihak lain, mengandung virus/malware, atau konten yang melanggar kesusilaan dan ketertiban umum. Kami tidak memoderasi tiap konten yang diunggah Pengguna, namun Kami berhak menghapus konten yang melanggar ketentuan atau hukum jika terdeteksi.
              </li>
              <li>
                <strong>Larangan Penyalahgunaan:</strong> Anda dilarang: (a) menggunakan Aplikasi untuk tujuan yang melanggar hukum, menipu, atau merugikan pihak manapun; (b) mencoba mengganggu, meretas, menambang data, atau menyusupi server, database, atau keamanan Aplikasi; (c) menggunakan script, bot, atau alat otomatis lain untuk mengakses atau menggunakan Layanan secara tidak wajar; (d) melakukan reverse engineering, menggandakan, memodifikasi, atau membuat turunan dari Aplikasi, kecuali diizinkan oleh hukum atau oleh Kami secara tertulis; (e) menyalahgunakan fitur OCR atau AI (misalnya mengunggah data palsu semata-mata untuk mengeksploitasi sistem).
              </li>
              <li>
                <strong>Satu Akun per Pengguna:</strong> Kecuali diizinkan, satu akun FinPath adalah untuk satu orang Pengguna. Dilarang menjual, meminjamkan, atau memberikan akses akun Anda kepada orang lain tanpa persetujuan Kami.
              </li>
              <li>
                <strong>Konsekuensi Pelanggaran:</strong> Jika Anda melanggar ketentuan penggunaan atau hukum yang berlaku, Kami berhak mengambil tindakan yang dianggap perlu, termasuk menghentikan sementara atau permanen akses Anda ke Aplikasi, menghapus konten, dan/atau langkah hukum jika relevan.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Layanan Pihak Ketiga yang Digunakan</h2>
            <p className="mb-4">
              Untuk menjalankan fitur tertentu, FinPath dapat menggunakan layanan pihak ketiga (“Layanan Pihak Ketiga”), termasuk namun tidak terbatas pada: (i) layanan autentikasi akun (misalnya login Google, jika Anda memilih opsi tersebut); (ii) pemrosesan pembayaran berlangganan melalui Google Play Billing; (iii) layanan pemrosesan AI/LLM untuk membantu input transaksi melalui chat dan/atau suara; (iv) layanan OCR untuk mengekstrak teks dari struk, tangkapan layar, PDF (misalnya e-statement), atau file lain yang Anda unggah; dan/atau (v) layanan hosting/infrastruktur untuk menjalankan server dan basis data Aplikasi.
            </p>
            <p className="mb-4">
              Anda memahami bahwa saat Anda menggunakan fitur yang bergantung pada Layanan Pihak Ketiga, data yang diperlukan untuk menjalankan fitur tersebut (misalnya teks input, audio, gambar struk/screenshot, atau dokumen yang Anda unggah) dapat diproses oleh pihak ketiga sesuai kebijakan dan ketentuan mereka. Anda bertanggung jawab untuk meninjau dan memahami syarat dan ketentuan serta kebijakan privasi pihak ketiga terkait. Sepanjang diizinkan oleh hukum, FinPath tidak bertanggung jawab atas ketersediaan, gangguan, kesalahan, atau kegagalan yang berasal dari Layanan Pihak Ketiga, termasuk hasil AI/OCR yang tidak akurat.
            </p>
            <p>
              <strong>Penegasan:</strong> Meskipun FinPath menggunakan layanan-layanan di atas untuk meningkatkan fungsionalitas, pihak ketiga tersebut berada di luar kendali Kami. Anda mengakui bahwa: (a) Setiap kegagalan, kesalahan, atau gangguan yang disebabkan oleh layanan pihak ketiga bukan merupakan tanggung jawab Kami secara langsung; (b) Kami tidak menjamin ketersediaan atau performa sempurna layanan pihak ketiga; dan (c) penggunaan Anda atas fitur tertentu berarti Anda menyetujui bahwa data yang diperlukan (misalnya teks atau gambar transaksi) akan dikirim ke layanan pihak ketiga terkait. Namun, Kami akan berusaha agar setiap penyedia pihak ketiga tersebut menjaga keamanan data Anda dan hanya menggunakannya sebatas keperluan penyediaan Layanan FinPath. Pastikan Anda juga meninjau kebijakan privasi atau ketentuan milik penyedia pihak ketiga tersebut jika diperlukan. Selain itu, FinPath saat ini tidak menggunakan layanan analitik pemasaran perilaku pengguna (behavior analytics) dan tidak melakukan sinkronisasi rekening bank.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Hak Kekayaan Intelektual</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Kepemilikan:</strong> Seluruh hak kekayaan intelektual terkait Aplikasi FinPath dan konten di dalamnya (termasuk namun tidak terbatas pada: kode sumber, desain, logo FinPath, nama dagang, fitur, teks, grafik, dan materi lainnya) adalah milik Pengembang dan/atau pihak yang memberikan lisensi kepada Kami. S&K ini tidak mengalihkan kepemilikan atau hak apa pun kepada Pengguna. Pengguna diberikan lisensi terbatas, non-eksklusif, tidak dapat dipindahtangankan, dan dapat dibatalkan untuk menggunakan Aplikasi semata-mata untuk keperluan pribadi sesuai S&K ini.
              </li>
              <li>
                <strong>Larangan Pelanggaran IP:</strong> Pengguna dilarang memperbanyak, memodifikasi, menerbitkan ulang, mendistribusikan, menjual, atau mengeksploitasi konten Aplikasi atau bagiannya (termasuk software FinPath) tanpa izin tertulis terlebih dahulu dari Kami. Termasuk dilarang merekayasa balik (reverse engineer) atau mencoba mengekstrak kode sumber Aplikasi, kecuali diizinkan oleh ketentuan open-source tertentu yang mungkin berlaku atau diizinkan oleh undang-undang.
              </li>
              <li>
                <strong>Masukan dan Umpan Balik:</strong> Kami menghargai masukan Anda untuk peningkatan FinPath. Namun, apabila Anda memberikan ide, saran, atau umpan balik kepada Kami, Anda dengan ini memberikan Kami hak dan lisensi bebas royalti untuk menggunakan, mengadaptasi, menerbitkan, atau mengimplementasikan saran tersebut tanpa kewajiban apapun kepada Anda.
              </li>
              <li>
                <strong>Klaim Pelanggaran:</strong> Jika Anda meyakini bahwa Aplikasi atau konten apapun di dalamnya melanggar hak kekayaan intelektual Anda atau pihak ketiga, silakan hubungi Kami segera dengan bukti kepemilikan hak yang relevan. Kami akan menindaklanjuti sesuai hukum yang berlaku.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Privasi dan Data Pribadi</h2>
            <p className="mb-2">
              Privasi Anda sangat penting bagi Kami. Penjelasan lengkap mengenai bagaimana Kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda terdapat dalam Kebijakan Privasi FinPath (terlampir atau tersedia pada menu “Kebijakan Privasi” di Aplikasi/website Kami). Dengan menggunakan FinPath atau memberikan data pribadi Anda, Anda menyetujui pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam Kebijakan Privasi. Beberapa poin penting antara lain:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Data yang Kami kumpulkan mencakup data akun (seperti email, sandi terenkripsi), data finansial yang Anda masukkan (kategori, jumlah transaksi, dll.), serta data lain seperti yang dijelaskan dalam Kebijakan Privasi.
              </li>
              <li>
                Data tersebut disimpan di server cloud dan tidak disimpan secara lokal permanen di perangkat Anda, sehingga Anda dapat mengaksesnya dari beberapa perangkat (dengan login) dan agar Kami dapat mengolah data tersebut untuk menyediakan Layanan.
              </li>
              <li>
                Kami menerapkan langkah-langkah keamanan yang wajar (teknis dan organisatoris) untuk melindungi Data Pribadi Anda. Namun, tidak ada sistem, transmisi data melalui internet, atau metode penyimpanan elektronik yang dapat dijamin 100% aman; oleh karena itu, Kami tidak dapat menjamin keamanan absolut atas Data Pribadi Anda.
              </li>
              <li>
                Kami tidak membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan Anda. Data hanya dibagikan kepada penyedia layanan pihak ketiga yang membantu operasional FinPath (lihat Pasal 6 di atas) sesuai kebutuhan, dan setiap pihak tersebut terikat untuk menjaga kerahasiaannya.
              </li>
              <li>
                Anda memiliki hak atas data pribadi Anda, termasuk untuk mengakses atau meminta penghapusan akun dan data. Cara melaksanakan hak tersebut diuraikan dalam Kebijakan Privasi.
              </li>
            </ul>
            <p>
              Dengan menyetujui S&K ini, Anda dianggap juga menyetujui Kebijakan Privasi. Jika terdapat konflik antara S&K dan Kebijakan Privasi terkait perlindungan data, Kebijakan Privasi akan diacu. Namun, S&K ini tetap berlaku untuk hal-hal lain selain perlindungan data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Penghentian Layanan dan Penutupan Akun</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pengakhiran oleh Pengguna:</strong> Anda dapat berhenti menggunakan FinPath kapan saja. Jika Anda ingin menutup (menghapus) akun Anda secara permanen, silakan hubungi Kami melalui email dukungan yang disediakan. Penghapusan akun bersifat permanen: data-data transaksi Anda akan dihapus atau dianonimkan sesuai Kebijakan Privasi (kecuali jika Kami harus menyimpannya untuk keperluan hukum tertentu).
              </li>
              <li>
                <strong>Pengakhiran atau Suspensi oleh Kami:</strong> Kami berhak menangguhkan atau mengakhiri akses Anda ke Aplikasi (sementara atau permanen) jika: (a) Anda melanggar S&K ini atau ketentuan hukum yang berlaku; (b) Kami menerima perintah dari otoritas yang berwenang; (c) terdeteksi aktivitas mencurigakan atau penipuan pada akun Anda; atau (d) terjadi masalah teknis/security yang serius. Kami akan mengupayakan pemberitahuan kepada Anda beserta alasannya, kecuali jika dilarang oleh hukum atau alasan keamanan.
              </li>
              <li>
                <strong>Penghentian Layanan:</strong> Sebagai Pengembang perorangan, Kami dapat memutuskan untuk menghentikan pengoperasian FinPath di masa depan (misalnya jika aplikasi tidak lagi dikembangkan). Jika hal ini terjadi, Kami akan memberikan pemberitahuan sebelumnya kepada Pengguna aktif (melalui email atau notifikasi di Aplikasi) dan, jika memungkinkan, memberikan kesempatan untuk mengunduh data finansial Anda sebelum penutupan total. Kewajiban berlangganan Anda akan dihentikan per tanggal efektif penghentian layanan, dan jika ada sisa masa berlangganan yang sudah dibayar melampaui tanggal penghentian, Kami akan memberikan pengembalian secara pro-rata sesuai kebijakan yang akan diinformasikan saat itu.
              </li>
              <li>
                <strong>Dampak Pengakhiran:</strong> Setelah akun diakhiri, hak Anda untuk mengakses Layanan akan segera terhenti. Bagian-bagian dari S&K yang secara wajar dimaksudkan tetap berlaku meskipun perjanjian diakhiri (seperti ketentuan Pembatasan Tanggung Jawab, Ganti Rugi, Hukum yang Berlaku) akan tetap berlaku.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Penyangkalan (Disclaimer)</h2>
            <p className="mb-2">
              Aplikasi FinPath disediakan “apa adanya” (as is) dan “sebagaimana tersedia” tanpa jaminan apapun dari Kami. Sepanjang diizinkan oleh hukum, Kami menyangkal semua jaminan atau garansi, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan tersirat mengenai kelayakan jual, kesesuaian untuk tujuan tertentu, non-pelanggaran, kelengkapan, aksesibilitas, kompabilitas, legalotas dan keamanan, bebas kesalahan dan bebas dari gangguan. Kami tidak menjamin bahwa:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Layanan akan selalu tepat, akurat, bebas kesalahan, atau dapat diandalkan. Teknologi AI (LLM) dan OCR yang digunakan FinPath memiliki keterbatasan dan dapat menghasilkan kesalahan atau ketidakakuratan. Anda disarankan untuk memeriksa kebenaran data yang dihasilkan FinPath, terutama jika akan digunakan untuk pengambilan keputusan penting.
              </li>
              <li>
                Aplikasi akan bebas dari gangguan, virus, atau komponen berbahaya lainnya. Meski Kami berupaya menjaga keamanan, Anda menggunakan Aplikasi dengan risiko Anda sendiri. Anda bertanggung jawab atas perangkat dan koneksi internet Anda saat mengakses FinPath.
              </li>
              <li>
                Konten dan informasi di dalam Aplikasi akan memenuhi harapan atau kebutuhan khusus Anda. Kami tidak memberikan nasihat profesional; konten bersifat umum. Tidak ada informasi atau materi apapun dari FinPath yang dapat dianggap sebagai jaminan atau nasihat keuangan resmi.
              </li>
            </ul>
            <p>
              Dengan menggunakan Aplikasi, Anda memahami bahwa segala risiko yang timbul atas penggunaan Aplikasi ditanggung oleh Anda sendiri. FinPath tidak menjamin bahwa penggunaan Layanan akan menghasilkan suatu hasil tertentu atau memastikan kondisi keuangan Anda membaik.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Batasan Tanggung Jawab</h2>
            <p className="mb-2">
              Sejauh diizinkan oleh hukum yang berlaku, Pengguna memahami bahwa Pengembang FinPath tidak bertanggung jawab atas kerugian atau kerusakan apapun yang timbul dari atau terkait dengan penggunaan Aplikasi ini. Ini termasuk, tanpa batasan:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Kerugian langsung maupun tidak langsung, insidental, khusus, konsekuensial, atau hukuman (punitive),</strong> seperti hilangnya keuntungan, hilangnya data, gangguan bisnis, kerusakan perangkat, atau kerugian tak berwujud lainnya yang mungkin Anda derita karena penggunaan atau kegagalan menggunakan FinPath.
              </li>
              <li>
                <strong>Kesalahan Kategorisasi atau Data:</strong> Kerugian akibat ketidakakuratan pengkategorian transaksi, kesalahan pengenalan OCR, atau saran yang keliru dari fitur AI. Anda setuju bahwa FinPath hanyalah alat bantu, dan Anda tidak akan menuntut Kami atas keputusan keuangan yang Anda buat (misalnya pengeluaran berlebihan atau keputusan investasi) berdasarkan informasi dari Aplikasi.
              </li>
              <li>
                <strong>Keterhubungan Layanan Pihak Ketiga:</strong> Kerugian akibat kegagalan, gangguan, atau kecurangan yang berasal dari layanan pihak ketiga yang diintegrasikan. Meskipun Kami akan berusaha memilih mitra yang andal, tanggung jawab utama atas layanan tersebut berada pada penyedia masing-masing, bukan pada Kami.
              </li>
              <li>
                <strong>Pelanggaran Keamanan di Luar Kendali:</strong> Kerugian akibat akses tidak sah oleh pihak ketiga ke akun atau data Anda yang bukan karena kelalaian fatal Kami (misalnya jika Anda gagal menjaga keamanan sandi Anda atau perangkat Anda diretas). Kami berkomitmen menjaga keamanan sesuai kemampuan, namun Pengguna memahami potensi risiko internet.
              </li>
            </ul>
            <p>
              <strong>Pengecualian Hukum:</strong> Jika peraturan perundang-undangan yang berlaku di Indonesia melarang pembatasan tanggung jawab tertentu seperti di atas, maka ketentuan terkait tidak akan berlaku bagi Anda hingga sejauh dilarang tersebut. Namun, dalam kasus apapun, tanggung jawab maksimum Kami kepada Anda (jika ada) atas segala kerugian dibatasi sebesar jumlah yang Anda telah bayarkan untuk berlangganan FinPath dalam 3 (tiga) bulan terakhir atau jumlah minimum yang diperbolehkan oleh hukum, dipilih mana yang lebih rendah.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Ganti Rugi</h2>
            <p>
              Anda setuju untuk membela, mengganti kerugian, dan membebaskan Kami (termasuk Pengembang, karyawan, afiliasi, dan mitra Kami, jika ada) dari dan terhadap segala klaim, tuntutan, gugatan, kerugian, biaya, dan pengeluaran (termasuk biaya pengacara) yang timbul karena: (a) pelanggaran Anda terhadap S&K ini atau Kebijakan Privasi; (b) pelanggaran Anda terhadap hukum atau hak pihak ketiga (misal, melanggar hak cipta pihak lain dengan konten yang Anda unggah); atau (c) penyalahgunaan Aplikasi oleh Anda. Kami berhak, atas biaya Kami sendiri, untuk melakukan pembelaan eksklusif terhadap klaim yang dikenakan ganti rugi oleh Anda, dan Anda wajib bekerja sama dengan Kami dalam hal ini. Ketentuan ganti rugi ini akan tetap berlaku meskipun penggunaan Aplikasi telah berakhir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Perubahan Syarat dan Ketentuan</h2>
            <p>
              Kami dapat mengubah, memodifikasi, atau memperbarui S&K ini dari waktu ke waktu sesuai kebijakan Kami. Jika terdapat perubahan material, Kami akan memberitahu Pengguna melalui sarana yang wajar, misalnya melalui notifikasi di Aplikasi, email, atau pengumuman di situs web. Pengguna diwajibkan memeriksa pembaruan S&K secara berkala. Tanggal “Terakhir diperbarui” pada bagian akhir dokumen ini menunjukkan kapan perubahan terbaru dilakukan. Dengan tetap mengakses atau menggunakan FinPath setelah perubahan S&K diberlakukan, Anda dianggap menyetujui S&K yang telah diubah. Jika Anda tidak menyetujui perubahan S&K, Anda harus berhenti menggunakan Aplikasi dan (jika berlangganan) dapat mengakhiri langganan Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Hukum yang Berlaku dan Penyelesaian Sengketa</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hukum yang Berlaku:</strong> S&K ini dan hubungan Anda dengan FinPath diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Segala hal yang tidak diatur secara khusus dalam S&K ini akan merujuk pada ketentuan perundang-undangan yang berlaku di Indonesia.
              </li>
              <li>
                <strong>Penyelesaian Sengketa:</strong> Apabila terjadi perselisihan sehubungan dengan penggunaan Aplikasi atau S&K ini, Para Pihak akan terlebih dahulu berupaya menyelesaikannya secara musyawarah untuk mufakat dalam waktu 30 (tiga puluh) hari kalender sejak perselisihan diberitahukan. Apabila tidak tercapai kesepakatan, sengketa akan diselesaikan melalui Pengadilan Negeri Jakarta (sesuai domisili Pengembang), kecuali ditentukan lain oleh ketentuan peraturan perundang-undangan yang berlaku.
              </li>
              <li>
                <strong>Pilihan Hukum Internasional:</strong> Jika Anda mengakses FinPath dari luar Indonesia, Anda tetap tunduk pada S&K ini. FinPath tidak menyatakan bahwa Layanan ditujukan atau sesuai untuk digunakan di yurisdiksi lain; Anda bertanggung jawab memastikan kepatuhan terhadap hukum setempat. Sepanjang diizinkan oleh hukum yang berlaku, S&K ini tetap diatur dan ditafsirkan berdasarkan hukum Republik Indonesia.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Bahasa dan Keterikatan Hukum</h2>
            <p className="mb-4">
              S&K ini dibuat dalam Bahasa Indonesia. Jika FinPath menyediakan terjemahan dalam bahasa lain (termasuk Bahasa Inggris), terjemahan tersebut hanya disediakan untuk kemudahan dan tidak mengubah ketentuan dalam versi Bahasa Indonesia. Apabila terdapat perbedaan penafsiran, versi Bahasa Indonesia yang berlaku.
            </p>
            <p>
              S&K ini merupakan perjanjian elektronik yang sah dan mengikat. Dengan membuat akun, mengakses, login, dan/atau menggunakan Aplikasi, Anda menyatakan telah membaca, memahami, dan menyetujui S&K ini beserta Kebijakan Privasi FinPath, tanpa memerlukan tanda tangan fisik.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">16. Lain-lain</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Keterpisahan:</strong> Jika satu atau lebih ketentuan dalam S&K ini dianggap tidak sah, tidak berlaku, atau tidak dapat dilaksanakan oleh pengadilan yang berwenang, maka bagian tersebut akan disesuaikan seminimal mungkin agar sesuai hukum, dan selebihnya dari S&K ini akan tetap berlaku sepenuhnya.
              </li>
              <li>
                <strong>Tidak Ada Pelepasan Hak:</strong> Kegagalan Kami dalam menegakkan suatu ketentuan dalam S&K ini atau menindak pelanggaran oleh Anda, bukan berarti Kami melepaskan hak untuk menegakkan ketentuan tersebut di kemudian hari atau menindak pelanggaran serupa selanjutnya.
              </li>
              <li>
                <strong>Pengalihan:</strong> Pengguna dilarang mengalihkan atau memindahkan hak dan kewajiban Anda berdasarkan S&K ini tanpa persetujuan tertulis dari Kami. Kami dapat mengalihkan hak dan kewajiban Kami (misalnya dalam hal transfer layanan ke entitas baru) dengan pemberitahuan kepada Anda sesuai ketentuan hukum yang berlaku. S&K ini mengikat dan berlaku untuk kepentingan para pihak serta penerus/pengganti yang sah.
              </li>
              <li>
                <strong>Keseluruhan Perjanjian:</strong> S&K ini (bersama dengan Kebijakan Privasi dan ketentuan lain yang dirujuk di dalamnya) merupakan keseluruhan perjanjian antara Anda dan FinPath terkait penggunaan Layanan, dan menggantikan semua kesepahaman atau perjanjian sebelumnya, baik tertulis maupun lisan.
              </li>
              <li>
                <strong>Hubungan Para Pihak:</strong> Anda dan Kami adalah kontraktor independen. S&K ini tidak menciptakan hubungan keagenan, kemitraan, atau joint venture antara Pengguna dan Pengembang.
              </li>
              <li>
                <strong>Kontak:</strong> Untuk pertanyaan, keluhan, atau pemberitahuan terkait S&K ini, Anda dapat menghubungi Kami melalui email di admin@finpathapp.com (atau kontak lain yang tercantum di aplikasi). Kami akan berusaha merespons dalam waktu yang wajar.
              </li>
              <li>
                <strong>Tanggal Berlaku:</strong> S&K ini terakhir diperbarui pada 4 Februari 2026 dan mulai berlaku efektif sejak tanggal tersebut.
              </li>
            </ul>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
