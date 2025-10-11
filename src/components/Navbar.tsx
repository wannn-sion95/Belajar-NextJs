"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Data", href: "/posts" },
    { name: "Backend", href: "/api-test" },
  ];

  return (
    <header className="bg-zinc-950 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/bmw.svg" width={40} height={40} alt="Logo" />
          <span className="text-xl font-bold">Mhd. Ridwan</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative hover:text-blue-400 transition-colors ${
                pathname === item.href ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {item.name}
              {/* underline */}
              {pathname === item.href && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Tampilan Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-zinc-900 text-gray-100 p-6 flex flex-col gap-6 shadow-lg md:hidden z-40"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg hover:text-blue-400 transition-colors ${
                  pathname === item.href ? "text-blue-400 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
