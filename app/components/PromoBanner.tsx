export default function PromoBanner() {
  return (
    <section className="px-8 md:px-20 py-10 bg-[#0B0B0B]">

      <div className="bg-[#FF7A00] rounded-[3rem] px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff20,transparent_40%)]" />

        <div className="relative z-10">

          <p className="uppercase tracking-[0.3em] text-sm text-black/60 mb-4">
            Limited Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-6">
            SMOKE.
            <br />
            FIRE.
            <br />
            FLAVOR.
          </h2>

          <p className="max-w-xl text-black/70 text-lg">
            Discover handcrafted burgers made with premium ingredients and fire-driven techniques.
          </p>
        </div>

        <button className="relative z-10 bg-black text-[#F5E9D8] px-8 py-5 rounded-full font-semibold hover:scale-105 transition-transform">
          Reserve Table
        </button>

      </div>

    </section>
  );
}