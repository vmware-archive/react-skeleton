var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
  },
  module: {
      loaders: [
      ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html"
  })]
};
