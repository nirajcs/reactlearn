import React from 'react';
import {  Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Item from './Item'

function App() {
  return (
    <div className='App'>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/item/1">Item1</Link>
          </li>
          <li>
            <Link to="/item/2">Item2</Link>
          </li>
          <li>
            <Link to="/item/3">Item3</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
 