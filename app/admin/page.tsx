'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';

export default function BuatSertifikat() {
  const [pesertaList, setPesertaList] = useState<any[]>([]);
  const [webinar, setWebinar] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [hasilTerbit, setHasilTerbit] = useState<any[]>([]);

  // Import Excel
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setPesertaList(jsonData);
      setHasilTerbit([]); // reset hasil sebelumnya
      alert(`Berhasil import ${jsonData.length} peserta dari Excel!`);
    };
    reader.readAsBinaryString(file);
  };

  // Terbitkan Sertifikat
  const handleTerbitkan = () => {
    if (pesertaList.length === 0) {
      alert('Silakan import Excel dulu');
      return;
    }

    const hasil = pesertaList.map((p, index) => {
      const kode = `KT-${new Date().getFullYear()}-${String(1000 + index).padStart(4, '0')}`;
      return {
        ...p,
        kodeUnik: kode,
        linkVerifikasi: `http://localhost:3000/verifikasi/${kode}`
      };
    });

    setHasilTerbit(hasil);
    alert(`Berhasil menerbitkan ${hasil.length} sertifikat!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2">Terbitkan Sertifikat</h1>
        <p className="text-gray-600 mb-8">Import Excel → Terbitkan banyak sertifikat sekaligus</p>

        {/* Form Informasi Webinar */}
        <div className="bg-white p-8 rounded-3xl shadow mb-8">
          <h2 className="font-semibold mb-4">1. Informasi Webinar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nama Webinar</label>
              <input
                type="text"
                value={webinar}
                onChange={(e) => setWebinar(e.target.value)}
                className="w-full border rounded-2xl px-4 py-3"
                placeholder="Primavera P6 Advanced"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tanggal Selesai</label>
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full border rounded-2xl px-4 py-3"
              />
            </div>
          </div>
        </div>

        {/* Import Excel */}
        <div className="bg-white p-8 rounded-3xl shadow mb-8">
          <h2 className="font-semibold mb-4">2. Import Data Peserta dari Excel</h2>

          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center mb-6">
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
              id="excel-upload"
            />
            <label
              htmlFor="excel-upload"
              className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 inline-block"
            >
              Pilih File Excel
            </label>
            <p className="text-sm text-gray-500 mt-3">Format: Nama, Email (sheet pertama)</p>
          </div>

          {pesertaList.length > 0 && (
            <div>
              <p className="font-medium mb-3">Preview ({pesertaList.length} peserta):</p>
              <div className="max-h-72 overflow-auto border rounded-2xl">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      {Object.keys(pesertaList[0]).map((key, idx) => (
                        <th key={idx} className="p-3 text-left">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pesertaList.slice(0, 8).map((row, i) => (
                      <tr key={i} className="border-t">
                        {Object.values(row).map((val: any, j) => (
                          <td key={j} className="p-3">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {pesertaList.length > 8 && (
                <p className="text-xs text-gray-500 mt-2">...dan {pesertaList.length - 8} peserta lainnya</p>
              )}
            </div>
          )}
        </div>

        {/* Tombol Terbitkan */}
        <button
          onClick={handleTerbitkan}
          disabled={pesertaList.length === 0}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-2xl font-semibold text-lg mb-8"
        >
          Terbitkan {pesertaList.length} Sertifikat Sekaligus
        </button>

        {/* Hasil Terbitkan */}
        {hasilTerbit.length > 0 && (
          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="font-semibold mb-4">Sertifikat yang Baru Diterbitkan ({hasilTerbit.length})</h3>
            <div className="max-h-96 overflow-auto border rounded-2xl">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="p-3 text-left w-12">No</th>
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Kode Unik</th>
                    <th className="p-3 text-left">Link Verifikasi</th>
                  </tr>
                </thead>
                <tbody>
                  {hasilTerbit.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3 font-medium">
                        {item.nama || item[Object.keys(item)[0]]}
                      </td>
                      <td className="p-3 font-mono text-blue-600">{item.kodeUnik}</td>
                      <td className="p-3">
                        <a
                          href={item.linkVerifikasi}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          Buka Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}