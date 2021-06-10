import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Poppins, Sans-Serif;
  }
  body {
      font-size: 18px;
      scroll-behavior: smooth;
  }
  a, button {
      text-decoration: none;
      outline: none;
  }
  ::-webkit-scrollbar {
        width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: 0px 0px 0px 10000vh #fff;
  }
  ::-webkit-scrollbar-track {
    background: linear-gradient(0deg, hsl(260, 8%, 14%) 0%, hsl(260, 8%, 14%) 100%);
  }
`;

export const theme = {
    colors: {
        primary: {
            cyan: 'hsl(180, 66%, 49%)',
            darkViolet: 'hsl(257, 27%, 26%)',
        },
        secondary: {
            red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
            gray: 'hsl(0, 0%, 75%)',
            lightGray: 'hsl(225, 33%, 95%)',
            lightCyan: 'hsl(180, 65%, 74%)',
            grayishViolet: 'hsl(257, 7%, 63%)',
            darkBlue: 'hsl(255, 11%, 22%)',
            darkestViolet: 'hsl(260, 8%, 14%)',
            white: '#fff',
            black: '#000',
        },
    },

};