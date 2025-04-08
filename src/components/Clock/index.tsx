import { FC, useCallback, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import {
  ButtonContainer,
  Container,
  DisplayContainer
} from 'src/assets/styles/components/StyledContainers';
import getTimeApi from 'src/components/Clock/api';
import Stopwatch from 'src/components/Clock/Stopwatch';
import useSyncedClock from 'src/components/Clock/useSyncedClock';

const DateTime: FC<{ display: 'full' | 'short' }> = ({ display }) => {
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

const ServerDateTime = () => {
  const [serverDateTime, setServerDateTime] = useState('1945-12-10T00:00:00');
  const sDateTime = new Date(serverDateTime);

  const getServerDateTime = () => {
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    getTimeApi(clientTimeZone).then((response) => {
      setServerDateTime(response.dateTime);
    });
  };

  return (
    <section>
      <h3>Server DateTime</h3>
      <DisplayContainer>
        <span>{sDateTime.toLocaleTimeString()}</span>
        <span>{sDateTime.toLocaleDateString()}</span>
      </DisplayContainer>
      <ButtonContainer>
        <button onClick={getServerDateTime}>GetServerDateTime</button>
      </ButtonContainer>
    </section>
  );
};

const Clock = () => {
  return (
    <>
      <Card title="Clock">
        <Container>
          <section>
            <h3>Local DateTime</h3>
            <h4>Full DateTime</h4>
            <DateTime display="full" />
            <h4>Short DateTime</h4>
            <DateTime display="short" />
          </section>
          <ServerDateTime />
        </Container>
      </Card>
      <Stopwatch />
    </>
  );
};

export default Clock;
