import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 justify-center border border-green-400 w-[90%] mx-auto py-6">
      <button
        className="block w-fit px-6 text-center bg-green-500 text-white rounded-md py-1"
        onClick={() =>
          dispatch(
            login({ name: "Kareem", age: 10, email: "wajudkareem@yahoo.com" })
          )
        }
      >
        Login
      </button>
      <button
        className="block w-fit px-6 text-center bg-red-500 text-white rounded-md py-1"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
