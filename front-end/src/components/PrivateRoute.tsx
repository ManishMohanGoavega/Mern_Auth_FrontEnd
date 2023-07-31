
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import state from "../store/store";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: ProtectedRouteProps) => {

  const snap = useSnapshot(state);
  if (!snap.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};