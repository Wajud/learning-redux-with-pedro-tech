import React, { useState } from "react";
import { decrement, increment, incrementByAmount } from "../features/Counter";
import { useDispatch } from "react-redux";

function Number() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div className="my-4 border border-green-400 w-[90%] mx-auto py-2">
      <input
        type="text"
        placeholder="Enter increment"
        className="border border-gray-600 rounded-md block mx-auto my-2"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="flex justify-center gap-2 ">
        <button
          className="block w-fit px-2 py-1 rounded-md bg-green-500 text-white"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="block w-fit px-2 py-1 rounded-md bg-red-500 text-white"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="block w-fit px-2 py-1 rounded-md bg-blue-500 text-white"
          onClick={() => dispatch(incrementByAmount(value))}
        >
          +x
        </button>
      </div>
    </div>
  );
}

export default Number;
