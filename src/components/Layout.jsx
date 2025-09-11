import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />      {/* Navbar tetap muncul */}
      <Header />      {/* Header khusus halaman */}
      <main className="flex-1">{children}</main>
      <Footer />      {/* Footer tetap muncul */}
    </div>
  );
}
