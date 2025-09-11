import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="grid md:grid-cols-2 gap-4 px-4">
      {/* Kolom kiri kosong */}
      <div></div>

      {/* Kolom kanan */}
      <div className="relative -mt-16 z-20 flex justify-center">
        <div className="bg-red-600 text-white rounded-2xl shadow-lg px-6 py-4 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-3">
            Selamat Datang di Website Kami
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            Dealer resmi mobil Daihatsu Jabodetabek. Melayani pembelian unit baru
            maupun tukar tambah dengan harga termurah.
          </p>
          <Link
            to="/tipe-unit"
            className="inline-block bg-white text-red-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white transition"
          >
            Type Mobil
          </Link>
        </div>
      </div>
    </section>
  );
}
