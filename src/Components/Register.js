import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Register() {
  const handleRegistration = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming the server's response is plain text
      const data = await response.json();
      console.log(data.message);
      alert(data.message);
    } catch (error) {
      console.error("There has been a problem", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <Form onSubmit={handleRegistration} />
    </div>
  );
}
