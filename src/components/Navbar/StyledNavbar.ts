import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: rgba(37, 37, 68, 1);
  display: flex;
  width: 100%;

  ul {
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    list-style: none;
    width: inherit;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  user-select: none;

  &:hover {
    background-color: rgba(20, 180, 215, 1);
  }
  &.active {
    background-color: rgba(49, 120, 198, 1);
  }
`;
