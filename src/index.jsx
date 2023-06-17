import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './theme'
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ThemeProvider theme={defaultTheme}>
          <App />
          <Analytics />
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
