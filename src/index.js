import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Quiz2 from './Pages/Quiz2'
import Quiz2Info from './Data/Quiz/Quiz2.json'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Quiz2 infoData={Quiz2Info.data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
