"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 md:px-8 py-6 absolute top-0 left-0 z-50">

        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#F5E9D8]">
          AUREA
        </h1>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#F5E9D8]/80">
          <li>
            <a href="/" className="hover:text-[#FF7A00] transition-all">
              Home
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-[#FF7A00] transition-all">
              Menu
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#FF7A00] transition-all">
              About
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-[#FF7A00] transition-all">
              Gallery
            </a>
          </li>
        </ul>

        <a
          href="/reserve"
          className="hidden md:block bg-[#FF7A00] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Reserve
        </a>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F5E9D8] text-3xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="fixed inset-0 bg-[#0B0B0B] z-40 flex flex-col items-center justify-center gap-10 text-[#F5E9D8] text-2xl uppercase tracking-widest">

          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>

          <a
            href="/reserve"
            onClick={() => setMenuOpen(false)}
            className="bg-[#FF7A00] text-black px-8 py-4 rounded-full font-bold"
          >
            Reserve
          </a>

        </div>
      )}
    </>
  );
}