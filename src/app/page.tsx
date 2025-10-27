// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";

// (LANGKAH PENTING) Tentukan "bentuk" data stasiun kita
interface StationData {
  name: string;
  frequency: number;
  rssi: number;
}

export default function Home() {
  // Terapkan "bentuk" data ke state kita
  const [stations, setStations] = useState<StationData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stationsRef = ref(database, "/detected_stations");

    const unsubscribe = onValue(stationsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // Kita beri tahu TypeScript bahwa data yang masuk punya "bentuk" tertentu
        const stationList = Object.keys(data).map(
          (key) =>
            ({
              name: key,
              frequency: data[key].frequency,
              rssi: data[key].rssi,
            } as StationData)
        ); // <- Casting tipe data

        setStations(stationList);
      } else {
        setStations([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="bg-zinc-950 min-h-screen p-8 md:p-12 font-sans text-gray-200">
      <h1 className="text-4xl font-bold text-center text-white-500 mb-10">
        📡 Sistem Pendeteksi Frekuensi Radio FM
      </h1>
      <p className="text-lg text-center text-gray-400 mb-15">
        Menampilkan frekuensi FM komersial yang terdeteksi di sekitar.
      </p>

      {loading && <p className="text-xl">Loading data dari Firebase...</p>}

      {!loading && stations.length === 0 && (
        <p className="text-xl text-yellow-500">
          Belum ada stasiun terdeteksi. Pastikan ESP32 menyala.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {stations.map((station) => (
          <div
            key={station.name}
            className="bg-zinc-950 border border-gray-700 rounded-lg shadow-lg p-6 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
          >
            <h2 className="text-3xl font-bold text-white-500 mb-3">
              {station.frequency.toFixed(1)} MHz
            </h2>
            <p className="text-base text-gray-400 m-0">
              Kekuatan Sinyal: {station.rssi} dBm
            </p>
            <p className="text-base text-white-500">{station.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
