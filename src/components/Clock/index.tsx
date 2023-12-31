import { useCallback, useState } from 'react';
import { SimpleClock, StyledClock } from 'src/components/Clock/StyledClock';
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
              <SimpleClock>
                <span>{dateTime.toString()}</span>
              </SimpleClock>
            </div>
            <div>
              <div>
                <h3>Short DateTime (Locale)</h3>
              </div>
              <SimpleClock>
                <span>{dateTime.toLocaleTimeString()}</span>
                <span>{dateTime.toLocaleDateString()}</span>
              </SimpleClock>
            </div>
          </div>
        </div>
      </div>
    </StyledClock>
  );
};

export default Clock;
