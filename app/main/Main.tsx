import React, { FunctionComponent } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { HomePage } from '../homePage';
import { Navigation } from '../navigation';


const Main: FunctionComponent = () => {
    return(
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>)
}

export { Main }