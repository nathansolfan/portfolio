import React, { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });
      if (!response.ok) {
        throw new Error("Network response not okk");
      }
      const result = (await response.text()) || (await response.json());
      console.log(result);
      alert("Feedback submitted");
      // RESET
      setFeedback({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("There was a problem");
      alert("Problem ");
    }

    console.log(feedback);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Feedback</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={feedback.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email (Optional)"
        value={feedback.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Feedback"
        value={feedback.message}
        onChange={handleChange}
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
