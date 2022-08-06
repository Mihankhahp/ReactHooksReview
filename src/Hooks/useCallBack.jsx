import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

function UseCallBackHook() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState("fetching ...");
  const url = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  const callbackData = useCallback(() => {
    // console.log("data is  ", data);
    return data;
  }, [data]);

  return (
    <>
      <div>UseCallBackHook</div>
      <div>
        <button onClick={() => setStatus(!status)}>
          Click me to change state
        </button>
        {status && <p>"""" The Last Hook ... State Changed """"</p>}
      </div>
      <div>
        {" "}
        <Child callback={callbackData} />
      </div>
    </>
  );
}
export default UseCallBackHook;

const Child = ({ callback }) => {
  useEffect(() => {
    console.log("Child was callled ... ");
  }, [callback]);

  const items = callback();

  return (
    <div>
      {items !== "fetching ..." && items.map((item, i) => i < 5 && <p key={i}>{item.name}</p>)}
    </div>
  );
};
