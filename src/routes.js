
import App from "./App";
import ProductsList from "./components/ProductsList";
import Todos from "./components/Todos";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <App/>
    ),
  },
  {
    path: "todos",
    element: (
     <Todos/>
    ),
  },
  {
    path: "shop",
    element: <ProductsList/>,
  },
]);

export default router;
