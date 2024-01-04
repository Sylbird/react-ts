import { useCallback, useState } from 'react';
import Stopwatch from 'src/components/Clock/Stopwatch';
import { ClockContainer, StyledClock } from 'src/components/Clock/StyledClock';
import useSyncedClock from 'src/components/Clock/useSyncedClock';

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const updateClock = useCallback(() => setDateTime(new Date()), []);

  useSyncedClock(updateClock);

  return (
    <StyledClock>
      <div className="card">
        <div>
          <h2>§ Clock</h2>
        </div>
        <div>
          <div className="text-container">
            <div>
              <div>
                <h3>Full DateTime</h3>
              </div>
              <ClockContainer>
                <span>{dateTime.toString()}</span>
              </ClockContainer>
            </div>
            <div>
              <div>
                <h3>Short DateTime (Locale)</h3>
              </div>
              <ClockContainer>
                <span>{dateTime.toLocaleTimeString()}</span>
                <span>{dateTime.toLocaleDateString()}</span>
              </ClockContainer>
            </div>
          </div>
        </div>
      </div>
      <Stopwatch />
    </StyledClock>
  );
};

export default Clock;
