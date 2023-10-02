import React from 'react';
import Home from './src/app/home/home';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './src/app/assets/svg/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
