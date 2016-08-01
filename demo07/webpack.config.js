var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({prettyPrint: true});

module.exports = {
	entry: './main.js',
	output: {
		// path: path.join(__dirname, "public", "js", "index"), // 表示生成出来的路径
		// publicPath: "/js/index/", // 在 index 入口中 相对的文件.
		// publishPath: "", // 配置前缀, 将路径写入代码, 并提取图片到输出目录
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015'}
		]
	},
	plugins: [
		assetsPluginInstance
	]
}
