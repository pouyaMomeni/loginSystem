import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
import App from './app';
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './theme/theme.js'
import { ColorModeScript } from '@chakra-ui/react';
import { I18n } from './translation/i18n'
import { Provider } from 'react-redux'
import { store } from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={Theme}>
        <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
        <I18n />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
