import React from "react"
import './App.css';
import UseContextHook from "./Hooks/useContext";
import UseEffectHook from "./Hooks/useEffect";
import UseImperativehandleHook from "./Hooks/useImperativehandle";
import UseLayoutEffectHook from "./Hooks/useLayoutEffect";
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
    </div>


  );
}

export default App;
