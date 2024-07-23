import { useCallback, useState } from "react";
import { DemoObject } from "../../shared/utils/object";
import { Button } from "./button";

export const LeakyCallbackDemo = () => {
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

  const handleCounterButtonClick = () => {
    updateCounter();
  };

  const handleToggleButtonClick = () => {
    updateToggle();
  };

  const getObjectSize = () => {
    return contextObject.data.length;
  };

  return (
    <div>
      <h1>Leaky Demo</h1>
      <div>Counter: {counter}</div>
      <div>Toggle Status: {`${toggle}`}</div>
      <Button onClick={handleCounterButtonClick}>Increment</Button>
      <Button onClick={handleToggleButtonClick}>Toggle</Button>
      <div>Demo object size: {getObjectSize()}</div>
    </div>
  );
};
