// var body=document.getElementsByTagName('body');
// console.log(body)

console.log('显示文本啦！奇迹的2020年');

let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:1000/user', true);
// xhr.open('get', '/api/user', true);

xhr.onload = function() {
    console.log(xhr.response);
    // product();
}

xhr.send();

function product() {
    xhr.open('get', '/api/product', true);
    xhr.onload(function() {
        console.log(xhr.response);
    });
    xhr.send();
}