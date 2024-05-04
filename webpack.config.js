const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[name][ext][query]',
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/images', to: 'images' }],
		}),
		new ESLintWebpackPlugin({
			overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
			emitWarning: true,
			emitError: true,
			extensions: ['js'],
			exclude: ['node_modules', 'dist'],
		}),
		new StylelintWebpackPlugin({
			configFile: path.resolve(__dirname, 'stylelint.config.js'),
			context: path.resolve(__dirname, './src/css'),
			extensions: ['css'],
			emitWarning: true,
			emitError: true,
			exclude: ['node_modules', 'dist'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											stage: 0,
											features: {
												'custom-properties': false,
											},
										},
									],
								],
							},
						},
					},
				],
			},
		],
	},
	optimization: {
		minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		hot: true,
	},
};
