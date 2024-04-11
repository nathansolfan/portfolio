import React, { useState } from "react";

export default function Car() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h2>Select a Date and Time</h2>
    </div>
  );
}
