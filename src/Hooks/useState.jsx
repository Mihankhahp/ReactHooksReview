import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("empty");

  return (
    <div>
      <div>useState function</div>
      <div>{counter}</div>
      <div>{text}</div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={() => setCounter(counter + 1)}>
        Click to increase the counter
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        click to decrease the counter
      </button>
    </div>
  );
}

export default UseStateHook;
