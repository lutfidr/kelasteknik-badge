export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-900">
              kelas<span className="text-blue-600">teknik</span>
            </h1>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Sertifikat</span>
          </div>
          <div>
            <a href="#cara-kerja" className="text-gray-600 hover:text-gray-900 mr-8">Cara Kerja</a>
            <a href="#verifikasi" className="text-gray-600 hover:text-gray-900">Cek Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* Hero - Fokus Verifikasi */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Verifikasi Keabsahan<br />Sertifikat Resmi
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Pastikan sertifikat yang kamu terima dari Kelasteknik.id adalah asli. 
          Cek keabsahan sertifikat dengan mudah menggunakan kode unik.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#verifikasi" 
             className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700">
            Cek Sertifikat Sekarang
          </a>
          <a href="#cara-kerja" 
             className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50">
            Pelajari Cara Kerja
          </a>
        </div>
      </div>

      {/* Cara Kerja */}
      <div id="cara-kerja" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Cara Kerja</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">1</div>
              <h3 className="font-semibold text-xl mb-2">Ikuti Webinar</h3>
              <p className="text-gray-600">Peserta mengikuti webinar yang diselenggarakan oleh Kelasteknik.id</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2</div>
              <h3 className="font-semibold text-xl mb-2">Terima Sertifikat</h3>
              <p className="text-gray-600">Setelah menyelesaikan webinar, peserta akan menerima sertifikat resmi</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3</div>
              <h3 className="font-semibold text-xl mb-2">Verifikasi Keabsahan</h3>
              <p className="text-gray-600">Cek apakah sertifikat tersebut asli melalui sistem verifikasi kami</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Cek Sertifikat */}
      <div id="verifikasi" className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Cek Keabsahan Sertifikat</h2>
        <p className="text-gray-600 mb-8">Masukkan kode unik yang tertera di sertifikat kamu</p>
        
        <div className="flex gap-4 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Contoh: KT-2026-00123"
            className="flex-1 border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-8 rounded-2xl font-semibold hover:bg-blue-700">
            Cek
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">Atau buka link verifikasi yang ada di sertifikat</p>
      </div>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kelasteknik.id — Sistem Verifikasi Sertifikat Resmi
      </footer>
    </div>
  );
}