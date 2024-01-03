import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after, ::before {
  margin: 0;
  padding: 0;
}

/* Chrome based scrollbar */
::-webkit-scrollbar {
  background-color: rgba(37, 37, 68, 1);
  height: 0.4rem;
  width: 0.4rem;
}

::-webkit-scrollbar-corner{
  background-color: rgba(37, 37, 68, 1);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(20, 180, 215, 1);
}
//

main{
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 3rem 2rem 2rem 2rem;

  h1 {
    text-align: center;
    padding: 0 0 1.5rem 0;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
    padding: 2rem 2rem 2rem 2rem;
  }
}

body, #root {
  background-color: rgba(20, 20, 50, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  overflow: auto;
  width: 100vw;

  button{
    background-color: rgba(49, 120, 198, 1);
    border: none;
    border-radius: 0.5rem;
    color: rgba(255, 255, 255, 1);
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    padding: 0.5rem;
    transition: 0.2s ease-in-out;
    user-select: none;

    &:hover{
      cursor: pointer;
      background-color: rgba(20, 180, 215, 1);
    }

    &.danger{
      background-color: rgba(198,49,49,1);
      &:hover{
        background-color: rgba(215, 20, 20, 1);
      }
    }
  }

  h2{
    color:rgba(49, 120, 198,1);
  }
}

.card{
    background-color: rgba(37, 37, 68, 1);
    border-radius: 1rem;
    padding: 1rem 1.2rem 1rem 1.2rem;
    width: fit-content;
    overflow: auto;
}

.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.text-container {
  word-break: break-word;

 > div {
  margin-top: 1rem;
  }
}

.img-container {
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin: 0rem 0rem 1rem 0rem;
  }
}

.slash {
  text-decoration: line-through;
}

`;

export default GlobalStyle;
