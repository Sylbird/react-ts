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
        <li className={isActive('/') ? 'active' : ''}>
          <Link to={`/`}>Home</Link>
        </li>
        <li className={isActive('/Counter') ? 'active' : ''}>
          <Link to={`/Counter`}>Counter</Link>
        </li>
        <li className={isActive('/ToDo') ? 'active' : ''}>
          <Link to={`/ToDo`}>ToDo App</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
