import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (window.File && window.FileReader && window.FileList && window.Blob) {

} else {
  alert('The File APIs are not fully supported in this browser.');
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

