// src/pages/SimulasiKreditPage.jsx
import { useState, useEffect } from "react";

export default function SimulasiKreditPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telp: "",
    dp: "",
    tipeMobil: "",
    tenor: "",
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
Form Simulasi Kredit:
Nama Lengkap: ${form.nama}
Email: ${form.email}
Telp / WA: ${form.telp}
Jumlah DP: ${form.dp}
Tipe Mobil: ${form.tipeMobil}
Tenor Kredit: ${form.tenor}
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
          <h1 className="text-2xl font-bold">Form Simulasi Kredit</h1>
          <p className="mt-2 text-sm">
            Setelah mengisi formulir di bawah ini, Marketing Executive kami akan menghitungkan detail simulasi kredit kepada Anda.
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
              <input
                type="text"
                name="dp"
                placeholder="Jumlah DP"
                value={form.dp}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.dp ? "border-red-600" : ""}`}
              />
              {errors.dp && <p className="text-red-600 text-sm mt-1">{errors.dp}</p>}
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
              <select
                name="tenor"
                value={form.tenor}
                onChange={handleChange}
                className={`border rounded-md px-4 py-2 w-full ${errors.tenor ? "border-red-600" : ""}`}
              >
                <option value="">—Please choose an option—</option>
                <option value="1 Tahun">1 Tahun</option>
                <option value="2 Tahun">2 Tahun</option>
                <option value="3 Tahun">3 Tahun</option>
                <option value="4 Tahun">4 Tahun</option>
                <option value="5 Tahun">5 Tahun</option>
              </select>
              {errors.tenor && <p className="text-red-600 text-sm mt-1">{errors.tenor}</p>}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              Hitung Simulasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
