const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const rootConfig = require('../../webpack.config');

const config = {
  ...rootConfig,
};
const compiler = webpack(config);

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.use(
  webpackDevMiddleware(compiler, {
    // hot: true,
    // publicPath: config.output.publicPath,
  }),
).use(
  webpackHotMiddleware(compiler),
);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
