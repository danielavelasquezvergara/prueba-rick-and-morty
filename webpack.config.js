const path = require('path');

module.exports = {
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "main.js", 
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*','.js'],
  },

  devServer: {

    contentBase: path.join(__dirname, 'dist'), 
    compress: true, 
    port: 9000,
  }
}