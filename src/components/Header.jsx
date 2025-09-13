import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // dapatkan path saat ini

  return (
    <section className="w-full relative">
      {/* Baris Atas Putih */}
      <div className="bg-white h-48 md:h-64 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
          {/* Kolom kiri */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Dealer Resmi Daihatsu Jakarta
            </h2>
            <p className="text-gray-700 mb-4">
              Pusat penjualan Daihatsu terbaik di Jakarta
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Gambar */}
        <motion.img
          key={location.pathname} // paksa remount setiap halaman
          src="/header.png"
          alt="Header"
          initial={{ x: 200, opacity: 0 }} // dari kanan
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2/3 md:w-1/2 object-contain z-10"
        />
      </div>

      {/* Baris Bawah Merah */}
      <div className="bg-red-600 h-[30vh] md:h-[40vh]"></div>

    </section>
  );
}
