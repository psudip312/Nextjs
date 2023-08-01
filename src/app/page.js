"use client";

import { useState } from "react";

export default function Home() {
  const [inputval, setinpurval] = useState();
  console.log("inputvlaue",inputval)
  return (
    <div>
      <div>
        <h1>Enter your name</h1>
        <form>
          <input
            type="text"
            placeholder="Type your name"
            value={inputval}
            onChange={(e) => setinpurval(e.target.value)}
          />
          <button typeof="submit">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
