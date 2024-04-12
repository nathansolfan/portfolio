import React, { useState } from "react";

export default function Form({ formType, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isRegister = formType === "register";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      onSubmit(name, email, password);
    } else {
      onSubmit(email, password);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="label">Name:</label>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="label">Email:</label>
      <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="label">Password:</label>
      <input
        type="password" // Changed to 'password' to hide input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
    </form>
  );
}
