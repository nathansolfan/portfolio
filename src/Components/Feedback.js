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
    // Implement the submission logic here (e.g., sending data to a backend server)
    console.log(feedback); // For now, just log the feedback object
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
