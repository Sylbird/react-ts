import styled from 'styled-components';

export const StyledClock = styled.main`
  h3 {
    padding-bottom: 0.5rem;
    text-align: center;
  }
`;

export const SimpleClock = styled.div`
  align-items: flex-end;
  background-color: rgba(20, 20, 50, 1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: fit-content;
  padding: 5px;
  user-select: none;
`;
