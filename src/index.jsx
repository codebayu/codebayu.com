import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './theme';
import { Analytics } from '@vercel/analytics/react';
import { ConfigCatProvider } from 'configcat-react';

const sdkKey = import.meta.env.VITE_CONFIG_CAT;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ConfigCatProvider sdkKey={sdkKey}>
          <ColorModeScript
            initialColorMode={defaultTheme.config.initialColorMode}
          />
          <App />
        </ConfigCatProvider>
        <Analytics />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
