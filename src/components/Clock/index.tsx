import { FC, useCallback, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import {
  Container,
  DisplayContainer
} from 'src/assets/styles/components/StyledContainers';
import Stopwatch from 'src/components/Clock/Stopwatch';
import useSyncedClock from 'src/components/Clock/useSyncedClock';

const Time: FC<{ display: 'full' | 'short' }> = ({ display }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const updateClock = useCallback(() => setDateTime(new Date()), []);

  useSyncedClock(updateClock);

  switch (display) {
    case 'full':
      return (
        <DisplayContainer>
          <span>{dateTime.toString()}</span>
        </DisplayContainer>
      );
    case 'short':
      return (
        <DisplayContainer>
          <span>{dateTime.toLocaleTimeString()}</span>
          <span>{dateTime.toLocaleDateString()}</span>
        </DisplayContainer>
      );
  }
};

const Clock = () => {
  return (
    <>
      <Card title="Clock">
        <Container>
          <section>
            <h3>Full DateTime</h3>
            <Time display="full" />
          </section>
          <section>
            <h3>Short DateTime (Locale)</h3>
            <Time display="short" />
          </section>
        </Container>
      </Card>
      <Stopwatch />
    </>
  );
};

export default Clock;
