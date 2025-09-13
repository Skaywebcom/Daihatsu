import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
