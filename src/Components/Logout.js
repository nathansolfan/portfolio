import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    window.dispatchEvent(new CustomEvent("user-logout"));

    // Redirect to the homepage or login page after logout
    navigate("/");
  }, [navigate]);

  // No need to return any JSX
  return null;
}
