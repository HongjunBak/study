import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 리액트는 SPA(Single Page Application)에 적용을 받는다. 그래서 index.html에 있는 root를 불러올 수 있는 것.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // root는 <div id="root"></div>를 말하며, <div id="root> 요소 내부에 요소를 배치한다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
