// src/components/home/Gallery.jsx
export default function Gallery() {
  // Array 8 gambar
  const images = Array.from({ length: 8 }, (_, i) => `/gallery/gallery${i + 1}.jpeg`);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-red-600 text-center mb-8">Galeri</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 md:h-56 object-contain object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
