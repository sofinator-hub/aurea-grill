import Image from "next/image";
import burgers from "../data/burgers";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#0B0B0B] text-[#F5E9D8] px-8 md:px-20 py-24">

      <div className="flex items-center justify-between mb-14">
        
        <div>
          <p className="uppercase tracking-[0.3em] text-[#FF7A00] text-sm mb-3">
            Signature Selection
          </p>

          <h2 className="text-5xl font-black">
            Most Wanted
          </h2>
        </div>

        <button className="hidden md:block border border-[#FF7A00]/40 px-6 py-3 rounded-full hover:bg-[#FF7A00] hover:text-black transition-all">
          Full Menu
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {burgers.map((burger) => (
          <div
            key={burger.id}
            className="bg-[#111111] rounded-[2rem] p-6 border border-white/5 hover:border-[#FF7A00]/30 transition-all hover:-translate-y-2"
          >

            <div className="relative h-[260px] flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-[#1A1A1A]">

              <div className="absolute w-52 h-52 bg-[#FF7A00]/20 blur-3xl rounded-full" />

              <Image
                src={burger.image}
                alt={burger.name}
                width={260}
                height={260}
                className="relative z-10 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold">
                {burger.name}
              </h3>

              <span className="text-[#FF7A00] font-bold">
                {burger.price}
              </span>
            </div>

            <p className="text-[#F5E9D8]/60 leading-relaxed mb-6">
              {burger.description}
            </p>

            <button className="w-full bg-[#FF7A00] text-black py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform">
              Add to Order
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}