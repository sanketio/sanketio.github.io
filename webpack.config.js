var CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[name][ext][query]',
		clean: true
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/images", to: "images" },
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/,
				type: 'asset/resource'
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				],
			},
		]
	},
	optimization: {
		minimizer: [
			new TerserJSPlugin(),
			new CssMinimizerPlugin()
		],
		splitChunks: {
			chunks: 'all',
		},
	},
	devtool: 'source-map',
	devServer: {
		hot: true,
	},
};