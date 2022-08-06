import React, { useState, useContext, createContext } from "react";

const AppContext = createContext(null);

function UseContextHook() {
  const [userName, setUserName] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <AppContext.Provider value={{ userName, setUserName, status, setStatus }}>
      <div>UseContextHook function</div>
      <Btn />
      <br />
      {status && <UserName />}
    </AppContext.Provider>
  );
}

export default UseContextHook;

const Btn = () => {
  const { setStatus, status } = useContext(AppContext);

  return (
    <button onClick={() => setStatus(!status)}>
      Click me to {status ? "close" : "show"} input
    </button>
  );
};

const UserName = () => {
  const { userName, setUserName } = useContext(AppContext);
  return (
    <>
      <input
        placeholder="Username .. "
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <p>past name entered == {userName}</p>
    </>
  );
};
