const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  target: 'node',
  entry: path.join(__dirname, 'src/server/index.js'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8989,
  }
});