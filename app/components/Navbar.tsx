"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-6 absolute top-0 left-0 z-50">

      <h1 className="text-2xl font-bold tracking-[0.2em] text-[#F5E9D8]">
        AUREA
      </h1>

      <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#F5E9D8]/80">
        <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
          Home
        </li>

<li>
  <a href="#menu" className="hover:text-[#FF7A00] transition-colors">
    Menu
  </a>
</li>

        <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
          About
        </li>

        <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
          Contact
        </li>
      </ul>

      <div className="flex items-center gap-4">

<a
  href="/reserve"
  className="hidden md:block bg-[#FF7A00] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
>
  Reserve
</a>

        <button className="md:hidden text-[#F5E9D8]">
          <Menu size={30} />
        </button>

      </div>
    </nav>
  );
}