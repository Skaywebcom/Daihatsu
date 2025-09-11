// src/pages/details/RockyPage.jsx
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function RockyPage() {
  const [mainImage, setMainImage] = useState("/TipeDetail/Rocky/rocky3.png");
  const colorOptions = [
    "/TipeDetail/Rocky/rocky3.png",
    "/TipeDetail/Rocky/rocky4.png",
    "/TipeDetail/Rocky/rocky5.png",
    "/TipeDetail/Rocky/rocky6.png",
    "/TipeDetail/Rocky/rocky7.png",
    "/TipeDetail/Rocky/rocky8.png",
    "/TipeDetail/Rocky/rocky9.png",
    "/TipeDetail/Rocky/rocky10.png",
    "/TipeDetail/Rocky/rocky11.png",
  ];

  const relatedCars = [
    { name: "Ayla", img: "/TipeDetail/ayla1.png", link: "/new-ayla" },
    { name: "Sigra", img: "/TipeDetail/Sigra/sigra1.png", link: "/sigra" },
    { name: "New Terios", img: "/TipeDetail/Terios/terios1.png", link: "/new-terios" },
    { name: "All New Xenia", img: "/TipeDetail/Xenia/xenia1.png", link: "/all-new-xenia" },
  ];

  // Scroll ke atas setiap kali halaman dimount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Gambar full page */}
      <div className="w-full">
        <img src="/TipeDetail/Rocky/rocky.jpg" alt="Rocky" className="w-full object-cover" />
      </div>

      {/* Eksterior & Interior */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Eksis di setiap perjalanan dan rasakan <br /> sensasi kebebasan di setiap perjalanan
        </h2>

        <div className="md:flex gap-6 items-center">
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Eksterior</h3>
            <p>SUV dengan platform DNGA (Daihatsu New Global Architecture), memberikan tampilan yang agresif & sporty serta kenyamanan yang lebih baik untuk sahabat keluarga muda Indonesia

</p>
          </div>
          <div className="md:w-1/2">
            <img src="/TipeDetail/Rocky/rocky1.jpg" alt="Eksterior Rocky" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="md:flex gap-6 items-center mt-12">
          <div className="md:w-1/2">
            <img src="/TipeDetail/Rocky/rocky2.jpg" alt="Interior Rocky" className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Interior</h3>
            <p>Desain modern dan dinamis, dengan fitur canggih, terus eksis dengan sensasi kenyamanan

</p>
          </div>
        </div>
      </section>

      {/* Pilihan Warna */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pilihan Warna</h2>
        <div className="mb-6">
          <img src={mainImage} alt="Rocky Warna" className="w-full md:max-w-2xl mx-auto rounded-lg" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {colorOptions.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Warna ${i + 1}`}
              className="w-20 h-12 object-cover cursor-pointer border-2 border-gray-300 rounded hover:border-red-600 transition"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Related Post */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">RELATED POST</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedCars.map((car, i) => (
            <Link key={i} to={car.link} className="flex flex-col items-center">
              <img src={car.img} alt={car.name} className="w-full rounded-lg mb-2 object-cover" />
              <p className="text-center font-semibold">{car.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
