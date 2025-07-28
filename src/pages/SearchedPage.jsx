import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { CircularProgress } from "@mui/material";
import MainCard from "../assets/components/Cards";

export default function SearchedPage() {
  const { items } = useParams();
  const { data, isLoading, isError } = useGetAllProducts();
  const path = decodeURI(items);

  return (
    <>
      <h1 className="text-center text-2xl mt-4">{`result for "${path}"`}</h1>
      <div className="flex flex-wrap justify-center items-center gap-6 w-full mt-3 h-max">
        {isLoading ? (
          <CircularProgress size="200px" />
        ) : isError ? (
          <h1 className="text-5xl mb-82">cannot fetch data!!</h1>
        ) : data.filter((item) =>
            item.title.toLowerCase().includes(path.toLowerCase())
          ).length === 0 ? (
          <h1 className="text-5xl mb-82">no products found!</h1>
        ) : (
          data
            .filter((item) =>
              item.title.toLowerCase().includes(path.toLowerCase())
            )
            .map((product) => <MainCard items={product} />)
        )}
      </div>
    </>
  );
}
