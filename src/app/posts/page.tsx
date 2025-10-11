import Link from "next/link";

interface Post {
  id: number;
  name: string;
}

export default async function PostPage() {
  // Ambil data dari API (users dummy JSONPlaceholder)
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store", // biar selalu fetch data baru
    }
  );

  const posts: Post[] = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-zinc-950 text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Daftar Nama pengguna
      </h1>

      {/* TABEL DATA */}
      <div className="overflow-x-auto w-full max-w-3xl">
        <table className="table table-bordered min-w-full border border-gray-800 rounded-xl overflow-hidden">
          <thead className="bg-gray-800 text-gray-300 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 border-b border-gray-700 text-left w-16">
                ID
              </th>
              <th className="py-3 px-4 border-b border-gray-700 text-left">
                Nama
              </th>
              <th className="py-3 px-4 border-b border-gray-700 text-left w-36">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-gray-800/40 transition-colors"
              >
                <td className="py-3 px-4 border-b border-gray-800">
                  {post.id}
                </td>
                <td className="py-3 px-4 border-b border-gray-800">
                  {post.name}
                </td>
                <td className="py-3 px-4 border-b border-gray-800">
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-blue-400 hover:underline"
                  >
                    Lihat Detail →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tombol kembali */}
      <div className="mt-12">
        <Link
          href="/"
          className="text-lg text-blue-400 hover:underline hover:text-blue-300 transition-colors"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </main>
  );
}
