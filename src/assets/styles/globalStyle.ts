import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after, ::before {
  margin: 0;
  padding: 0;
}

body, #root {
  background-color: rgba(20, 20, 50, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  overflow: auto;
  width: 100vw;
}

/* Custom Chrome based scrollbar */
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
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 3rem 2rem 2rem 2rem;

  @media screen and (max-width: 767px) {
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  }
}

.slash {
  text-decoration: line-through;
}

`;

export default GlobalStyle;
