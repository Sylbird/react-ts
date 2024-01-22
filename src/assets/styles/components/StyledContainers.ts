import styled from 'styled-components';

export const StyledTextContainer = styled.div`
  word-break: break-word;

  > div {
    margin-top: 1rem;
  }
`;

export const StyledImageContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin: 0rem 0rem 1rem 0rem;
  }
`;
