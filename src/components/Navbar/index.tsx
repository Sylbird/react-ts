import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StyledNavbar from 'src/components/Navbar/StyledNavbar';

const NavBar: FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <StyledNavbar>
      <ul>
        <li className={isActive('/react-ts') ? 'active' : ''}>
          <Link to={`/react-ts`}>Home</Link>
        </li>
        <li className={isActive('/react-ts/Counter') ? 'active' : ''}>
          <Link to={`/react-ts/Counter`}>Counter</Link>
        </li>
        <li className={isActive('/react-ts/ToDo') ? 'active' : ''}>
          <Link to={`/react-ts/ToDo`}>ToDo App</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
