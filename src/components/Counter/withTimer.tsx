import { FC, useEffect, useState } from 'react';

const WithTimer: FC = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);
  const [hide, setHide] = useState(false);

  const increase = () => setCounter(counter + 1);

  const reset = () => {
    setCounter(0);
    setTimer(10);
    setHide(false);
  };

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
    <div className="card">
      <div>
        <h2>§ Increment Counter With Timer</h2>
      </div>
      <div className="text-container">
        <div>
          <p>{counter}</p>
        </div>
        <div>
          {hide ? (
            <button onClick={reset} type="button">
              Reiniciar
            </button>
          ) : (
            <button onClick={increase} type="button">
              Incrementar
            </button>
          )}
        </div>
        <div>
          <p>Tienes {timer} segundos.</p>
        </div>
      </div>
    </div>
  );
};

export default WithTimer;
