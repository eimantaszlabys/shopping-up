import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './main/Main';

window.process = {};

ReactDOM.render(<Main />, document.getElementById('root'));

module.hot.accept();
