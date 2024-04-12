import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: rgba(37, 37, 68, 1);
  border-radius: 1rem;
  padding: 1rem 1.2rem 1rem 1.2rem;
  width: fit-content;
  overflow: auto;

  h1 {
    text-align: center;
  }

  h2 {
    color: rgba(49, 120, 198, 1);
  }

  button {
    background-color: rgba(49, 120, 198, 1);
    border: none;
    border-radius: 0.5rem;
    color: rgba(255, 255, 255, 1);
    padding: 0.5rem;
    transition: 0.2s ease-in-out;
    user-select: none;

    &.danger {
      background-color: rgba(198, 49, 49, 1);
      &:hover {
        animation: danger-loop 1.5s infinite;
        background-color: rgba(215, 20, 20, 1);
        @keyframes danger-loop {
          50% {
            box-shadow: 0 0 10px 4px rgba(215, 20, 20, 1); /* Apply box shadow */
          }
        }
      }
    }

    &:disabled {
      color: rgba(255, 255, 255, 0.4);
      background-color: rgba(37, 37, 68, 1);
      pointer-events: none;
      &:hover {
        color: rgba(255, 255, 255, 0.5);
        background-color: rgba(37, 37, 68, 1);
      }
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(20, 180, 215, 1);
    }
  }
`;

export default StyledCard;
