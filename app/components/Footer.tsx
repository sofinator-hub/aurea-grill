export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0B0B0B] text-[#F5E9D8] px-8 md:px-20 py-20 border-t border-white/5">

      <div className="grid md:grid-cols-4 gap-14">

        <div>
          <h2 className="text-4xl font-black mb-4">
            AUREA
            <br />
            GRILL
          </h2>

          <p className="text-[#F5E9D8]/60 leading-relaxed">
            Fire-crafted dining experiences with modern elegance and unforgettable flavor.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">
            Navigation
          </h3>

          <ul className="space-y-3 text-[#F5E9D8]/60">
            <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
              Menu
            </li>

            <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
              About
            </li>

            <li className="hover:text-[#FF7A00] transition-colors cursor-pointer">
              Gallery
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">
            Opening Hours
          </h3>

          <ul className="space-y-3 text-[#F5E9D8]/60">
            <li>Mon - Thu: 1PM - 11PM</li>
            <li>Fri - Sat: 1PM - 1AM</li>
            <li>Sunday: 2PM - 10PM</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF7A00] hover:text-black transition-all cursor-pointer font-semibold">
              IG
            </div>

            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF7A00] hover:text-black transition-all cursor-pointer font-semibold">
              IN
            </div>

            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF7A00] hover:text-black transition-all cursor-pointer font-semibold">
              YT
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-[#F5E9D8]/40 text-sm">
          © 2026 Aurea Grill. All rights reserved.
        </p>

        <p className="text-[#F5E9D8]/40 text-sm">
          Designed with fire & flavor.
        </p>

      </div>

    </footer>
  );
}