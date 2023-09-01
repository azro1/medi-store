import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// we import the ThemeProvider component
import { ThemeProvider } from './context/ThemeContext';

 // and nest the entire application within it and now our <App /> will be the child of the ThemeProvider component and what this would do is provide a global context value to the entire application because it's wrapping the root component
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
