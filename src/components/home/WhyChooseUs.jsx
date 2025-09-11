// src/components/home/WhyChooseUs.jsx
const reasons = [
  {
    title: "Sales kami siap melayani konsultasi 24/7",
    img: "/whychooseus/sales.png",
  },
  {
    title: "Koleksi mobil keluaran terbaru dan performa maksimal",
    img: "/whychooseus/koleksi.png",
  },
  {
    title: "Dengan DP yang rendah, mobil sudah bisa di bawa pulang",
    img: "/whychooseus/dp.png",
  },
  {
    title: "Angsuran / cicilan yang sangat ringan per bulannya",
    img: "/whychooseus/angsuran.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Kolom kiri */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">Why Choose Us?</h2>
          <p className="text-gray-700 mb-8">
            ASCO AUTOMOTIVE menjadi pilihan terbaik untuk Anda yang ingin membeli
            mobil Daihatsu di Jabodetabek.
          </p>

          {/* Grid alasan 2x2 */}
          <div className="grid grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-red-600 mx-auto mb-3 bg-white">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-800">{r.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan (gambar) */}
        <div className="flex justify-center">
          <img
            src="/daihatsu-rocky.png"
            alt="Daihatsu Rocky"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
