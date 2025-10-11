"use client";

import { useState, useEffect } from "react";

interface Apiwann {
  id: number;
  text: string;
  author: string;
  timestamp: string;
}

export default function ApiTestPage() {
  const [data, setData] = useState<Apiwann[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      });
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat komponen dimuat

  if (loading) {
    return (
      <div className="p-24 text-center text-2xl animate-pulse flex min-h-screen flex-col items-center md:p-10 bg-zinc-9 text-gray-100">
        Memanggil Backend
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-col items-center p-8 md:p-10 bg-zinc-950 text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">
        Hasil dari API Backend:
      </h1>
      {data && data.length > 0 ? (
        // Kita melakukan .map() untuk menampilkan setiap pesan di array
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 border border-gray-700 p-6 rounded-lg inline-block shadow-lg"
            >
              <p className="text-2xl text-blue-300">"{item.text}"</p>
              <p className="text-md mt-4">Oleh: {item.author}</p>
              <p className="text-xs mt-2 text-gray-400">
                Timestamp: {new Date(item.timestamp).toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500">Gagal Mengambil data (Data tidak ada)</p>
      )}
    </div>
  );
}
