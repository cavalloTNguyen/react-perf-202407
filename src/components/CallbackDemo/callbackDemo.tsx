import { useCallback, useState } from "react";
import { DemoObject } from "../../shared/utils/object";
import { Button } from "./button";

export const CallbackDemo = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const contextObject = new DemoObject(); // 64MB

  // These are intentionally written to use the state value so that we bring in the context
  const updateCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const updateToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const getObjectSize = () => {
    return contextObject.data.length;
  };

  return (
    <div>
      <h1>Callback Demo</h1>
      <div>Counter: {counter}</div>
      <div>Toggle Status: {`${toggle}`}</div>
      <Button onClick={updateCounter}>Increment</Button>
      <Button onClick={updateToggle}>Toggle</Button>
      <div>Demo object size: {getObjectSize()}</div>
    </div>
  );
};
