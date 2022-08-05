import React, { useState, useRef, useEffect } from "react";

function UseRefHook() {
  const [inputStatus, setInputStatus] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputStatus ? inputRef.current.focus() : setText("");
  }, [inputStatus]);

  return (
    <div>
      <div>useRefHook function</div>
      <div>
        <button
          onClick={() => {
            setInputStatus(!inputStatus);
          }}
        >
          {inputStatus !== true ? "Show " : "Close"}
        </button>
        {inputStatus && (
          <>
            <input
              ref={inputRef}
              placeholder="Write sth ... "
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <p>{text}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default UseRefHook;
