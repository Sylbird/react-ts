import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  background-color: rgba(37, 37, 68, 1);

  ul {
    align-items: center;
    display: flex;
    gap: 15px;
    height: 50px;
    justify-content: center;
    list-style: none;
    width: inherit;

    @media screen and (max-width: 767px) {
      gap: 10px;
    }
  }

  a {
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    text-decoration: none;

    &.active {
      color: rgba(20, 180, 215, 1);
    }
  }
`;

export default StyledNavbar;
