const path = require('path');

module.exports = {
  target: 'electron-main',
  entry: {
    main: './src/main.js',
    preload: './src/preload.js',
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
};
