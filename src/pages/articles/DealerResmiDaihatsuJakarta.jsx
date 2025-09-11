// src/pages/articles/DealerResmiDaihatsuJakarta.jsx
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import articles from "../../data/articles";

export default function DealerResmiDaihatsuJakarta() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content */}
      <main className="flex-grow py-12 px-6 max-w-6xl mx-auto">
        <div>
          <img
            src={articles[2].img}
            alt={articles[2].title}
            className="w-full aspect-[16/9] object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{articles[2].title}</h1>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {`Anda sedang mencari mobil baru yang andal dan hemat bahan bakar, atau ingin meremajakan kendaraan lama dengan trade-in? Asco Automotive hadir sebagai solusi terbaik bagi Anda di Jakarta, Jabodetabek dan sekitarnya. Sebagai dealer resmi Daihatsu, kami menawarkan layanan lengkap mulai dari penjualan, servis, suku cadang asli, hingga trade-in mobil. Dengan fokus pada kualitas layanan, kami siap menjadi mitra Anda dalam perjalanan memilih dan merawat kendaraan Daihatsu yang ideal.

Membeli mobil bisa menjadi keputusan besar, dan kami di Asco Automotive paham betul akan hal ini. Untuk itu, kami memiliki tim marketing yang profesional dan berpengalaman, Semmy Osama, yang siap memberikan konsultasi gratis 24 jam. Semmy hadir untuk mempermudah proses pembelian Anda, membantu memilih model yang paling sesuai dengan kebutuhan, dan memberikan informasi lengkap tentang berbagai promo menarik yang tersedia.

Layanan kami tidak berhenti hanya pada penjualan mobil. Sebagai dealer resmi, Asco Automotive juga menyediakan fasilitas servis berkala yang dilakukan oleh teknisi terlatih dan bersertifikasi. Kami memastikan setiap mobil Daihatsu yang diservis di sini kembali dalam kondisi terbaiknya, sehingga Anda dapat menikmati perjalanan yang aman dan nyaman. Kualitas layanan servis kami menjadi komitmen untuk mendukung ketenangan Anda sebagai pemilik kendaraan.

Selain itu, bagi Anda yang ingin menjaga mobil tetap optimal, Dealer Resmi Daihatsu Jakarta menawarkan suku cadang asli Daihatsu. Menggunakan suku cadang asli adalah cara terbaik untuk mempertahankan performa kendaraan sekaligus menjaga nilai jual kembali. Di Asco Automotive, setiap suku cadang tersedia dengan lengkap, sehingga Anda tidak perlu khawatir jika membutuhkan pergantian komponen mobil kapan saja.

Bagi Anda yang memiliki kendaraan lama dan tertarik untuk upgrade, program trade-in kami menawarkan solusi praktis. Dengan harga penawaran yang kompetitif, proses trade-in di Asco Automotive dijamin mudah dan transparan. Semmy Osama akan membantu menjelaskan setiap langkah, mulai dari evaluasi kendaraan lama hingga memilih mobil baru yang diinginkan, sehingga prosesnya dapat berjalan lancar dan sesuai harapan Anda.

Asco Automotive juga selalu memiliki berbagai promo menarik yang dapat memberikan nilai lebih bagi Anda. Mulai dari diskon khusus, penawaran cicilan ringan, hingga bonus aksesoris, semua dirancang untuk memudahkan Anda dalam memiliki mobil Daihatsu impian. Kami paham bahwa setiap pelanggan memiliki kebutuhan yang berbeda, oleh karena itu, fleksibilitas penawaran dan layanan menjadi prioritas utama kami.

Dengan berbagai keunggulan yang ditawarkan, Asco Automotive siap menjadi pilihan Anda sebagai dealer resmi Daihatsu yang terpercaya di Jakarta. Hubungi kami sekarang untuk pengalaman membeli mobil yang lebih mudah dan menyenangkan bersama Semmy Osama dan tim kami yang profesional. Nikmati perjalanan berkendara dengan Daihatsu, dan percayakan kebutuhan otomotif Anda pada kami di Asco Automotive.`}
          </p>
        </div>

        {/* Related Post */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-red-600 mb-6">RELATED POST</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/kredit-mobil-daihatsu-jakarta"
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={articles[0].img}
                alt={articles[0].title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold">{articles[0].title}</h3>
                <p className="text-sm text-gray-500">{articles[0].date}</p>
              </div>
            </Link>

            <Link
              to="/promo-mobil-daihatsu-murah-jabodetabek"
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={articles[1].img}
                alt={articles[1].title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold">{articles[1].title}</h3>
                <p className="text-sm text-gray-500">{articles[1].date}</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
