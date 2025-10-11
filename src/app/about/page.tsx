import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen text-left flex-col p-8 md:p-24 bg-zinc-950 text-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">About me</h1>
      <p className="mt-3 text-xl">
        Saya adalah seorang mahasiswa dari Politeknik Elektronika Negeri
        Surabaya, dari jurusan Teknik Elektro Program Studi Teknik
        Telekomunikasi. Alasan saya belajar NextJs adalah untuk menambah
        pengetahuan saya di bidang pengembangan web, khususnya dalam hal
        framework React yang sangat populer. Dengan menguasai NextJs, saya
        berharap dapat membuat aplikasi web yang lebih efisien, cepat, dan
        SEO-friendly. Selain itu, saya juga tertarik dengan fitur-fitur yang
        ditawarkan oleh NextJs seperti server-side rendering dan static site
        generation yang dapat meningkatkan performa aplikasi web yang saya buat.
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
