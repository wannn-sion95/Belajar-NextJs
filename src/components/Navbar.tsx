import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-zinc-950 text-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex items-center gap-7 my-5 text-lg">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            <Image src="/bmw.svg" width={60} height={70} alt="Logo" />
          </Link>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/posts" className="hover:text-blue-400 transition-colors">
            Data
          </Link>
          <Link
            href="/api-test"
            className="hover:text-blue-400 transition-colors"
          >
            API Test
          </Link>
        </nav>
      </div>
    </header>
  );
}
