import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div className="w-[90%] mx-auto my-4 border border-blue-500 p-4">
      <h1 className="font-bold text-xl">Profile Page</h1>
      <p>Name:{user.name} </p>
      <p>Age: {user.age} </p>
      <p>Email: {user.email} </p>
      <p>Color: {themeColor}</p>
    </div>
  );
}

export default Profile;
