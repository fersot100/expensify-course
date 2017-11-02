const path = require('path');
//entry -> output
module.exports = {
	entry: './src/playground/redux-expensify.js',
	output: {
		path: path.join(__dirname,'public'),
		filename: 'bundle.js'
	},
	//This is advanced webpack stuff that lets us include a Loader with rules
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname,'public'),
		historyApiFallback: true
	}
};