const ContactCTA = () => {
  return (
    <section className="py-16 text-center bg-blue-700 text-white">
      <h2 className="text-3xl font-bold mb-4">Ingin Konsultasi Lebih Lanjut?</h2>
      <p className="mb-6">Hubungi kami sekarang via WhatsApp dan dapatkan penawaran terbaik.</p>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition"
      >
        Chat WhatsApp
      </a>
    </section>
  );
};

export default ContactCTA;
