import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import Form from "../FormBooking";

import "react-datepicker/dist/react-datepicker.css";
import "../../index.css";

export default function Car() {
  const [startDate, setStartDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleDateChange = (date) => {
    setStartDate(date);
    setIsModalOpen(true);
  };

  const handleFormSubitmit = (name, email, phone) => {
    setIsModalOpen(false);
    setFormData({ name, email, phone });
    console.log("Booking Details:", { name, email, phone, startDate });
  };

  return (
    <div className="datepicker-container">
      <h2>Select a Date and Time</h2>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        showTimeSelect // This enables time selection
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="datepicker"
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Booking Form"
      >
        <Form />
      </Modal>
    </div>
  );
}
