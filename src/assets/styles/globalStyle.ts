import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after, ::before {
  margin: 0;
  padding: 0;
}

:root {
    --swiper-theme-color: rgba(49, 120, 198, 1);
}

body {
  background-color: rgba(20, 20, 50, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  width: 100vw;
}

/* Custom Chrome based scrollbar */
::-webkit-scrollbar {
  background-color: rgba(37, 37, 68, 1);
  border-radius: 0.4rem;
  height: 0.4rem;
  width: 0.4rem;
}

::-webkit-scrollbar-corner{
  background-color: rgba(37, 37, 68, 1);
}

::-webkit-scrollbar-thumb {
  border-radius: 0.4rem;
  background-color: rgba(20, 180, 215, 1);
  cursor: pointer;
}
//

main{
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2.5rem 2rem 2rem 2rem;

  @media screen and (max-width: 767px) {
    padding: 1rem 1rem 1rem 1rem;
  }
}

.slash {
  text-decoration: line-through;
}

textarea {
  font-family: inherit;
}

`;

export default GlobalStyle;
