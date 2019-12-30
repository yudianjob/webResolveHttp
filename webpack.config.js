var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' //资源路径
    },
    // devServer: {
    // proxy: {
    //     '/api': { //代理
    //         target: "http://localhost:1000",
    //         pathRewrite: { '/api': '' } 
    //如果服务端没有api作为前缀 api/user ,替换掉api即可，客户端使用时要加上api
    //     }
    // }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}