import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { checkAuth } from "../../redux/slices/authSlice";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;
