import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create a root element and mount the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* StrictMode helps catch potential problems in development */}
    <App />
  </React.StrictMode>
);
