import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
      axios
        .post(
          "http://localhost:9000/isAuthenticated",
          {},
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {setIsAuthenticated(res.data.authenticated);
        })
        .catch((err) => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return <div></div>;
  } else {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }
}