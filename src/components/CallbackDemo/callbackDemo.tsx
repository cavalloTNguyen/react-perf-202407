import { useCallback, useState } from "react";
import { DemoObject } from "../../shared/utils/object";

export const CallbackDemo = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const contextObject = new DemoObject();

  const updateCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const updateToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const runBoth = () => {
    updateCounter();
    updateToggle();
    console.debug(contextObject.data.length);
  };

  return (
    <div>
      <h1>Callback Demo</h1>
      <div>Counter: {counter}</div>
      <div>Toggle Status: {`${toggle}`}</div>
      <button onClick={updateCounter}>Increment</button>
      <button onClick={updateToggle}>Toggle</button>
      <button onClick={runBoth}>Both</button>
    </div>
  );
};
