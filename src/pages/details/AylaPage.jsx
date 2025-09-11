// src/pages/details/AylaPage.jsx
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function AylaPage() {
  const [mainImage, setMainImage] = useState("/TipeDetail/Ayla/ayla3.png");
  const colorOptions = [
    "/TipeDetail/Ayla/ayla3.png",
    "/TipeDetail/Ayla/ayla4.png",
    "/TipeDetail/Ayla/ayla5.png",
    "/TipeDetail/Ayla/ayla6.png",
    "/TipeDetail/Ayla/ayla7.png",
    "/TipeDetail/Ayla/ayla8.png",
    "/TipeDetail/Ayla/ayla9.png",
    "/TipeDetail/Ayla/ayla10.png",
    
  ];

  // Related post: semua mobil kecuali Ayla
  const relatedCars = [
    { name: "Rocky", img: "/TipeDetail/rocky1.png", link: "/rocky" },
    { name: "New Terios", img: "/TipeDetail/terios1.png", link: "/new-terios" },
    { name: "All New Xenia", img: "/TipeDetail/xenia1.png", link: "/all-new-xenia" },
    { name: "Sigra", img: "/TipeDetail/sigra1.png", link: "/sigra" },
  ];

  // Scroll ke atas setiap kali halaman dimount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Div 1: Gambar full page */}
      <div className="w-full">
        <img src="/TipeDetail/Ayla/ayla.jpg" alt="New Ayla" className="w-full object-cover" />
      </div>

      {/* Div 2: Eksterior & Interior */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ciptakan kebersamaan untuk melengkapi <br /> kebahagiaan Keluarga Indonesia
        </h2>

        <div className="md:flex gap-6 items-center">
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Eksterior</h3>
            <p>
              Hatchback dengan platform DNGA, tampilan agresif & sporty, kenyamanan lebih baik untuk sahabat keluarga muda Indonesia
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/TipeDetail/Ayla/ayla1.png" alt="Eksterior Ayla" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="md:flex gap-6 items-center mt-12">
          <div className="md:w-1/2">
            <img src="/TipeDetail/Ayla/ayla2.png" alt="Interior Ayla" className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Interior</h3>
            <p>
              Kabin lega untuk 5 penumpang dan bagasi luas, momen bepergian keluarga lebih menyenangkan
            </p>
          </div>
        </div>
      </section>

      {/* Div 3: Pilihan Warna */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pilihan Warna</h2>
        <div className="mb-6">
          <img src={mainImage} alt="Ayla Warna" className="w-full md:max-w-2xl mx-auto rounded-lg" />
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

      {/* Div 4: RELATED POST */}
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
