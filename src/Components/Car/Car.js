import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../index.css";

export default function Car() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="datepicker-container">
      <h2>Select a Date and Time</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect // This enables time selection
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="datepicker"
      />
    </div>
  );
}
