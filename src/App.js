import React from "react"
import './App.css';
import UseCallBackHook from "./Hooks/useCallBack";
import UseContextHook from "./Hooks/useContext";
import UseEffectHook from "./Hooks/useEffect";
import UseImperativehandleHook from "./Hooks/useImperativehandle";
import UseLayoutEffectHook from "./Hooks/useLayoutEffect";
import UseMemoHook from "./Hooks/useMemo";
import UseReducerHook from "./Hooks/useReducer";
import UseRefHook from "./Hooks/useRef";
import UseStateHook from './Hooks/useState';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <br />
      <UseReducerHook />
      <br />
      <UseEffectHook />
      <br />
      <UseRefHook />
      <br />
      <UseLayoutEffectHook />
      <br />
      <UseImperativehandleHook />
      <br />
      <UseContextHook />
      <br />
      <UseMemoHook />
      <br />
      <UseCallBackHook />
    </div>


  );
}

export default App;
