import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavbar from 'src/components/Navbar/StyledNavbar';

const NavBar: FC = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <NavLink to={`/react-ts/`} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/react-ts/Counter`} end>
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to={`/react-ts/ToDo`} end>
            ToDoApp
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
