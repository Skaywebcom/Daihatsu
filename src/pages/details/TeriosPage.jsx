// src/pages/details/TeriosPage.jsx
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function TeriosPage() {
  const [mainImage, setMainImage] = useState("/TipeDetail/Terios/terios3.png");
  const colorOptions = [
    "/TipeDetail/Terios/terios3.png",
    "/TipeDetail/Terios/terios4.png",
    "/TipeDetail/Terios/terios5.png",
    "/TipeDetail/Terios/terios6.png",
    "/TipeDetail/Terios/terios7.png",
    "/TipeDetail/Terios/terios8.png",
  ];

  const relatedCars = [
    { name: "Ayla", img: "/TipeDetail/ayla1.png", link: "/new-ayla" },
    { name: "Rocky", img: "/TipeDetail/rocky1.png", link: "/rocky" },
    { name: "Sigra", img: "/TipeDetail/Sigra/sigra1.png", link: "/sigra" },
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
        <img src="/TipeDetail/Terios/terios.jpg" alt="New Terios" className="w-full object-cover" />
      </div>

      {/* Eksterior & Interior */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Siapkan dirimu untuk petualangan <br /> yang tak terlupakan
        </h2>

        <div className="md:flex gap-6 items-center">
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Eksterior</h3>
            <p>SUV dengan Desain Sporty & Adventure membuat setiap moment bersamanya merupakan cerita petualangan yang membahagiakan

</p>
          </div>
          <div className="md:w-1/2">
            <img src="/TipeDetail/Terios/terios1.png" alt="Eksterior Terios" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="md:flex gap-6 items-center mt-12">
          <div className="md:w-1/2">
            <img src="/TipeDetail/Terios/terios2.jpg" alt="Interior Terios" className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2 bg-red-600 text-white p-6 rounded-lg mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Interior</h3>
            <p>Desain Modern, Kabin luas, fitur lengkap & canggih memberi kenyamanan maksimal di setiap petualangan

</p>
          </div>
        </div>
      </section>

      {/* Pilihan Warna */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pilihan Warna</h2>
        <div className="mb-6">
          <img src={mainImage} alt="Terios Warna" className="w-full md:max-w-2xl mx-auto rounded-lg" />
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
