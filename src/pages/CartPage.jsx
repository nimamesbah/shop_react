import { useContext, useEffect } from "react";
import { CartContext } from "../App";
import { CartCards } from "../assets/components/Cards";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../hooks/usecartStore";
import Slider from "../assets/components/slider";

// why prices doesnt rerendered when cart updated
export default function CartPage() {
  const { cart } = useCartStore();
  const [prices, setPrices] = useImmer(cart.map((item) => (item = item.price)));
  const navigate = useNavigate();
  useEffect(() => {
    setPrices(cart.map((item) => (item = item.price)));
  }, [cart]);

  return (
    <>
      <div className="w-[90%] flex flex-col sm:flex-row max-w-container mx-auto mt-3 gap-4 sm:items-end items-center h-full">
        <div className="flex flex-col gap-16 items-center ">
          {cart.map((item) => (
            <CartCards items={item} />
          ))}
        </div>
        <div
          id="cont"
          className={`w-full flex flex-col sm:gap-[${
            cart.length === 0 ? "10px" : "670px"
          }] gap-4 justify-between h-full`}
        >
          <Slider />
          <div
            className={`${
              cart.length === 0 ? "static" : "sticky"
            } bottom-0 left-0 w-full flex sm:flex-col  gap-3  items-center justify-center h-max py-2 px-2 rounded-2xl bg-[#1E1F29] text-white z-50`}
          >
            {cart.length === 0 ? (
              <h1 className="capitalize text-white">
                you have nothing in your cart !!
              </h1>
            ) : (
              ""
            )}
            <span className="">
              orders:{" "}
              <span className="text-global-red text-xl">
                {cart
                  .map((item) => item.amount)
                  .reduce((total, current) => total + Number(current), 0)}
              </span>
            </span>
            <span className="">
              Fee:{" "}
              <span className="text-xl text-global-red">
                $
                {Math.floor(
                  prices.reduce((total, current) => total + Number(current), 0)
                )}
              </span>
            </span>
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer border-b rounded-2xl border-global-red px-2 py-1 text-center"
            >
              shop
            </button>
            {cart.length === 0 ? (
              ""
            ) : (
              <button className="w-max  cursor-pointer rounded-2xl border-b border-global-red py-1 px-2">
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
