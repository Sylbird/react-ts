import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  width: 100vw;
  background-color: rgba(37, 37, 68, 1);
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50px;
    gap: 15px;

    @media screen and (max-width: 767px) {
      gap: 10px;
    }
  }
  a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-weight: 500;
  }
`;

export default StyledNavbar;
