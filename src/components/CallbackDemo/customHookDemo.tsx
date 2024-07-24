import { useCallback, useState } from "react";
import { DemoObject } from "../../shared/utils/object";
import { Button } from "./button";

type HookProps = {
  counter: number;
  setCounter: (value: number) => void;
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

const useUpdateComponent = ({
  counter,
  setCounter,
  toggle,
  setToggle,
}: HookProps) => {
  const updateCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const updateToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return { updateCounter, updateToggle };
};

export const CustomHookDemo = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const contextObject = new DemoObject(); // 256MB

  const { updateCounter, updateToggle } = useUpdateComponent({
    counter,
    setCounter,
    toggle,
    setToggle,
  });

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
      <h1>Hook Demo</h1>
      <div>Counter: {counter}</div>
      <div>Toggle Status: {`${toggle}`}</div>
      <Button onClick={handleCounterButtonClick}>Increment</Button>
      <Button onClick={handleToggleButtonClick}>Toggle</Button>
      <div>Demo object size: {getObjectSize()}</div>
    </div>
  );
};
