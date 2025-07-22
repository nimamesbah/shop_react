import { Navigate, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useTokenStore } from "../hooks/useTokenStore";
import { useEffect } from "react";

export default function ProtectedDashboard({ children }) {
  const { token } = useTokenStore();
  const navigate = useNavigate();
  return <>{token ? children : <Navigate to={"/login"} />}</>;
}
