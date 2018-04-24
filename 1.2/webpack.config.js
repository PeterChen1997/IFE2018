const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 执行入口文件
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.san$/,
        loader: 'san-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.san', '.js'] ,
    alias: {
        san: process.env.NODE_ENV === 'production'
            ? 'san/dist/san.js'
            : 'san/dist/san.dev.js'
    }
  },
  plugins:[
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			minify: {
				removeComments: true,
				// collapseWhitespace: true
			}
		})
	],
  // 输出 source-map 方便直接调试 ES6 源码
  devtool: 'source-map'
};