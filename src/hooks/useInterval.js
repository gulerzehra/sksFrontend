import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  const intervalId = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const pause = () => {
    clearInterval(intervalId.current);
  };

  const resume = () => {
    if (delay !== null) {
      intervalId.current = setInterval(savedCallback.current, delay);
    }
  };

  const reset = (newDelay) => {
    clearInterval(intervalId.current);
    if (newDelay !== null) {
      intervalId.current = setInterval(savedCallback.current, newDelay);
    }
  };

  useEffect(() => {
    resume();
    return pause;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  return { pause, resume, reset };
}

export default useInterval;
