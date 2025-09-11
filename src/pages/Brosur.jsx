// src/pages/Brosur.jsx
import { FaFilePdf } from "react-icons/fa";

export default function Brosur() {
  const brochures = [
    { name: "Daihatsu Luxio", file: "/daihatsu-luxio.pdf" },
    { name: "Grandmax Pickup", file: "/grandmax-pickup.pdf" },
    { name: "Grandmax Minibus", file: "/grandmax-minibus.pdf" },
  ];

  return (
    <div className="flex flex-col">
      <main className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-10">
          Download Brosur Mobil Daihatsu
        </h1>

        {/* Grid 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brochures.map((b, i) => (
            <a
              key={i}
              href={b.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center border rounded-lg shadow p-6 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <FaFilePdf className="text-red-600 text-5xl mb-4" />
              <span className="font-semibold text-gray-800 text-center">
                {b.name}
              </span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
