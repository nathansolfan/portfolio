import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userEmail");
    // Redirect to the homepage or login page after logout
    navigate("/");
  }, [navigate]);

  // No need to return any JSX
  return null;
}
