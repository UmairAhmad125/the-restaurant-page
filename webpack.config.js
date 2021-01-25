const path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      loader: 'url-loader',
      options: {
        limit: 8192,
      },
    },
    ],
  },
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};