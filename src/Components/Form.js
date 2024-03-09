import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <form action="">
      <label htmlFor=""></label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor=""></label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}
