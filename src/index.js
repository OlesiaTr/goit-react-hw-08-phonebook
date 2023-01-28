// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store,persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import { App } from 'components/App';

// Styles
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
