"use client";
import { useState } from "react";

export const Counter = () => {
  console.log("Counter component");
  const [count, setCount] = useState(0);

  return (
    <button className="bg-black text-2xl font-semibold p-4 w-2/3 rounded-lg text-white" onClick={() => setCount(count + 1)}> Click Here: <br /> Clicked {count} times</button>
  );
};