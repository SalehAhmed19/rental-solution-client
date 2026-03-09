import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SearchHome from "../pages/SearchHome/SearchHome";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import PropertyDetails from "../pages/SearchHome/PropertyDetailsPage";
import AdPost from "../pages/AdPost/AdPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <SearchHome /> },
      { path: "/search/:id", element: <PropertyDetails /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/post-ad", element: <AdPost /> },
    ],
  },
]);

export default router;
