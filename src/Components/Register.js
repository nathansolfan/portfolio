import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegistration = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming the server's response is plain text
      const data = await response.text();
      console.log(data);
      alert(data);

      // Navigate to another route upon successful registration
      navigate("/some-route-after-registration");
    } catch (error) {
      console.error("There has been a problem", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleRegistration} />
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="U5CGJDRF7F5HQ" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
}
