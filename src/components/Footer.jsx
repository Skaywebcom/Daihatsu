// src/components/Footer.jsx
import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const articles = [
    {
      img: "/Articles/articles1.jpg",
      title: "Kredit Mobil Daihatsu Jakarta",
      date: "November 11, 2024",
    },
    {
      img: "/Articles/articles2.jpg",
      title: "Promo Mobil Daihatsu Murah Jabodetabek",
      date: "November 11, 2024",
    },
  ];

  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Kolom 1 - Logo dan copyright */}
        <div className="flex flex-col items-start gap-4">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <p className="text-[12px]">
            © 2024 Asco Automotive. All Rights Reserved. <br />
            Published by <a href="https://www.asain.co.id" target="_blank" rel="noopener noreferrer" className="underline text-white">www.asain.co.id</a>
          </p>
        </div>

        {/* Kolom 2 - Alamat + social media */}
        <div>
          <h3 className="text-lg font-bold mb-4">ALAMAT</h3>
          <p className="font-semibold mb-1">Dealer Asco Daihatsu</p>
          <p className="text-sm leading-relaxed mb-2">
            Jl. Raya Pasar Minggu No.8, Kalibata, Kec. Pancoran, DKI, Daerah Khusus Ibukota Jakarta 12740
          </p>
          <div className="flex gap-3 mt-2">
  <a
    href="https://www.instagram.com/username"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full shadow hover:bg-red-700 hover:text-white transition"
  >
    <FaInstagram size={20} />
  </a>
  <a
    href="https://www.facebook.com/username"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full shadow hover:bg-red-700 hover:text-white transition"
  >
    <FaFacebookF size={20} />
  </a>
  <a
    href="https://www.tiktok.com/@username"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full shadow hover:bg-red-700 hover:text-white transition"
  >
    <FaTiktok size={20} />
  </a>
</div>

        </div>

        {/* Kolom 3 - Kontak */}
        <div>
          <h3 className="text-lg font-bold mb-4">KONTAK KAMI</h3>
          <p className="font-semibold mb-2">JAMES</p>
          <div className="flex flex-col gap-2 mt-2">
  <a
    href="tel:085117626717"
    className="flex items-center gap-2"
  >
    <span className="bg-white text-red-600 p-2 rounded-full shadow-md flex items-center justify-center">
      <FaPhoneAlt />
    </span>
    085117626717
  </a>
  <a
    href="https://wa.me/6285719163797"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <span className="bg-white text-red-600 p-2 rounded-full shadow-md flex items-center justify-center">
      <FaWhatsapp />
    </span>
    085117626717
  </a>
  <a
    href="mailto:jaybie1909@gmail.com"
    className="flex items-center gap-2"
  >
    <span className="bg-white text-red-600 p-2 rounded-full shadow-md flex items-center justify-center">
      <FaEnvelope />
    </span>
    jaybie1909@gmail.com
  </a>
</div>



        </div>

        

      </div>
    </footer>
  );
}
