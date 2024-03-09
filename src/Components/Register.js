import React from "react";
import Form from "./Form";

export default function Register() {
  const handleRegistration = (email, password) => {
    const userData = { email, password };

    fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network respose was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There has been a problem", error);
      });
  };

  return <Form onSubmit={handleRegistration} />;
}
