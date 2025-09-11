// src/components/home/Profile.jsx
import { useState } from "react";

export default function Profile() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Kolom kiri */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Senior Sales Marketing
          </h3>
          <p className="text-xl font-bold text-red-600 border-b-2 border-red-600 inline-block pb-1">
            JAMES
          </p>
        </div>

        {/* Kolom tengah (gambar) */}
        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Profil Dealer"
            className="w-full h-[80%] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Kolom kanan */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            -- Asco Automotive
          </h2>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Authorized Dealer Daihatsu
          </h3>
          <p className="text-gray-700 mb-4">
            Asco Automotive adalah authorized dealer Daihatsu terpercaya di
            Jakarta yang menghadirkan solusi mobilitas terbaik untuk Anda. Dengan
            berbagai pilihan kendaraan Daihatsu berkualitas, mulai dari city car
            hingga MPV dan SUV, kami berkomitmen memberikan pengalaman membeli
            mobil yang menyenangkan dan tanpa hambatan.
          </p>

          {/* Konten tambahan + tombol Less */}
          {showMore && (
            <>
              <p className="mt-4 text-gray-700">
                Dikenal dengan pelayanan profesional, marketing executive kami
                tidak hanya membantu Anda memilih mobil impian, tetapi juga
                menawarkan layanan purna jual yang lengkap, mulai dari servis
                berkala, pengadaan sparepart asli, hingga kemudahan trade-in.
                <br />
                <br />
                Asco Automotive memastikan setiap perjalanan Anda bersama
                kendaraan Daihatsu selalu aman, nyaman, dan penuh kepercayaan.
              </p>

              <button
                onClick={() => setShowMore(false)}
                className="mt-4 flex items-center gap-2 bg-gray-100 text-red-600 font-medium px-5 py-2 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white transition"
              >
                Less <span className="text-lg">↑</span>
              </button>
            </>
          )}

          {/* Tombol More hanya muncul kalau belum terbuka */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="flex items-center gap-2 bg-gray-100 text-red-600 font-medium px-5 py-2 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white transition"
            >
              More <span className="text-lg">↓</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
