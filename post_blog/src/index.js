import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "antd/dist/antd.css"
import App from './App';
import MainLayout from './layout/Main/MainLayout';
import Auth from './layout/Auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Auth>
      <App />

    </Auth>
    
  </React.StrictMode>
);

