const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');

const compiler = webpack(config);

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../__dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.use(
  webpackDevMiddleware(compiler),
).use(
  webpackHotMiddleware(compiler),
);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
