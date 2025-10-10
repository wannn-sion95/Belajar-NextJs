import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gray-950 text-gray-100">
      <h1 className="text-4xl font-bold">About me</h1>
      <p className="mt-4 text-xl">
        <br />Saya adalah seorang mahasiswa dari Politeknik Elektronika Negeri
        Surabaya, dari jurusan Teknik Elektro Program Studi Teknik
        Telekomunikasi. Alasan saya belajar NextJs adalah untuk menambah
        pengetahuan saya di bidang pengembangan web, khususnya dalam hal
        framework React yang sangat populer. Dengan menguasai NextJs, saya
        berharap dapat membuat aplikasi web yang lebih efisien, cepat, dan
        SEO-friendly. Selain itu, saya juga tertarik dengan fitur-fitur yang
        ditawarkan oleh NextJs seperti server-side rendering dan static site
        generation yang dapat meningkatkan performa aplikasi web yang saya
        buat.
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
