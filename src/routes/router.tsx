import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SearchHome from "../pages/SearchHome/SearchHome";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import PropertyDetails from "../pages/SearchHome/PropertyDetailsPage";
import AdPost from "../pages/AdPost/AdPost";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/Signup/Signup";

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
      {
        path: "/authentication/login",
        element: <Login />,
      },
      {
        path: "/authentication/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
