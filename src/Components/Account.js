import React, { useEffect, useState } from "react";

export default function Account() {
  const [userInfo, setUserInfo] = useState(null);

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

  return (
    <div>
      <h1>Account details</h1>
      {userInfo && (
        <div>
          <p>Email: {userInfo.email}</p>
          {/* Display other user info as needed */}
        </div>
      )}
    </div>
  );
}
