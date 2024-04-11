import { FC, useCallback, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import { TextContainer } from 'src/assets/styles/components/StyledContainers';
import Stopwatch from 'src/components/Clock/Stopwatch';
import StyledTimeCard from 'src/components/Clock/StyledTimeCard';
import useSyncedClock from 'src/components/Clock/useSyncedClock';

const Time: FC<{ display: 'full' | 'short' }> = ({ display }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const updateClock = useCallback(() => setDateTime(new Date()), []);

  useSyncedClock(updateClock);

  switch (display) {
    case 'full':
      return (
        <StyledTimeCard>
          <span>{dateTime.toString()}</span>
        </StyledTimeCard>
      );
    case 'short':
      return (
        <StyledTimeCard>
          <span>{dateTime.toLocaleTimeString()}</span>
          <span>{dateTime.toLocaleDateString()}</span>
        </StyledTimeCard>
      );
  }
};

const Clock = () => {
  return (
    <>
      <Card title="Clock">
        <TextContainer>
          <div>
            <div>
              <h3>Full DateTime</h3>
            </div>
            <Time display="full" />
          </div>
          <div>
            <div>
              <h3>Short DateTime (Locale)</h3>
            </div>
            <Time display="short" />
          </div>
        </TextContainer>
      </Card>
      <Stopwatch />
    </>
  );
};

export default Clock;
