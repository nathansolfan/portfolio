import React, { useEffect, useState } from "react";

export default function Account() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userId = async () => {
      // get the email
      const userId = localStorage.getItem("userId");

      if (userId) {
        const response = await fetch(
          `http://localhost:3001/api/user/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        }
      }
    };
  });

  return (
    <div>
      <h1>Account details</h1>
      {userInfo && (
        <div>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
    </div>
  );
}