//webpack.config.js
module.exports = {
    entry : './src/js/entry.js',//入口文件
    externals: {
        "BMapGL": "BMapGL"
      },
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path : __dirname + '/out'//输出文件路径
    },
    module : {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            {test: /.css$/, use: ['style-loader', 'css-loader']},/*解析css, 并把css添加到html的style标签里*/
            //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
            {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
        ]
    },
    }