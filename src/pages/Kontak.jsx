// src/pages/Kontak.jsx
import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telp: "",
    pesan: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nama) newErrors.nama = "The field is required";
    if (!formData.email) newErrors.email = "The field is required";
    if (!formData.telp) newErrors.telp = "The field is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Pesan berhasil dikirim! (dummy)");
      setFormData({ nama: "", email: "", telp: "", pesan: "" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Kolom kiri: Alamat, Kontak, Sosial Media */}
          <div>
            {/* Alamat */}
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Alamat</h1>
              <p className="text-gray-700 font-semibold">Dealer Asco Daihatsu</p>
              <p className="text-gray-700">
                Jl. Raya Pasar Minggu No.8, Kalibata, Kec. Pancoran, DKI,
                Daerah Khusus Ibukota Jakarta 12740
              </p>
            </section>

            {/* Kontak */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Kontak</h2>
              <p className="text-gray-700 mb-2">
                Hubungi kami melalui kontak di bawah ini:
              </p>
              <p className="text-gray-700 font-semibold">JAMES</p>
              <div className="mt-2 space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt /> 085117626717
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaWhatsapp /> 085117626717
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope /> ridhokh10@gmail.com
                </p>
              </div>
            </section>

            {/* Sosial Media */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Sosial Media</h2>
              <div className="flex gap-4 text-xl text-gray-700">
                <FaInstagram className="cursor-pointer hover:text-red-500" />
                <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                <FaTiktok className="cursor-pointer hover:text-black" />
              </div>
            </section>
          </div>

          {/* Kolom kanan: Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tinggalkan Pesan Anda</h2>
            <p className="text-gray-700 mb-6">
              Pesan akan terkirim sebagai Email
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Nama Anda</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
                {errors.nama && (
                  <p className="text-red-500 text-sm">{errors.nama}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Telp / WA</label>
                <input
                  type="text"
                  name="telp"
                  value={formData.telp}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
                {errors.telp && (
                  <p className="text-red-500 text-sm">{errors.telp}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Tuliskan pesan Anda disini (optional)
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
}
