"use client";

import { useEffect } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center p-8 md:p-20 bg-zinc-950 text-gray-100">
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        Terjadi Kesalahan!!!
      </h2>
      <p className="text-center mb-6">
        Gagal memuat data postingan, Silahkan coba lagi nanti
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Coba Lagi
      </button>
    </div>
  );
}
