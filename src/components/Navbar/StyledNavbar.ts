import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  align-items: center;
  background-color: rgba(37, 37, 68, 1);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 0.8rem;
  position: sticky;
  top: 0;
  width: calc(100% - 1.6rem);
  z-index: 101;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  font-weight: 500;
  gap: 5px;
  height: 36px;
  padding: 0 8px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  user-select: none;

  &:hover {
    background-color: rgba(20, 180, 215, 1);
  }
  &.active {
    background-color: rgba(49, 120, 198, 1);
  }
`;

type StyledSidebarProps = {
  $open: boolean;
};

export const StyledSidebar = styled.div<StyledSidebarProps>`
  background-color: rgba(37, 37, 68, 1);
  height: calc(100vh - 50px);
  min-width: 240px;
  max-width: 315px;
  position: fixed;
  right: 0px;
  top: 50px;
  transition: translate 0.3s ease-in-out;
  translate: ${({ $open }) => ($open ? 'none' : '100%')};
  z-index: 101;

  ul {
    list-style: none;
  }
`;

export const ToggleSidebar = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 36px;
  transition: background-color 0.2s ease-in-out;
  width: 36px;

  &:hover {
    background-color: rgba(20, 180, 215, 1);
  }
`;

export const SidebarBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;
