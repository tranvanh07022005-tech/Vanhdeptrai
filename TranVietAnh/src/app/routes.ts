import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "san-pham", Component: Catalog },
      { path: "san-pham/:id", Component: ProductDetail },
      { path: "gio-hang", Component: Cart },
      { path: "tai-khoan", Component: Profile },
      { path: "*", Component: NotFound },
    ],
  },
]);
