// src/components/UserInfo.jsx
import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserInfo() {
  const userData = useContext(UserContext);

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>User Info</h3>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
}

export default UserInfo;
