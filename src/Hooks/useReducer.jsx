import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  text: "empty",
};

const reducer = (initialState, action) => {
  switch (action.type) {
    case "countingUp":
      return {
        ...initialState,
        counter: initialState.counter + 1,
      };
    case "countingDown":
      return {
        ...initialState,
        counter: initialState.counter - 1,
      };
    case "writing":
      return {
        ...initialState,
        text: (initialState.text = action.payload),
      };
    default:
      throw new Error();
  }
};

function UseReducerHook() {
  const [{ counter, text }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>useReducer function</div>
      <div>{counter}</div>
      <div>{text}</div>
      <div>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "writing", payload: e.target.value })
          }
        />
      </div>
      <button onClick={() => dispatch({ type: "countingUp" })}>
        Click to + the counter
      </button>
      <button onClick={() => dispatch({ type: "countingDown" })}>
        click to - the counter
      </button>
    </div>
  );
}

export default UseReducerHook;
