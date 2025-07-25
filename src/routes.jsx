import { createBrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/categoryPage";
import HomePage from "./pages/homePage";
import NotFoundPage from "./pages/notFoundPage";
import SearchedPage from "./pages/SearchedPage";
import SingleCardPage from "./pages/SingleCardPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import DashboardPage from "./pages/dashboardPage";
import ProtectedDashboard from "./protectedRoutes/ProtectedDashBoard";
import Slider from "./assets/components/slider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <SingleCardPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/products/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
      {
        path: "/searched/:items",
        element: <SearchedPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard/:user",
        element: (
          <ProtectedDashboard>
            <DashboardPage />
          </ProtectedDashboard>
        ),
      },
      {
        path: "/test",
        element: <Slider />,
      },
    ],
  },
]);
export default router;
