// src/components/home/HeroSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    "/home/terios.jpeg",
    "/home/ayla.jpeg",
    "/home/rocky.jpeg",
    "/home/xenia.jpeg",
    "/home/sigra.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={slides[current]}
          alt={`slide-${current}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Hapus Indicator */}

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-red-600 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-red-600 transition"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
