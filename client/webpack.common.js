const path = require('path')

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src/js/app.jsx'),
    path.resolve(__dirname, 'src/css/app.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: 7324,
    compress: true,
    stats: 'errors-only',
    historyApiFallback: { index: 'index.html' }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Src: path.resolve(__dirname, 'src/'),
      Components: path.resolve(__dirname, 'src/js/components/'),
      Reducers: path.resolve(__dirname, 'src/js/reducers/'),
      Containers: path.resolve(__dirname, 'src/js/containers/'),
      Lib: path.resolve(__dirname, 'src/js/lib/'),
      Config: path.resolve(__dirname, 'src/config/')
    }
  }
}
