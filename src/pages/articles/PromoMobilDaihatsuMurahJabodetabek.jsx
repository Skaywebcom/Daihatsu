// src/pages/articles/PromoMobilDaihatsuMurahJabodetabek.jsx
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Kredit Mobil Daihatsu Jakarta",
    date: "November 11, 2024",
    img: "/Articles/articles1.jpg",
    desc: "Apakah Anda sedang mencari mobil baru yang sesuai dengan kebutuhan […]",
  },
  {
    title: "Promo Mobil Daihatsu Murah Jabodetabek",
    date: "November 11, 2024",
    img: "/Articles/articles2.jpg",
    desc: "Memiliki mobil baru sering kali menjadi impian banyak orang, baik […]",
  },
  {
    title: "Dealer Resmi Daihatsu Jakarta",
    date: "November 9, 2024",
    img: "/Articles/articles3.jpg",
    desc: "Anda sedang mencari mobil baru yang andal dan hemat bahan […]",
  },
];

export default function PromoMobilDaihatsuMurahJabodetabek() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Ambil artikel lain selain artikel kedua untuk RELATED POST
  const related = [articles[0], articles[2]];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Konten utama */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <img
            src={articles[1].img}
            alt={articles[1].title}
            className="w-full aspect-[16/9] object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">{articles[1].title}</h1>

          <p className="text-gray-700 mb-4">
            Memiliki mobil baru sering kali menjadi impian banyak orang, baik
            untuk menunjang aktivitas sehari-hari maupun menambah kenyamanan
            dalam perjalanan keluarga. Asco Automotive hadir sebagai solusi
            tepat bagi Anda yang ingin memiliki mobil Daihatsu dengan promo
            menarik yang tak hanya hemat di kantong, tetapi juga memberikan
            banyak keuntungan ekstra.
          </p>

          <p className="text-gray-700 mb-4">
            Dengan DP rendah dan angsuran ringan yang bisa dicicil hingga tenor
            8 tahun, Asco Automotive menawarkan skema pembayaran yang fleksibel
            dan sangat terjangkau. Hal ini tentu memberikan keuntungan lebih
            bagi Anda yang ingin merencanakan keuangan dengan baik tanpa
            mengurangi kualitas mobil impian.
          </p>

          <p className="text-gray-700 mb-4">
            Tidak hanya itu, Asco Automotive juga menghadirkan banyak hadiah
            menarik untuk setiap pembelian mobil Daihatsu. Promo ini tidak hanya
            berfokus pada harga yang kompetitif, tetapi juga pada kepuasan
            pelanggan, menjadikan Asco Automotive pilihan ideal untuk transaksi
            yang aman dan menguntungkan.
          </p>

          <p className="text-gray-700 mb-4">
            Bagi Anda yang sering kali khawatir dengan proses kredit, Asco
            Automotive memberikan layanan istimewa dengan proses kredit yang
            mudah dan cepat. Kami memastikan dukungan penuh hingga 100% approve
            bagi setiap pelanggan, membuat seluruh proses menjadi lebih nyaman
            dan tanpa kendala.
          </p>

          <p className="text-gray-700 mb-4">
            Marketing Executive kami, <strong>Semmy Osama</strong>, siap
            memberikan layanan konsultasi gratis 24 jam. Anda bisa berkonsultasi
            kapan saja untuk mendapatkan informasi terkait produk, penawaran
            promo, hingga tata cara pengajuan kredit yang sesuai dengan
            kebutuhan Anda.
          </p>

          <p className="text-gray-700 mb-2 font-semibold">
            Pilihan mobil di Dealer Asco Automotive diantaranya yaitu:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>New Ayla</li>
            <li>All New Xenia</li>
            <li>Sigra</li>
            <li>Rocky</li>
            <li>New Terios</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Jangan lewatkan kesempatan emas ini untuk memiliki mobil Daihatsu
            dengan harga dan skema pembayaran terbaik di Jakarta dan Jabodetabek.
            Segera hubungi kami atau datang langsung ke showroom terdekat Asco
            Automotive. Kami siap membantu mewujudkan impian Anda untuk memiliki
            mobil baru dengan mudah, nyaman, dan penuh keuntungan.
          </p>
        </div>

        {/* RELATED POST */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-6">RELATED POST</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((a, i) => (
              <Link
                key={i}
                to={`/${a.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="border rounded-lg shadow overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{a.date}</p>
                  <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                  <p className="text-gray-700">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
