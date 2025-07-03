import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { SocketProvider } from './socket/socket-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>

  // </React.StrictMode>
  <Provider store={store}>
    <SocketProvider>
      <App />
    </SocketProvider>
    
  </Provider>
);

reportWebVitals();
