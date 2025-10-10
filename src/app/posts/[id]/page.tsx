// Lokasi file: src/app/posts/[id]/page.tsx

import Link from "next/link";
import LikeButton from "@/components/LikeButton";

// Kita bisa pakai lagi interface Post yang sudah kita definisikan sebelumnya
interface Post {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string & number;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
}

// Komponen halaman ini sekarang menerima 'params'
// 'params' akan berisi nilai dinamis dari URL, dalam kasus ini adalah 'id'
export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Ambil data untuk SATU post spesifik menggunakan params.id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const post: Post = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gray-950 text-gray-100">
      <div className="w-full max-w-3xl text-left">
        <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          Email: {post.email}
        </p>
        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          Address: {post.address.street}, {post.address.suite},{" "}
          {post.address.city}, {post.address.zipcode}
        </p>
        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          geo: {post.address.geo.lat}, {post.address.geo.lng}
        </p>

        <LikeButton postId={post.id} />
      </div>
      <div className="mt-12">
        <Link href="/posts" className="text-lg text-blue-400 hover:underline">
          &larr; Kembali ke Semua Postingan
        </Link>
      </div>
    </main>
  );
}
