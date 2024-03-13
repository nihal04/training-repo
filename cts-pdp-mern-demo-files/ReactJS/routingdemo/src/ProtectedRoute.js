import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    // async function checkAuth() {
      axios
        .post(
          "http://localhost:9000/auth/isAuthenticated",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => setIsAuthenticated(res.data.isAuthenticated))
        .catch((err) => setIsAuthenticated(false));
    // }
    // checkAuth();
  }, []);

  if (isAuthenticated == null) {
    return <div></div>;
  } else {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }
}
