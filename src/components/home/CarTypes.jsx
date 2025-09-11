import { Link } from "react-router-dom";


// src/components/home/CarTypes.jsx
const cars = [
  { name: "New Ayla", img: "/CarTypes/ayla.jpg", price: "2.245.800" },
  { name: "Sigra", img: "/CarTypes/sigra.jpg", price: "2.429.400" },
  { name: "All New Xenia", img: "/CarTypes/xenia.jpg", price: "3.439.700" },
  { name: "New Terios", img: "/CarTypes/terios.jpg", price: "3.829.300" },
  { name: "Rocky", img: "/CarTypes/rocky.jpg", price: "3.253.200" },
];

export default function CarTypes() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Header merah */}
      <div className="bg-red-600 text-white rounded-xl p-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Kiri */}
        <div className="text-left">
          <h2 className="text-2xl font-bold">Tipe Unit</h2>
          <p className="text-sm">Pilihan mobil Daihatsu untuk Anda</p>
        </div>

        {/* Kanan */}
        <div className="text-right">
          <p className="mb-2 text-sm">Konsultasi? hubungi marketing executive kami</p>
          <button className="bg-white text-red-600 font-semibold px-5 py-2 rounded-lg hover:bg-red-700 hover:text-white transition">
            Klik Disini
          </button>
        </div>
      </div>

      {/* Grid daftar mobil */}
      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car, i) => (
          <div key={i} className="border p-4 rounded-lg shadow text-center">
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
            <p>Angsuran mulai {car.price} / bulan</p>
            <p>Tenor 8 tahun</p>
            <div className="flex justify-center gap-2 mt-4">
  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
    Hubungi
  </button>

  {/* Tombol Detail menjadi Link */}
  <Link to={`/${car.name.toLowerCase().replace(/\s/g, "-")}`}>
    <button className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white">
      Detail
    </button>
  </Link>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
