import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // যখন চেক অথ এপিআই কল হচ্ছে, তখন একটি লোডার দেখাবে
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // লগইন না থাকলে লগইন পেজে পাঠাবে এবং বর্তমান লোকেশন মনে রাখবে
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
