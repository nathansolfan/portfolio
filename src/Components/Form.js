import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
}
