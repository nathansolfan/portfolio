import React, { useState } from "react";
import "../index.css";

export default function BookingForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
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
