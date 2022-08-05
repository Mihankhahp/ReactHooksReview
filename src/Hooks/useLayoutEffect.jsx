import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffectHook() {
  useLayoutEffect(() => {
    console.log("lay out effect runed ");
  }, []);

  useEffect(() => {
    console.log("use effect runed ");
  }, []);

  return (
    <>
      <div>UseLayoutEffectHook function</div>
      <div>
        <p>Check the Consol</p>
      </div>
    </>
  );
}

export default UseLayoutEffectHook;
