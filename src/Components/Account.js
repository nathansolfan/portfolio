import React, { useEffect, useState } from "react";

export default function Account() {
  const [userInfo, setUserInfo] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        const response = await fetch(
          `http://localhost:3001/api/user/${userId}`
        );
        console.log(response);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserInfo(data);
        }
      }
    };
    fetchUser();
  }, []);

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch(
        `http://localhost:3001/api/user/${userId}/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newEmail }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        // Update local user info if needed
      } else {
        throw new Error(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    const userId = localStorage.getItem("userId");

    if (window.confirm("Are you sure?")) {
      try {
        const response = await fetch(
          `http://localhost:3001/api/user/${userId}/delete`
        );
      } catch (error) {}
    }
  };

  return (
    <div>
      <h1>Account details</h1>
      {userInfo && (
        <div>
          <p>ID: {userInfo.id}</p>
          <p>Email: {userInfo.email}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newEmail}
              onChange={handleEmailChange}
              required
              placeholder="New Email"
            />
            <button type="submit">Change Email</button>
          </form>
          <button onClick={handleDeleteAccount}>Delete Account</button>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}
