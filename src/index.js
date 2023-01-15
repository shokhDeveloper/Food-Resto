import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './Context';
import { Provider } from 'react-redux';
import { store } from './store/config.store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global_Styled } from './Global_Styles/global_styled';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <Provider store={store}>
      <Router>
      <App />
      <Global_Styled/>
      </Router>
    </Provider>
    </ContextProvider>
  </React.StrictMode>
);
