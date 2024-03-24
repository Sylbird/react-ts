import { FC } from 'react';
import {
  StyledNavbar,
  StyledNavLink
} from 'src/components/Navbar/StyledNavbar';

const NavBar: FC = () => {
  return (
    <StyledNavbar>
      <ul>
        <StyledNavLink to={`/`} end>
          Home
        </StyledNavLink>
        <StyledNavLink to={`/Clock`} end>
          Clock
        </StyledNavLink>
        <StyledNavLink to={`/Counter`} end>
          Counter
        </StyledNavLink>
        <StyledNavLink to={`/ToDo`} end>
          ToDoApp
        </StyledNavLink>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
