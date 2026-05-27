"use client";

import { useState } from "react";

export default function ReservePage() {
  const [reserved, setReserved] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const [error, setError] = useState("");

  const handleReservation = () => {
    if (!name || !email || !date) {
      setError("Please complete all fields.");
      return;
    }

    setError("");
    setReserved(true);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F5E9D8] flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">

      {/* SUCCESS OVERLAY */}

      {reserved && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fade">

          <div className="bg-[#111111] border border-[#FF7A00]/20 rounded-[2rem] p-12 max-w-md w-full shadow-[0_0_80px_rgba(255,122,0,0.2)]">

            <div className="w-24 h-24 rounded-full bg-[#FF7A00] text-black flex items-center justify-center text-5xl font-black mx-auto mb-8 animate-pop">
              ✓
            </div>

            <h2 className="text-4xl font-black mb-4">
              Reservation Confirmed
            </h2>

            <p className="text-[#F5E9D8]/70 leading-relaxed mb-8">
              Your fictional reservation has been successfully registered.
            </p>

            <button
              onClick={() => setReserved(false)}
              className="bg-[#FF7A00] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Continue
            </button>

          </div>

        </div>
      )}

      {/* MAIN CONTENT */}

<a
  href="/"
className="absolute top-10 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 border border-white/10 px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all z-50"
>
  ← Back Home
</a>
      <p className="uppercase tracking-[0.3em] text-[#FF7A00] text-sm mb-4">
        Reservation Experience
      </p>

      <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
        BOOK
        <br />
        YOUR
        <br />
        TABLE
      </h1>

      <p className="max-w-xl text-[#F5E9D8]/70 text-lg leading-relaxed mb-10">
        This fictional reservation experience was designed for portfolio purposes.
      </p>

      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 w-full max-w-xl">

        <div className="grid gap-5">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF7A00]"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF7A00]"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF7A00]"
          />

          {error && (
            <p className="text-red-400 text-sm text-left">
              {error}
            </p>
          )}

          <button
            onClick={handleReservation}
            className="bg-[#FF7A00] text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform"
          >
            Confirm Reservation
          </button>

        </div>

      </div>

    </main>
  );
}