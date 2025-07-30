import { Button } from "@mui/material";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import { motion } from "framer-motion";

export default function HotDeal() {
  const [slide, setSlide] = useImmer(0);
  const [times, setTimes] = useImmer([2, 10, 34, 60]);
  useEffect(() => {
    setInterval(() => setSlide((draft) => draft + 1), 30);
  }, []);
  useEffect(() => {
    setInterval(
      () =>
        setTimes((draft) => {
          draft[3]--;
          if (draft[3] === 0) {
            draft[3] = 60;
            draft[2]--;
          }
        }),
      1000
    );
  }, []);

  return (
    <>
      <div
        id="hotDeal"
        className={`w-full mt-30 bg-[url('/hotdeal.png')] overflow-hidden bg-cover h-96 max-sm:h-max max-sm:py-3 flex-col justify-around duration-1000 flex items-center flex-wrap max-sm:gap-11`}
        style={{ backgroundPosition: `${slide}%` }}
      >
        <div
          id="times"
          className="w-full flex justify-center gap-4 flex-wrap text-white"
        >
          <motion.div className="w-24 h-24 rounded-full bg-global-red flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-max">
              <h1 className="text-3xl">{times[0]}</h1>
              <h2>days</h2>
            </div>
          </motion.div>
          <motion.div className="w-24 h-24 rounded-full bg-global-red flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-max">
              <h1 className="text-3xl">{times[1]}</h1>
              <h2>hours</h2>
            </div>
          </motion.div>
          <motion.div className="w-24 h-24 rounded-full bg-global-red flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-max">
              <h1 className="text-3xl">{times[2]}</h1>
              <h2>minutes</h2>
            </div>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              backgroundColor: ["#ff0000", "#000000", "#000000"],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full  flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center w-max">
              <h1 className="text-3xl">{times[3]}</h1>
              <h2>seconds</h2>
            </div>
          </motion.div>
        </div>
        <h1 className="uppercase font-bold text-2xl text-center sm:text-4xl text-[#2B2D42]">
          hot deal this week
        </h1>
        <h2 className="uppercase text-xl text-center sm:text-2xl">
          New Collection /{" "}
          <span className="text-global-red ">Up to 50% OFF</span>
        </h2>
        <Button className="!w-max px-3 !text-lg !uppercase" variant="contained">
          Shop Now!!
        </Button>
      </div>
    </>
  );
}
