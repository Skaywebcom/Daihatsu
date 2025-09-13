// src/pages/TestDrivePage.jsx
import { useState, useEffect } from "react";

export default function TestDrivePage() {
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    email: "",
    telp: "",
    tipeMobil: "",
    tanggal: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Hapus error saat user mulai mengetik
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key] = "The field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // jangan lanjut jika ada field kosong
    }

    const message = `
Form Test Drive:
Nama Lengkap: ${form.nama}
Alamat Lengkap: ${form.alamat}
Email: ${form.email}
Telp / WA: ${form.telp}
Tipe Mobil: ${form.tipeMobil}
Tanggal Test Drive: ${form.tanggal}
    `;
    const phone = "+6285117626717";
    const waLink = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waLink, "_blank");
  };

  useEffect(() => {
      const main = document.getElementById("main-content");
      if (main) {
        main.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, []);

  return (
    <div className="flex justify-center py-12 px-6">
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Form */}
        <div className="bg-red-600 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Form Test Drive</h1>
          <p className="mt-2 text-sm">
            Jajal ketangguhan mobil yang ingin Anda beli dengan layanan test drive.
          </p>
        </div>

        {/* Body Form */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                value={form.nama}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.nama ? "border-red-600" : ""}`}
              />
              {errors.nama && <p className="text-red-600 text-sm mt-1">{errors.nama}</p>}
            </div>

            <div>
              <input
                type="text"
                name="alamat"
                placeholder="Alamat Lengkap"
                value={form.alamat}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.alamat ? "border-red-600" : ""}`}
              />
              {errors.alamat && <p className="text-red-600 text-sm mt-1">{errors.alamat}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.email ? "border-red-600" : ""}`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                name="telp"
                placeholder="Telp / WA"
                value={form.telp}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.telp ? "border-red-600" : ""}`}
              />
              {errors.telp && <p className="text-red-600 text-sm mt-1">{errors.telp}</p>}
            </div>

            <div>
              <select
                name="tipeMobil"
                value={form.tipeMobil}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.tipeMobil ? "border-red-600" : ""}`}
              >
                <option value="">Pilih Tipe Mobil</option>
                <option value="New Ayla">New Ayla</option>
                <option value="Sigra">Sigra</option>
                <option value="All New Xenia">All New Xenia</option>
                <option value="New Terios">New Terios</option>
                <option value="Rocky">Rocky</option>
              </select>
              {errors.tipeMobil && <p className="text-red-600 text-sm mt-1">{errors.tipeMobil}</p>}
            </div>

            <div>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.tanggal ? "border-red-600" : ""}`}
              />
              {errors.tanggal && <p className="text-red-600 text-sm mt-1">{errors.tanggal}</p>}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              Ajukan Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
