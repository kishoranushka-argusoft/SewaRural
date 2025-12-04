import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:8000/api"; 

const ProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/authcheck/`, {
          method: "GET",
          credentials: "include", 
        });

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          toast.error("Login required");
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
        console.error("Login required");
      } finally {
        setChecking(false);
      }
    };

    checkAuth();
  }, []);

    if (checking) {
      return null; 
    }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
