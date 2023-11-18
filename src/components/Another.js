import React from "react";
import { useSelector } from "react-redux";

function Another() {
  const theUser = useSelector((state) => state.user.value);
  const number = useSelector((state) => state.counter.value);
  return (
    <div className="border border-green-400 p-4 w-[90%] mx-auto my-4">
      <p className="font-semibold text-lg mb-4">
        This component is created just to verify Redux passing to any component
        any here
      </p>
      <div>
        <p>Name : {theUser.name}</p>
        <p>Age : {theUser.age}</p>
        <p>Email : {theUser.email}</p>
        <p>Number : {number}</p>
      </div>
    </div>
  );
}

export default Another;
