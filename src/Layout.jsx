import { Outlet, useLocation } from "react-router-dom";
import Footer from "./assets/components/footer";
import Header from "./assets/components/Header";
const pathNames = ["login", "dashboard"];
export default function Layout() {
  const location = useLocation();
  console.log("loction", location.pathname.split("/").at(1));
  const isHide = pathNames.includes(location.pathname.split("/").at(1));

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
