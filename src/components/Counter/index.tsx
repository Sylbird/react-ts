import { FC, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import { TextContainer } from 'src/assets/styles/components/StyledContainers';
import WithTimer from 'src/components/Counter/withTimer';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <>
      <Card title="Counter">
        <TextContainer>
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
        </TextContainer>
      </Card>
      <WithTimer />
    </>
  );
};

export default Counter;
