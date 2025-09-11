const cars = [
  { name: "Daihatsu Ayla", img: "/cars/ayla.jepg" },
  { name: "Daihatsu Sigra", img: "/cars/sigra.jepg" },
  { name: "Daihatsu Xenia", img: "/cars/xenia.jepg" },
];

const Gallery = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Pilihan Mobil Daihatsu
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.map((car, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
            <img src={car.img} alt={car.name} className="w-full rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{car.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
