import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useGetAllProducts from "../../hooks/useGetAllProducts";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isError, isLoading } = useGetAllProducts();
  const intervalRef = useRef(null);
  function resetInt() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () =>
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      5000
    );
  }

  useEffect(() => {
    intervalRef.current = setInterval(
      () =>
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => {
      if (intervalRef) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    resetInt();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    resetInt();
  };

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        overflow: "hidden",
      }}
    >
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={data[currentIndex]?.image}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </AnimatePresence>
      )}

      <button
        onClick={prevSlide}
        style={{ position: "absolute", left: 10, top: "50%", zIndex: 10 }}
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        style={{ position: "absolute", right: 10, top: "50%", zIndex: 10 }}
      >
        Next
      </button>
    </div>
  );
}
