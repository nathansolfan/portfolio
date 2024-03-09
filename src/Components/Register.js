import React from "react";
import Form from "./Form";

export default function Register() {
  const handleRegistration = (email, password) => {
    const userData = { email, password };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  return <Form onSubmit={handleRegistration} />;
}
