// src/components/home/Services.jsx
const services = [
  { title: "Sales", desc: "Melayani pembelian mobil Daihatsu baru", img: "/Service/sales.png" },
  { title: "Servis", desc: "Layanan servis dan perawatan mobil yang semakin mudah", img: "/Service/service.png" },
  { title: "Spare Part", desc: "Menyediakan suku cadang mobil Daihatsu original", img: "/Service/sparepart.png" },
  { title: "Trade In", desc: "Tukar tambah mobil Daihatsu lama Anda dengan mobil baru", img: "/Service/tradein.png" },
];

export default function Services() {
  return (
    <section className="py-12 bg-gray-100 text-black">
      {/* Judul + underline */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Layanan Kami</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-2 rounded"></div>
      </div>

      {/* Grid Services */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {services.map((s, i) => (
          <div key={i} className="text-left">
            <img
              src={s.img}
              alt={s.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
