let express = require('express');
let app = express();

//应用此方式后，前端不需要修改了，需要去掉webpack proxy（）
// 其他的客户端都可以跨域调用服务了


//cors
var allowCrossDomain = function(req, res, next) {
    //请求源 http://localhost:8080
    res.header("Access-Control-Allow-Origin", "*");
    //请求头 x-token
    res.header("Access-Control-Allow-Headers", "*");
    //请求方法 get post put del
    res.header('Access-Control-Allow-Methods', "*");
    next(); //下一步的意思，要调用哦
}

app.use(allowCrossDomain);
app.get('/user', (req, res) => {
    res.json({ name: '飞机' });
})
app.listen('1000', function() {
    console.log('服务启动，端口1000')
})


//命令行 转到执行node命令启动服务：node serverCors.js