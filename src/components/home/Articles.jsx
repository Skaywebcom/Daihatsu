import { Link } from "react-router-dom";

const articles = [
  {
    title: "Kredit Mobil Daihatsu Jakarta",
    date: "November 11, 2024",
    img: "/Articles/articles1.jpg",
    desc: "Apakah Anda sedang mencari mobil baru yang sesuai dengan kebutuhan […]",
  },
  {
    title: "Promo Mobil Daihatsu Murah Jabodetabek",
    date: "November 11, 2024",
    img: "/Articles/articles2.jpg",
    desc: "Memiliki mobil baru sering kali menjadi impian banyak orang, baik […]",
  },
  {
    title: "Dealer Resmi Daihatsu Jakarta",
    date: "November 9, 2024",
    img: "/Articles/articles3.jpg",
    desc: "Anda sedang mencari mobil baru yang andal dan hemat bahan […]",
  },
];

export default function Articles() {
  // fungsi untuk buat slug dari title
  const toSlug = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-8">Artikel & Promo</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => {
          const slug = toSlug(a.title);
          return (
            <div key={i} className="border rounded-lg shadow overflow-hidden">
              <Link to={`/${slug}`}>
                <img src={a.img} alt={a.title} className="w-full h-40 object-cover" />
              </Link>
              <div className="p-4">
                <p className="text-sm text-gray-500">{a.date}</p>
                <Link to={`/${slug}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-red-600 transition">
                    {a.title}
                  </h3>
                </Link>
                <p className="text-gray-700">{a.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
