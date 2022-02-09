const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  mode: 'development',
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './server/public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin()
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.tsx', '.ts', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        exclude: [/node_modules/],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-jsx']
        }
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader?sourceMap']
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap',
            options: {
              importLoaders: 1,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent
              }
            }
          }
        ]
      },
      {
        test: /\.module\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap',
            options: {
              importLoaders: 3,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent
              }
            }
          },
          'resolve-url-loader',
          { loader: 'sass-loader?sourceMap', options: { sourceMap: true } }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  }
};
