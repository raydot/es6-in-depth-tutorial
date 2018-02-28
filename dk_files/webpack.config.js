//reworked to use the "path" library 
//examples from the WebPack 4.0.1 docs

const path = require('path');	

module.exports = {
	entry: ['./app/index.js'],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: path.resolve(__dirname, "node_modules")
			}
		]
	},
	devServer: {
		port: 3000,
		contentBase: './build',
		inline: true
	},
	mode: 'development'
}