const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const myEslintOptions = {
  extensions: ['js', 'jsx', 'ts'],
  exclude: ['node_modules'],
};

module.exports = (env = {}, argv = {}) => ({
  target: 'electron-renderer',
  entry: {
    app: './renderer/react/index.js',
  },
  output: {
    path: argv.mode === 'production' ? path.resolve('./prod') : path.resolve('./out'),
    filename: '[name].js',
  },
  module: {
    // eslint-disable-next-line global-require
    rules: require('./module.rules.js')(env, argv),
  },
  plugins: [
    // env.analyse ? new BundleAnalyzerPlugin() : null,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './renderer/index.html',
      chunks: ['app'],
      inject: 'body',
    }),
    new ESLintWebpackPlugin(myEslintOptions),
  ].filter((plugin) => plugin !== null),
  resolve: {
    modules: [path.resolve('./node_modules')],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],
  },
  devtool: argv.mode === 'production' ? undefined : 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  node: {
    __dirname: true,
  },
});
