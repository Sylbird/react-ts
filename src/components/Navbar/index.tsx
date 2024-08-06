import { FC, useState } from 'react';
import {
  SidebarBackdrop,
  StyledNavbar,
  StyledNavLink,
  StyledSidebar,
  ToggleSidebar
} from 'src/components/Navbar/StyledNavbar';

const NavBar: FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <StyledNavbar>
        <StyledNavLink to={`/`} end>
          <svg
            fill="rgba(255, 255, 255, 1)"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 6.02 22 19.98"
          >
            <path d="M27 18.039 16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"></path>{' '}
          </svg>
          <span>Home</span>
        </StyledNavLink>
        <ToggleSidebar onClick={toggleSidebar} aria-label="toggle sidebar">
          {sidebar ? (
            <svg
              fill="#fff"
              height="20px"
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z" />
            </svg>
          ) : (
            <svg
              fill="#fff"
              height="20px"
              viewBox="0 0 16 16"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"></path>
            </svg>
          )}
        </ToggleSidebar>
      </StyledNavbar>
      <StyledSidebar $open={sidebar}>
        <ul>
          <li>
            <StyledNavLink to={`/Clock`} end>
              Clock
            </StyledNavLink>
            <StyledNavLink to={`/Counter`} end>
              Counter
            </StyledNavLink>
            <StyledNavLink to={`/ToDo`} end>
              ToDoApp
            </StyledNavLink>
            <StyledNavLink to={`/AI`} end>
              A.I
            </StyledNavLink>
          </li>
        </ul>
      </StyledSidebar>
      {sidebar && <SidebarBackdrop onClick={toggleSidebar} />}
    </>
  );
};

export default NavBar;
