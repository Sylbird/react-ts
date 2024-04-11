import { FC, useEffect, useState } from 'react';
import Card from 'src/assets/styles/components/Card';
import { TextContainer } from 'src/assets/styles/components/StyledContainers';
import StyledTimeCard from 'src/components/Clock/StyledTimeCard';
import { msToTime, padTo2Digits } from 'src/components/Clock/functions';
import { ChronoType } from 'src/components/Clock/types';

const StopwatchTime: FC<{ isRunning: boolean }> = ({ isRunning }) => {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setMilliseconds((prevMs) => prevMs + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const stopwatchTime: ChronoType = msToTime(milliseconds);

  return (
    <>
      <StyledTimeCard>
        <div>
          <span>{milliseconds}</span>
          <abbr>ms</abbr>
        </div>
      </StyledTimeCard>
      <StyledTimeCard>
        <div>
          <span>{padTo2Digits(stopwatchTime.hours)}:</span>
          <span>{padTo2Digits(stopwatchTime.minutes)}:</span>
          <span>{padTo2Digits(stopwatchTime.seconds)}.</span>
          <span style={{ fontSize: '0.8rem' }}>
            {padTo2Digits(stopwatchTime.milliseconds)}
          </span>
        </div>
      </StyledTimeCard>
    </>
  );
};

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);

  const toggleStopwatch = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <Card title="Stopwatch">
      <TextContainer>
        <div>
          <div>
            <h3>Cronometro</h3>
          </div>
          <StopwatchTime isRunning={isRunning} />
          <div>
            <button onClick={toggleStopwatch}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>
      </TextContainer>
    </Card>
  );
};

export default Stopwatch;
