import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './home';

const App: FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export { App };
