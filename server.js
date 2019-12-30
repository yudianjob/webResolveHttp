let express = require('express');
let app = express();

// 前端需要webpack proxy代理，解决跨域问题，webpack.config.js 配置proxy代理

app.get('/user', (req, res) => {
    // app.get('/api/user', (req, res) => {
    var result = { name: "lena", age: 09, address: '杭州和北京' };
    res.json(result);
});

app.get('/api/product', (req, res) => {
    var products = { pname: '白糖', from: '海南' };
    res.json(products);
})

app.listen(1000, function() {
    console.log('服务启动，端口1000')
})

//命令行 转到执行node命令启动服务：node server.js