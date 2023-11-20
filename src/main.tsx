import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import Counter from 'src/components/Counter';
import WithTimer from 'src/components/Counter/withTimer';
import ToDo from 'src/components/ToDo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Counter />
    <WithTimer />
    <ToDo />
  </StrictMode>
);
