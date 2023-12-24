import { FC, useState } from 'react';
import StyledCounter from 'src/components/Counter/StyledCounter';
import WithTimer from 'src/components/Counter/withTimer';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <StyledCounter>
      <div className="card">
        <div>
          <h2>§Increment/Decrease Counter</h2>
        </div>
        <div>
          <div className="text-container">
            <p>{counter}</p>
            <button type="button" onClick={increase}>
              Increment
            </button>
            <button type="button" onClick={decrease}>
              decrease
            </button>
          </div>
        </div>
      </div>
      <WithTimer />
    </StyledCounter>
  );
};

export default Counter;
