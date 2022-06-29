import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import { ContextProvider } from './context/ContextProvider';
import Reducer, { initialState } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider initialValue={initialState} reducer={Reducer}>
      <App/>
    </ContextProvider>
  </React.StrictMode>
);


