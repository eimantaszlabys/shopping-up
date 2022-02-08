const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const app = express();

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, config.devServer));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(DIST_DIR, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
