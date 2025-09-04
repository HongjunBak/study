/* eslint-disable react-refresh/only-export-components */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Home...</p>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
      </ul>
      <Routes>
        <Route path="/1" element={'HTML is ...'} />
        <Route path="/2" element={'JS is ...'} />
        <Route path="/3" element={'React is ...'} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact...</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/*Component들을 MPA로 인식*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
  
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);