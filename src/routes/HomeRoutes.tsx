import { Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import QuickSearches from "../pages/HomePages/QuickSearches";

export default function HomeRoutes() {
  return (
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<QuickSearches />}></Route>
    </Route>
  );
}
