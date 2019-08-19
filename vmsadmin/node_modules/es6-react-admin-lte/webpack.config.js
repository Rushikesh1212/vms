/*
  This file tells Webpack HOW to convert the ES6 && JSX files our browser
  can't understand yet into a format that it CAN understand now; All files
  are "bundled" into 1 readable JS file to pull into our main index.html
*/
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

//  Where are we pulling our futuristic JS files from?
//  Where are we bundling the time-safe conversion to?
var APP_DIR = path.resolve(__dirname, 'src');
var MODULES_DIR = path.resolve(__dirname,'node_modules');
var BUILD_DIR = path.resolve(__dirname,'dist');

//  THE AUTOMAGIC HAPPENS IN HERE:
var config = {
  //  The files we want to siphon from && bundle:
  entry: {
    'js/es6-react-admin-lte': [
      APP_DIR + '/js/es6-react-admin-lte.js',
      MODULES_DIR + '/admin-lte/dist/css/AdminLTE.css',
      MODULES_DIR + '/admin-lte/dist/css/skins/_all-skins.css',
      APP_DIR + '/css/es6-react-admin-lte.scss'
    ],
    'examples/example-dashboard': APP_DIR + '/examples/example-dashboard.jsx'
  },
  //  The main app files we'll need to use in its place:
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  //  Using BABEL, we will convert all JSX files in our app directory
  //  Using ExtractTextPlugin, Converts SASS to CSS, && bundles CSS files
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: __dirname,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.(jpe?g|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader'
      }
    ]
  },
  /*
    This tells us that there-ever a jQuery plugin is used, && there is,
    to pull jQuery in && not make things wierd && annoying to get functional

    This tells us where to bundle files tempered with the ExtractTextPlugin
  */
  plugins: [
    new ExtractTextPlugin('css/es6-react-admin-lte.css')
  ],
  //  Which libraries and exports to exclude when bundling
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    jquery: '$'
  }
};

module.exports = config;
