import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.$dir="http://localhost:3000/"
// window.$dir="https://mibanko-back.herokuapp.com/"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
