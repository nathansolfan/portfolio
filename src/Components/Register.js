import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Register() {
  const navigate = useNavigate();

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
      const data = await response.text();
      console.log(data);
      alert(data);

      // Navigate to another route upon successful registration
      navigate("/some-route-after-registration");
    } catch (error) {
      console.error("There has been a problem", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleRegistration} />
    </div>
  );
}
