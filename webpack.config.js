const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// entry file (index.js) will be compiled into a file in the (dist) folder
// module object specifies the loader
// HTMLWebpackPlugin creates the index.html file using our template
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
