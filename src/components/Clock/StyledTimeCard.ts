import styled from 'styled-components';

const StyledTimeCard = styled.div`
  align-items: flex-end;
  background-color: rgba(20, 20, 50, 1);
  border-radius: 5px;
  border: 1px solid rgba(37, 37, 68, 1);
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  padding: 5px;

  abbr {
    user-select: none;
  }
`;

export default StyledTimeCard;
