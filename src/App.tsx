import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import { Navigation } from './navigation/Navigation';

const App: FC = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export { App };
