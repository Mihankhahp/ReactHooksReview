import React, {
  useState,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";

const Button = forwardRef((props,ref) => {
  const [status, setStatus] = useState(false);
  useImperativeHandle(ref, () => ({
    handleBtnClick() {
      setStatus(!status);
    },
  }));

  return (
    <>
      <button onClick={() => setStatus(!status)}>button from child</button>
      {status && <p>Status is True</p>}
    </>
  );
});

function UseImperativehandleHook() {
  const btnRef = useRef(null);
  return (
    <>
      <div>useImperativehandleHook function</div>
      <button
        onClick={() => {
          btnRef.current.handleBtnClick();
        }}
      >
        {" "}
        button from parent{" "}
      </button>
      <Button ref={btnRef} />
    </>
  );
}

export default UseImperativehandleHook;
