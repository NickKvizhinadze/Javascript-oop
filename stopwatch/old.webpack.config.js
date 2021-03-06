module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ],
        include: './index.js',
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
}