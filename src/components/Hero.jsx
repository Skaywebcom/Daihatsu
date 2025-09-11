const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Promo Mobil Daihatsu Terbaru 🚗
      </h1>
      <p className="text-lg mb-6">
        Dapatkan harga spesial dan bonus menarik untuk pembelian bulan ini.
      </p>
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition"
      >
        Hubungi via WhatsApp
      </a>
    </section>
  );
};

export default Hero;
