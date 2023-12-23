import { FC } from 'react';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/Counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`/CounterWithTimer`}>Counter With Timer</Link>
        </li>
        <li>
          <Link to={`/ToDo`}>ToDo App</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
