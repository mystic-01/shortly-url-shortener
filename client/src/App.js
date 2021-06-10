import React from 'react';
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from './theme'

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import SubFooter from './components/SubFooter/SubFooter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Main />
      <SubFooter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
