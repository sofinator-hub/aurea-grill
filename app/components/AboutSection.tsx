import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#0B0B0B] text-[#F5E9D8] px-8 md:px-20 py-28">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className="relative">

          <div className="absolute inset-0 bg-[#FF7A00]/10 blur-3xl rounded-[3rem]" />

          <Image
            src="/chef2.jpg"
            alt="Chef"
            width={700}
            height={700}
            className="relative z-10 rounded-[3rem] object-cover w-full h-[500px]"
          />
        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-[#FF7A00] text-sm mb-4">
            About Aurea
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Crafted with
            <br />
            fire & passion
          </h2>

          <p className="text-[#F5E9D8]/70 text-lg leading-relaxed mb-8">
            At Aurea Grill, every dish is built around warmth, bold flavor,
            and modern elegance. Inspired by fire kitchens and elevated dining,
            we create unforgettable experiences through handcrafted meals.
          </p>

          <div className="grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-4xl font-black text-[#FF7A00]">
                12+
              </h3>

              <p className="text-[#F5E9D8]/60 mt-2">
                Signature dishes
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#FF7A00]">
                5★
              </h3>

              <p className="text-[#F5E9D8]/60 mt-2">
                Customer rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#FF7A00]">
                24/7
              </h3>

              <p className="text-[#F5E9D8]/60 mt-2">
                Fresh ingredients
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}