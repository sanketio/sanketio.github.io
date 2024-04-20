const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: './',
		assetModuleFilename: 'images/[name][ext][query]'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'app.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/,
				type: 'asset/resource'
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin()
		]
	}
};
