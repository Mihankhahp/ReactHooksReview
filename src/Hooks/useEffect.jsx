import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectHook() {
  const [jsonData, setJsonData] = useState();
  const [numShow, setNumShow] = useState(5);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setJsonData(res.data);
    });
  }, []);
  return (
    <div>
      <div>useEffect function</div>
      <div>
        <p>The First 5 Emails in API</p>
        <ol>
          {jsonData &&
            jsonData.map(
              (item, index) =>
                index < numShow && <li key={index}>{item.email}</li>
            )}
        </ol>
        <button onClick={() => setNumShow(numShow + 5)}>
          Click to show more ...{" "}
        </button>
      </div>
    </div>
  );
}

export default UseEffectHook;
