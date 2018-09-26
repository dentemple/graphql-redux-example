const path = require('path')

module.exports = {
  entry: ['./src/index.js', 'webpack/hot/dev-server'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    hot: true,
    inline: true,
    publicPath: 'http://localhost:3000/dist/',
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080'
      }
    ]
  }
}
