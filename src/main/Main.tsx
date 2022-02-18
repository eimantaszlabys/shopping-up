import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Home } from '../home';
import { Login } from '../login/Login';

const Main: FunctionComponent = () => (
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route key="Home" path="/" element={<Home />} />
        <Route key="Login" path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);

export { Main };
