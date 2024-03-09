import React from "react";
import Form from "./Form";

export default function Register() {
  const handleFormSubmit = (email, password) => {
    console.log("Registering with email and password:", email, password);
  };
  return <Form onSubmit={handleFormSubmit} />;
}
