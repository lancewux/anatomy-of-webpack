const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(path.join(__dirname, "dist"));

module.exports = {
	entry: {
		welcome: './src/welcome/welcome.js', // src file
	},
	// devtool: 'inline-source-map', //map source code line for debug
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8091
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),  //清空dist目录
		new HtmlWebpackPlugin({
			'title': 'output management'
		}),
		new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
      	return (module.resource && /\.js$/.test(module.resource) &&module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0);
      }
    }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
      chunks: ['vendor']
		})
	],
	output: {
		filename: '[name].bundle.js', // output filename
		// chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist') //output filepath, __dirname is a global variable of nodejs
	},
	module: {
		rules: [
			{
				test: /\.css$/, //regular expression used to test the filename
				use: [
				'style-loader',
				'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{ //把html转化成模块，就能处理多页面应用了
				test: /\.html$/,
				use: [
					'html-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
	}
};
