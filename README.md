##React Hooks:
* useState
  * This hook is used to update/state the initial/entered variable.

* useReducer
  * An alternative to useState.
  * usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
  * lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

* useEffect
  * The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.
  * Effects run after every completed render, but you can choose to fire them only when certain values have changed.
  * The clean-up function
     * Runs before the component is removed from the UI to prevent memory leaks. Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect.


* useContext
* useRef
* useMemo
* useCallback
