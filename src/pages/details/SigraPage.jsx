// src/pages/details/SigraPage.jsx
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function SigraPage() {
  const [mainImage, setMainImage] = useState("/TipeDetail/Sigra/sigra3.png");
  const colorOptions = [
    "/TipeDetail/Sigra/sigra3.png",
    "/TipeDetail/Sigra/sigra4.png",
    "/TipeDetail/Sigra/sigra5.png",
    "/TipeDetail/Sigra/sigra6.png",
    "/TipeDetail/Sigra/sigra7.png",
    "/TipeDetail/Sigra/sigra8.png",
    "/TipeDetail/Sigra/sigra9.png",
  ];

  const relatedCars = [
    { name: "Ayla", img: "/TipeDetail/ayla1.png", link: "/ayla" },
    { name: "Rocky", img: "/TipeDetail/rocky1.png", link: "/rocky" },
    { name: "New Terios", img: "/TipeDetail/terios1.png", link: "/new-terios" },
    { name: "All New Xenia", img: "/TipeDetail/xenia1.png", link: "/all-new-xenia" },
  ];

  // Scroll ke atas setiap kali halaman dimount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="w-full">
        <img src="/TipeDetail/Sigra/sigra.jpg" alt="Sigra" className="w-full object-cover" />
      </div>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Wujudkan mimpi indah dalam setiap <br /> perjalanan bersama keluarga
        </h2>

        <div className="md:flex gap-6 items-center">
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Eksterior</h3>
            <p>Design eksterior yang stylish dan elegan, menjadikan New Astra Daihatsu Sigra menjadi MPV 7-seater yang lebih berkelas untuk melengkapi gaya berkendara masa kini</p>
          </div>
          <div className="md:w-1/2">
            <img src="/TipeDetail/Sigra/sigra1.png" alt="Eksterior Sigra" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="md:flex gap-6 items-center mt-12">
          <div className="md:w-1/2">
            <img src="/TipeDetail/Sigra/sigra2.png" alt="Interior Sigra" className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Interior</h3>
            <p>Interior sporty dan elegan dengan kenyamanan ruang kabin 7 penumpang dengan bagasi yang luas

</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pilihan Warna</h2>
        <div className="mb-6">
          <img src={mainImage} alt="Sigra Warna" className="w-full md:max-w-2xl mx-auto rounded-lg" />
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
