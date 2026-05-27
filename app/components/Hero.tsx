import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B0B0B] text-[#F5E9D8] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-32 relative overflow-hidden gap-12">

      <div className="flex-1 z-10">
        
        <p className="uppercase tracking-[0.3em] text-[#FF7A00] mb-4 text-sm">
          Modern Fire Kitchen
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
          AUREA
          <br />
          GRILL
        </h1>

        <p className="max-w-md text-[#F5E9D8]/70 text-lg leading-relaxed mb-8">
          Fire-crafted flavors made with passion, warmth, and modern elegance.
        </p>

        <div className="flex gap-4">
          
<a
  href="/Aurea_Grill_Menu.pdf"
  target="_blank"
  className="bg-[#FF7A00] text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
>
  Explore Menu
</a>

          <button className="border border-[#F5E9D8]/30 px-7 py-4 rounded-full hover:border-[#FF7A00] transition-colors">
            Book Table
          </button>

        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative">
        
        <div className="absolute w-[500px] h-[500px] bg-[#FF7A00]/20 blur-3xl rounded-full" />

        <Image
        className="relative z-10 object-contain drop-shadow-2xl rounded-[2rem]"
          src="/burger1.png"
          alt="Burger"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}