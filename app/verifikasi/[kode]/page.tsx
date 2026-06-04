'use client';

import { useParams } from 'next/navigation';

export default function VerifikasiSertifikat() {
  const params = useParams();
  const kode = params.kode as string;

  // Simulasi pengecekan (nanti ini akan pakai database)
  const isValid = kode && kode.startsWith('KT-2026-');

  // Data dummy (nanti diambil dari database berdasarkan kode)
  const sertifikat = isValid
    ? {
        nama: 'Ahmad Santoso',
        webinar: 'Primavera P6 Advanced',
        tanggal: '12 Mei 2026',
        penyelenggara: 'Kelasteknik.id',
      }
    : null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Kelasteknik.id</h1>
          <p className="text-gray-600">Verifikasi Keabsahan Sertifikat</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">
          {isValid && sertifikat ? (
            // === SERTIFIKAT VALID ===
            <>
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                  <span>✅</span>
                  <span>SERTIFIKAT ASLI</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-8">Sertifikat ini Resmi</h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Nama Peserta</span>
                  <span className="font-semibold">{sertifikat.nama}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Nama Webinar</span>
                  <span className="font-semibold">{sertifikat.webinar}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Tanggal Selesai</span>
                  <span className="font-semibold">{sertifikat.tanggal}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">Penyelenggara</span>
                  <span className="font-semibold">{sertifikat.penyelenggara}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-500">Kode Verifikasi</span>
                  <span className="font-mono font-bold text-blue-600">{kode}</span>
                </div>
              </div>

              <div className="mt-8 text-center text-xs text-gray-500">
                Sertifikat ini hanya valid jika diterbitkan langsung oleh Kelasteknik.id
              </div>
            </>
          ) : (
            // === SERTIFIKAT TIDAK VALID ===
            <>
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 text-red-700 px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                  <span>❌</span>
                  <span>SERTIFIKAT TIDAK VALID</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-4">Sertifikat Tidak Ditemukan</h2>
              <p className="text-center text-gray-600 mb-8">
                Kode yang kamu masukkan tidak terdaftar di sistem kami atau sudah tidak berlaku.
              </p>
            </>
          )}

          <div className="mt-8 text-center">
            <a href="/" className="text-blue-600 hover:underline text-sm">
              ← Kembali ke Beranda Kelasteknik.id
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}