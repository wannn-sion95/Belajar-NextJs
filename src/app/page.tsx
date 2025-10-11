import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-10 bg-zinc-950 text-gray-100">
      {/*2. Kita kirim data ke komponen header melalui props */}
      <Header
        title="Belajar NextJs "
        subtitle="Halo guys, perkenalkan namaku Mhd. Ridwan, jika ingin tahu lebih banyak tentang aku, kalian coba klik di bagian about ya😁"
      />
    </main>
  );
}
