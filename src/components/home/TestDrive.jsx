// src/components/home/TestDrive.jsx
export default function TestDrive() {
  return (
    <section className="bg-red-600 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 items-center gap-8 px-6 text-white">
        {/* Kolom kiri */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-2">
            Coba ketangguhan mobil impian Anda!
          </h2>
        </div>

        {/* Kolom tengah (gambar) */}
        <div className="flex justify-center">
          <img
            src="/test-drive.png"
            alt="Test Drive"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Kolom kanan */}
        <div className="text-right">
          <p className="mb-4">
            Nikmati layanan test drive terlebih dahulu di Asco Automotive
          </p>
          <h3 className="text-xl font-bold border-b-4 border-white inline-block pb-1">
            TEST DRIVE
          </h3>
        </div>
      </div>
    </section>
  );
}
