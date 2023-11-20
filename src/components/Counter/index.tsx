import { FC, useState } from 'react';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <div>
      <h2>§Increment/Decrease Counter</h2>
      <p>{counter}</p>
      <button type="button" onClick={increase}>
        Increment
      </button>
      <button type="button" onClick={decrease}>
        decrease
      </button>
    </div>
  );
};

export default Counter;
