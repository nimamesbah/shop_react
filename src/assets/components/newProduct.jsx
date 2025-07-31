import { Button } from "@mui/material";
import useGetSingleProducts from "../../hooks/useGetSingleProduct";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export default function NewProduct() {
  const { data: jewelery, isLoading } = useGetSingleProducts(5);
  const { data: electronics, isLoading: elecLoad } = useGetSingleProducts(14);
  const { data: women, isLoading: womenLoad } = useGetSingleProducts(16);
  const { data: men, isLoading: menLoad } = useGetSingleProducts(1);
  return (
    <>
      <div className="  flex flex-wrap max-X450X:flex-col gap-4 justify-center mainNew:justify-between X450X:items-center  mx-auto w-[90%] mt-20">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex  gap-6 flex-wrap justify-center max-X450X:flex-col items-center w-full "
        >
          <motion.div
            variants={childVariants}
            className="w-62 h-60   relative hover:shadow-[0_0_0_2px_#D10024] cursor-pointer overflow-hidden group"
          >
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!isLoading ? jewelery.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize lg:w-[75%] w-[60%]  duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-3 text-white">
              <h1 className="font-bold text-2xl w-min  duration-300">
                jewelery collection
              </h1>
              <Button variant="contained" className=" duration-300 !w-max">
                shop now!!
              </Button>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-62 h-60  relative overflow-hidden group hover:shadow-[0_0_0_2px_#D10024] cursor-pointer"
          >
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!elecLoad ? electronics.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize lg:w-[75%] lg:translate-x-[-180px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 lg:opacity-0 duration-300">
                gaming monitor collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 lg:opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-62 h-60 relative overflow-hidden group hover:shadow-[0_0_0_2px_#D10024] cursor-pointer"
          >
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!womenLoad ? women.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize lg:w-[75%] lg:translate-x-[-180px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 lg:opacity-0 duration-300">
                snow jackets collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 lg:opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-62 h-60   relative overflow-hidden group hover:shadow-[0_0_0_2px_#D10024] cursor-pointer"
          >
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!menLoad ? men.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize lg:w-[75%] lg:translate-x-[-180px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 lg:opacity-0 duration-300">
                bags collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 lg:opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
