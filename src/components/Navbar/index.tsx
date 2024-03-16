import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavbar from 'src/components/Navbar/StyledNavbar';

const NavBar: FC = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <NavLink to={`/`} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/Clock`} end>
            Clock
          </NavLink>
        </li>
        <li>
          <NavLink to={`/Counter`} end>
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to={`/ToDo`} end>
            ToDoApp
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
