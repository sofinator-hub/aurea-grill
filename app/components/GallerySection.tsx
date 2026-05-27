import Image from "next/image";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#0B0B0B] text-[#F5E9D8] px-8 md:px-20 py-28">

      <div className="mb-14">

        <p className="uppercase tracking-[0.3em] text-[#FF7A00] text-sm mb-4">
          Visual Experience
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

        <div className="relative rounded-[2rem] overflow-hidden md:row-span-2">
          <Image
            src="/smoke_burger.png"
            alt="Classic Smoke"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="relative rounded-[2rem] overflow-hidden">
          <Image
            src="/chef2.jpg"
            alt="Chef"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="relative rounded-[2rem] overflow-hidden">
          <Image
            src="/truffle_burger.png"
            alt="Truffle Melt"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="relative rounded-[2rem] overflow-hidden md:col-span-2">
          <Image
            src="/spicy_burger.png"
            alt="Spicy Ember"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>

    </section>
  );
}