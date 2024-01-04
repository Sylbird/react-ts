import { useEffect } from 'react';

const useSyncedClock = (callback: () => void): void => {
  useEffect(() => {
    const timeoutId: number = setTimeout(() => {
      callback();
      setInterval(callback, 1000);
    }, 1000 - new Date().getMilliseconds());

    return () => clearTimeout(timeoutId);
  }, [callback]);
};

export default useSyncedClock;
