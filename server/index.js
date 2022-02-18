const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler, { overlay: true }));
}

app.use(express.static(DIST_DIR, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

// Auth
app.get('/auth/login', (req, res, next) => {
  let randomNumber = Math.random().toString();
  randomNumber = randomNumber.substring(2, randomNumber.length);
  res.cookie('shopping-up', randomNumber, { maxAge: 5000, httpOnly: false });

  next();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
