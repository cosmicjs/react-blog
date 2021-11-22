'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const paths = {
  BUILD: path.resolve(__dirname, 'dist/build'),
  SRC: path.resolve(__dirname, 'src/app'),
  PUBLIC: path.resolve(__dirname, 'src/public')
}


let config = {
  entry : path.join(paths.SRC, 'index.js'),
  output : {
    path: paths.BUILD,
    filename: 'bundle.js'
  },
  mode:"development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
       }
     },
     {
       test: /\.(css|scss)$/,
       use:[MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
     },
     {
       test: /\.(png|jpg|gif|svg)$/,
       use: [
         'file-loader',
       ],
     },
     {
      test: /\.html$/,
      use: 'html-loader'
    }
   ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html')
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3000,
    proxy: {
      '/api' : 'http://localhost:5000',
      pathRewrite: {'^/api' : ''}
    },
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map'  
}

module.exports = config;
