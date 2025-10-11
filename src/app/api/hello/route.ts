import { NextResponse } from "next/server";

let messages = [
  {
    id: 1,
    text: "Tujuan saya mempelajari Next Js untuk mengembangkan skill dan pengetahuan saya dibidang web development, dan berniat untuk menjadi seorang Full-Stack Developer Hehe 😎",
    author: "Wann Sion",
    timestamp: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  try {
    // 1, Ambil data yang dikirim oleh klien
    const newMessage = await request.json();

    //2. Validasi sederhana: pastikan ada teksnya

    if (!newMessage.text) {
      return NextResponse.json(
        { error: "Teks tidak boleh kosong!!" },
        { status: 400 }
      );
    }

    //3. Buat objek data yang lengkap

    let fullMessage = {
      id: messages.length + 1,
      text: newMessage.text,
      author: "Annonymous",
      timestamp: new Date().toISOString(),
    };

    //4. Simpan data baru kedalam array kita
    messages.push(fullMessage);
    //5. Kembalikan data yang baru saja dibuat dengan 201
    return NextResponse.json(fullMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
