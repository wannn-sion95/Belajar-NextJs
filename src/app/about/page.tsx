import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen text-left flex-col p-8 md:p-24 bg-zinc-950 text-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">About me</h1>
      <p className="mt-3 text-2xl">Halo!</p>
      <p className="mt-4 text-xl">
        Saya Mhd. Ridwan seorang mahasiswa di Politeknik Elektronika Negeri
        Surabaya Program Studi Teknik Telekomunikasi. Saya membuat web ini
        sebagai dashboard yang ingin menampilkan hasil dari project saya yaitu
        "Sistem Pendeteksi Frekuensi Radio FM Komersial Berbasis ESP32 dan
        Firebase. Saya menggunakan ESP32 sebagai mikrokontroler, Modul RDA5807,
        dan Antena FM untuk mendeteksi frekuensi radio FM komersial dan
        mengirimkan data ke Firebase untuk disimpan dan ditampilkan di web ini."
      </p>

      {/*2. Tambahkan Link untuk kembali */}
      <div className="mt-12 hover:underline">
        <Link href="/" className="text-lg text-blue-400 hover:underline">
          Kembali ke Home
        </Link>
      </div>
    </main>
  );
}
