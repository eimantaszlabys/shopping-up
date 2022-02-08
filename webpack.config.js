const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    stats: {
      color: true
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './server/public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.tsx', '.ts', '.css']
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
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
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent
              }
            }
          },
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};
