import { useEffect } from 'react';

const useSyncedClock = (callback: () => void): void => {
  useEffect(() => {
    let timeoutId: number;

    timeoutId = setTimeout(() => {
      callback();
      timeoutId = setInterval(callback, 1000);
    }, 1000 - new Date().getMilliseconds());

    return () => clearTimeout(timeoutId);
  }, [callback]);
};

export default useSyncedClock;
