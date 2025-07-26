import { Box, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useGetAllProducts from "../../hooks/useGetAllProducts";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../hooks/usecartStore";

export default function Slider() {
  const { cart } = useCartStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useImmer(300);
  const { data, isError, isLoading } = useGetAllProducts();
  const navigate = useNavigate();

  const intervalRef = useRef(null);
  function resetInt() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDir(300);
      setCurrentIndex((prev) => (prev === data?.length - 1 ? 0 : prev + 1));
    }, 5000);
  }

  useEffect(() => {
    if (isLoading === false) {
      intervalRef.current = setInterval(() => {
        setDir(300);
        setCurrentIndex((prev) => (prev === data?.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (intervalRef) clearInterval(intervalRef.current);
    };
  }, [isLoading]);

  const nextSlide = (event) => {
    event.stopPropagation();

    setDir(300);
    setCurrentIndex((prev) => (prev === data?.length - 1 ? 0 : prev + 1));
    resetInt();
  };

  const prevSlide = (event) => {
    event.stopPropagation();

    setDir(-300);
    setCurrentIndex((prev) => (prev === 0 ? data?.length - 1 : prev - 1));
    resetInt();
  };

  return (
    <div
      className="hover:shadow-[0_0_0_1px_#D10024] rounded-2xl duration-300 py-4"
      style={{
        position: `${cart.length === 0 ? "static" : "sticky"}`,
        top: 10,

        width: "100%",
        height: "400px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "250px",
      }}
    >
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <AnimatePresence mode="wait">
            <motion.img
              onClick={() => navigate(`/product/${currentIndex + 1}`)}
              key={currentIndex}
              src={data[currentIndex]?.image}
              initial={{ x: dir, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -dir, opacity: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: "1.2" }}
              style={{
                objectFit: "contain",
                height: "200px",
                aspectRatio: 1 / 1,
                position: "absolute",
                marginTop: "40px",
              }}
              className="border-x border-global-red px-2 py-1 rounded-2xl cursor-pointer duration-200"
            />
          </AnimatePresence>
          <motion.h1
            initial={{ x: dir, opacity: 0 }}
            key={currentIndex}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -dir, opacity: 0 }}
            style={{ width: "max-content" }}
            transition={{ duration: 0.2 }}
          >
            {data[currentIndex]?.title}
          </motion.h1>
        </>
      )}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"8px"}
        alignItems={"center"}
      >
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          <motion.h1
            initial={{ x: dir, opacity: 0 }}
            key={`price-${currentIndex}`}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -dir, opacity: 0 }}
            style={{ width: "max-content", fontWeight: "bold" }}
            className="!text-global-red"
            transition={{ duration: 0.2 }}
          >
            Price:{data[currentIndex]?.price}$
          </motion.h1>
        )}
        <Box display="flex" justifyContent="space-between " gap={"10px"}>
          <Button
            onClick={prevSlide}
            variant="outlined"
            sx={{
              zIndex: 10,
              paddingX: 5,
            }}
          >
            Previous
          </Button>
          <Button
            onClick={nextSlide}
            variant="outlined"
            sx={{
              zIndex: 10,
              paddingX: 2,
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}
