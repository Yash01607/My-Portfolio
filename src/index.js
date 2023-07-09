import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Theme>
);
