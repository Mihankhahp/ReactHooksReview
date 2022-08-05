## React Hooks:
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
* useRef
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
 * Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
 * You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes.

* useLayoutEffect
 * It will be called in an earlier stage in comparison with useEffect.
useEffect would be run after rendering everything, in contrast, this hook would be run before rendering. And it would be used to change the layout before.
 * We recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem
 * It fires synchronously after all DOM mutations. Use this to read the layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously before the browser has a chance to paint.

* ImperateiveHandle:
 * Using in very specific situations.
 * It would be used to change states and make changes from parent to child components.
