import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/Theme";

function Changecolor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="border border-gray-400 rounded-md my-2 block w-40 mx-auto "
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        className="block w-fit mx-auto bg-green-500 text-white px-4 py-1 rounded-md"
        onClick={() => dispatch(changeColor(color))}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

export default Changecolor;
