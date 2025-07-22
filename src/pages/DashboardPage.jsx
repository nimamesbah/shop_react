import { Box, Button, CircularProgress } from "@mui/material";
import useGetUser from "../hooks/useGetUsers";
import DashboardInfo from "../assets/components/DashboardInfo";

export default function DashboardPage() {
  const username = location.pathname.split("/").at(-1);
  const { data, isError, isLoading } = useGetUser(username);
  console.log("user", data);

  return (
    <>
      <div className="min-h-screen w-full font-bold bg-gray-400 flex flex-col justify-center items-center">
        <img className=" shadow-global-red mb-10" src="/logo.png" alt="" />
        {isLoading ? (
          <CircularProgress />
        ) : isError ? (
          <h1>there is a problem in connection!!!</h1>
        ) : (
          <DashboardInfo userInfo={data} />
        )}
      </div>
    </>
  );
}
