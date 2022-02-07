const express = require('express');
const path = require('path');

const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const compailer = webpack(config);

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(webpackDevMiddleware(compailer, config.devServer));
app.use(webpackHotMiddleware(compailer));

app.use(express.static(DIST_DIR, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
