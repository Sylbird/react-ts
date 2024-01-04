import { useEffect, useState } from 'react';
import { ClockContainer } from 'src/components/Clock/StyledClock';
import { msToTime, padTo2Digits } from 'src/components/Clock/functions';
import { ChronoType } from 'src/components/Clock/types';

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

  const toggleStopwatch = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="card">
      <div>
        <h2>§ Stopwatch</h2>
      </div>
      <div>
        <div className="text-container">
          <div>
            <div>
              <h3>Milliseconds</h3>
            </div>
            <ClockContainer>
              <span>{milliseconds}</span>
            </ClockContainer>
            <div>
              <h3>Stopwatch</h3>
            </div>
            <ClockContainer>
              <div>
                <span>{padTo2Digits(stopwatchTime.hours)}:</span>
                <span>{padTo2Digits(stopwatchTime.minutes)}:</span>
                <span>{padTo2Digits(stopwatchTime.seconds)}.</span>
                <span style={{ fontSize: '0.8rem' }}>
                  {padTo2Digits(stopwatchTime.milliseconds)}
                </span>
              </div>
            </ClockContainer>
            <div>
              <button onClick={toggleStopwatch}>
                {isRunning ? 'Stop' : 'Start'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
