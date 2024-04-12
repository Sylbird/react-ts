import { FC, useEffect, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import {
  ButtonContainer,
  Container,
  DisplayContainer
} from 'src/assets/styles/components/StyledContainers';

const WithTimer: FC = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);

  const increase = () => setCounter(counter + 1);
  const increaseBtn = document.getElementById(
    'increaseBtn'
  ) as HTMLButtonElement;

  const reset = () => {
    setCounter(0);
    setTimer(10);
    increaseBtn.disabled = false;
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
      increaseBtn.disabled = true;
    }
  }, [increaseBtn, timer]);

  return (
    <Card title="Increment Counter With Timer">
      <Container>
        <section>
          <DisplayContainer>
            <p>{counter}</p>
          </DisplayContainer>
          <ButtonContainer>
            <button onClick={increase} type="button" id="increaseBtn">
              Incrementar
            </button>
            <button className="danger" onClick={reset} type="button">
              Reiniciar
            </button>
          </ButtonContainer>
          <p>Tienes {timer} segundos.</p>
        </section>
      </Container>
    </Card>
  );
};

export default WithTimer;
