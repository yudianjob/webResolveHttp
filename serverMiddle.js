// 中间件方式解决跨域问题
let express = require('express');
let app = express();


// 利用中间件合并前端服务到此，结果：用后端服务访问页面
// 思考：这种方式可以做什么？？？


// 中间件
let webpack = require('webpack');
let middle = require('webpack-dev-middleware');
let webpackfile = require('./webpack.config.js'); //。js可以省略文件后缀名
let compiler = webpack(webpackfile);
app.use(middle(compiler));
app.get('/user', (req, res) => {

    res.json({ name: '我是中间件解决方案' });

})

app.listen(1000, function() {
    console.log('中间件服务启动，端口1000');
});