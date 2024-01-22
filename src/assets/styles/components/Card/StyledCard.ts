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

  h3 {
    padding-bottom: 0.5rem;
  }

  button {
    background-color: rgba(49, 120, 198, 1);
    border: none;
    border-radius: 0.5rem;
    color: rgba(255, 255, 255, 1);
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    padding: 0.5rem;
    transition: 0.2s ease-in-out;
    user-select: none;

    &:hover {
      cursor: pointer;
      background-color: rgba(20, 180, 215, 1);
    }

    &.danger {
      background-color: rgba(198, 49, 49, 1);
      &:hover {
        background-color: rgba(215, 20, 20, 1);
      }
    }
  }

  img {
    float: right;
    width: 256px;
    height: 256px;
    @media screen and (max-width: 767px) {
      width: 192px;
      height: 192px;
    }
  }
`;

export default StyledCard;
