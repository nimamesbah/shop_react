import { Children } from "react";
import Footer from "./assets/components/footer";
import Header from "./assets/components/Header";
import { Outlet, useLocation } from "react-router-dom";
const pathNames = ["/login"];
export default function Layout({ children }) {
  const location = useLocation();
  console.log("loction", location.pathname);
  const isHide = pathNames.includes(location.pathname);

  return isHide ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
