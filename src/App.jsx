import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TipeUnit from "./pages/TipeUnit";
import Layout from "./components/Layout"; 
import AylaPage from "./pages/details/AylaPage";
import SigraPage from "./pages/details/SigraPage";
import XeniaPage from "./pages/details/XeniaPage";
import TeriosPage from "./pages/details/TeriosPage";
import RockyPage from "./pages/details/RockyPage";
import PriceListPage from "./pages/PriceList";
import SimulasiKreditPage from "./pages/SimulasiKredit";
import TestDrivePage from "./pages/TestDrive";
import GalleryPage from "./pages/Galeri";
import KreditMobilDaihatsuJakarta from "./pages/articles/KreditMobilDaihatsuJakarta";
import PromoMobilDaihatsuMurahJabodetabek from "./pages/articles/PromoMobilDaihatsuMurahJabodetabek";
import DealerResmiDaihatsuJakarta from "./pages/articles/DealerResmiDaihatsuJakarta";
import ArticlesPage from "./pages/Artikel";
import Kontak from "./pages/Kontak";
import Brosur from "./pages/Brosur";


function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage tetap pakai Navbar/Footer di App.jsx */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Halaman lain pakai Layout */}
        <Route
          path="/tipe-unit"
          element={
            <Layout>
              <TipeUnit />
            </Layout>
          }
        />
        <Route
          path="/price-list"
          element={
            <Layout>
              <PriceListPage />
            </Layout>
          }
        />

        <Route
          path="/simulasi-kredit"
          element={
            <Layout>
              <SimulasiKreditPage />
            </Layout>
          }
        />

        <Route
          path="/test-drive"
          element={
            <Layout>
              <TestDrivePage />
            </Layout>
          }
        />

        <Route
          path="/galeri"
          element={
            <Layout>
              <GalleryPage />
            </Layout>
          }
        />

        <Route
          path="/artikel"
          element={
            <Layout>
              <ArticlesPage />
            </Layout>
          }
        />

        <Route
          path="/kontak"
          element={
            <Layout>
              <Kontak />
            </Layout>
          }
        />

        <Route
          path="/brosur"
          element={
            <Layout>
              <Brosur />
            </Layout>
          }
        />

        <Route path="/new-ayla" element={<AylaPage />} />
        <Route path="/sigra" element={<SigraPage />} />
        <Route path="/all-new-xenia" element={<XeniaPage />} />
        <Route path="/new-terios" element={<TeriosPage />} />
        <Route path="/rocky" element={<RockyPage />} />
        <Route path="/kredit-mobil-daihatsu-jakarta" element={<KreditMobilDaihatsuJakarta />} />
        <Route path="/promo-mobil-daihatsu-murah-jabodetabek" element={<PromoMobilDaihatsuMurahJabodetabek />} />
        <Route path="/dealer-resmi-daihatsu-jakarta" element={<DealerResmiDaihatsuJakarta />} />

        {/* Tambahkan route lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

export default App;
