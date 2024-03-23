import React from "react";
import Form from "./Form";
import { navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful");
        // Redirect or handle login success here
        navigate("/Ticktacktoe");
      } else {
        const errorMessage = await response.text(); // Or response.json() for JSON response
        console.error("Login failed:", errorMessage);
        alert(`Login failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Login request failed", error);
      alert("Login failed: Network error or server is down");
    }
  };

  return (
    <div>
      <h2>Log in</h2>
      <Form onSubmit={handleLogin} />
    </div>
  );
}
