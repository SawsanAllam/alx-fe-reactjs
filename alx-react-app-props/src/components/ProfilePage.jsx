// src/components/ProfilePage.jsx
import React from "react";
import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo />
      <UserDetails />
    </div>
  );
}

export default ProfilePage;
