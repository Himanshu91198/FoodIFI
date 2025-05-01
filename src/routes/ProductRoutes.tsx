import { Route } from "react-router-dom";

export default function ProductRoutes() {
  return <Route path="/products" element={<ProductRoutes />}></Route>;
}
