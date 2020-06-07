import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.css';

import Routes from './routes';

const options = {
  position: 'top right',
  timeout: 5000,
  offset: '30px',
  transition: 'fade'
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Routes/>
  </AlertProvider>
  );
}

export default App;
