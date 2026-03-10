import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { Toaster } from "sonner";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster
        richColors
        toastOptions={{
          style: {
            fontFamily: "'Anek Bangla', sans-serif",
          },
        }}
      />
    </div>
  );
}
