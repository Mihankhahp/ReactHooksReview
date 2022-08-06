import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

function UseMemoHook() {
  const [data, setData] = useState();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  const FindLongestEmail = (items) => {
    if (!items) return null;
    let LongestEmail = "";
    for (let i = 0; i < items.length; i++) {
      let currentName = items[i].email;
      if (currentName.length > LongestEmail.length) {
        LongestEmail = currentName;
      }
    }
    console.log("Computing .... Done");
    return LongestEmail;
  };
  const getLongestEmail = useMemo(() => FindLongestEmail(data), [data]);

  return (
    <>
      <div>UseMemoHook function</div>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Show "} the longest Email
      </button>
      {status && (
        <div>
          <p>{getLongestEmail}</p>
        </div>
      )}
    </>
  );
}

export default UseMemoHook;
