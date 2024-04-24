import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0 0 0;
`;

export const Container = styled.div`
  word-break: break-word;

  > section {
    margin-top: 0.5rem;
  }
`;

export const DisplayContainer = styled.div`
  background-color: rgba(20, 20, 50, 1);
  border-radius: 5px;
  border: 1px solid rgba(37, 37, 68, 1);
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  padding: 0.5rem;
`;

export const ImageContainer = styled.div`
  line-height: 0;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
`;

export const ErrorContainer = styled.div`
  color: rgba(198, 49, 49, 1);
  font-style: italic;
  line-height: normal;
  text-align: center;
`;
