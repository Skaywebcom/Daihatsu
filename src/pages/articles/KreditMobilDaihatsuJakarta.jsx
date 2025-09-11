// src/pages/articles/KreditMobilDaihatsuJakarta.jsx
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

export default function KreditMobilDaihatsuJakarta() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  // Ambil artikel lain selain artikel pertama untuk RELATED POST
  const related = articles.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Konten utama */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        {/* Div pertama: Artikel utama */}
        <div className="mb-12">
          <img
  src={articles[0].img}
  alt={articles[0].title}
  className="w-full aspect-[16/9] object-cover rounded-lg mb-6"
/>

          <h1 className="text-3xl font-bold mb-4">{articles[0].title}</h1>
          <p className="text-gray-700 mb-4">
            Apakah Anda sedang mencari mobil baru yang sesuai dengan kebutuhan dan budget Anda? Daihatsu mungkin adalah pilihan yang tepat! Dikenal sebagai merek yang handal dan terjangkau, Daihatsu memiliki berbagai varian menarik yang siap menjadi kendaraan ideal untuk Anda dan keluarga. Dari city car ekonomis seperti Ayla dan Sigra, hingga SUV tangguh seperti Terios dan Rocky, Daihatsu menawarkan kenyamanan dan performa yang Anda butuhkan.
          </p>
          <p className="text-gray-700 mb-4">
            Salah satu keuntungan memilih Daihatsu adalah ketersediaan opsi kredit yang memudahkan Anda memiliki mobil idaman tanpa harus menunggu. Melalui Asco Automotive, dealer resmi Daihatsu di Jakarta, Anda bisa mendapatkan layanan kredit mobil dengan proses yang mudah, cepat, dan transparan. Di Asco Automotive, kami mengutamakan kenyamanan dan kepuasan Anda dalam setiap langkah, mulai dari pemilihan mobil hingga penyelesaian proses kredit.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">Keunggulan kredit mobil disini:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>DP rendah</li>
            <li>Cicilan ringan</li>
            <li>Persyaratan mudah</li>
            <li>Dibantu hingga 100% approve</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Selain itu, Asco Automotive juga menawarkan layanan trade-in atau tukar tambah. Jadi, jika Anda memiliki mobil lama dan ingin menukarnya dengan mobil Daihatsu terbaru, Asco Automotive siap memberikan penawaran terbaik. Dengan program trade-in, Anda dapat menukar kendaraan lama Anda dengan unit baru tanpa perlu repot menjualnya terlebih dahulu. Ini adalah solusi praktis bagi Anda yang ingin meningkatkan kualitas kendaraan dengan mudah.
          </p>
          <p className="text-gray-700 mb-4">
            Tidak hanya itu, Dealer Daihatsu Jakarta juga menyediakan konsultasi gratis yang bisa membantu Anda menentukan pilihan terbaik sesuai kebutuhan. Hubungi langsung marketing kami, Semmy Osama, untuk mendapatkan layanan konsultasi 24 jam yang siap menjawab segala pertanyaan Anda. Kami dapat memberikan informasi detail tentang spesifikasi mobil, harga terkini, proses kredit, persyaratan, hingga promo-promo menarik yang mungkin sedang berlangsung.
          </p>
          <p className="text-gray-700 mb-4">
            Apapun pilihan mobil Daihatsu yang Anda inginkan, Asco Automotive adalah pilihan terpercaya untuk memenuhi kebutuhan Anda. Dengan layanan yang profesional dan ramah, kami siap membantu Anda memiliki mobil impian dengan lebih mudah dan terjangkau.
          </p>
        </div>

        {/* Div kedua: RELATED POST */}
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
