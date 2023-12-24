import styled from 'styled-components';

const StyledCounter = styled.main`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledCounter;
