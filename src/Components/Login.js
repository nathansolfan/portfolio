import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import "../index.css";

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
        const data = await response.json();
        console.log(data.message);
        localStorage.setItem("userEmail", email);

        navigate("/Ticktacktoe");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("There was a problem with the login:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <Form onSubmit={handleLogin} />
    </div>
  );
}
