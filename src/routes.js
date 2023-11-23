import App from "./App";
import ProductsList from "./components/ProductsList";
import Todos from "./components/Todos";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    element:(
      <>
        <NavBar/>
      <Outlet />
      </>
    )
    ,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "shop",
        element: <ProductsList />,
      },
    ],
  },
]);

export default router;
