import styled from 'styled-components';

export const TextContainer = styled.div`
  word-break: break-word;

  > div {
    margin-top: 1rem;
  }
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
