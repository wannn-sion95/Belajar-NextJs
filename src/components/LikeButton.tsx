"use client";

import { useState, useEffect } from "react";

export default function LikeButton({ postId }: { postId: number }) {
  // 'useState' adalah hook untuk membuat "state" atau "data yang bisa berubah"
  // 'likes' adalah variabel untuk menyimpan jumlah like, awalnya 0.
  // 'setLikes' adalah fungsi untuk mengubah nilai 'likes'.
  const [likes, setLikes] = useState(0);
  const [isLiked, setisLiked] = useState(false);

  // membuat kunci yang unik untuk setiap post di local storage
  const storageKey = `like-count-${postId}`;

  // menjalankan use effect saat komponen pertama kali dimuat
  useEffect(() => {
    const savedLikes = localStorage.getItem(storageKey);
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
      setisLiked(true); // Asumsi bahwa jika ada data, berarti sudah di like
    }
  }, [storageKey]);

  //fungsi yang akan dijalankan ketika tombol diklik user
  function handleClick() {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setisLiked(!isLiked);

    localStorage.setItem(storageKey, JSON.stringify(newLikes));
  }

  return (
    <button
      onClick={handleClick}
      className={`mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2-blue-400 focus:ring-opacity-75 ${
        isLiked
          ? "bg-pink-600 hover:bg-pink-700 focus:ring-pink-400"
          : "bg-blue-600 hover:bg-blue-700 focus:ring-bluee-400"
      }`}
    >
      {isLiked ? "❤️" : "🤍"} Like {likes}
    </button>
  );
}
