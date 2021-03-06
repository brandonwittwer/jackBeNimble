const path = require('path')

module.exports = {
  context: __dirname,
  entry: {
    jackBeNimble: './src/jackBeNimble.js',
    config: './src/config.js'
  },
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "presets": ["es2015"]
        }
      }
    ]
  }
}
