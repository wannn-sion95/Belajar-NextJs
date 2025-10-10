import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-10 bg-gray-950 text-gray-100">
      {/*2. Kita kirim data ke komponen header melalui props */}
      <Header
        title="Belajar NextJs "
        subtitle="Halo guys, perkenalkan namaku Mhd. Ridwan"
      />
      <div className="mt-8 flex gap-4">
        <Link href="/about" className="text-lg text-blue-400 hover:underline">
          Alasanku belajar NextJs
        </Link>
        <br /> <br />
        {/*3. Link ke halaman posts */}
        <Link href="/posts" className="text-lg text-blue-400 hover:underline">
          Hasil belajar NextJs
        </Link>
      </div>
    </main>
  );
}
