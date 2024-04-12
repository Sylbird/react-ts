import { FC, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import {
  ButtonContainer,
  Container,
  DisplayContainer
} from 'src/assets/styles/components/StyledContainers';
import WithTimer from 'src/components/Counter/withTimer';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <>
      <Card title="Counter">
        <Container>
          <section>
            <DisplayContainer>
              <p>{counter}</p>
            </DisplayContainer>
            <ButtonContainer>
              <button type="button" onClick={increase}>
                Incrementar
              </button>
              <button type="button" onClick={decrease}>
                Decrementar
              </button>
            </ButtonContainer>
          </section>
        </Container>
      </Card>
      <WithTimer />
    </>
  );
};

export default Counter;
