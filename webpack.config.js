const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ci: {
		collect: {
			numberOfRuns: 3,
			startServerCommand: 'yarn run start',
			url: ['http://localhost'],
		},
		assert: {
			preset: 'lighthouse:recommended',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {

    runtimeChunk: 'single',

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },

    ],

  },
  mode: 'development',
};