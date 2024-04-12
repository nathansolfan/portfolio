import React, { useState } from "react";
import "../index.css";

export default function BookingForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await response.json();
      console.log(data);
      alert("Booking confirmed");
    } catch (error) {
      console.error("Error to submit booking", error);
      alert("Failed to confirm booking");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Type your email"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Type your phone"
        />
      </div>
      <button type="submit">Confirm Booking</button>
    </form>
  );
}
