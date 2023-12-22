import { FC, useEffect, useState } from 'react';

const WithTimer: FC = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);
  const [hide, setHide] = useState(false);

  const increase = () => setCounter(counter + 1);

  useEffect(() => {
    if (timer > 0) {
      const Timer = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearInterval(Timer);
      };
    } else {
      setHide(true);
    }
  }, [timer]);

  return (
    <div>
      <h2>§Increment Counter With Timer</h2>
      <p>{counter}</p>
      <button onClick={increase} type="button" className={hide ? 'hide' : ''}>
        Increment
      </button>
      <p>You have {timer} seconds left.</p>
    </div>
  );
};

export default WithTimer;
