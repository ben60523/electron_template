const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternal = require('webpack-node-externals');

// eslint-disable-next-line no-unused-vars
module.exports = (env = {}, argv = {}) => ({
  target: 'electron-main',
  entry: {
    main: './src/main.js',
    preload: './src/preload.js',
  },
  output: {
    path: argv.mode === 'production' ? path.resolve('./prod') : path.resolve('./out'),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
  },
  externals: [nodeExternal()],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
});
