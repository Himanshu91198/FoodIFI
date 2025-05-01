import { BrowserRouter, Routes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import ProductRoutes from "./ProductRoutes";

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {HomeRoutes()}
        {ProductRoutes()}
      </Routes>
    </BrowserRouter>
  );
}
