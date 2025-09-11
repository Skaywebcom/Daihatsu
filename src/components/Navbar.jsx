// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Dapatkan path saat ini

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tipe Unit", path: "/tipe-unit" },
    { name: "Price List", path: "/price-list" },
    { name: "Simulasi Kredit", path: "/simulasi-kredit" },
    { name: "Test Drive", path: "/test-drive" },
    { name: "Galeri", path: "/galeri" },
    { name: "Artikel", path: "/artikel" },
    { name: "Kontak", path: "/kontak" },
    { name: "Brosur", path: "/brosur" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 ${
                    isActive ? "text-red-600" : "text-black hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Underline untuk active link */}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-red-600"
                    style={{ width: "50%" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-200">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-6 py-3 font-medium transition-all ${
                  isActive
                    ? "text-red-600 bg-gray-100 underline underline-offset-4 decoration-red-600"
                    : "text-black hover:bg-red-600 hover:text-white hover:underline underline-offset-4 decoration-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
