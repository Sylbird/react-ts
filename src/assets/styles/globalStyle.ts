import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  overflow: auto;
  padding: 0;
}

body {
  height: 100vh;
  width: 100vw;
  background-color: rgba(18, 18, 50, 1);
  color: rgba(255, 255, 255, 1);
}

.card{
    width: fit-content;
    border-radius: 1rem;
    background-color: rgba(37, 37, 68, 1);
    margin: 3rem 2rem 0rem 2rem;
    padding: 1.3rem;
}

.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.img-container {
  display: flex;
  overflow: unset;
  justify-content: center;
  margin-left: 2rem;
  @media screen and (max-width: 767px) {
    margin-left: 0rem;
  }
}

.text-container > div {
  margin-top: 1rem;
}

.active > a{
    color: rgba(20, 180, 215, 1);
    text-decoration: underline;
}

.hide {
    display: none;
}

.slash {
  text-decoration: line-through;
}

`;

export default GlobalStyle;
