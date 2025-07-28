import { Button } from "@mui/material";
import useGetSingleProducts from "../../hooks/useGetSingleProduct";

export default function NewProduct() {
  const { data: jewelery, isLoading } = useGetSingleProducts(5);
  const { data: electronics, isLoading: elecLoad } = useGetSingleProducts(14);
  const { data: women, isLoading: womenLoad } = useGetSingleProducts(16);
  return (
    <>
      <div className="  flex flex-wrap max-X450X:flex-col gap-4 justify-center mainNew:justify-between X450X:items-center  mx-auto w-[90%] mt-4">
        <div className="flex  gap-2.5 flex-wrap justify-center max-X450X:flex-col X450X:items-center w-full ">
          <div className="w-52 h-60  self-end relative hover:shadow-[0_0_0_2px_#D10024] cursor-pointer overflow-hidden group">
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!isLoading ? jewelery.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize w-[75%] translate-x-[-150px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 opacity-0 duration-300">
                jewelery collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </div>
          <div className="w-52 h-60  self-end relative overflow-hidden group hover:shadow-[0_0_0_2px_#D10024] cursor-pointer">
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!elecLoad ? electronics.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize w-[75%] translate-x-[-150px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 opacity-0 duration-300">
                gaming monitor collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </div>
          <div className="w-52 h-60  self-end relative overflow-hidden group hover:shadow-[0_0_0_2px_#D10024] cursor-pointer">
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!womenLoad ? women.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize w-[75%] translate-x-[-150px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 opacity-0 duration-300">
                snow jackets collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </div>
          <div className="w-52 h-60  self-end relative overflow-hidden group hover:shadow-[0_0_0_2px_#D10024] cursor-pointer">
            <img
              className="object-contain h-full w-full group-hover:scale-[1.1] duration-300"
              src={!womenLoad ? women.image : ""}
              alt="image"
            />
            <div className="bg-global-red capitalize w-[75%] translate-x-[-150px] group-hover:translate-x-[0px] duration-500 h-full absolute top-0 left-0 opacity-[0.9] flex flex-col gap-4 p-8 text-white">
              <h1 className="font-bold text-2xl w-min group-hover:opacity-100 opacity-0 duration-300">
                snow jackets collection
              </h1>
              <Button
                variant="contained"
                className="group-hover:opacity-100 opacity-0 duration-300 !w-max"
              >
                shop now!!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
