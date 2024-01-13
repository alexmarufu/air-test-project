import { createBrowserRouter } from "react-router-dom";
import { ProductDetailsPage } from "../pages/productDetailsPage";
import { AirtimeCheckoutPage } from "../pages/airtimeCheckoutPage";
import { AirtimeProductsPage } from "../pages/AirtimeProductsPage";
import { Home } from "../pages/home";
import { AirtimeOperatorsPage } from "../pages/AirtimeOperatorsPage";

export const HOME = "/";
export const PRODUCT = "/product";
export const AIRTIME_CHECKOUT = "/airtime-checkout";
export const AIRTIME_PRODUCTS_PAGE = "/airtime-products";
export const AIRTIME_OPERATORS_PAGE = "/airtime-operators";

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />,
    errorElement: <div>error page</div>,
    children: [],
  },
  {
    path: PRODUCT,
    element: <ProductDetailsPage />,
  },
  {
    path: AIRTIME_CHECKOUT,
    element: <AirtimeCheckoutPage />,
  },
  {
    path: AIRTIME_PRODUCTS_PAGE,
    element: <AirtimeProductsPage />,
  },
  {
    path: AIRTIME_OPERATORS_PAGE,
    element: <AirtimeOperatorsPage />,
  },
  // {
  //   path: "/lists",
  //   element: <Lists />,
  // },
  // {
  //   path: "/premium",
  //   element: <Premium />,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/more",
  //   element: <More />,
  // },
]);
