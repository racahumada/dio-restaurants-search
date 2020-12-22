import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles'
import { Home } from './pages'
import './App.css';
import theme from './config/theme'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
