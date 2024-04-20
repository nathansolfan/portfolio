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
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="label"></label>
      <input
        id="name"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder=" Name"
      />
      <label className="label"></label>
      <input
        id="email"
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder=" Email address"
      />
      <label className="label"></label>
      <input
        id="password"
        type="password" // Changed to 'password' to hide input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder=" Password"
      />
      <button className="submit-button" type="submit">
        {isRegister ? "Register" : "Login"}
      </button>
    </form>
  );
}
