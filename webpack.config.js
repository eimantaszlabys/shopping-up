const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './server/public/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'inline-source-map',
  plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin(),    new MiniCssExtractPlugin({
    filename : '[name].css',
    chunkFilename: '[id].css'
       })],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets:  ['@babel/env', '@babel/preset-react'] ,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
        {
                test: /\.module\.s(a|c)ss$/,
                use: [
                 'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    sourceMap: true
                   }
                 },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  }
                ]
            },
              {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  }
              ]
              }
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
};
