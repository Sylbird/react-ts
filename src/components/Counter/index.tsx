import { FC, useState } from 'react';
import WithTimer from 'src/components/Counter/withTimer';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <main>
      <div className="card">
        <div>
          <h2>§ Increment/Decrease Counter</h2>
        </div>
        <div>
          <div className="text-container">
            <div>
              <p>{counter}</p>
            </div>
            <div>
              <button type="button" onClick={increase}>
                Incrementar
              </button>
              <button type="button" onClick={decrease}>
                Decrementar
              </button>
            </div>
          </div>
        </div>
      </div>
      <WithTimer />
    </main>
  );
};

export default Counter;
