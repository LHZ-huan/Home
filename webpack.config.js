var webpack = require('webpack'); 
module.exports = { 
	 entry: {
		 index: './share.js',
	 },
	 output: {
		 path: './',
		 filename: '[name].js'
	 }
};