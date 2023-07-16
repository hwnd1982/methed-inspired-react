import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ErrorPage } from "./Components/Pages/ErrorPage/ErrorPage";
import { MainPage } from "./Components/Pages/MainPage/MainPage";
import { Root } from "./routes/Root/Root";
import { ProductPage } from "./Components/Pages/ProductPage/ProductPage";
import { FavoritesPage } from "./Components/Pages/FavoritesPage/FavoritesPage";
import { CartPage } from "./Components/Pages/CartPage/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/favorite" element={<FavoritesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/catalog/:gender/:category?" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => <RouterProvider router={router} />;
