import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import './App.css';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
