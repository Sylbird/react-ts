import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0rem 0rem 0rem;

  textarea {
    background-color: rgba(37, 37, 68, 1);
    border-radius: 5px;
    border: none;
    color: rgba(255, 255, 255, 1);
    outline: none;
    padding: 0.5rem;
    resize: none;
    width: -webkit-fill-available;
    width: -moz-available;

    &:disabled {
      color: rgba(255, 255, 255, 0.4);
    }
    &:focus {
      box-shadow: 0px 0px 2px 2px rgba(20, 180, 215, 1);
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Canvas = styled.div`
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: rgba(37, 37, 68, 1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  width: 512px;

  img {
    aspect-ratio: 1 / 1;
    user-select: none;
    pointer-events: none;
    max-width: inherit;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
