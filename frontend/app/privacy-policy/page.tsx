import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-12">Kebijakan Privasi FinPath</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Terima kasih atas kepercayaan Anda menggunakan FinPath. Privasi Anda penting bagi Kami, dan Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, menyimpan, melindungi, dan membagikan informasi pribadi Anda saat Anda menggunakan aplikasi FinPath (“Aplikasi”). Mohon luangkan waktu untuk membaca kebijakan ini dengan seksama. Dengan mengakses atau menggunakan FinPath, Anda dianggap telah membaca dan menyetujui Kebijakan Privasi ini. Jika Anda tidak setuju dengan kebijakan ini, mohon untuk tidak menggunakan Aplikasi.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Ruang Lingkup dan Persetujuan</h2>
            <p>
              Kebijakan Privasi ini berlaku untuk semua pengguna Aplikasi FinPath, baik yang telah membuat akun maupun yang sekadar mengunduh dan mencoba Aplikasi. Dengan menggunakan FinPath, Anda menyetujui pengumpulan dan pemrosesan Data Pribadi (sebagaimana didefinisikan di bawah) sesuai yang dijelaskan di sini. Kami mematuhi hukum dan peraturan perlindungan data pribadi yang berlaku di Indonesia, termasuk Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (“UU PDP”), dan peraturan perundangan terkait lainnya.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Informasi yang Kami Kumpulkan</h2>
            <p className="mb-2">
              Kami mengumpulkan beberapa jenis informasi pribadi (“Data Pribadi”) dan data lain dari Anda untuk menyediakan Layanan FinPath secara efektif. Informasi yang dikumpulkan dapat mencakup:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Data Akun:</strong> Informasi yang Anda berikan saat mendaftar akun FinPath:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Alamat email</strong> – digunakan sebagai identitas login Anda dan untuk komunikasi layanan.</li>
                  <li><strong>Kata sandi</strong> – Kami menyimpan kata sandi Anda dalam bentuk terenkripsi/hashed (bukan teks asli) demi keamanan.</li>
                  <li><strong>Nama</strong> – Jika Anda mendaftar via Google atau menambahkan nama profil, Kami dapat mengumpulkan nama tampilan Anda. (Catatan: FinPath tidak memerlukan nama lengkap atau KTP karena ini bukan aplikasi layanan keuangan regulasi, namun nama depan dapat digunakan sebagai identifikasi profil).</li>
                  <li><strong>Foto Profil</strong> – Jika Anda mengunggah foto profil dalam Aplikasi (opsional), foto tersebut akan tersimpan di server Kami.</li>
                </ul>
              </li>
              <li>
                <strong>Data Finansial Pengguna:</strong> Ini adalah inti dari layanan FinPath – data keuangan yang Anda input, antara lain:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Transaksi Pemasukan dan Pengeluaran:</strong> Setiap kali Anda memasukkan transaksi, Kami menyimpan rincian seperti tanggal transaksi, jumlah (nominal uang), kategori yang dipilih atau dihasilkan (misal: Makanan, Transportasi), catatan/deskripsi yang Anda berikan, dan data lainnya yang disediakan oleh Anda.</li>
                  <li><strong>Data dari OCR:</strong> Jika Anda menggunakan fitur pemindaian struk/foto/screenshot/e-statement atau dokumen sejenis, Kami akan memproses gambar/dokumen yang Anda unggah. Gambar/dokumen tersebut dan teks hasil ekstraksi (misalnya nama toko, tanggal, total belanja) disimpan sehingga Anda dapat meninjaunya di Aplikasi.</li>
                  <li><strong>Data dari File Upload (PDF/Excel):</strong> Jika Anda mengunggah file (misalnya PDF mutasi/statement atau Excel), Kami akan memproses dan menyimpan file dan/atau hasil ekstraksi/hasil impor yang diperlukan agar transaksi dapat ditampilkan dan dikelola di Aplikasi.</li>
                  <li><strong>Data dari Chatbot/AI:</strong> Jika Anda memasukkan data melalui antarmuka chat (LLM), input teks yang Anda ketik dan output yang dihasilkan AI (misal, percakapan atau konfirmasi transaksi) dapat tercatat. Kami menyimpan hasil akhirnya (transaksi yang dicatat).</li>
                </ul>
              </li>
              <li>
                <strong>Akses Perangkat (Kamera & Mikrofon/Audio):</strong>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Kamera:</strong> Apabila Anda menggunakan fitur scan/ambil gambar (struk, nota, screenshot melalui kamera), FinPath akan meminta izin akses kamera. Pengambilan gambar hanya terjadi saat Anda menggunakan fitur tersebut. Izin ini berbasis fitur; Anda dapat menolak, namun fitur scan/ambil gambar tidak dapat digunakan.</li>
                  <li><strong>Mikrofon/Audio (Voice):</strong> Apabila Anda menggunakan fitur input suara untuk memasukkan transaksi, FinPath akan meminta izin akses mikrofon. Perekaman audio hanya terjadi saat Anda mengaktifkan fitur voice (misalnya menekan tombol rekam). Anda dapat menolak, namun fitur voice tidak dapat digunakan.</li>
                </ul>
                <p className="mt-2 text-sm italic">Catatan: Di Android, kamera & mikrofon termasuk izin sensitif dan praktik yang dianjurkan adalah menjelaskan penggunaannya secara transparan dan meminta izin hanya saat diperlukan.</p>
                <p className="text-sm italic">Catatan tambahan: Pedoman App Store juga menekankan persetujuan eksplisit saat penggunaan kamera/mikrofon.</p>
              </li>
              <li>
                <strong>Data dari File Upload (PDF/Excel) & Akses Dokumen (File Picker):</strong>
                <p className="mt-1">
                  Jika Anda menggunakan fitur unggah file (misalnya PDF/Excel), FinPath akan meminta Anda memilih dokumen melalui pemilih file (file picker) bawaan sistem. FinPath hanya mengakses dokumen yang Anda pilih untuk diproses (misalnya ekstraksi/impornya menjadi transaksi) dan tidak mengakses dokumen lain di perangkat Anda. Pada Android, mekanisme ini dapat menggunakan Storage Access Framework yang memungkinkan pengguna memilih dokumen tertentu untuk dibuka oleh aplikasi
                </p>
              </li>
              <li>
                <strong>Data Lain:</strong> Setiap komunikasi yang Anda lakukan dengan Kami: misalnya jika Anda mengirim email dukungan, memberi masukan, atau berpartisipasi dalam survei/kuis yang Kami adakan, Kami dapat menyimpan informasi tersebut dan kontak Anda.
              </li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg mt-4 text-sm">
              <p className="font-semibold mb-2">Catatan penting:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>FinPath tidak mengumpulkan data lokasi (GPS) dan tidak melakukan sinkronisasi bank pada versi saat ini.</li>
                <li>FinPath tidak menggunakan layanan analytics pihak ketiga untuk pelacakan perilaku pengguna.</li>
                <li>Kami tidak mengumpulkan atau meminta kategori Data Pribadi sensitif yang tidak relevan dengan FinPath, seperti data biometrik, data kesehatan, data kartu kredit (pembayaran ditangani oleh Google), atau informasi pribadi sensitif lainnya, kecuali jika Anda sendiri memasukkannya ke dalam catatan transaksi (misal Anda menulis catatan yang mengandung informasi pribadi).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Tujuan Penggunaan Data</h2>
            <p className="mb-2">Kami menggunakan Data Pribadi dan informasi yang dikumpulkan untuk berbagai tujuan yang sah dan diperlukan sehubungan dengan penyediaan layanan FinPath, termasuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Menyediakan Layanan Inti:</strong> Data transaksi dan keuangan Anda digunakan untuk menampilkan kembali catatan pemasukan/pengeluaran, menghitung total pengeluaran per kategori, menampilkan grafik atau ringkasan keuangan, serta fitur-fitur lain di Aplikasi sesuai fungsinya. Misalnya, Kami mengolah data Anda agar Anda dapat melihat berapa total belanja bulanan Anda di kategori tertentu.</li>
              <li><strong>Kategorisasi Otomatis:</strong> Kami memproses deskripsi transaksi atau detail struk dengan algoritma (termasuk AI) untuk menyarankan atau menentukan kategori. Ini melibatkan analisis machine learning terhadap data transaksi Anda. Tujuannya untuk memudahkan Anda sehingga banyak transaksi otomatis terkelompok tanpa Anda input manual.</li>
              <li><strong>Fitur Chatbot & OCR:</strong> Untuk memberikan fitur input melalui chat, audio dan pemindaian struk, Kami mengirimkan data (teks yang Anda ketik, atau gambar yang Anda unggah) ke layanan AI/OCR pihak ketiga (lihat S&K, Bagian Layanan Pihak Ketiga). Hasil yang dikembalikan digunakan untuk mencatat transaksi di akun Anda. Proses ini otomatis dan dilakukan berdasarkan permintaan Anda saat menggunakan fitur tersebut.</li>
              <li><strong>Komunikasi dengan Pengguna:</strong> Alamat email Anda dapat digunakan untuk mengirim komunikasi penting terkait layanan, misalnya: email verifikasi pendaftaran, notifikasi terkait keamanan (seperti deteksi login baru), pembaruan S&K atau Kebijakan Privasi, pemberitahuan perpanjangan atau masalah pembayaran berlangganan, dan informasi terkait layanan lainnya. Kami tidak akan mengirim email promosi atau newsletter kecuali Anda telah memberikan persetujuan terpisah untuk itu. Jika di masa depan ada konten pemasaran (misal pengumuman fitur baru, penawaran upgrade), hal tersebut hanya akan dikirim jika diizinkan oleh Anda dan akan ada opsi berhenti berlangganan (unsubscribe).</li>
              <li><strong>Dukungan Pelanggan:</strong> Jika Anda menghubungi Kami untuk bantuan/dukungan, Kami akan menggunakan informasi yang Anda berikan (misal email dan deskripsi masalah) serta data terkait akun Anda untuk membantu menjawab pertanyaan atau menyelesaikan keluhan. Kami juga dapat mengakses data transaksi Anda yang relevan jika diperlukan untuk memecahkan masalah teknis (misal bug terkait data tertentu). Tim dukungan Kami terikat kewajiban kerahasiaan dan hanya akan mengakses data sesuai kebutuhan.</li>
              <li><strong>Keamanan dan Pencegahan Fraud:</strong> Data log dan perangkat dapat digunakan untuk mendeteksi aktivitas mencurigakan di Aplikasi, melindungi akun Anda dari akses tidak sah, dan memastikan keamanan sistem. Misalnya, Kami dapat memantau login dari lokasi atau perangkat baru, atau mendeteksi pola transaksi yang tidak biasa yang mungkin mengindikasikan penyalahgunaan akun.</li>
              <li><strong>Memenuhi Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum yang berlaku, Kami dapat menggunakan atau menyimpan Data Pribadi Anda guna memenuhi persyaratan peraturan (misalnya pembukuan transaksi untuk keperluan pajak Kami sendiri, atau menanggapi permintaan sah penegak hukum).</li>
            </ul>
            <p className="mt-4">
              Kami berkomitmen untuk tidak memproses Data Pribadi di luar tujuan yang telah dijelaskan di atas kecuali dengan persetujuan Anda. Jika di masa depan Kami memerlukan penggunaan data Anda untuk tujuan baru yang material berbeda, Kami akan meminta persetujuan Anda atau memberi Anda pemberitahuan yang jelas dan kesempatan untuk opt-out bila diwajibkan oleh hukum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Dasar Hukum Pemrosesan</h2>
            <p className="mb-2">Berdasarkan UU PDP dan regulasi terkait, dasar hukum bagi Kami untuk memproses Data Pribadi Anda adalah:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Persetujuan:</strong> Dengan mendaftar dan menggunakan FinPath, Anda memberikan persetujuan kepada Kami untuk memproses data Anda sebagaimana dijelaskan. Dalam hal Anda memberikan Data Pribadi tertentu secara opsional (misal foto profil), dasar pemrosesan juga persetujuan Anda secara implisit. Anda berhak menarik persetujuan kapan saja (misalnya dengan menghapus akun atau menghubungi Kami), namun perlu diingat penarikan persetujuan tidak berlaku surut dan dapat membuat Kami tidak dapat lagi menyediakan layanan secara penuh.</li>
              <li><strong>Pelaksanaan Kontrak:</strong> Pemrosesan Data Pribadi juga diperlukan untuk pelaksanaan perjanjian layanan antara Anda dan Kami. S&K FinPath merupakan perjanjian di mana Kami menyediakan layanan dan Anda menggunakannya; pemrosesan data seperti transaksi dan email diperlukan agar layanan berfungsi sesuai kontrak tersebut (misal, tanpa email Kami tidak bisa membuat akun Anda; tanpa memproses data transaksi Kami tak bisa menampilkan ringkasan keuangan).</li>
              <li><strong>Kewajiban Hukum:</strong> Dalam beberapa kasus, pemrosesan mungkin diperlukan untuk memenuhi kewajiban hukum Kami. Misalnya, ketentuan perpajakan atau pembukuan mungkin mengharuskan penyimpanan catatan transaksi agregat (tanpa mengidentifikasi personal secara langsung), atau perintah pengadilan dapat mewajibkan Kami menyerahkan data tertentu kepada otoritas. Kami hanya akan memproses sejauh diperlukan untuk mematuhi kewajiban hukum yang berlaku.</li>
              <li><strong>Kepentingan Sah (Legitimate Interest):</strong> Kami dapat memproses data atas dasar kepentingan sah Kami, misalnya untuk keamanan IT, pencegahan penyalahgunaan, peningkatan layanan, selama kepentingan tersebut tidak mengesampingkan hak dan kebebasan dasar Anda dalam perlindungan data. Jika Kami menggunakan dasar kepentingan sah, Kami akan melakukan penyeimbangan (balancing test) sesuai pedoman hukum yang berlaku untuk memastikan praktik Kami adil dan transparan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Pembagian Informasi kepada Pihak Ketiga</h2>
            <p className="mb-4">
              Kami memahami pentingnya menjaga kerahasiaan data Anda. Kami tidak menjual atau menyewakan Data Pribadi Anda. Kami hanya membagikan Data Pribadi kepada pihak ketiga dalam batas yang diperlukan untuk menyediakan dan mengoperasikan Layanan FinPath, yaitu:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Penyedia Infrastruktur/Hosting (Data Processor):</strong> untuk menjalankan server, database, dan penyimpanan sehingga Aplikasi dapat berfungsi</li>
              <li><strong>Autentikasi & Pembayaran:</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>Google Sign-In untuk login melalui Google (memproses data yang diperlukan untuk autentikasi, seperti email/nama tampilan sesuai pengaturan akun Google Anda).</li>
                  <li>Google Play Billing untuk pembayaran langganan. Kami menerima status/konfirmasi langganan dari Google, dan tidak menerima data kartu pembayaran Anda (diproses oleh Google sebagai pengendali terpisah sesuai kebijakan mereka).</li>
                </ul>
              </li>
              <li><strong>Pemrosesan AI/OCR (bila Anda menggunakan fitur terkait):</strong> jika Anda memakai fitur chat AI atau OCR, input yang Anda berikan (misalnya teks chat, audio voice, gambar struk/screenshot, atau dokumen yang Anda unggah) akan diproses oleh penyedia layanan AI/OCR untuk menghasilkan output yang Anda minta. Penyedia tersebut diposisikan sebagai pemroses data untuk menjalankan permintaan Anda.</li>
            </ul>
            <p className="mb-4">
              Kami membagikan data hanya sejauh diperlukan untuk menyediakan fitur yang Anda gunakan. Pihak ketiga tersebut dilarang menggunakan data Anda untuk tujuan lain di luar penyediaan layanan kepada FinPath, sejauh diatur dalam perjanjian dan kebijakan mereka. Kami dapat memperbarui daftar pihak ketiga dari waktu ke waktu dan akan mencerminkannya dalam Kebijakan Privasi ini.
            </p>
            <p className="mb-4">
              Semua penyedia layanan pihak ketiga ini bertindak sebagai “pemroses data” atas nama Kami untuk tujuan yang dijelaskan. Kami mengikat mereka dalam perjanjian yang mewajibkan perlindungan Data Pribadi Anda dan melarang penggunaan untuk kepentingan lain.
            </p>
            <p className="mb-4">
              <strong>Transfer Bisnis:</strong> Jika di masa depan Pengembang FinPath mendirikan perusahaan atau jika FinPath dialihkan/dijual/diakuisisi oleh entitas lain, Data Pribadi Anda dapat menjadi bagian dari aset yang dialihkan sebagai bagian dari transaksi tersebut. Misalnya, jika FinPath dioperasikan oleh suatu PT (Perseroan Terbatas) yang mengambil alih layanan, data pengguna akan ditransfer ke entitas baru tersebut agar layanan dapat terus berjalan. Dalam skenario demikian, Kami akan memastikan pihak penerus tersebut menghormati Kebijakan Privasi ini atau memberi notifikasi dan memperoleh persetujuan Anda jika diwajibkan. Anda akan diberitahu melalui email atau pemberitahuan yang mencolok di Aplikasi jika terjadi perubahan kepemilikan atau pengontrol data yang melibatkan Data Pribadi Anda. Anda berhak untuk berhenti menggunakan layanan atau meminta penghapusan data jika Anda tidak setuju dengan entitas baru.
            </p>
            <p className="mb-2"><strong>Kewajiban Hukum & Perlindungan Hak:</strong> Kami dapat mengungkapkan Data Pribadi Anda jika diperlukan untuk:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Memenuhi kewajiban hukum, proses hukum, atau permintaan pemerintah yang valid. Contoh: perintah pengadilan, panggilan (subpoena), atau proses hukum lainnya dapat mewajibkan Kami menyerahkan data tertentu.</li>
              <li>Menegakkan syarat dan ketentuan (S&K) FinPath, termasuk penyelidikan potensi pelanggaran terhadapnya.</li>
              <li>Mendeteksi, mencegah, atau menindaklanjuti penipuan, keamanan, atau isu teknis. Jika Anda terlibat dalam tindakan yang merugikan FinPath atau pengguna lain, Kami dapat memberikan informasi kepada penegak hukum sesuai yang diperlukan.</li>
              <li>Melindungi hak, properti, atau keamanan Kami, pengguna Kami, atau publik sebagaimana diwajibkan atau diizinkan oleh hukum. Ini termasuk bertukar informasi dengan perusahaan dan organisasi lain untuk keperluan perlindungan penipuan dan pengurangan risiko kredit (tentunya sesuai hukum).</li>
            </ul>
            <p>
              <strong>Dengan Persetujuan Anda:</strong> Di luar situasi di atas, jika ada kebutuhan untuk membagikan data Anda kepada pihak ketiga (misal untuk tujuan pemasaran bersama, penelitian akademis, dsb.), Kami hanya akan melakukannya dengan persetujuan eksplisit Anda. Misalnya, jika suatu saat Kami menjalin kerjasama dengan mitra keuangan untuk penawaran produk, Kami mungkin menawarkan Anda untuk berbagi data tertentu – dan hanya jika Anda setuju, baru data dibagikan. Tanpa persetujuan, data tidak akan dibagikan di luar lingkup penyediaan layanan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Penyimpanan dan Keamanan Data</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Lokasi Penyimpanan Data:</strong> Data Pribadi Anda disimpan pada infrastruktur penyedia hosting/cloud yang digunakan FinPath (misalnya layanan hosting aplikasi dan database). Lokasi server dapat berada di Indonesia atau di luar Indonesia, tergantung lokasi pusat data yang dipilih/tersedia dari penyedia tersebut. Apabila terjadi penyimpanan atau pemrosesan lintas negara, Kami akan mengambil langkah yang wajar untuk memastikan perlindungan yang memadai sesuai ketentuan peraturan perlindungan data yang berlaku di Indonesia.</li>
              <li><strong>Keamanan Data:</strong> Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi Data Pribadi Anda dari akses, penggunaan, perubahan, atau pengungkapan tanpa izin. Langkah ini dapat mencakup, antara lain: (i) pengamanan komunikasi data antara perangkat Anda dan server; (ii) pembatasan akses internal hanya kepada pihak yang memerlukan untuk operasional; dan (iii) pengamanan kredensial akun, termasuk penyimpanan kata sandi dalam bentuk yang tidak dapat dibaca (misalnya melalui metode hashing).</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg text-sm mb-4">
              <p className="font-semibold mb-2">Keamanan & Peran Pengguna</p>
              <p className="mb-2">Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi Data Pribadi Anda. Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang dapat dijamin 100% aman. Anda bertanggung jawab menjaga keamanan akun Anda, antara lain dengan:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>menjaga kerahasiaan kata sandi dan menggunakan kata sandi yang kuat;</li>
                <li>selalu memperbarui aplikasi ke versi terbaru; dan</li>
                <li>waspada terhadap penipuan/phishing (Kami tidak pernah meminta kata sandi Anda melalui email atau pesan).</li>
              </ul>
            </div>
            <p>
              <strong>Pemberitahuan Insiden Keamanan (Data Breach):</strong> Apabila terjadi insiden kegagalan pelindungan Data Pribadi yang berdampak pada Anda, Kami akan melakukan pemberitahuan sesuai ketentuan peraturan perundang-undangan yang berlaku, termasuk kewajiban pemberitahuan paling lambat 3×24 jam sejak insiden diketahui, dan memuat informasi minimum yang dipersyaratkan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Retensi (Jangka Waktu Penyimpanan) Data</h2>
            <p className="mb-2">Kami menyimpan Data Pribadi Anda selama diperlukan untuk menyediakan Layanan dan memenuhi tujuan pemrosesan sebagaimana dijelaskan dalam Kebijakan Privasi ini, kecuali diwajibkan lebih lama oleh hukum.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Selama akun aktif:</strong> Data akun dan data transaksi Anda disimpan agar Layanan dapat berfungsi dan Anda dapat mengakses riwayat Anda.</li>
              <li><strong>Penghapusan akun/data:</strong> Jika Anda menggunakan fitur hapus akun/hapus data di Aplikasi, penghapusan bersifat permanen dan tidak dapat dipulihkan. Setelah penghapusan diproses, Anda tidak dapat lagi mengakses data melalui Aplikasi.</li>
              <li><strong>Tanpa backup/restore untuk pengguna:</strong> FinPath tidak menyediakan fitur pemulihan data (restore). Anda disarankan mengekspor data yang diperlukan sebelum melakukan penghapusan.</li>
              <li><strong>Pengecualian terbatas:</strong> Kami dapat mempertahankan informasi tertentu yang minimum dan seperlunya untuk kepatuhan hukum, penyelesaian sengketa, pencegahan penyalahgunaan/penipuan, atau pencatatan pembukuan/pajak (misalnya catatan transaksi langganan secara terbatas).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Hak-Hak Anda</h2>
            <p className="mb-2">
              FinPath menghormati hak Anda sebagai Subjek Data Pribadi sesuai peraturan perundang-undangan yang berlaku, termasuk UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Hak-hak Anda meliputi:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Hak Akses & Salinan Data:</strong> Anda berhak meminta konfirmasi apakah Data Pribadi Anda diproses oleh Kami dan meminta akses/salinan Data Pribadi tertentu yang Kami kelola, sepanjang tidak dikecualikan oleh hukum.
              </li>
              <li>
                <strong>Hak Perbaikan (Rektifikasi):</strong> Anda berhak meminta perbaikan atau pembaruan Data Pribadi yang tidak akurat atau tidak lengkap.
              </li>
              <li>
                <strong>Hak Penghapusan:</strong> Anda berhak meminta penghapusan Data Pribadi Anda dalam kondisi yang diizinkan oleh hukum. Jika penghapusan dilakukan melalui fitur hapus akun/data, penghapusan bersifat permanen dan tidak dapat dipulihkan.
                <p className="text-sm italic mt-1">Catatan: meskipun Kami menghapus data dari sistem aktif, sebagian data dapat tetap tersimpan sementara pada log teknis atau sistem pihak ketiga yang memproses data untuk penyediaan layanan (mis. autentikasi/pembayaran/AI/OCR), sesuai kebijakan retensi masing-masing dan kewajiban hukum yang berlaku.</p>
              </li>
              <li>
                <strong>Hak Menarik Persetujuan:</strong> Untuk pemrosesan yang berbasis persetujuan, Anda berhak menarik persetujuan kapan saja (penarikan tidak berlaku surut terhadap pemrosesan yang sudah terjadi).
              </li>
              <li>
                <strong>Hak Keberatan & Pembatasan Pemrosesan:</strong> Anda dapat mengajukan keberatan atau meminta pembatasan pemrosesan dalam kondisi tertentu yang diatur hukum, termasuk keberatan atas keputusan yang semata-mata didasarkan pada pemrosesan otomatis dalam keadaan tertentu.
              </li>
              <li>
                <strong>Hak Portabilitas Data (jika berlaku):</strong> Sejauh diwajibkan/diakui oleh ketentuan yang berlaku, Anda dapat meminta data tertentu dalam format yang umum digunakan untuk dipindahkan.
              </li>
              <li>
                <strong>Hak Mengajukan Keluhan:</strong> Anda dapat menyampaikan keluhan kepada Kami terlebih dahulu. Jika diperlukan, Anda juga dapat mengajukan pengaduan melalui mekanisme yang disediakan otoritas berwenang. (Di Indonesia, salah satu rujukan otoritas adalah Kementerian Komunikasi dan Informatika sesuai ketentuan dan mekanisme yang berlaku dari waktu ke waktu.)
              </li>
            </ol>
            <p className="mt-4">
              <strong>Cara menggunakan hak-hak di atas:</strong> Silakan hubungi kontak resmi FinPath. Demi keamanan, Kami dapat meminta verifikasi wajar (misalnya permintaan dikirim dari email yang terdaftar atau metode verifikasi lain) sebelum memproses permintaan Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Privasi Anak di Bawah Umur & Penyandang Disabilitas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>FinPath tidak ditujukan untuk anak di bawah 18 tahun. Jika Pengguna berusia di bawah 18 tahun, penggunaan FinPath harus dengan persetujuan orang tua atau wali.</li>
              <li>Untuk Pengguna yang merupakan penyandang disabilitas dan/atau berada di bawah perwalian, FinPath akan memproses Data Pribadi sesuai ketentuan peraturan perundang-undangan yang berlaku, termasuk dengan persetujuan dari wali yang sah apabila diperlukan.</li>
              <li>Jika Anda membutuhkan bantuan untuk mengakses atau memahami Kebijakan Privasi ini, Anda dapat menghubungi kami melalui email dukungan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Perubahan Kebijakan Privasi</h2>
            <p className="mb-2">Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu guna mencerminkan perubahan pada praktik Kami atau untuk alasan operasional, hukum, atau peraturan. Jika terjadi perubahan material, Kami akan memberitahu Anda dengan cara yang layak. Pemberitahuan dapat dilakukan melalui:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Pengumuman dalam Aplikasi (misal notifikasi pop-up atau banner) bahwa kebijakan ini telah diperbarui, dan/atau</li>
              <li>Email ke alamat yang terdaftar di akun Anda menjelaskan bahwa ada perubahan kebijakan.</li>
            </ul>
            <p>
              Kami akan mencantumkan tanggal pembaruan terakhir di bagian akhir dokumen ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala agar tetap mengetahui bagaimana informasi Anda kami kelola. Dengan terus menggunakan FinPath setelah perubahan Kebijakan Privasi berlaku, Anda dianggap menyetujui perubahan tersebut. Jika Anda tidak setuju dengan perubahan apapun, Anda harus menghentikan penggunaan Aplikasi dan dapat meminta penghapusan data Anda sebagaimana diatur di atas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Hukum yang Berlaku</h2>
            <p>
              Kebijakan Privasi ini diatur oleh dan ditafsirkan berdasarkan hukum Republik Indonesia, termasuk ketentuan yang relevan mengenai pelindungan data pribadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Informasi Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau mengenai bagaimana Data Pribadi Anda diproses dalam FinPath, jangan ragu untuk menghubungi Kami di alamat email: <a href="mailto:admin@finpathapp.com" className="text-primary-600 hover:underline">admin@finpathapp.com</a>
            </p>
            <p className="mt-2">
              Kami akan berusaha menjawab pertanyaan atau permintaan Anda secepat mungkin, paling lambat dalam jangka waktu yang dipersyaratkan oleh hukum.
            </p>
          </section>

          <div className="mt-8 border-t pt-6 text-gray-600">
            <p>Terima kasih telah mempercayakan data Anda kepada FinPath. Kami berkomitmen untuk menjaga keamanan dan privasi informasi Anda sebaik mungkin.</p>
            <p className="mt-2 font-medium">Terakhir diperbarui: 4 Februari 2026</p>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
