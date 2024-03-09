import React from "react";
import Form from "./Form";

export default function Register({ onRegister }) {
  return <Form onSubmit={onRegister} />;
}
